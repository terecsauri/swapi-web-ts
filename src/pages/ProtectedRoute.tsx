/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  user: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user }) => {

  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
};
