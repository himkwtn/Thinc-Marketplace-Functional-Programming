import { User, users } from "./findUser1";
const anotherSetOfUsers = users;

type Predicate = (condition: any, user: User) => boolean;

const findUser = (predicate: Predicate) => (condition: any) => (
  users: User[]
) => {
  for (const user of users) {
    if (predicate(condition, user)) {
      return user;
    }
  }
};

const findUserById = findUser((id, user) => user.id === id);

const findUserByName = findUser((name, user) => user.name === name);

const findUserByYear = findUser((year, user) => user.year === year);

const findUserByFaculty = findUser((faculty, user) => user.faculty === faculty);

findUserByYear(2)(users);

const findEngineeringStudent = findUserByFaculty("engineering");

findEngineeringStudent(users);

findEngineeringStudent(anotherSetOfUsers);
