import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectCatalog from "../components/ProjectCatalog";

export default function Projects() {
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

      {/* Nav Bar */}
      <NavBar />

      <main>
        {/* About */}
        <ProjectCatalog />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}