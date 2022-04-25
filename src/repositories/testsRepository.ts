import { client } from "../database.js";

export async function getTeachers() {
  return await client.teacher.findMany({
    select : {
      id : true,
      name : true
    }
  })
}

export async function getTestsByDiscipline( disciplineId : number ) {
  return await client.category.findMany({
    select : {
      id : true,
      name : true,
      tests : {
        where : {
          teacherDiscipline : {
            disciplineId: disciplineId
          }
        },
        select : {
          id : true,
          name : true,
          pdfUrl : true,
          teacherDiscipline : {
            select : {
              teacher : {
                select : { name : true }
              }
            }
          }
        }
      }
    }
  })
}

export async function getTestsByTeacher( teacherId : number ) {
  return await client.category.findMany({
    select : {
      id: true,
      name: true,
      tests : {
        where: {
          teacherDiscipline : {
            teacherId: teacherId
          }
        },
        select : {
          id : true,
          name : true,
          pdfUrl: true,
          teacherDiscipline : {
            select : {
              discipline : {
                select : { name : true }
              }
            }
          }
        }
      }
    }
  })
}

export async function getDisciplinesByTerms() {
  return await client.term.findMany({
    select : {
      id : true, 
      number : true,
      disciplines : {
        select : {
          id : true, 
          name : true
        }
      }
    }
  })
}