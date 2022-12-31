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
    let json = await axiosRequest.get("https://randomuser.me/api/", {
      results: 5,
    });
    setLoading(false);
    setUsers(json);
  };
  return (
    <div>
      <h1>Home</h1>
      <div>
        {loading && <div>Carregando...</div>}
        {users && (
          <ul>
            {users.map((item, index) => {
              return <li key={index}>{item.name.first}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
export { Home };
