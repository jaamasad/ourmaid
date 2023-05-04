FROM bitwalker/alpine-elixir-phoenix:latest

ARG PHX_HOST=api.ocstudios.mx
ENV PHX_HOST=${PHX_HOST}
ARG DATABASE_URL=
ENV DATABASE_URL=${DATABASE_URL}
ARG SECRET_KEY_BASE=
ENV SECRET_KEY_BASE=${SECRET_KEY_BASE}

# Set exposed ports
EXPOSE 4000
ENV PORT=4000 MIX_ENV=prod

# Cache elixir deps
COPY ./backend/mix.exs ./backend/mix.lock ./
RUN mix do deps.get, deps.compile

COPY ./backend .
# Run frontend build, compile, and digest assets
RUN mix do compile, assets.deploy

RUN chmod 777 ./_build

CMD ["mix", "phx.server"]