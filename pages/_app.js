import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'; 
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