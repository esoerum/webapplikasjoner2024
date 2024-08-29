const studentName = "Lars";

const lars = {
    name: studentName,
    birthYear: 1992, 
    isNew: false,
    role: 'student'
};

const students = [
    lars, 
    {
        name: 'Trude',
        birthTear: 1991,
        isNew: true,
        role: 'admin'
    }, {
        name: 'Ali',
        birthYear: 1989,
        isNew: true,
        role: 'superadmin'
    },
    {
        name: 'Simone',
        birthYear: 2001,
        isNew: true,
        role: 'student'
    } 
];
//Filtrere data - henter ut alle født etter 1991 fra lista
const getStudentAboveBirthYear = (students = [], birthYear) => {
    return students.filter((student) => student.birthYear > birthYear)
}

const studentsAbove = getStudentAboveBirthYear(students, 1991)
//Implisitt return, trenger ikke curly + return
//Gir ny liste tilbake, spread, utvider med age.
const transformStudents = students => students.map(student => ({
    ...student,
    age: newDate().getFullYear() - student.birthYear
}))

const studentsWithAge = transformStudents(students)

const findStudent = (students, name) => {
    return students.find(student => student.name.toLowerCase() === name.toLowerCase())
}
const studentFound = findStudent(students, 'lars')

const roles = ['Admin', 'superadmin']

const hasAccess = (roles, students) => {
    return students.filter(student => {
        return roles.includes(student.role)
    })
}

const adminRoles = hasAccess(['admin'], students)
const studentRoles = hasAccess(['student'], students)
const adminorSuperAdmins = hasAccess(['admin', 'superadmin'] , students)

const omitName = (students) => {
    return students.map(student => {
        const {name, ...rest} = student
        return rest
    })
}

const studentNameOmitted = omitName(students)
//Kopi, men ikke dyp kopi
const studentCopy = [...students]
studentCopy[1].name = 'Name changed'

//Kopierer et objekt
const larsCopy = {...lars}
    larsCopy.name = "Lars changes"
    larsCopy

    const hiofLocation = {
        name: 'HIOF',
        street: 'Haldenveien 1',
        postal: '1520',
        contact: {
          email: 'halden@email.no'
        }
      }

      hiofLocationCopy.contact.email = "demo"
      //Lager en dyp kopi
      const hiofLocationDeep = structuredClone(hiofLocation)

//Kombinere to objekter
const studentWithHiofData = {
    ...lars,
    location: hiofLocation
}