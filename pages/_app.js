import '../styles/globals.css'
import Header from '../components/Header'
import { TezosMoon } from '../context/TezosMoon'

function Application({ Component, pageProps }) {
  return (
    <TezosMoon>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </TezosMoon>
  )
}

export default Application