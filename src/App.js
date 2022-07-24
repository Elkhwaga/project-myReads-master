import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context';
import MainRoutes from './routers/Routes';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
