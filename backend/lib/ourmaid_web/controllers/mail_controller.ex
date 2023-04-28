defmodule OurmaidWeb.MailController do
  use OurmaidWeb, :controller
  import Ourmaid.ContactMail


  def create(conn, email) do
      with {:ok} <- contact_email(email) do
       conn
       |> put_status(:created)
       |> render("show.json", mail: :enviado)
      end

  end

end
