defmodule OurmaidWeb.UserView do
  use OurmaidWeb, :view


  def render("index.json", _) do
    %{data: "success"}
  end

  def render("show.json", _) do
    %{status: "success"}
  end

  def render("user.json", %{user: user}) do
    %{status: "success", username: user.username}
  end
  def render("jwt.json", %{jwt: jwt}) do
    %{jwt: jwt}
  end
end
