"use client";

import { useEffect, useState } from "react";

import Recaptcha from "@/_lib/recaptcha";

import { sendEmail } from "@/_actions/send-email-actions";

import ButtonType from "@/_components/ui/buttons/button-type";

interface ProductEnquiryFormProps {
  productName: string;
  category: string;
}

const ProductEnquiryForm = ({
  productName,
  category,
}: ProductEnquiryFormProps) => {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(true);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 items-start justify-start w-full">
      <div className="flex flex-col gap-5 items-start justify-start w-full text-light-brown">
        <h2 className="text-[24px] font-thin uppercase">Enquiry Form</h2>
        <div>
          <p className="text-paragraph font-thin">{productName}</p>
          <p className="text-[14px] font-thin">{category}</p>
        </div>
      </div>

      {showEmailSubmitted ? (
        <>
          <p className="italic text-[20px] font-semibold">
            Thank you! Your email has been sent, we will be in touch soon.
          </p>
        </>
      ) : (
        <form
          className="flex flex-col gap-5 w-full"
          action={async (formData) => {
            await sendEmail(formData);
            setShowEmailSubmitted(true);
          }}
        >
          <input type="hidden" name="_honey" className="hidden" />
          <input
            type="hidden"
            name="product"
            className="hidden"
            value={`${productName} (${category})`}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="name"
            className="bg-grey px-2 py-4 rounded-[6px] w-full text-black text-[18px] font-thin placeholder:text-black/60"
          />

          <input
            type="email"
            autoComplete="email"
            name="email"
            required
            placeholder="Email"
            className="bg-grey px-2 py-4 rounded-[6px] w-full text-black text-[18px] font-thin placeholder:text-black/60"
          />

          <input
            type="tel"
            autoComplete="tel"
            name="phone"
            placeholder="Cell number"
            className="bg-grey px-2 py-4 rounded-[6px] w-full text-black text-[18px] font-thin placeholder:text-black/60"
          />

          <textarea
            placeholder="Message"
            name="message"
            required
            rows={4}
            className="bg-grey px-2 py-4 rounded-[6px] w-full text-black text-[18px] font-thin placeholder:text-black/60 resize-none"
          />

          <ButtonType
            type="submit"
            cssClasses="desktop:place-self-start"
            disabled={!validateRecaptcha}
          >
            Send
          </ButtonType>
          {!validateRecaptcha && <Recaptcha onChange={handleRecaptchaChange} />}
        </form>
      )}
    </div>
  );
};

export default ProductEnquiryForm;
