interface ProductEnquiryFormProps {
  productName: string;
}

const ProductEnquiryForm = ({ productName }: ProductEnquiryFormProps) => {
  return (
    <div className="flex flex-col gap-10 items-start justify-start w-full">
      <div className="flex flex-col gap-5 items-start justify-start w-full text-light-brown">
        <h2 className="text-[24px] font-thin tracking-[0.48px] uppercase">
          Enquiry Form
        </h2>
        <p className="text-[18px] font-thin tracking-[0.36px]">{productName}</p>
      </div>

      <form className="flex flex-col gap-5 w-full">
        <input
          type="text"
          placeholder="Name"
          className="bg-beige px-2 py-4 rounded-md w-full text-dark-brown text-[18px] font-thin tracking-[0.18px] placeholder:text-dark-brown"
        />

        <input
          type="email"
          placeholder="Email"
          className="bg-beige px-2 py-4 rounded-md w-full text-dark-brown text-[18px] font-thin tracking-[0.18px] placeholder:text-dark-brown"
        />

        <input
          type="tel"
          placeholder="Cell number"
          className="bg-beige px-2 py-4 rounded-md w-full text-dark-brown text-[18px] font-thin tracking-[0.18px] placeholder:text-dark-brown"
        />

        <textarea
          placeholder="Message"
          rows={4}
          className="bg-beige px-2 py-4 rounded-md w-full text-dark-brown text-[18px] font-thin tracking-[0.18px] placeholder:text-dark-brown resize-none"
        />

        <button
          type="submit"
          className="bg-light-brown flex flex-row gap-1 items-center justify-center px-0 py-3 rounded-md w-full"
        >
          <span className="text-white text-[18px] font-light uppercase">
            Send
          </span>
        </button>
      </form>
    </div>
  );
};

export default ProductEnquiryForm;
