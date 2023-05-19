import mxgraph from 'mxgraph';
import {handleChangeModel} from './handleChangeModel';

function createInstance(containerId: string) {

 const container = document.getElementById(containerId) as HTMLElement;
 if (!container) {
   throw new Error(`未找到ID为${containerId}的dom`);
 }
  
  const mx = mxgraph({
    mxBasePath: process.env.MX_BASE_PATH,
    mxImageBasePath: process.env.MX_IMAGE_BASE_PATH,
  });

  const { mxClient, mxGraph, mxUtils } = mx;

  if (!mxClient.isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    mxUtils.error('Browser is not supported!', 200, false);
  }
  
  const graph = new mxGraph(container);
  
  // 注册change model 方法
  if (!graph.handleChangeModel) {
    mxGraph.prototype.handleChangeModel = handleChangeModel;
  }
  return { graph, mx };
}

export { createInstance };