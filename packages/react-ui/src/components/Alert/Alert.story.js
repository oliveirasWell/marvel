import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Description,
  Props,
  Source,
  Title,
} from '@storybook/addon-docs/dist/blocks';
import { Alert } from './Alert';

storiesOf(`Alert|Alert`, module)
  .addParameters({
    component: Alert,
    docs: {
      disable: true,
      page: () => (
        <>
          <Title />
          <Description>
            The `Alert` component can receive the following props:
          </Description>
          <Props />
          <Title>Code snippets</Title>
          <Description>
            Here you can check the code snippet for the story.
          </Description>
          <Source
            code={`
              () => {
                <Alert/>
              }
            `}
          />
        </>
      ),
    },
  })
  .add('Alert', () => <Alert />);
