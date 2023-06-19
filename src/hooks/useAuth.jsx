import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // if (!localStorage.getItem('uswms-login')) {
  //   return <Navigate to="/signin" replace />;
  // }
  return children;
};

const SupervisorProtectedRoute = ({ children }) => {
  // const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  // if (userInfo && userInfo["userType"] !== 'supervisor') {
  //   return <Navigate to="/collector" replace />;
  // }
  return children;
};

const AdminProtectedRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (userInfo && userInfo["userType"] !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
};

export { ProtectedRoute, SupervisorProtectedRoute, AdminProtectedRoute };