/* exported getStudentNames */
// function getStudentNames(students) {
//  let key = 2;
//  const studentNames = [];
//  for (key in students) {
//    studentNames.push(Object.values(students[key]));
//  } console.log(studentNames);
//  return studentNames;
// }

function getStudentNames(students) {
  const studentNames = [];
  const studentNames2 = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  } studentNames2.push(studentNames.name);
  console.log(studentNames);
  return studentNames;
}
