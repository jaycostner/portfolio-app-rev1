import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Masthead from '../components/masthead'
import AboutUs from '../components/aboutus'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Gr8Minds Digital</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

         <div></div>
      <Masthead />
      {/* <AboutUs /> */}
      </div>
  )
}

export default Home
