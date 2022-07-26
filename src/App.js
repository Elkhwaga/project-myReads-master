import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context';

import MainRoutes from './routes/routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
