import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';  
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
import AdminProtected from './admin/adminProtected.jsx';
import CheckQuestion from './admin/checkQuestion.jsx';
import Loginregister from './loginregister.jsx';  
import Pneumonia from './phenemonia.jsx';  // ✅ Import Pneumonia Page
import Tuberculosis from './tuberculosis.jsx';  // ✅ Import Tuberculosis Page

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* ✅ Default Route - Pehle Loginregister Page Dikhaiyega */}
        <Route path="/" element={<Loginregister />} />

        {/* Public Routes */}
        <Route path="/Adminregistration" element={<AdminRegistration />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Protected Routes */}
        <Route path="/" element={<Protected><Layout /></Protected>}>
          <Route path="home" element={<Home />} />
          <Route path="detection" element={<Detection />} />
          <Route path="askQuestion" element={<AskQuestion />} />
          <Route path="faqs" element={<Faqs />} />
        </Route>

        <Route path="/" element={<AdminProtected><AdminLayout /></AdminProtected>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="checkquestion" element={<CheckQuestion />} />
        </Route>

        <Route path="/" element={<Protected><Layout /></Protected>}>
        <Route path="/pneumonia" element={<Pneumonia />} />
        <Route path="/tuberculosis" element={<Tuberculosis />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
