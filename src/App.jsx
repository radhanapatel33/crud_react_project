import './App.css'
import { Routes, Route } from 'react-router'
import DeletePage from './component/DeletePage'
import HomeNav from './component/HomeNav'
import HomePage from './component/HomePage';
import CreatePage from './component/CreatePage'
import ReadPage from './component/ReadPage'
import UpdatePage from './component/UpdatePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeNav />}>
          <Route index element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/update/:id' element={<UpdatePage />} />
          <Route path='/read/:id' element={<ReadPage />} />
          <Route path='/delete/:id' element={<DeletePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;

