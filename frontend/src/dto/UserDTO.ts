interface Name {
  title: string;
  first: string;
  last: string;
}
interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface Login {
  uuid: string;
  username: string;
}
interface Dob {
  age: number;
  date: string;
}
interface UserDTO {
  name: Name;
  email: string;
  picture: Picture;
  login: Login;
  dob: Dob;
  teste: number;
}
export type { UserDTO };
