import React from 'react';
import Typography from '@material-ui/core/Typography';

const style = { textAlign: 'left', margin: 10 };
const style1 = { backgroundColor: '#F0131E', textAlign: 'left' };
const style2 = { textAlign: 'left', margin: `16px 0px 16px 0px` };

const NotFound = () => {
  const style3 = { textDecoration: 'none' };

  return (
    <div style={style}>
      <div style={style1}>
        <Typography variant="h1" color="secondary">
          404
        </Typography>
      </div>
      <br />
      <div style={style2}>
        <Typography variant="h3">Ainda nada aqui, :(</Typography>
        <Typography variant="h3">talvez em breve, mas não agora</Typography>
      </div>
      <div style={style2}>
        <a href="./" style={style3}>
          Volte aqui
        </a>
      </div>
    </div>
  );
};

export default NotFound;
