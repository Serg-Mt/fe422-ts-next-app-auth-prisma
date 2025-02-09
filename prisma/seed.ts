import { type Group, type User, type Student, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

main();

async function createGroups() {
  const data: Group[] = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Python' }
  ]
  return await prisma.group.createMany({
    data
  });
}


async function createStudents() {
  const data = [
    { id: 1, name: 'Сергей', surname: 'Петров', age: 25, groupId: null },
    { id: 2, name: 'Иван', surname: '', age: 25, groupId: 2 },
    { id: 3, name: 'Петр', surname: '', age: 25, groupId: 1 },
  ]
  return await prisma.student.createMany({
    data
  });

}

async function createUsers() {
  const data: User[] = [
    { id: '1', name: 'John', email: 'test@test.com', createdAt: new Date, updatedAt: new Date, image: null, emailVerified: new Date }
  ]
  return await prisma.user.createMany({
    data
  });

}

async function main() {
  try {
    const
      groups = await createGroups(),
      students = await createStudents(),
      users = await createUsers();
    console.log({ groups, students, users });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    prisma.$disconnect();
  }
}