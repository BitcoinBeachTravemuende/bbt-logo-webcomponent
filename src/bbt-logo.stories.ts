import type { Meta, StoryObj } from '@storybook/web-components';
import { type Properties as LogoProps} from './bbt-logo';
import './bbt-logo';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta = {
  title: 'bbt-loogo',
  component: 'bbt-logo',
  render: ({size, fill, stroke}) => html`<bbt-logo size=${ifDefined(size)} stroke=${ifDefined(stroke)} fill=${ifDefined(fill)} />`,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'string' },
    fill: { control: 'color' },
    stroke: { control: 'color' },
  },
} satisfies Meta<LogoProps>;

export default meta;
type Story = StoryObj<LogoProps>;

export const Basic: Story = {  
  parameters: {
    layout: 'centered',
}}

export const Dark: Story = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    fill: 'black',
    stroke: 'white',
  }, 
};

export const Custom: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    size: '300px',
    fill: 'white',
    stroke: 'black',
  }, 
};
