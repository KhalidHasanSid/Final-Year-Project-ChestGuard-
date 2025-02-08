import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';  // Import createRoutesFromElements
import Registration from './Registration.jsx';
import Login from './login.jsx';
import Protected from './protected.jsx';
import Layout from './layout.jsx';
import Home from './home.jsx';
import Detection from './detection.jsx';
import AskQuestion from './askQuestion.jsx';
import Faqs from './faqs.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import AdminRegistration from './admin/adminRegistration.jsx';
import AdminLogin from './admin/AdminLogin.jsx';
import AdminLayout from './admin/AdminLayout.jsx';
import ForgetPassword from './forgetPassword.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/Adminregistration" element={<AdminRegistration/>} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        

        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

       
        <Route path="/" element={<Protected><Layout /></Protected>}>
         
          <Route path="home" element={<Home />} />
          <Route path="detection" element={<Detection />} />
          <Route path="askQuestion" element={<AskQuestion />} />
          <Route path="faqs" element={<Faqs />} />
        </Route>

        <Route path="/" element={<Protected><AdminLayout /></Protected>}>
         
          <Route path="dashboard" element={<AdminDashboard />} />
          
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

