
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
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
import Nosotros from './components/componentes_marco/nosotros';
import AdministrarUsuarios from './pages/paginas_admin/Administrar_Usuarios';
import SidebarMecanico from './components/componentes_mecanico/SidebarMecanico';
import InicioMecanico from './pages/paginas_mecanico/InicioMecanico';
import EditarRegistro from './pages/paginas_admin/EditarRegistro';
import ProtectedRoute from './components/protectedRoutes';
// Crear el enrutador


export default function App() {
  return (
    
      <Routes>
  
        <Route path="/" element={<PantallaLogin />} />
        <Route path="/registro" element={<ProtectedRoute element={<PantallaRegistro />} path="/registro" requiredRoles={["admin"]}/> }/>
        <Route path="/pregunta-de-seguridad" element={<PantallaAPregunta />} />
        <Route path="/maneras-de-iniciar-sesion" element={<PantallaManerasLogin />} />
  
        <Route path='/' element={<SidebarAdmin />}>
        <Route path="/administrador" element={<ProtectedRoute element={<InicioAdmin />} path="/administrador" requiredRoles={["admin"]}/> }/>
        <Route path="/administrar-usuarios" element={<ProtectedRoute element={<AdministrarUsuarios />} path="/administrar-usuarios" requiredRoles={["admin"]}/> }/>
        <Route path="/editar-registro/:id" element={<ProtectedRoute element={<EditarRegistro />} path="/editar-registro/:id" requiredRoles={["admin"]}/> }/> 
        </Route>
  
        <Route path='/' element={<SidebarMecanico />}>
        <Route path="/mecanico" element={<ProtectedRoute element={<InicioMecanico />} path="/mecanico" requiredRoles={["mecanico"]}/> }/>
        <Route path="/administrar-usuarios" element={<ProtectedRoute element={<AdministrarUsuarios />} path="/administrar-usuarios" requiredRoles={["mecanico"]}/> }/>
        </Route>
  
        <Route path='/' element={<SidebarUser />}>
          <Route path="/nosotros" element={<Nosotros />} />
        </Route>
  
  
        //Esta pantalla sera tu unica visualizacion de los componentes que haga cada quien
        //Pantalla de pruebas componentes de olga<Route path="/dashEj" element={<DashEjemplo />} />
  
        //Pantalla de pruebas componentes de Zamora <Route path="/pruebas-zamora" element={<PantallaZ />} />
  
        //Pantalla de pruebas componentes de marcos <Route path="/pruebas-marcos" element={<PantallaM />} />
  
  
        //Si necesitan vincular pantallas avisen
      </Routes> 
  )
}

