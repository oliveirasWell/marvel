import { makeStyles } from '@material-ui/styles';

export const useAppStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    bottom: '0',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));
