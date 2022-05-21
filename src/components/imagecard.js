import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core"
import useStyles from '../components/styles'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const ImageCard = ({ cardImage, alt, cardHeading, cardDescription, cardDate }) => {
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
        {/* Commented out CardActions and button here since also implemented in Index file along with Modal}
        {/*  <CardActions> */}
        {/*  <Button size="small" color="primary">Se bild</Button> */}
        {/*  </CardActions> */}
        <Typography variant="caption">
          {cardDate}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default ImageCard