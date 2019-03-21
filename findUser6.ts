import { User, users } from "./findUser1";
import { compose } from "./compose";
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

const findUserBy = compose(
  findUser,
  propEqual
);

const findUserById = findUserBy("id");

const findUserByName = findUserBy("name");

const findUserByYear = findUserBy("year");

const findUserByFaculty = findUserBy("faculty");

console.log(findUserByYear(2)(users));

const findEngineeringStudent = findUserByFaculty("engineering");

findEngineeringStudent(users);

findEngineeringStudent(anotherSetOfUsers);
