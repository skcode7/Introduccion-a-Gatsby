import React from "react";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout"

export default (props) => {
    console.log(props);
    return (
        <Layout>
            <h3>Home</h3>
            <Link to='/about'>Acerca de</Link>
            <Img fluid={props.data.file.childImageSharp.fluid} alt='Imagen 7' />
        </Layout>
    )
}

export const query = graphql` 
query {
    file(id: {eq: "d81b5504-d7e2-59d4-8a0f-c7c27d936d9c"}) {
      childImageSharp{
          fluid(maxWidth:1080){
              ...GatsbyImageSharpFluid
          }
      }
    }
  }
  `