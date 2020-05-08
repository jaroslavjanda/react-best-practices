import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { Loader } from '../../../../../components/Loader'
import { loadStudents, saveStudent } from '../../../../../redux/student/actions'
import { loadSubjects } from '../../../../../redux/subject/actions'
import newStudent from '../../../../../utils/server/mockData'
import StudentForm from './StudentForm'
import * as routes from '../../../../../routes'

const ManageStudent = ({
  history,
  students,
  loadStudents,
  subjects,
  loadSubjects,
  saveStudent,
  student: initialStudent,
}) => {
  const [student, setStudent] = useState(initialStudent)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (students.length === 0) {
      loadStudents().catch((error) =>
        toast.error(`Problem with fetching students${error}`)
      )
    } else {
      setStudent(initialStudent)
    }
    if (subjects.length === 0) {
      loadSubjects().catch((error) =>
        toast.error(`Problem with fetching subjects${error}`)
      )
    }
  }, [initialStudent])

  const onChange = ({ target }) => {
    const { name, value } = target
    setStudent({
      ...student,
      [name]: name === 'favouriteSubject' ? parseInt(value, 10) : value,
    })
  }

  const formIsValid = () => {
    const { name, favouriteSubject, info } = student
    const errors = {}

    if (!name) errors.name = 'Name is required'
    if (!favouriteSubject)
      errors.favouriteSubject = 'Favourite subject is required'
    if (!info) errors.info = 'Information is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (!formIsValid()) return
    setIsSaving(true)
    saveStudent(student)
      .then(() => {
        toast.success('Student saved')
        history.push(routes.REDUX_STUDENTS)
      })
      .catch((error) => {
        setIsSaving(false)
        setErrors({ onSave: error.message })
      })
  }

  return (
    <>
      {students.length !== 0 && subjects.length !== 0 && (
        <>
          <StudentForm
            student={student}
            subjects={subjects}
            saving={isSaving}
            errors={errors}
            onChange={onChange}
            onSave={handleSave}
          />
        </>
      )}
    </>
  )
}

const getStudentById = (students, id) => {
  return students.find((student) => student.id === parseInt(id)) || null
}

const mapStateToProps = (state, ownProps) => {
  const { studentId } = ownProps.match.params
  const student =
    studentId && state.students.length > 0
      ? getStudentById(state.students, studentId)
      : newStudent
  return {
    students: state.students,
    subjects: state.subjects,
    student,
  }
}

const mapDispatchToProps = {
  loadStudents,
  loadSubjects,
  saveStudent,
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageStudent)
