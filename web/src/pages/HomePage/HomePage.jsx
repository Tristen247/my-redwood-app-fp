//import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <>
        <ArticlesCell />
      </>
    </>
  )
}

export default HomePage
{
  /*
      My default route is named `home`, link to me with:
      `<Link to={routes.home()}>Home</Link>`
    */
}
