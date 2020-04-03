import React from 'react'
import './main.css'
import { Link, useHistory } from 'react-router-dom'
import * as routes from '../../../../../routes'
import { Button, ButtonDiv } from '../../../../../components/Button'
// VERY BASIC EXAMPLE OF TABLE WITH DOWNLOADED STYLES
const StudentList = ({ students, history, onDelete }) => {
  const edit = (id) => {
    history.push(routes.getStudentEditRoute(id))
  }

  return (
    <div className="limiter">
      <div className="container-table100">
        <div className="wrap-table100">
          <div className="table">
            <div className="row header">
              <div className="cell">Full Name</div>
              <div className="cell">Subject</div>
              <div className="cell">Info</div>
              <div className="cell" />
            </div>

            {students.map((student) => {
              return (
                <div key={student.id} className="row">
                  <div
                    onClick={() => edit(student.id)}
                    className="cell"
                    data-title="Full Name"
                  >
                    {student.name}
                  </div>
                  <div
                    onClick={() => edit(student.id)}
                    className="cell"
                    data-title="Subject"
                  >
                    {student.favouriteSubject}
                  </div>
                  <div
                    onClick={() => edit(student.id)}
                    className="cell"
                    data-title="Info"
                  >
                    {student.info}
                  </div>
                  <div className="cell" data-title="Options">
                    <Button
                      style={{
                        backgroundColor: 'red',
                        marginRight: '16px',
                        color: 'white',
                      }}
                      onClick={() => onDelete(student)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentList
