import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createUsers() {
  const data = [
    { id: '1', name: 'John', email: 'test@test.com', createdAt: new Date(), updatedAt: new Date(), image: null, emailVerified: new Date() }
  ];
  return await prisma.user.createMany({
    data
  });
}

async function createHouses() {
  const gryffindor = await prisma.house.upsert({
    where: { id: 1 },
    create: { name: 'Gryffindor', id: 1 },
    update: { name: 'Gryffindor' }
  });
  const hufflepuff = await prisma.house.upsert({
    where: { id: 2 },
    create: { name: 'Hufflepuff', id: 2 },
    update: { name: 'Hufflepuff' }
  });
  const ravenclaw = await prisma.house.upsert({
    where: { id: 3 },
    create: { name: 'Ravenclaw', id: 3 },
    update: { name: 'Ravenclaw' }
  });
  const slytherin = await prisma.house.upsert({
    where: { id: 4 },
    create: { name: 'Slytherin', id: 4 },
    update: { name: 'Slytherin' },
  });
  return { gryffindor, hufflepuff, ravenclaw, slytherin };
}

async function createSubjects() {
  return await prisma.subject.createMany({
    data: [
      { name: 'Transfiguration' },
      { name: 'Charms' },
      { name: 'Potions' },
      { name: 'History of Magic' },
      { name: 'Defence Against the Dark Arts' },
      { name: 'Astronomy' },
      { name: 'Herbology' },
      { name: 'Arithmancy' },
      { name: 'Ancient Runes' },
      { name: 'Divination' },
      { name: 'Care of Magical Creatures' },
      { name: 'Muggle Studies' },
    ],
  });
}

async function createTeachers() {
  return await prisma.teacher.createMany({
    data: [
      { name: 'Minerva', surname: 'McGonagall', id: 1 }, // Transfiguration
      { name: 'Filius', surname: 'Flitwick', id: 2 }, // Charms
      { name: 'Severus', surname: 'Snape', id: 3 }, // Potions
      { name: 'Bathilda', surname: 'Bagshot', id: 4 }, // History of Magic
      { name: 'Remus', surname: 'Lupin', id: 5 }, // Defence Against the Dark Arts
      { name: 'Aurora', surname: 'Sinistra', id: 6 }, // Astronomy
      { name: 'Pomona', surname: 'Sprout', id: 7 }, // Herbology
      { name: 'Septima', surname: 'Vector', id: 8 }, // Arithmancy
      { name: 'Bathsheba', surname: 'Babbling', id: 9 }, // Ancient Runes
      { name: 'Sybill', surname: 'Trelawney', id: 10 }, // Divination
      { name: 'Rubeus', surname: 'Hagrid', id: 11 }, // Care of Magical Creatures
      { name: 'Alecto', surname: 'Carrow', id: 12 }, // Muggle Studies
    ],
  });
}

async function createStudents(gryffindor: { id: number; name: string; }, slytherin: { id: number; name: string; }, ravenclaw: { id: number; name: string; }, hufflepuff: { id: number; name: string; }) {
  return await prisma.student.createMany({
    data: [
      { name: 'Harry', surname: 'Potter', age: 17, houseId: gryffindor.id },
      { name: 'Hermione', surname: 'Granger', age: 17, houseId: gryffindor.id },
      { name: 'Ron', surname: 'Weasley', age: 17, houseId: gryffindor.id },
      { name: 'Draco', surname: 'Malfoy', age: 17, houseId: slytherin.id },
      { name: 'Luna', surname: 'Lovegood', age: 16, houseId: ravenclaw.id },
      { name: 'Neville', surname: 'Longbottom', age: 17, houseId: gryffindor.id },
      { name: 'Ginny', surname: 'Weasley', age: 16, houseId: gryffindor.id },
      { name: 'Cho', surname: 'Chang', age: 17, houseId: ravenclaw.id },
      { name: 'Cedric', surname: 'Diggory', age: 17, houseId: hufflepuff.id },
      { name: 'Pansy', surname: 'Parkinson', age: 17, houseId: slytherin.id },
      { name: 'Dean', surname: 'Thomas', age: 17, houseId: gryffindor.id },
      { name: 'Seamus', surname: 'Finnigan', age: 17, houseId: gryffindor.id },
    ],
  });
}

async function main() {
  try {
    await prisma.$connect();
    // await createUsers();
    const { gryffindor, hufflepuff, ravenclaw, slytherin } = await createHouses();
    await createTeachers();


    // Create students and assign them to houses
    await createStudents(gryffindor, slytherin, ravenclaw, hufflepuff);

    // Assign students to subjects
    const studentSubjects = [
      { studentId: 1, subjectId: 1 }, // Harry - Transfiguration
      { studentId: 1, subjectId: 2 }, // Harry - Charms
      { studentId: 1, subjectId: 3 }, // Harry - Potions
      { studentId: 2, subjectId: 1 }, // Hermione - Transfiguration
      { studentId: 2, subjectId: 2 }, // Hermione - Charms
      { studentId: 2, subjectId: 3 }, // Hermione - Potions
      { studentId: 3, subjectId: 1 }, // Ron - Transfiguration
      { studentId: 3, subjectId: 2 }, // Ron - Charms
      { studentId: 3, subjectId: 3 }, // Ron - Potions
      { studentId: 4, subjectId: 3 }, // Draco - Potions
      { studentId: 4, subjectId: 4 }, // Draco - History of Magic
      { studentId: 4, subjectId: 5 }, // Draco - Defence Against the Dark Arts
      { studentId: 5, subjectId: 6 }, // Luna - Astronomy
      { studentId: 5, subjectId: 7 }, // Luna - Herbology
      { studentId: 5, subjectId: 8 }, // Luna - Arithmancy
      { studentId: 6, subjectId: 1 }, // Neville - Transfiguration
      { studentId: 6, subjectId: 7 }, // Neville - Herbology
      { studentId: 6, subjectId: 9 }, // Neville - Ancient Runes
      { studentId: 7, subjectId: 1 }, // Ginny - Transfiguration
      { studentId: 7, subjectId: 2 }, // Ginny - Charms
      { studentId: 7, subjectId: 3 }, // Ginny - Potions
      { studentId: 8, subjectId: 6 }, // Cho - Astronomy
      { studentId: 8, subjectId: 7 }, // Cho - Herbology
      { studentId: 8, subjectId: 8 }, // Cho - Arithmancy
      { studentId: 9, subjectId: 1 }, // Cedric - Transfiguration
      { studentId: 9, subjectId: 2 }, // Cedric - Charms
      { studentId: 9, subjectId: 3 }, // Cedric - Potions
      { studentId: 10, subjectId: 3 }, // Pansy - Potions
      { studentId: 10, subjectId: 4 }, // Pansy - History of Magic
      { studentId: 10, subjectId: 5 }, // Pansy - Defence Against the Dark Arts
      { studentId: 11, subjectId: 1 }, // Dean - Transfiguration
      { studentId: 11, subjectId: 2 }, // Dean - Charms
      { studentId: 11, subjectId: 3 }, // Dean - Potions
      { studentId: 12, subjectId: 1 }, // Seamus - Transfiguration
      { studentId: 12, subjectId: 2 }, // Seamus - Charms
      { studentId: 12, subjectId: 3 }, // Seamus - Potions
    ];

    for (const studentSubject of studentSubjects) {
      await prisma.student.update({
        where: { id: studentSubject.studentId },
        data: {
          subjects: {
            connect: { id: studentSubject.subjectId },
          },
        },
      });
    }

    // Assign teachers to subjects
    const teacherSubjects = [
      { teacherId: 1, subjectId: 1 }, // Minerva McGonagall - Transfiguration
      { teacherId: 2, subjectId: 2 }, // Filius Flitwick - Charms
      { teacherId: 3, subjectId: 3 }, // Severus Snape - Potions
      { teacherId: 4, subjectId: 4 }, // Bathilda Bagshot - History of Magic
      { teacherId: 5, subjectId: 5 }, // Remus Lupin - Defence Against the Dark Arts
      { teacherId: 6, subjectId: 6 }, // Aurora Sinistra - Astronomy
      { teacherId: 7, subjectId: 7 }, // Pomona Sprout - Herbology
      { teacherId: 8, subjectId: 8 }, // Septima Vector - Arithmancy
      { teacherId: 9, subjectId: 9 }, // Bathsheba Babbling - Ancient Runes
      { teacherId: 10, subjectId: 10 }, // Sybill Trelawney - Divination
      { teacherId: 11, subjectId: 11 }, // Rubeus Hagrid - Care of Magical Creatures
      { teacherId: 12, subjectId: 12 }, // Alecto Carrow - Muggle Studies
    ];

    for (const teacherSubject of teacherSubjects) {
      await prisma.teacher.update({
        where: { id: teacherSubject.teacherId },
        data: {
          subjects: {
            connect: { id: teacherSubject.subjectId },
          },
        },
      });
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


