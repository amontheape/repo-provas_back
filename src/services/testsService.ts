import * as testsRepository from '../repositories/testsRepository.js'

export async function getTestsByDisciplines() {
  const testsByDiscipline = []
  const terms = await testsRepository.getDisciplinesByTerms()

  for ( const term of terms ) {
    let tests = []

    for ( const discipline of term.disciplines ) {
      tests.push({
        disciplineId : discipline.id,
        disciplineName : discipline.name,
        tests : await testsRepository.getTestsByDiscipline(discipline.id)
      })
    }

    const formatted = {
      termId : term.id,
      termName : term.number,
      disciplines : tests
    }

    testsByDiscipline.push(formatted)
  }

  return testsByDiscipline
}

export async function getTestsByTeachers() {
  const testsByTeacher = []
  const teachers = await testsRepository.getTeachers()

  for ( let teacher of teachers ) {
    const teacherTests = await testsRepository.getTestsByTeacher( teacher.id )

    const currentTest = {
      teacherId : teacher.id,
      teacherName : teacher.name,
      tests : teacherTests
    }

    testsByTeacher.push( currentTest )
  }

  return testsByTeacher  
}