import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    marginRight: '16px'
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
    width: 600,
    height: `auto`,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid #000`,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(4, 4, 3),
    transform: `translate(-50%, -50%)`,
  },
  link: {
    textDecoration: `none`,
    color: `white`,
    transition: `transform .2s`,
    '&:hover': {
      transform: `scale(1.1)`,
    }
  }
}))
export default useStyles