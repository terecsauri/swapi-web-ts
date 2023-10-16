/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  auth: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ auth }) => {

  if (!auth) return <Navigate to="/login" replace />

  return <Outlet />
};
