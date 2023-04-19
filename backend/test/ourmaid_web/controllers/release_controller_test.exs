defmodule OurmaidWeb.ReleaseControllerTest do
  use OurmaidWeb.ConnCase

  import Ourmaid.PressFixtures

  @create_attrs %{content: "some content", date: "some date", title: "some title"}
  @update_attrs %{content: "some updated content", date: "some updated date", title: "some updated title"}
  @invalid_attrs %{content: nil, date: nil, title: nil}

  describe "index" do
    test "lists all releases", %{conn: conn} do
      conn = get(conn, Routes.release_path(conn, :index))
      assert html_response(conn, 200) =~ "Listing Releases"
    end
  end

  describe "new release" do
    test "renders form", %{conn: conn} do
      conn = get(conn, Routes.release_path(conn, :new))
      assert html_response(conn, 200) =~ "New Release"
    end
  end

  describe "create release" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, Routes.release_path(conn, :create), release: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == Routes.release_path(conn, :show, id)

      conn = get(conn, Routes.release_path(conn, :show, id))
      assert html_response(conn, 200) =~ "Show Release"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.release_path(conn, :create), release: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Release"
    end
  end

  describe "edit release" do
    setup [:create_release]

    test "renders form for editing chosen release", %{conn: conn, release: release} do
      conn = get(conn, Routes.release_path(conn, :edit, release))
      assert html_response(conn, 200) =~ "Edit Release"
    end
  end

  describe "update release" do
    setup [:create_release]

    test "redirects when data is valid", %{conn: conn, release: release} do
      conn = put(conn, Routes.release_path(conn, :update, release), release: @update_attrs)
      assert redirected_to(conn) == Routes.release_path(conn, :show, release)

      conn = get(conn, Routes.release_path(conn, :show, release))
      assert html_response(conn, 200) =~ "some updated content"
    end

    test "renders errors when data is invalid", %{conn: conn, release: release} do
      conn = put(conn, Routes.release_path(conn, :update, release), release: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Release"
    end
  end

  describe "delete release" do
    setup [:create_release]

    test "deletes chosen release", %{conn: conn, release: release} do
      conn = delete(conn, Routes.release_path(conn, :delete, release))
      assert redirected_to(conn) == Routes.release_path(conn, :index)

      assert_error_sent 404, fn ->
        get(conn, Routes.release_path(conn, :show, release))
      end
    end
  end

  defp create_release(_) do
    release = release_fixture()
    %{release: release}
  end
end
