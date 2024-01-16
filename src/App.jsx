
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error'
import Qr from './pages/Qr';
import QrMenu from './pages/QrMenu';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/gardenmenu' element={<Layout />} >
          <Route index path='/gardenmenu' element={<Qr />} />
          <Route exact path='/gardenmenu/:id' element={<QrMenu />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


