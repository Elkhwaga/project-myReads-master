import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context';

import Footer from './components/Footer';
import Home from './pages/Home';
import MainRoutes from './routes/routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Home />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
