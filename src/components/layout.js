import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
import { classes } from 'istanbul-lib-coverage'
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
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">
            Åre 2021 Moments
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        {children}
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Här kommer relevant footer info.
        </Typography>
      </footer>
    </>
  )
}
export default Layout