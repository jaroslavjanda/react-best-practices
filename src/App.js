// Libraries
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import * as routes from './routes'

// Components
import Auth from './components/Auth'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import BestPractices from './pages/BestPractices/BestPractices'
import Components from './pages/BestPractices/Components'
import ComponentDetail from './pages/BestPractices/Components/ComponentTemplate'
import Libraries from './pages/BestPractices/Libraries'
import Redux from './pages/BestPractices/Redux/ReduxPage'
import ReduxStudentsPage from './pages/BestPractices/Redux/StudentsPage/StudentsPage'
import ReduxStudentManagePage from './pages/BestPractices/Redux/StudentsPage/StudentForm/ManageStudent'

import LogIn from './pages/Login'
import NotFound from './pages/NotFound'
import Private from './pages/Private'

const App = () => {
  const auth = new Auth(useHistory())
  const isAuthenticated = auth.isAuthenticated()

  return (
    <>
      <GlobalStyles />
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
      <Layout auth={auth} isAuthenticated={isAuthenticated}>
        <Switch>
          <Route
            path={routes.HOMEPAGE}
            exact
            render={(_props) => (
              <Homepage
                isAuthenticated={isAuthenticated}
                auth={auth}
                {..._props}
              />
            )}
          />
          <Route
            path={routes.PRIVATE}
            render={() =>
              isAuthenticated ? <Private /> : <Redirect to={routes.HOMEPAGE} />
            }
          />
          <Route path={routes.BEST_PRACTICES} exact component={BestPractices} />
          <Route path={routes.COMPONENTS} exact component={Components} />
          <Route path={routes.COMPONENT_DETAIL} component={ComponentDetail} />
          <Route path={routes.LIBRARIES} component={Libraries} />
          <Route path={routes.REDUX} exact component={Redux} />
          <Route path={routes.REDUX_STUDENTS} component={ReduxStudentsPage} />
          <Route
            path={routes.REDUX_EDIT_STUDENT}
            component={ReduxStudentManagePage}
          />
          <Route
            path={routes.REDUX_STUDENT}
            component={ReduxStudentManagePage}
          />

          <Route
            path={routes.LOGIN}
            render={(_props) => <LogIn auth={auth} {..._props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </>
  )
}

export default App
