import * as React from 'react';
import Mxgraph from '@/components/Mxgraph'
import GraphWrapper from './components/GraphWrapper';

const About = (): JSX.Element => {
  return (
    <React.Fragment>
    <div id="graph"></div>
      <Mxgraph containerId={'graph'}>
        <GraphWrapper />
      </Mxgraph>
    </React.Fragment>
  )
}

export default About;