import React from 'react';
import { Section, Paragraph, InlineCode, Header, Table } from '../../components/Description';
import Code from '../../Code';

import Source from '!!raw!./App';
import App from './App';

export default {
  name: 'Draggable Momentum',
  description: () => (
    <div>
      <Section>
        <Paragraph>Layers can have momentum behavior at the end of drag events.</Paragraph>
        <Code>
{`<Layer
  draggable={true}
  draggableProps={{
    momentum: true,
  }}
/>`}
        </Code>
      </Section>
      <Section>
        <Header>Bouncy drag constraints</Header>
        <Paragraph>Drag constraints combined with momentum can emulate scroll, paging, and other behaviors.</Paragraph>
        <Paragraph>Setting a DragConstraint's type to <InlineCode>bounce</InlineCode> will allow the layer to overshoot and act as a spring.</Paragraph>
        <Code>
{`<Layer
  draggable={true}
  draggableProps={{
    constraintX: DragConstraint({ min: 0, max: 100, type: 'bounce' }),
    momentum: true,
  }}
/>`}
        </Code>
        <Paragraph>Fling the example layer against the constraints to see the behavior. The vertical constraint is a hard constraint while the side constraints have type <InlineCode>bounce</InlineCode>.</Paragraph>
      </Section>
    </div>
  ),
  App,
  Source,
};