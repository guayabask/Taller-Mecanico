import { Routes, Route } from 'react-router-dom';
import PantallaLogin from "./pages/PantallaLogin";
import NavbarAdmin from './components/NavbarAdmin';
import PantallaPerfil from './pages/PantallaPerfil';

export default function App() {
  return (<div>
    <Routes>
      <Route path='/' element={<NavbarAdmin/>}>
        <Route path="/login" element={<PantallaLogin/>}/>
        <Route path="/perfil" element={<PantallaPerfil/>}/>
      </Route>
    </Routes>
  </div>
  )
}