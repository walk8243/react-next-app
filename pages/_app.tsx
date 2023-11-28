import type { AppProps } from 'next/app'
import { useContext } from 'react'
import { ModeContext } from '../context/mode'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const mode = useContext(ModeContext)
  return (
    <ModeContext.Provider value={mode}>
      <Component {...pageProps} />
    </ModeContext.Provider>
  )
}

export default MyApp
