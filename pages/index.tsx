import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Navbar'
import WelcomeSection from '../components/Sections/WelcomeSection'

const Home: NextPage = () => {
  return (
    <>
    <div>
      <Header/>
      <WelcomeSection/>
    </div>
    </>
  )
}

export default Home
