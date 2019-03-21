import { User, users } from "./findUser1";

type Predicate = (user: User) => boolean;

const findUser = (predicate: Predicate) => (users: User[]) => {
  for (const user of users) {
    if (predicate(user)) {
      return user;
    }
  }
  return undefined;
};

const findUserById = (id: number) => findUser(user => user.id === id);

const findUserByName = (name: string) => findUser(user => user.name === name);

const findUserByYear = (year: number) => findUser(user => user.year === year);

const findUserByFaculty = (faculty: string) =>
  findUser(user => user.faculty === faculty);

findUserByName("<name>")(users);

console.log(findUserById(1)(users));
