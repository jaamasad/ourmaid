defmodule OurmaidWeb.ReleaseView do
  use OurmaidWeb, :view
  alias OurmaidWeb.ReleaseView

  def render("index.json", %{releases: releases}) do
    %{data: render_many(releases, ReleaseView, "release.json")}
  end

  def render("show.json", %{release: release}) do
    %{data: render_one(release, ReleaseView, "release.json")}
  end

  def render("release.json", %{release: release}) do
    %{
      id: release.id,
      date: release.date,
      title: release.title,
      content: release.content
    }
  end
end
