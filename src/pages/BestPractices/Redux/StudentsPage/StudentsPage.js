import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { H1 } from '../../../../components/Typography'
import { Loader } from '../../../../components/Loader'
import { loadStudents, deleteStudent } from '../../../../redux/student/actions'
import { loadSubjects } from '../../../../redux/subject/actions'
import StudentList from './StudentList'
import { ButtonDiv } from '../../../../components/Button'
import * as routes from '../../../../routes'

const StudentsPage = ({
  students,
  isLoading,
  subjects,
  loadStudents,
  loadSubjects,
  deleteStudent,
  history,
}) => {
  useEffect(() => {
    if (students.length === 0) {
      loadStudents().catch((error) =>
        toast.error(`Problem with fetching students${error}`)
      )
    }
    if (subjects.length === 0) {
      loadSubjects().catch((error) =>
        toast.error(`Problem with fetching subjects${error}`)
      )
    }
  }, [])

  const onDelete = (student) => {
    toast.success('Student deleted')
    deleteStudent(student).catch((err) => {
      toast.error('Delete failed' + err)
    })
  }

  return (
    <>
      <H1 textAlign="center">Students page</H1>
      <ButtonDiv
        style={{
          fontSize: '16px',
        }}
        onClick={() => history.push(routes.REDUX_STUDENT)}
      >
        Add student
      </ButtonDiv>
      {isLoading && <Loader />}
      {!isLoading && (
        <StudentList
          students={students}
          history={history}
          onDelete={onDelete}
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects,
    students:
      state.subjects.length === 0
        ? []
        : state.students.map((student) => {
            return {
              ...student,
              favouriteSubject: state.subjects.find(
                (subject) => student.favouriteSubject === subject.id
              ).name,
            }
          }),
    isLoading: state.apiCallsInProgress > 0,
  }
}

const mapDispatchToProps = {
  loadStudents,
  loadSubjects,
  deleteStudent,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage)
