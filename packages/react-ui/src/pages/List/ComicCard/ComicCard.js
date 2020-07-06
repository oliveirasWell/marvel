import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import {
  Card as MuiCard,
  IconButton as IconButtonMui,
  CardContent as CardContentMui,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ComicImages } from 'components/ComicImages';

const IconButtonStyled = styled(({ expandedStyled, ...props }) => (
  <IconButtonMui {...props} />
))`
  && {
    margin-left: auto;
    transform: ${({ expandedStyled }) =>
      expandedStyled ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: ${({ theme }) =>
      theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      })};
  }
`;

const Card = styled(MuiCard)`
  margin: ${props => props?.theme && props.theme.spacing(1)}px;
`;

const CardContent = styled(CardContentMui)`
  && {
    padding: 0;
  }
`;

const Title = styled(Typography)`
  && {
    font-weight: 600;
    color: #fff;
    text-shadow: 1px 1px #000;
    align-self: flex-end;
    max-height: 100%;
    text-align: right;
  }
`;

const TitleImage = styled.div`
  ${({ imageSrc }) => imageSrc && `background: url(${imageSrc})`};
  min-height: 500px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  word-break: break-word;
`;

const TitleImageGradient = styled.div`
  padding: 16px;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const ComicCard = React.memo(
  ({ title, imageSrc, authors, description, format, onClick, images }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Card variant="outlined">
        <CardContent>
          <StylesProvider injectFirst>
            <TitleImage imageSrc={imageSrc}>
              <TitleImageGradient>
                <Title variant="h4" component="div" onClick={onClick}>
                  {title}
                </Title>
              </TitleImageGradient>
            </TitleImage>
          </StylesProvider>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={onClick} size="small">
            More Details
          </Button>
          <IconButtonStyled
            expandedStyled={!!expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButtonStyled>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContentMui>
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
          </CardContentMui>
        </Collapse>
      </Card>
    );
  }
);

ComicCard.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  authors: PropTypes.string,
  description: PropTypes.string,
  format: PropTypes.string,
};

export { ComicCard };
