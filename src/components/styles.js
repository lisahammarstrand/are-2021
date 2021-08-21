import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    marginRight: '20px'
  },
  buttons: {
    marginTop: '40px'
  },
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9 ratio
  },
  cardContent: {
    flexGrow: '1'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0'
  },
  paper: {
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: `2px solid #000`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: `translate(-50%, -50%)`
  }
}))
export default useStyles