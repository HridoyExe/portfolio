import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <AppRoutes key="routes" />
        )}
      </AnimatePresence>
    </div>
  );
}


export default App;