import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'



const init = () => {
   const user = JSON.parse(localStorage.getItem('user'))
   return {
    logged: !!user,
    user: user
   }
}
export const AuthProvider = ({children}) => {
  const [state, dispatch ] = useReducer(authReducer, {}, init)

  const login = ( name = '') => {
    const action = {
        type: types.login,
        payload: {
            name,
            id: 'ABC'
        }
    }
    localStorage.setItem('user', JSON.stringify(action.payload))
    dispatch(action)

  }
  const logout = () => {
    localStorage.removeItem('user')
    const action = {
        type: types.logout,
    }
    dispatch(action)

  }
  return (
    <AuthContext.Provider value={{login, logout, ...state}}>{children}</AuthContext.Provider>
  )
}
