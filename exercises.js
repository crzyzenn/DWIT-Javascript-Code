let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// Exercise 1:
// We're going to send out a message to all our users
// but just need their first name in order to
// personalize it. We can use .map() to quickly
// return an array of just their first names.
// let personalizedUsers = users.map((user) => user.firstName);
let personalizedUsers = users.map(function (user) {
  return user.firstName;
});
console.log(personalizedUsers);

// Exercise 2:
//  We want to send out a message to just the Full
// Stack Residents, telling them what a wonderful
// job they're doing. We can use .filter() to return
// just those users who fit the right role.
// let allFullStackResidents = users.filter(
//   (user) => user.role === "Full Stack Resident"
// );
let allFullStackResidents = users.filter(function (user) {
  return user.role === "Full Stack Resident";
});

console.log(allFullStackResidents);
