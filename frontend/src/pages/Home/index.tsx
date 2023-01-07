import React, { useEffect, useState } from "react";
import "./styles.css";
import { UserCard } from "../../components/UserCard";
import { SideMenu } from "../../components/SideMenu";
import { UserDTO } from "../../dto/UserDTO";
import { HomeActions } from "./actions";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";

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
            <div className="widget">
              <div className="widget_title">
                <div className="widget_title_text">Usuários</div>
                <div className="widget_title_bar"></div>
              </div>
              <div className="widget_body flex">
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
              </div>
            </div>
          </section>
          <SideMenu>
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
