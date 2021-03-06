/* eslint-disable */
const students = [
  {
    id: 1,
    name: 'Josh Mccarthy',
    favouriteSubject: 1,
    info: 'Good student',
  },
  {
    id: 2,
    name: 'Scott Holmes',
    favouriteSubject: 2,
    info: 'Good student',
  },
  {
    id: 3,
    name: 'Bailey Jordan',
    favouriteSubject: 1,
    info: 'Good student',
  },
  {
    id: 4,
    name: 'Oliver Miller',
    favouriteSubject: 3,
    info: 'Good student',
  },
  {
    id: 5,
    name: 'Jamie Rodgers',
    favouriteSubject: 3,
    info: 'Good student',
  },
  {
    id: 6,
    name: 'Kyle Mclean',
    favouriteSubject: 2,
    info: 'Good student',
  },
  {
    id: 7,
    name: 'Matthias Savage',
    favouriteSubject: 1,
    info: 'Good student',
  },
  {
    id: 8,
    name: 'Leslie Lawson',
    favouriteSubject: 1,
    info: 'Good student',
  },
  {
    id: 9,
    name: 'Ethan Cooper',
    favouriteSubject: 3,
    info: 'Good student',
  },
  {
    id: 10,
    name: 'Terry Vinson',
    favouriteSubject: 2,
    info: 'Good student',
  },
]

const subjects = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'Biology' },
]

const newStudent = {
  id: null,
  name: '',
  favouriteSubject: null,
  info: '',
}

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  students,
  subjects,
  newStudent,
}
