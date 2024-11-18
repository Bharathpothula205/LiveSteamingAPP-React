import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const index = () => {
  const [roomCode, setRoomCode] = useState("")
  const navigate=useNavigate() ;
  const handleFormsubmit=(ev)=>{
    ev.preventDefault();
   navigate(`/room/${roomCode}`);
  }
  return (
    <div className="Home-Page">
      <form onSubmit={handleFormsubmit} className="form">
        <div className='Room'>
            <label>Enter Room Card:</label>
            <input value={roomCode} onChange={(e)=> setRoomCode(e.target.value)} type="text" required placeholder="Enter Room Code" />
            <button type="submit" className='but'>Enter Room</button>
        </div>
      </form>
    </div>
  )
}

export default index
