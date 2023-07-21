import * as React from 'react';
import Mxgraph from '@/components/Mxgraph'
import GraphWrapper from './components/GraphWrapper';
import GraphWrapper2 from './components/GraphWrapper2';
import GraphWrapper3 from './components/GraphWrapper3';
import GraphWrapper4 from './components/GraphWrapper4';

const About = (): JSX.Element => {
  return (
    <React.Fragment>
      <div id="graph"></div>
      <div id="graph2"></div>
      <div id="graph3"></div>
      <div id="graph4"></div>
      <Mxgraph containerId={'graph'}>
        <GraphWrapper />
      </Mxgraph>
      <Mxgraph containerId={'graph2'}>
        <GraphWrapper2 />
      </Mxgraph>
      <Mxgraph containerId={'graph3'}>
        <GraphWrapper3 />
      </Mxgraph>
      <Mxgraph containerId={'graph4'}>
        <GraphWrapper4 />
      </Mxgraph>
    </React.Fragment>
  )
}

export default About;