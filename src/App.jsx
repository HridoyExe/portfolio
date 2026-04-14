import React from 'react';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import SystemConsole from './components/SystemConsole';

function App() {


  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <AppRoutes key="routes" />
      </AnimatePresence>
      <SystemConsole />
    </div>
  );
}


export default App;