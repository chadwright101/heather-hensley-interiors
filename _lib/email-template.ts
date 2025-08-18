interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
  product: string;
}

export const emailTemplate = ({
  name,
  email,
  phone,
  message,
  product,
}: EmailTemplateProps) => {
  return `<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Heather Hensley Interiors</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 1rem;">
    <table style="width: 100%; background-color: #9b6546;">
      <tr>
        <td>
          <h1 style="padding: 0 1rem; color: white">Heather Hensley Interiors</h1>
        </td>
      </tr>
    </table>

    <table style="width: 100%; padding: 1rem;">
      <tr>
        <td>
          <h3 style="font-size: 1.25rem font-weight: 500;">Product Enquiry for <span style="font-size: 1.25rem font-weight: 600;">${product}</span></h3>
          <p style="font-size: 1rem; font-weight: 500;">
            Name: <span style="font-weight: 200; font-style: italic;">${name}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Email address: <span style="font-weight: 200; font-style: italic;">${email}</span>
          </p>
          ${
            phone
              ? `
              <p style="font-size: 1rem; font-weight: 500;">
            Phone: <span style="font-weight: 200; font-style: italic;">${phone}</span>
          </p>
          `
              : ""
          }
          <p style="font-size: 1rem; font-weight: 500;">
            Message:
            <br />
            <span style="font-weight: 200; font-style: italic;">${message}</span>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
