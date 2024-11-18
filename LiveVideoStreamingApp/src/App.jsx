import './App.css'
import './index.css'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/home/index'
import RoomPage from './pages/home/room/index'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/room/:roomId" element={<RoomPage/>}/>
     </Routes>
    </>
  )
}

export default App
