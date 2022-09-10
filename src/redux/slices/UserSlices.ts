// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    isAuth: false,
    user: {
        login: '',
        password: ''
    },
    error: false
}

const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userAuth: (state, action) => {
            if (action.payload.login === 'test123' && action.payload.password === 'test123') {
                state.error = false
                state.isAuth = true
                state.user = action.payload
            } else {
                state.error = true
                state.isAuth = false
            }
        },
        userLogout: (state) => {
            state.error = false
            state.isAuth = false
            state.user = {
                login: '',
                password: ''
            }
        }
    },
})

export const { userAuth, userLogout } = userSlice.actions


export default userSlice.reducer