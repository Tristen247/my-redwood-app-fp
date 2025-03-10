// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />

      <h1>About Page</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.jsx</code>
      </p>
      {/*
           My default route is named `about`, link to me with:
           `<Link to={routes.about()}>About</Link>`
        */}
    </>
  )
}

export default AboutPage
