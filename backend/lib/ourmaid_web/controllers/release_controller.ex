defmodule OurmaidWeb.ReleaseController do
  use OurmaidWeb, :controller

  alias Ourmaid.Press
  alias Ourmaid.Press.Release

  def index(conn, _params) do
    releases = Press.list_releases()
    render(conn, "index.html", releases: releases)
  end

  def new(conn, _params) do
    changeset = Press.change_release(%Release{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"release" => release_params}) do
    case Press.create_release(release_params) do
      {:ok, release} ->
        conn
        |> put_flash(:info, "Release created successfully.")
        |> redirect(to: Routes.release_path(conn, :show, release))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    release = Press.get_release!(id)
    render(conn, "show.html", release: release)
  end

  def edit(conn, %{"id" => id}) do
    release = Press.get_release!(id)
    changeset = Press.change_release(release)
    render(conn, "edit.html", release: release, changeset: changeset)
  end

  def update(conn, %{"id" => id, "release" => release_params}) do
    release = Press.get_release!(id)

    case Press.update_release(release, release_params) do
      {:ok, release} ->
        conn
        |> put_flash(:info, "Release updated successfully.")
        |> redirect(to: Routes.release_path(conn, :show, release))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", release: release, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    release = Press.get_release!(id)
    {:ok, _release} = Press.delete_release(release)

    conn
    |> put_flash(:info, "Release deleted successfully.")
    |> redirect(to: Routes.release_path(conn, :index))
  end
end
