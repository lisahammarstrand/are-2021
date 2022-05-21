import React from 'react'
import { Typography } from '@material-ui/core'

import useStyles from './styles'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

/* How do you get only one image (and the right image) in each modal */
const ModalBody = () => {

  const data = useStaticQuery(graphql`
  {
    allContentfulImageCard(sort: {fields: cardDate, order: ASC}) {
      edges {
        node {
          cardImage {
            gatsbyImageData(layout: CONSTRAINED)
            id
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
    <div>
      {
        data.allContentfulImageCard.edges.map((edge) => {
          const image = getImage(edge.node.cardImage)
          return (
            <div key={edge} className={classes.paper}>
              <GatsbyImage
                image={image}
                alt={edge.node.cardHeading}
              />
              <Typography>
                {edge.node.cardHeading}
              </Typography>
              <Typography variant="caption">
                {edge.node.cardDate}
              </Typography>
            </div>
          )
        }
        )
      }
    </div>
  )
}

export default ModalBody