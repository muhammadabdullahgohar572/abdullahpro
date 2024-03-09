import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './page/Home'
// import Feature from './page/Feature'

function App() {
  

  return (
    <>
<Routes>
<Route path='/'>
<Route index element={<Home/>}/>
{/* <Route path='features'  element={<Feature/>}/> */}
</Route>
</Routes>
   
    </>
  )
}

export default App
