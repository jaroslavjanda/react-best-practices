import React from 'react'
import TextInput from '../../../../../components/Inputs/TextInput'
import SelectInput from '../../../../../components/Inputs/SelectInput'

const StudentForm = ({
  student,
  subjects,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <div style={{ margin: '0px 30rem', textAlign: 'left' }}>
      <form onSubmit={onSave}>
        <h2 style={{ textAlign: 'center' }}>
          {student.id ? 'Edit' : 'Add'} Student
        </h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        <TextInput
          name="name"
          label="Name"
          value={student.name}
          onChange={onChange}
          error={errors.name}
        />

        <SelectInput
          name="favouriteSubject"
          label="Favourite Subject"
          value={student.favouriteSubject || ''}
          defaultOption="Select Favourite Subject"
          options={subjects.map((subject) => ({
            value: subject.id,
            text: subject.name,
          }))}
          onChange={onChange}
          error={errors.favouriteSubject}
        />

        <TextInput
          name="info"
          label="More Information"
          value={student.info}
          onChange={onChange}
          error={errors.info}
        />

        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  )
}

export default StudentForm
