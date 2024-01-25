import { Routes, Route } from 'react-router-dom';
import PantallaLogin from "./pages/PantallaLogin"

export default function App() {
  return (<div>
    <Routes>
      <Route path='/' element={<PantallaLogin/>}/>
    </Routes>
  </div>
  )
}