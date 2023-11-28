import type { AppProps } from 'next/app'
import { useReducer } from 'react'
import { ModeContext, ModeDispatchContext } from '../context/mode'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [ mode, dispatch ] = useReducer(modeReducer, 'light')
  return (
    <ModeContext.Provider value={mode}>
      <ModeDispatchContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </ModeDispatchContext.Provider>
    </ModeContext.Provider>
  )
}

const modeReducer = (mode: string, action: { type: string }) => {
  console.log('modeReducer:', mode, action);
  switch (action.type) {
    case 'DARK':
      return 'dark'
    case 'LIGHT':
      return 'light'
    default:
      throw Error('Unexpected action: ' + action.type)
  }
}

export default MyApp
