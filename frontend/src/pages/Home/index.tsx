import React, { useEffect, useState } from "react";
import "./styles.css";
import { UserCard } from "../../components/UserCard";
import { SideMenu } from "../../components/SideMenu";
import { UserDTO } from "../../dto/UserDTO";
import { HomeActions } from "./actions";

function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const actions = new HomeActions();

  useEffect(() => {
    loadUsers();
  }, [page]);

  useEffect(() => {
    if (search == "") {
      loadUsers();
      return;
    }
    let filteredUsers = actions.filterUsers(users, search);
    loadUsers(filteredUsers);
  }, [search]);

  const loadUsers = async (users?: UserDTO[]) => {
    setIsLoading(true);

    if (!users) {
      let { results } = await actions.getUsers(page);
      setUsers(results);
      setIsLoading(false);
      return;
    }

    setUsers(users);
    setIsLoading(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <section>
        <div className="widget">
          <div className="widget_title">
            <div className="widget_title_text">Usuários</div>
            <div className="widget_title_bar"></div>
          </div>
          <div className="widget_body flex">
            {isLoading ? (
              <>Carregando...</>
            ) : (
              users &&
              users.map((item, index) => {
                return <UserCard key={index} user={item} />;
              })
            )}
          </div>
        </div>
      </section>
      <SideMenu
        filter={
          <>
            <div className="pagination">
              <button
                disabled={page === 1}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                &lt;
              </button>
              <button>{page}</button>
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                &gt;
              </button>
            </div>
            <div className="searchArea">
              <input
                id="searchInput"
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Digite um nome, email ou username"
              />
            </div>
          </>
        }
      />
    </>
  );
}
export { Home };
