import React from "react";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import Layout from "../components/layout"
import Navigation from '../components/navigation';

export default (props) => {
    console.log(props);
    return (
        <div>
            <Navigation />
            <Img fluid={props.data.file.childImageSharp.fluid} alt='Imagen 7' />
        </div>
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