import * as React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'mobx-react'
import stores from '@/stores'
import Home from './pages/Home';
import About from './pages/About';

const App = (): JSX.Element => {
  return (
    <Provider {...stores}>
      <Router>
        <Routes>
          <Route caseSensitive={true} path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </Provider>

  )
}

export default App;