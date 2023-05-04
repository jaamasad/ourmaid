defmodule Ourmaid.ContactMail do

  import Bamboo.Email
  import OurmaidWeb.Templates.Mail.MailTemplate

  def contact_email(%{"data" => email}) do
    new_email(
      to: [{"Contacto", "diegoxx61@gmail.com"}, {"Contact", "franchising@ourmaids.com"}],
      from: {"Contact from the franchise web", "noreply@ourmaids.com"},
      subject: "Someone is looking for you.",
      html_body: template(email))
  end
end
