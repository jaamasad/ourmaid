defmodule Ourmaid.Press.Release do
  use Ecto.Schema
  import Ecto.Changeset

  schema "releases" do
    field :content, :string
    field :date, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(release, attrs) do
    release
    |> cast(attrs, [:date, :title, :content])
    |> validate_required([:date, :title, :content])
  end
end
