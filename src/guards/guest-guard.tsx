import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PropsTypes {
  children: ReactNode;
}

export default function GuestGuard({ children }: PropsTypes): JSX.Element {
  const user = {
    isAuthenticated: false,
    accessToken: "fjkljLHOsfkl34r797rhl",
  };

  if (user.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children ? <>{children}</> : <Outlet />;
}
