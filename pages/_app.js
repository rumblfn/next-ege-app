import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const AppTop = styled.div`
  flex-grow: 1;
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ege app</title>
        <meta name="description" content="An application for preparing for the Unified State Exam. Add your articles and solve tasks. Get points and keep track of your rating"/>
      </Head>
      <SessionProvider session={pageProps.session}>
        <App>
          <AppTop>
            <Header/>
            <Component {...pageProps} />
          </AppTop>
          <Footer />
        </App>
      </SessionProvider>
    </>
  )
}

export default MyApp
