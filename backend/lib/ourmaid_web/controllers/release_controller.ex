defmodule OurmaidWeb.ReleaseController do
  use OurmaidWeb, :controller

  alias Ourmaid.Press
  alias Ourmaid.Press.Release

  action_fallback OurmaidWeb.FallbackController

  def index(conn, _params) do
    releases = Press.list_releases()
    render(conn, "index.json", releases: releases)
  end

  def create(conn, %{"release" => release_params}) do
    with {:ok, %Release{} = release} <- Press.create_release(release_params) do
      conn
      |> put_status(:created)
      |> render("success.json", release: release)
    end
  end

  def show(conn, _) do
    releases = Press.list_releases()
    render(conn, "show.json", releases: releases)
  end

  def update(conn, %{"id" => id, "release" => release_params}) do
    release = Press.get_release!(id)

    with {:ok, %Release{} = release} <- Press.update_release(release, release_params) do
      render(conn, "show.json", release: release)
    end
  end

  def delete(conn, %{"id" => id}) do
    release = Press.get_release!(id)

    with {:ok, %Release{}} <- Press.delete_release(release) do
      send_resp(conn, :no_content, "")
    end
  end
end
