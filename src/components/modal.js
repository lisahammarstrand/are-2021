import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { useState } from 'react'
import useStyles from './styles'
import { useStaticQuery } from 'gatsby'


export default function SimpleModal() {

  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Here is the modal description
      </p>
    </div>
  )

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        arialabelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </div>
  )
}