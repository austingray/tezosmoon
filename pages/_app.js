import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'; 
import AppContextProvider from '../context/AppContextProvider'
import Content from '../components/Content'

function Application({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div className="">
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default Application