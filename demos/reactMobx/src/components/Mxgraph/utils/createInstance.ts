import mxgraph from 'mxgraph';

function createInstance(containerId: string) {

 const container = document.getElementById(containerId) as HTMLElement;
 if (!container) {
   throw new Error(`未找到ID为${containerId}的dom`);
 }
  
  const mx = mxgraph({
    mxBasePath: process.env.MX_BASE_PATH,
    mxImageBasePath: process.env.MX_IMAGE_BASE_PATH,
  });

  const { mxClient, mxGraph } = mx;

  if (!mxClient.isBrowserSupported()) {
    throw new Error('Sorry, your browser is not supported')
  }
  
  const graph =  new mxGraph(container);

  return graph;
}

export { createInstance };