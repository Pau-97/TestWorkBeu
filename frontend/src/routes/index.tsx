import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '@views'



const AllRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </>
  )
}

export default AllRoutes
