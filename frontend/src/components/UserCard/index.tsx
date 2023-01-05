import { useEffect, useState } from "react";
import { UserDTO } from "../../dto/UserDTO";
import "./styles.css";

type UserProp = {
  user: UserDTO;
};

function UserCard({ user }: UserProp) {
  const [isThumb, setIsThumb] = useState(true);
  const [userThumb, setUserThumb] = useState("");

  useEffect(() => {
    if (isThumb) {
      setUserThumb(user.picture.thumbnail);
    } else {
      setUserThumb(user.picture.large);
    }
  }, [isThumb]);

  const handleUserThumb = (url: string) => {
    setIsThumb(!isThumb);
  };

  return (
    <article
      className="user_card"
      onClick={() => {
        handleUserThumb(user.picture.large);
      }}
    >
      <div className="user_data">
        <div className="user_email">{user.email}</div>
        <div className="user_age">{user.dob.age} anos</div>
      </div>
      <div className="user_thumb">
        <img
          src={userThumb}
          style={!isThumb ? { width: "100%", height: "auto" } : {}}
        />
      </div>
      <div className="user_name">{`${user.name.first} ${user.name.last}`}</div>
      <div className="user_nickname">Nickname: {user.login.username}</div>
    </article>
  );
}
export { UserCard };
