import * as fs from "fs";
export interface User {
  id: number;
  name: string;
  year: number;
  faculty: string;
}
const data = fs.readFileSync("users.json", { encoding: "utf8" });
export const { users } = JSON.parse(data);

const findUserById = (id: number, users: User[]) => {
  for (const user of users) {
    if (user.id === id) {
      return user.name;
    }
  }
};

const findUserByName = (name: string, users: User[]) => {
  for (const user of users) {
    if (user.name === name) {
      return user;
    }
  }
};

const findUserByYear = (year: number, users: User[]) => {
  for (const user of users) {
    if (user.year === year) {
      return user;
    }
  }
};

const findUserByFaculty = (faculty: string, users: User[]) => {
  for (const user of users) {
    if (user.faculty === faculty) {
      return user;
    }
  }
};

console.log(findUserById(1, users));
