defmodule Ourmaid.ContactMail do

  import Swoosh.Email
  import OurmaidWeb.Templates.Mail.MailTemplate

  def contact_email(%{"data" => email}) do
    if ( new()
    |> to([{"Contacto", "diegoxx61@gmail.com"}, {"Contact", "franchising@ourmaids.com"}])
    |> from({"Contact from the franchise web", "noreply@ourmaids.com"})
    |> subject("Someone is looking for you.")
    |> html_body(template(email))
    |> Ourmaid.Mailer.deliver()) do
       {:ok}
     else
       {:error}
     end
   end
end
