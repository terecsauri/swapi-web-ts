/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import { Login } from './Login';

interface ProtectedRouteProps {
  user: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user }) => {

  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
};
