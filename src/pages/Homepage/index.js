import React, { useState, useEffect } from 'react'
import { H1, H3 } from '../../components/Typography'
import Layout from '../../components/Layout'
import { useApi } from '../../api/standart/useApi'
import { Loader } from '../../components/Loader'
import { getStudents } from "../../api/standart/students/studentApi"
import { ProfilePicture } from './styled'

const Homepage = ({ auth, isAuthenticated }) => {
  const { data: students, isLoading } = useApi(() => getStudents(), [
    'getStudents',
  ])

  const [data, setData] = useState()
  useEffect(() => {
    isAuthenticated
      ? auth.getProfile((profile, err) => {
          setData(profile)
        })
      : setData(null)
  }, [auth, isAuthenticated])

  return (
    <>
      <H1 textAlign="center">Best Practises</H1>
      <H3 textAlign="center">
        Welcome {data ? `back ${data.given_name}` : 'citizen'}
      </H3>
      {data && <ProfilePicture src={data.picture} alt="profile pic" />}
      <div style={{ paddingTop: '32px', textAlign: 'center' }}>
        {isLoading && <div>Fetching....</div>}
        {isLoading && <Loader />}
        {students && (
          <div>
            {students.data.map((item) => (
              <div key={item.name}>{item.name}</div>
            ))}
          </div>
        )}
        {!students && !isLoading && (
          <div>There is problem with fetching data</div>
        )}
      </div>
    </>
  )
}

export default Homepage
