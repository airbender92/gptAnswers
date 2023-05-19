import * as React from 'react';
import Mxgraph from '@/components/Mxgraph'
import GraphWrapper from './components/GraphWrapper';
import GraphWrapper2 from './components/GraphWrapper2';

const About = (): JSX.Element => {
  return (
    <React.Fragment>
      <div id="graph"></div>
      <div id="graph2"></div>
      <Mxgraph containerId={'graph'}>
        <GraphWrapper />
      </Mxgraph>
      <Mxgraph containerId={'graph2'}>
        <GraphWrapper2 />
      </Mxgraph>
    </React.Fragment>
  )
}

export default About;