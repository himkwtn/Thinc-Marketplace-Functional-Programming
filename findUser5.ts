import { User, users } from "./findUser1";
const anotherSetOfUsers = users;

type Predicate = (condition: any, user: User) => boolean;

const propEqual = key => (value, obj) => obj[key] === value;

const findUser = (predicate: Predicate) => (condition: any) => (
  users: User[]
) => {
  for (const user of users) {
    if (predicate(condition, user)) {
      return user;
    }
  }
};

const findUserById = findUser(propEqual("id"));

const findUserByName = findUser(propEqual("name"));

const findUserByYear = findUser(propEqual("year"));

const findUserByFaculty = findUser(propEqual("faculty"));

console.log(findUserByYear(2)(users));

const findEngineeringStudent = findUserByFaculty("engineering");

findEngineeringStudent(users);

findEngineeringStudent(anotherSetOfUsers);
