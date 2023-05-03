FROM bitwalker/alpine-elixir-phoenix:latest

ARG PHX_HOST=api.ocstudios.mx
ENV PHX_HOST=${PHX_HOST}

# Set exposed ports
EXPOSE 4000
ENV PORT=4000 MIX_ENV=prod

# Cache elixir deps
COPY ./backend/mix.exs ./backend/mix.lock ./
RUN mix do deps.get, deps.compile

COPY ./backend .

# Run frontend build, compile, and digest assets
RUN mix do compile, phx.digest

USER default

CMD ["mix", "phx.server"]