import React, { Suspense } from 'react';
import DashboardLoader from './components/DashboardLoader';
import { RootRouter } from './routes';

const App = React.memo(() => {
  return (
    <Suspense fallback={<DashboardLoader />}>
      <RootRouter />
    </Suspense>
  );
});

export default App;
