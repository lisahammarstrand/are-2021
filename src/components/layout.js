import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { CssBaseline, AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
  }`
  )
  const classes = useStyles()
  return (
    <>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to="/" className={classes.link}>
            <Grid container alignItems='center'>
              <PhotoCamera className={classes.icon} />
              <Typography variant="h6">
                Åre 2021
              </Typography>
            </Grid>
          </Link>
        </Toolbar>
      </AppBar>

      <main>
        {children}
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Vi gör det igen 2022
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Lisa H Produktion
        </Typography>
      </footer>
    </>
  )
}
export default Layout