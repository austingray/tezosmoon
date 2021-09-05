import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'; 
import AppContextProvider from '../context/AppContextProvider'

function Application({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default Application