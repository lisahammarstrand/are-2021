import { classes } from "istanbul-lib-coverage"
import * as React from "react"
import Layout from "../components/layout"
import { CssBaseLine, Typography, Button, Card, CardActions, CardContent, CardMedia, Container, Grid } from "@material-ui/core"
import Modal from '@material-ui/core/Modal'
import useStyles from '../components/styles'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import SimpleModal from "../components/modal"
/* import ImageCard from "../components/imagecard" */

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulImageCard(sort: {fields: cardDate, order: ASC}) {
      edges {
        node {
          cardImage {
            gatsbyImageData(layout: CONSTRAINED)
          }
          cardHeading
          cardDescription {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          cardDate
        }
      }
    }
  }
  `
  )

  const classes = useStyles()
  return (
    <Layout pageTitle="Start">
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Åre 2021
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Ögonblick från säsongen 2021 i Åre. En fantastisk vinter med mycket snö och fin åkning.
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Alla bilder
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Alla bilder vinter
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {data.allContentfulImageCard.edges.map((edge) => {
            const image = getImage(edge.node.cardImage)
            return (

              <Grid item key={edge} xs="12" sm="6" md="4">
                <Card className={classes.card}>
                  <CardMedia className={classes.CardMedia}>
                    <GatsbyImage image={image} alt={edge.node.cardHeading} />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {edge.node.cardHeading}
                    </Typography>
                    <Typography>
                      {edge.node.cardDescription.childMarkdownRemark.rawMarkdownBody}
                    </Typography>
                    <Typography variant="caption">
                      {edge.node.cardDate}
                    </Typography>
                    <CardActions>
                      <SimpleModal />
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
