import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';  // Import createRoutesFromElements
import Registration from './Registration.jsx';
import Login from './login.jsx';
import Protected from './protected.jsx';
import Layout from './layout.jsx';
import Home from './home.jsx';
import Detection from './detection.jsx';
import AskQuestion from './askQuestion.jsx';
import Faqs from './faqs.jsx';
import Admin from './admin/Admin.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/admin" element={<Admin />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

       
        <Route path="/" element={<Protected><Layout /></Protected>}>
         
          <Route path="home" element={<Home />} />
          <Route path="detection" element={<Detection />} />
          <Route path="askQuestion" element={<AskQuestion />} />
          <Route path="faqs" element={<Faqs />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

