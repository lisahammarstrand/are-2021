import React from "react";
import Gallery from 'react-photo-gallery'
import { Container, Grid } from '@material-ui/core'

import useStyles from '../components/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const ImageGallery = () => {

  const data = useStaticQuery(graphql`
  {
    allContentfulImageCard(sort: {fields: cardDate, order: ASC}) {
      edges {
        node {
          cardImage {
            gatsbyImageData(layout: CONSTRAINED)
          }
          cardHeading
          cardDate
        }
      }
    }
  }
  `
  )
  const classes = useStyles()

  return (
    <Layout>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {data.allContentfulImageCard.edges.map((edge) => {
            const image = getImage(edge.node.cardImage)
            return (
              <Grid item key={edge} xs="12" sm="6" md="4">
                {/*  <Gallery direction={"column"}> */}
                <GatsbyImage image={image} alt={edge.node.cardHeading} />
                {/*  </Gallery> */}
              </Grid>
            )
          }
          )}
        </Grid>
      </Container>
    </Layout>
  )
}
export default ImageGallery