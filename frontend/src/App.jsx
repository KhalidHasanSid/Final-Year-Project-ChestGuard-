import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';  // Import createRoutesFromElements
import Registration from './Registration.jsx';
import Login from './Login.jsx';
import Protected from './protected.jsx';
import Layout from './layout.jsx';
import Home from './home.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        {/* Layout is used for protected routes */}
        <Route path="/" element={<Protected><Layout /></Protected>}>
          {/* Protected route for /home */}
          <Route path="home" element={<Home />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

