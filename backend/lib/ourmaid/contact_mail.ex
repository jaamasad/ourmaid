defmodule Ourmaid.ContactMail do

  import Swoosh.Email
  import OurmaidWeb.Templates.Mail.MailTemplate

  def contact_email(%{"data" => email}) do
    if ( new()
    |> to([{"Contacto", "diegoxx61@gmail.com"}, {"Contacto", "ramiroestradag@gmail.com"}])
    |> from({"Contacto de la página web", "no.reply@ocstudios.mx"})
    |> subject("Contacto de la pagina web OCS.")
    |> html_body(template(email))
    |> Ourmaid.Mailer.deliver()) do
       {:ok}
     else
       {:error}
     end
   end
end
