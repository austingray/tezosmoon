import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'; 
import AppContextProvider from '../context/AppContextProvider'
import ContainerAuthLuckyPenny from '../components/containers/ContainerAuthLuckyPenny'

function Application({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div className="">
        <Header />
        <ContainerAuthLuckyPenny>
          <Component {...pageProps} />
        </ContainerAuthLuckyPenny>
        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default Application