import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { setConfig, hot } from 'react-hot-loader';
import App from './App';

const HotApp = hot(module)(App);

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

let container = null;

document.addEventListener('DOMContentLoaded', function() {
  if (!container) {
    container = document.getElementById('root');
    const root = createRoot(container)
    root.render(<HotApp />
    );
  }
});
