import { Routes, Route } from 'react-router-dom';
import PantallaLogin from "./pages/PantallaLogin";
import DashEjemplo from './pages/paginas_olga/DashPruebaAdm';
import PantallaZ from './pages/paginas_zamora/PantallaZ';
import PantallaM from './pages/paginas_marcos/PantallaM';
import PantallaRegistro from './pages/PantallaRegistro';
import PantallaAPregunta from './pages/PaginaAPregunta';
import PantallaManerasLogin from './pages/PantallaManerasLogin';
import InicioAdmin from './pages/paginas_admin/inicio_admin';
import SidebarAdmin from './components/componentes_admin/SidebarAdmin';
import SidebarUser from './components/SidebarUser';
import InicioCliente from './pages/paginas_cliente/Inicio_cliente';
import Nosotros from './components/componentes_marco/nosotros';
import AdministrarUsuarios from './pages/paginas_admin/Administrar_Usuarios';
import SidebarMecanico from './components/componentes_mecanico/SidebarMecanico';
import InicioMecanico from './pages/paginas_mecanico/InicioMecanico';
import PantallaPerfil from './pages/paginas_cliente/PantallaPerfil';
import EditarRegistro from './pages/paginas_admin/EditarRegistro';
import { useLocalStorage } from 'react-use'//ruta protegida
import ProtectedRoute from './components/utils/ProtectedRoute';//ruta protegida
import EditarRegistroMecanico from './pages/paginas_admin/EditarRegistroMecanico';

export default function App() {
  const [user] = useLocalStorage('user');//ruta protegida

  return (<div>
    <Routes>

      <Route path="/" element={<PantallaLogin />} />
      <Route element={<ProtectedRoute canActivate={user} />}>//ruta protegida
        <Route path="/registro" element={<PantallaRegistro />} />
      </Route>
      <Route path="/pregunta-de-seguridad" element={<PantallaAPregunta />} />
      <Route path="/maneras-de-iniciar-sesion" element={<PantallaManerasLogin />} />

      <Route path='/' element={<SidebarAdmin />}>
          <Route path="/administrador" element={<InicioAdmin />} />
          <Route path="/administrar-usuarios" element={<AdministrarUsuarios />} />
          <Route path="/editar-registro/:id" element={<EditarRegistro />} />
        
      </Route>

      <Route path='/' element={<SidebarMecanico />}>
          <Route path="/mecanico" element={<InicioMecanico />} />
          <Route path="/administrar-usuarios" element={<AdministrarUsuarios />} />
          <Route path="/editar-registro-mecanico/:id" element={<EditarRegistroMecanico />} />
      </Route>

      <Route path='/' element={<SidebarUser />}>
        <Route element={<ProtectedRoute canActivate={user} />}>//ruta protegida
          <Route path="/perfil" element={<PantallaPerfil />} />
          <Route path="/cliente" element={<InicioCliente />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Route>
      </Route>

      //Esta pantalla sera tu unica visualizacion de los componentes que haga cada quien
      //Pantalla de pruebas componentes de olga<Route path="/dashEj" element={<DashEjemplo />} />

      //Pantalla de pruebas componentes de Zamora <Route path="/pruebas-zamora" element={<PantallaZ />} />

      //Pantalla de pruebas componentes de marcos <Route path="/pruebas-marcos" element={<PantallaM />} />


      //Si necesitan vincular pantallas avisen
    </Routes>
  </div>
  )
}