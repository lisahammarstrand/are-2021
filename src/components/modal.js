import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles'
/* import { useStaticQuery, graphql } from 'gatsby' */
/* import { GatsbyImage, getImage } from 'gatsby-plugin-image' */
import ModalBody from './modalbody'

const SimpleModal = () => {

  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  /* const data = useStaticQuery(graphql`
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
  
    {
      data.allContentfulImageCard.edges.map((edge) => {
        const image = getImage(edge.node.cardImage)
        const body = (
        <div className={classes.paper}> 
            <GatsbyImage image={image} alt={edge.node.cardHeading} />
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
    } */

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>Se bild</Button>
      <Modal
        open={open}
        onClose={handleClose}
        arialabelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalBody />
      </Modal>
    </div>
  )

}

export default SimpleModal