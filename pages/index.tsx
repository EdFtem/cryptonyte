import type { NextPage } from 'next'
import useEffect from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Navbar'
import WelcomeSection from '../components/Sections/WelcomeSection'
import { useMoralis } from 'react-moralis'
import MainPage from '../pages/MainPage'

const Home: NextPage = () => {
  const { isAuthenticated } = useMoralis();

  if(isAuthenticated){
    return <MainPage/>
  }

  return (
    <div className='bg-black'>
      <Header/>
      <WelcomeSection/>
    </div>  
  )
}

export default Home
