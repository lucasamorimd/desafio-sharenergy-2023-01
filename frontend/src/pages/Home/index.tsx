import React, { useEffect, useState } from "react";
import "./styles.css";
import { UserCard } from "../../components/UserCard";
import { SideMenu } from "../../components/SideMenu";
import { UserDTO } from "../../dto/UserDTO";
import { HomeActions } from "./actions";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Widget } from "../../components/Widget";

function Home() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [filterUsers, setFilterUsers] = useState<UserDTO[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const actions = new HomeActions();

  useEffect(() => {
    if (filterUsers) {
      console.log(filterUsers);
    }
    loadUsers();
  }, [page]);

  const loadUsers = async () => {
    setIsLoading(true);
    setFilterUsers([]);
    const { results } = await actions.getUsers(page);
    setUsers(results);
    setIsLoading(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    let filteredUsers = actions.filterUsers(users, event.target.value);
    setIsLoading(true);
    setFilterUsers(filteredUsers);
    setIsLoading(false);
    if (event.target.value === "") {
      setIsSearching(false);
    }
  };

  return (
    <>
      <Header />
      <section id="geral">
        <div className="container">
          <section>
            <Widget title="Usuários">
              {isLoading ? (
                <>Carregando...</>
              ) : isSearching ? (
                filterUsers.map((item, index) => {
                  return <UserCard user={item} key={index} />;
                })
              ) : (
                users &&
                users.map((item, index) => {
                  return <UserCard user={item} key={index} />;
                })
              )}
            </Widget>
          </section>
          <SideMenu title="Busca e Páginas">
            <>
              <Pagination setPage={setPage} page={page} />
              <div className="searchArea">
                <input
                  id="searchInput"
                  type="text"
                  onChange={handleSearch}
                  placeholder="Digite um nome, email ou nickname"
                />
              </div>
            </>
          </SideMenu>
        </div>
      </section>
    </>
  );
}
export { Home };
