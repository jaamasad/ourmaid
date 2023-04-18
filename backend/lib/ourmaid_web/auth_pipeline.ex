defmodule Ourmaid.Guardian.AuthPipeline do
  use Guardian.Plug.Pipeline, otp_app: :ourmaid,
  module: Ourmaid.Guardian,
  error_handler: Ourmaid.AuthErrorHandler

  plug Guardian.Plug.VerifyHeader, realm: "Bearer"
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end
