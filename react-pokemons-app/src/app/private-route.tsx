import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './services/authentication-service';

function PrivateRoute() {
  if (!isAuthenticated) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
