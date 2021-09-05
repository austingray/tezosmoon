import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { TezosMoon } from '../context/TezosMoon'

function Application({ Component, pageProps }) {
  return (
    <TezosMoon>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </TezosMoon>
  )
}

export default Application