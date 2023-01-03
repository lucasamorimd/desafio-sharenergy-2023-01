import { UserDTO } from "../../../dto/UserDTO";

type UsersProps = {
  users: UserDTO[];
};

const UsersTables = (props: UsersProps) => {
  return (
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
        {props.users.map((item, index) => {
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
  );
};

export { UsersTables };
