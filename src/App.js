import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Router';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
