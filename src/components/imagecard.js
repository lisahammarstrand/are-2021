import React from 'react'
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core"
import useStyles from '../components/styles'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const ImageCard = ({ cardHeading, cardDescription, cardDate }) => {
  const data = useStaticQuery(graphql`
  {
    allContentfulImageCard {
      nodes {
        cardImage {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
  `
  )
  const image = getImage(data.allContentfulImageCard.nodes.cardImage)
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.CardMedia}>
        <GatsbyImage image={image} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {cardHeading}
        </Typography>
        <Typography>
          {cardDescription}
        </Typography>
        <Typography variant="caption">
          {cardDate}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default ImageCard