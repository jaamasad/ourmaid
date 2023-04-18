defmodule Ourmaid.Repo.Migrations.CreateReleases do
  use Ecto.Migration

  def change do
    create table(:releases) do
      add :date, :string
      add :title, :string
      add :content, :string

      timestamps()
    end
  end
end
