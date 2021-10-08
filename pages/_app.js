import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'; 
import AppContextProvider from '../context/AppContextProvider'

function Application({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div className="">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default Application