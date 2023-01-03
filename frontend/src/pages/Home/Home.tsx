import React, { useEffect, useState } from "react";
import { UsersTables } from "../../components/tables/UsersTable/UsersTables";
import { UserDTO } from "../../dto/UserDTO";
import { Search } from "../../handlers/SearchUserHandle";
import { axiosRequest } from "../../services/Axios/Factory";
import "./Home.css";

function Home() {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [actualPage, setActualPage] = useState(1);
  let pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    loadUsers();
  }, [actualPage]);

  const loadUsers = async () => {
    setLoading(true);
    let { data } = await axiosRequest.get("https://randomuser.me/api/", {
      page: actualPage,
      results: 5,
      seed: "sharenergy",
      inc: "name, email, picture, login, dob",
    });
    setLoading(false);
    setUsers(data.results);
  };

  const handlePagination = (item: number) => {
    setActualPage(item);
  };

  const searchUser = async (key: string) => {
    if (key != "") {
      setLoading(true);
      let users = await Search(key, pages.length);
      setUsers(users);
      setLoading(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="homeContainer">
        {loading && <span>Carregando...</span>}
        {users && (
          <div className="tableArea">
            <div className="searchArea">
              <input type="text" value={search} onChange={handleSearch} />
              <button
                onClick={() => {
                  searchUser(search);
                }}
              >
                Procurar
              </button>
            </div>
            <div className="paginationArea">
              {pages.map((item, index) => {
                return (
                  <a
                    key={index}
                    href="#"
                    onClick={() => {
                      handlePagination(item);
                    }}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            <UsersTables users={users} />
          </div>
        )}
      </div>
    </div>
  );
}
export { Home };
