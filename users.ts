import * as _ from "lodash";
import * as faker from "faker";
import * as fs from "fs";
const faculty = ["engineering", "arts", "science", "economics", "architecture"];
const users = _.range(1, 6).map(n => {
  const user = {
    id: n,
    name: faker.name.firstName(),
    year: _.random(1, 5),
    faculty: faculty[n - 1]
  };
  return user;
});

console.log(users);
fs.writeFileSync("users.json", JSON.stringify(users));
