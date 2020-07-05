import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Menu } from '../../components/Menu';

const HomeContainer = styled.div`
  margin: ${props => props?.theme && props.theme.spacing(2)}px;
`;

const Home = () => (
  <HomeContainer>
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Typography variant="h2" id="title">
          Welcome to the Marvel comic explorer
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="subtitle2" id="span">
          Be my guest, explore some of classic marvel comics list, we provide
          information like cover, title, creators and characteres
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="subtitle2" id="span">
          Access one of the menu itens above
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Menu />
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="subtitle2" id="span">
          Any question do not be afraid to contact me at
          well.oliveira.snt@gmail.com
        </Typography>
      </Grid>
    </Grid>
  </HomeContainer>
);

export default Home;
