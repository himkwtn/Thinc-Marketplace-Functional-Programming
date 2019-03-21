import { User, users } from "./findUser1";

type Predicate = (user: User) => boolean;

const findUser = (predicate: Predicate, users: User[]) => {
  for (const user of users) {
    if (predicate(user)) {
      return user;
    }
  }
  return undefined;
};

const findUserById = (id: number, users: User[]) => {
  return findUser(user => user.id === id, users);
};

const findUserByName = (name: string, users: User[]) => {
  return findUser(user => user.name === name, users);
};

const findUserByYear = (year: number, users: User[]) => {
  return findUser(user => user.year === year, users);
};

const findUserByFaculty = (faculty: string, users: User[]) => {
  return findUser(user => user.faculty === faculty, users);
};
console.log(findUserById(1, users));
