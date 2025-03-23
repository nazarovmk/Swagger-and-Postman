import { Navigate } from "react-router-dom";

function ProtectedRouter({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRouter;
