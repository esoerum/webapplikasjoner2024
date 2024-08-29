type ID = string;

const id: ID = '2';

type HabitObject = {
    id: ID,
    title: string,
    //? betyr optional
    createdAt?: string | Date;
};

const object: HabitObject = {
    id: '1',
    title: 'title here',
    //createdAt: new Date()
}

type HabitArray = HabitObject[];

const habitArray: HabitArray = [object];

type HabitTitle = Pick<HabitObject, "title">;
//gjør at du ikke har med id
type CreateHabitDTO = Omit<HabitObject, "id">

const createHabit = (data: CreateHabitDTO) => {
    return data
};

// createHabit({id: 'test', title: 'TEST"'})
//Tvinger frem dette formatet på strengen
type FancyID = `${string}-${string}-${string}`;
const fancyId: FancyID = "test-test-test";

//hva skal keyen være og hva skal verdien være - record
type StudentMeta = {name: string; birthYear: number};
type StudentRecord = Record<FancyID, StudentMeta>;
type Student = string | StudentRecord;

//Lær deg denne
const getStudent = async (
    students: Student[],
    id: FancyID
  ): Promise<StudentRecord | undefined | never> => {
    if (students.every((s) => typeof s === "string"))
      throw new Error("Can not locate user when all are strings");
    return students
      .filter((student) => typeof student !== "string")
      .find((student) => student[id]);
  };

const students: Student[] = ['Lars', {'a-b-c': {name: 'Frida', birthYear: 1992}}]

getStudent(students, "a-b-c").then(data => console.log(data));

console.log("Hey");