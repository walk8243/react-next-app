import { createContext, Dispatch } from "react"

export const ModeContext = createContext('light')
export const ModeDispatchContext = createContext({} as Dispatch<{ type: 'LIGHT' | 'DARK' }>)
