"use server";

import nodemailer from "nodemailer";
import { emailTemplate } from "@/_lib/email-template";

interface EmailTemplateData {
  name: string;
  email: string;
  phone: string;
  message: string;
  product: string;
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  replyTo: string;
  html: string;
}

export async function sendEmail(formData: FormData): Promise<void> {
  const honey = formData.get("honey");

  try {
    if (honey === null) {
      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const phone = formData.get("phone")?.toString() || "";
      const message = formData.get("message")?.toString() || "";
      const product = formData.get("product")?.toString() || "";

      const emailHtmlContent = emailTemplate({
        name,
        email,
        phone,
        message,
        product,
      } as EmailTemplateData);

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST as string,
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER as string,
          pass: process.env.SMTP_PASS as string,
        },
        requireTLS: true,
      });

      const mailOptions: MailOptions = {
        from: process.env.SMTP_USER as string,
        to: process.env.SMTP_SEND_TO as string,
        subject: `Website product enquiry - ${product}`,
        replyTo: email,
        html: emailHtmlContent,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
    }
  } catch (error) {
    console.error(error);
  }
}
