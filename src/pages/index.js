import { classes } from "istanbul-lib-coverage"
import * as React from "react"
import Layout from "../components/layout"
import { CssBaseLine, Typography, Button, Card, CardActions, CardContent, CardMedia, Container, Grid } from "@material-ui/core"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const IndexPage = () => {
  return (
    <Layout pageTitle="Start">
      <div className={classes.container}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Åre 2021 Moments
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Ögonblick från säsongen 2021 i Åre. En magisk vinter med mängder av snö, sol och mycket skidåkning. Precis som vi önskade.
        </Typography>
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
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs="12" sm="6" md="4">
              <Card className={classes.card}>
                <CardMedia
                  className={classes.CardMedia}
                  image="https://source.unsplash.com/random"
                  title="random unsplash image">
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Rubrik
                  </Typography>
                  <Typography>
                    Beskrivande text om bilden. Beskrivande text om bilden.
                  </Typography>
                  <CardActions>
                    <Button size="small" color="primary">Se bild</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
