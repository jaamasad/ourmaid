defmodule OurmaidWeb.UserView do
  use OurmaidWeb, :view
  alias OurmaidWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: "success"}
  end

  def render("show.json", %{user: user}) do
    %{status: "success"}
  end

  def render("user.json", %{user: user}) do
    %{status: "success", username: user.username}
  end
  def render("jwt.json", %{jwt: jwt}) do
    %{jwt: jwt}
  end
end
