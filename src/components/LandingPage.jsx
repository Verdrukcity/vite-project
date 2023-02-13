import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div class="container-fluid">
      <div className='d-flex justify-content-center'>
        <button onClick={() => navigate("/home")}>
          ¡Click me!
        </button>
      </div>
    </div>
  )
}

export default LandingPage