import React from 'react'
import { useApi } from '../../../api/standart/useApi'
import { Loader } from '../../../components/Loader'
import { getStudents } from '../../../api/standart/students/studentApi'

const Fetching = () => {
  const { data: students, isLoading } = useApi(() => getStudents(), [
    'getStudents',
  ])
  return (
    <div>
      <div style={{ paddingTop: '32px' }}>
        {isLoading && <Loader />}
        {students && (
          <div>
            {students.data.map((item) => (
              <div key={item.name}>{item.name}</div>
            ))}
          </div>
        )}
        {!students && !isLoading && (
          <div>There is problem with fetching login</div>
        )}
      </div>
    </div>
  )
}

export default Fetching
