import * as React from 'react'
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="2007 Japan, Sibuya."
        src="../images/2007-11-15-travel.jpg"
      />
    </Layout>
  )
};

export default IndexPage
