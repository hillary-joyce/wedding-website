import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SmallImage = ({name}) => (
  <StaticQuery 
    query={graphql`
      query {
        arlington: file(relativePath: { eq: "arlington.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        escape: file(relativePath: { eq: "escape_room.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        georgetown: file(relativePath: { eq: "georgetown.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        great: file(relativePath: { eq: "great_falls.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mall: file(relativePath: { eq: "national_mall.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        smith: file(relativePath: { eq: "smithsonian_museum.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      console.log(name)
      return (<Img fluid={data[name].childImageSharp.fluid} />)
    }}
  />
)


export {SmallImage}