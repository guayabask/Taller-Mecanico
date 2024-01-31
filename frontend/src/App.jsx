import { Routes, Route } from 'react-router-dom';
import PantallaLogin from "./pages/PantallaLogin";
import NavbarAdmin from './components/NavbarAdmin';
import PantallaPerfil from './pages/PantallaPerfil';
import DashEjemplo from './pages/paginas_olga/DashPruebaAdm';
import PantallaZ from './pages/paginas_zamora/PantallaZ';
import PantallaM from './pages/paginas_marcos/PantallaM';

export default function App() {
  return (<div>
    <Routes>
      <Route path='/' element={<NavbarAdmin/>}>
        <Route path="/login" element={<PantallaLogin/>}/>
        <Route path="/perfil" element={<PantallaPerfil/>}/>
      </Route>

      //Esta pantalla sera tu unica visualizacion de los componentes que haga cada quien
      //Pantalla de pruebas componentes de olga<Route path="/dashEj" element={<DashEjemplo/>}/>

      //Pantalla de pruebas componentes de Zamora <Route path="/pruebas-zamora" element={<PantallaZ/>}/>

      //Pantalla de pruebas componentes de marcos <Route path="/pruebas-marcos" element={<PantallaM/>}/>


      //Si necesitan vincular pantallas avisen
    </Routes>
  </div>
  )
}