import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>William - ML and Data Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="William Marstrand" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="I am a ML and data engineer." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="William - ML and Data Engineer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">William - ML and Data Engineer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="William - ML and Data Engineer"/>
        {/* <meta data-rh="true" property="og:image" content="/images/....png"/> */}
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
        <Projects />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;