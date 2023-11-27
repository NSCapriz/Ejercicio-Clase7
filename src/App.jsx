import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import producto from './assets/img/computadora.jpg'
import Navbar from './Components/Global/Navbar'
import Producto from './Components/Content/Productos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='container_fluid'>
        <div className="row justify-content-center align-items-center pt-4">
          <div className="col-md-4">
            <h1 className='text-center'>Productos</h1>
            <img src={producto} alt="Cpmputadora" className='img-fluid py-4 my-4 ms-5'/>
            <Producto nombre="Computadora Gamer" 
            descripcion="rocesador: Intel Core i9-12900KF de 16 núcleos, 5.2 GHz. / Gráficos: NVIDIA GeForce RTX 3090, 24 GB GDDR6. / RAM: 64 GB DDR4, 3200 MHz. / Almacenamiento: SSD NVMe de 2 TB, 15000 RPM. / Conectividad: Wi-Fi 802.11ac, 3 USB 2.0, 6 USB 3.0. / Fuente de Alimentación: 750W."
            precio="$120.000"
            codigo="12345"
            >
            </Producto>
          </div>
        </div>
      </div>
    </>
  )
}

export default App