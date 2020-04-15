import React from "react";
import Img from "gatsby-image"


export default (props) => {
    return( 
        <div>
            <h1>{props.pageContext.name}</h1>
            <Img fluid={props.data.file.childImageSharp.fluid} alt='Imagen 7' />
        </div>
    )
}

 export const query = graphql`
 query($id : String) {
    file(id: {eq: $id}) {
      childImageSharp{
          fluid(maxWidth:1080){
              ...GatsbyImageSharpFluid
          }
      }
    }
  }
  `