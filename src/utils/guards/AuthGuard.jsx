import React from 'react'
import { Navigate } from 'react-router-dom'
import { LOGIN_PATH } from '../routeConstants'

const AuthGuard = (element) => {
   // const isAuthorised = useAppSelector(selectIsAuthorised);

   //return isAuthorised ? element : <Navigate to={LOGIN_PATH} replace />
   return <Navigate to={LOGIN_PATH} replace />
}

export default AuthGuard