import '../styles/globals.css'
import { BeaconWrapper } from '../context/TezosMoon.tsx'

function Application({ Component, pageProps }) {
  return (
    <BeaconWrapper>
      <Component {...pageProps} />
    </BeaconWrapper >
  )
}

export default Application