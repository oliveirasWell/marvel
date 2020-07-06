import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import { useComicById } from 'hooks/useComicById';
import { LoadingTernary } from 'components/LoadingTernary';
import { routes } from 'routes/routes';
import { ComicImages } from 'components/ComicImages';
import { ComicCreators } from './ComicCreators/ComicCreators';
import { ComicCharacters } from './ComicCharacters.js/ComicCharacters';

// TODO:FIXME - remove from grid or create a new div
const style = { padding: 16 };

const DetailImg = styled.img`
  max-width: 100%;
`;

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const { result: comic, error, loading } = useComicById({
    id,
  });

  useEffect(() => {
    if (error) {
      routes.NOT_FOUND.redirect(history);
    }
  }, [error, history]);

  return (
    <Grid spacing={0} container>
      <LoadingTernary loading={loading}>
        <Grid item xs={12} md={4}>
          <DetailImg
            src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
            alt="thumbnail"
          />
        </Grid>
        <Grid item container xs={12} md={8} spacing={1} style={style}>
          {comic?.title && (
            <Grid item xs={12} md={12}>
              <Typography variant="h4">{comic?.title}</Typography>
            </Grid>
          )}
          {comic?.description && (
            <Grid item xs={12} md={12}>
              <div>{comic?.description}</div>
            </Grid>
          )}
          {comic?.format && (
            <Grid item xs={12} md={12}>
              <div>{comic?.format}</div>
            </Grid>
          )}
          <Grid item xs={12} md={3}>
            <Typography variant="h6"> Creators </Typography>
            <ComicCreators comic={comic} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6"> Characters </Typography>
            <ComicCharacters comic={comic} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6"> Images </Typography>
            <ComicImages comic={comic} />
          </Grid>
        </Grid>
      </LoadingTernary>
      <Grid item xs={12} md={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export { Details };
