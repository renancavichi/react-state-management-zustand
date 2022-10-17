import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Persist from './pages/Persist'
import NotFound from './pages/NotFound';
import AuthProvider from './Providers/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/persist' element={<Persist />} />
        <Route path='*' element={<NotFound />} status={404} />
      </Routes>
    </AuthProvider>
   
  );
}

export default App;
