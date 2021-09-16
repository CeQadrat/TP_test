import React from 'react';
import { Meta } from '@storybook/preact';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta;

export const Base = (): React.JSX.Element => <Button>Button</Button>;
