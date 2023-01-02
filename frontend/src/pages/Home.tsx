import { useEffect, useState } from "react";
import { UserDTO } from "../dto/UserDTO";
import { axiosRequest } from "../services/Axios/Factory";

function Home() {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    setLoading(true);
    let { data } = await axiosRequest.get("https://randomuser.me/api/", {
      results: 5,
    });
    setLoading(false);
    setUsers(data.results);
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        {loading && <div>Carregando...</div>}
        {users && (
          <table>
            <thead>
              <tr>
                <th>Nome completo</th>
                <th>Email</th>
                <th>Nome de usuário</th>
                <th>Idade</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{`${item.name.first} ${item.name.last}`}</td>
                    <td>{item.email}</td>
                    <td>{item.login.username}</td>
                    <td>{`${
                      item.dob.age > 1
                        ? item.dob.age + " anos"
                        : item.dob.age + " ano"
                    }`}</td>
                    <td>
                      <a href={item.picture.large}>
                        <img src={item.picture.medium} />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export { Home };
