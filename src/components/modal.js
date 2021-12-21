import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { Button } from '@material-ui/core'
import useStyles from './styles'
import ModalBody from './modalbody'

const SimpleModal = () => {

  const classes = useStyles()
  const [open, setOpen] = useState()
  const [currentImage, setCurrentImage] = useState(0)

  const handleOpen = useCallback(({ index }) => {
    setOpen(true)
    setCurrentImage(index)
  }, [])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        size="small"
        color="primary"
        onClick={handleOpen}>
        Se bild
      </Button>
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