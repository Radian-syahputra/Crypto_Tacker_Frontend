import {create} from 'zustand'
import type { User } from '../types'


interface AuthState {
    user : User | null;
    isLoading : boolean

    setUser : (user : User) => void
    clearUser : () => void
    setLoading : (loading : boolean) => void
}

const useAuthStore = create<AuthState>((set) => ({
    user : null,
    isLoading : false,

    setUser : (user) => set({user}),
    clearUser : () => set({user : null}),
    setLoading : (loading) => set({isLoading : loading})
}))

export default useAuthStore