import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HomePage from './Pages/HomePage'
import CreateUser from './Pages/CreateUser';
import AddTask from './Pages/AddTask';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return <>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/add' element={<AddTask></AddTask>}></Route>
        <Route path='/createUser' element={<CreateUser></CreateUser>}></Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>

  </>
}

export default App



