import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./providers/auth/authProvider"; 
import Login from './components/pages/auth/Login/login';
import Signup from "./components/pages/auth/Signup/signup";
import HomePage from './components/homePage';
import Profile from "./components/pages/profile/profile";
import Materials from './components/pages/materials/materials';
import HtmlMaterials from './components/pages/materials/html/HtmlMaterials';
import HtmlTutorial from "./components/pages/tutorials/htmlTutorials/htmlTutorials";
import CssMaterials from './components/pages/materials/css/CssMaterials';
import JsMaterials from "./components/pages/materials/javascript/JavaScript";
import PythonMaterials from "./components/pages/materials/python/python";
import CppMaterials from "./components/pages/materials/cpp/cpp";
import DockerMaterials from "./components/pages/materials/docker/docker";
import UserListPage from "./components/pages/adminPage/UserListPage";
import Ranking from "./components/pages/ranking/ranking";


const ProtectedRoute = ({ element }) => {
  const { currentUser } = useContext(AuthContext);  

  if (!currentUser) {
    return <Navigate to="/Login" replace />;
  }

  return element;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            
            <Route path='/materials' element={<ProtectedRoute element={<Materials />} />} />
            <Route path='/materials/html' element={<ProtectedRoute element={<HtmlMaterials />} />} />
            <Route path='/materials/css' element={<ProtectedRoute element={<CssMaterials />} />} />
            <Route path='/materials/javascript' element={<ProtectedRoute element={<JsMaterials />} />} />
            <Route path='/materials/python' element={<ProtectedRoute element={<PythonMaterials />} />} />
            <Route path='/materials/cpp' element={<ProtectedRoute element={<CppMaterials />} />} />
            <Route path='/materials/docker' element={<ProtectedRoute element={<DockerMaterials />} />} />

            <Route path='/tutorials/html/:lessonId' element={<ProtectedRoute element={<HtmlTutorial />} />} />
            

            <Route path='/profile' element={<ProtectedRoute element={<Profile />} />} />
            <Route path='/users' element={<ProtectedRoute element={<UserListPage />} />} />
            <Route path='/ranking' element={<ProtectedRoute element={<Ranking/>} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};


export default App;