import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Welcome from '../components/landing/Welcome'

const Home: NextPage = () => {
  return (
    <>
    <div>
      <Header/>
      <Welcome/>
    </div>
    </>
  )
}

export default Home
