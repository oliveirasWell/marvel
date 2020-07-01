import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { ComicImages } from '../../../components/ComicImages/ComicImages';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const ComicCard = ({
  title,
  imageSrc,
  authors,
  description,
  format,
  onClick,
  images,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title={title} />
      <CardMedia className={classes.media} image={imageSrc} title="cover" />
      <CardActions disableSpacing>
        <Button onClick={onClick} size="small">
          More Details
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Authors:</Typography>
          <Typography paragraph variant="caption">
            {authors}
          </Typography>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph variant="caption">
            {description}
          </Typography>
          <Typography paragraph>Format:</Typography>
          <Typography paragraph variant="caption">
            {format}
          </Typography>
          <Typography paragraph>Images:</Typography>
          <ComicImages comic={{ images }} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

ComicCard.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  authors: PropTypes.string,
  description: PropTypes.string,
  format: PropTypes.string,
};

export { ComicCard };
