# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :ourmaid,
ecto_repos: [Ourmaid.Repo]

# Configures the endpoint
config :ourmaid, OurmaidWeb.Endpoint,
url: [host: "localhost"],
render_errors: [view: OurmaidWeb.ErrorView, accepts: ~w(html json), layout: false],
pubsub_server: Ourmaid.PubSub,
live_view: [signing_salt: "J/wOZFfo"]


# Swoosh API client is needed for adapters other than SMTP.
config :swoosh, :api_client, false

config :ourmaid, Ourmaid.Mailer,
adapter: Swoosh.Adapters.SMTP,
relay: "ocstudios.mx",
username: "no.reply@ocstudios.mx",
password: "OCStudios12345",
ssl: true,
tls: :always,
auth: :always,
port: 465,
retries: 2,
no_mx_lookups: false


# Configure esbuild (the version is required)
config :esbuild,
version: "0.14.29",
default: [
args:
~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
cd: Path.expand("../assets", __DIR__),
env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
]

# Configures Elixir's Logger
config :logger, :console,
format: "$time $metadata[$level] $message\n",
metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason



# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
