/* eslint no-console: 0 */
import React from 'react';
import * as Sentry from '@sentry/browser';

const style = { textAlign: 'center' };

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    Sentry.captureMessage(error);
    console.log('Error Catch');
    console.log(error);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const sadFaceEmoji = `:'(`;

    const { state, props } = this;

    if (state.hasError) {
      console.log('hasError');

      return (
        <div style={style}>
          <h1>{sadFaceEmoji}</h1>
          <br />
          <h1>Algum Erro Aconteceu, estamos tristes</h1>
          <a href="/">Volte aqui</a>
        </div>
      );
    }

    return props.children;
  }
}

export { ErrorBoundary };
