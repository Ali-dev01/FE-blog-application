import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PropsTypes {
  children: ReactNode;
}

export default function AuthGuard({ children }: PropsTypes): JSX.Element {
  const user = {
    isAuthenticated: false,
    accessToken: "fjkljLHOsfkl34r797rhl",
  };

  if (!user.isAuthenticated) {
    return <Navigate to="/sign-up" />;
  }

  return children ? <>{children}</> : <Outlet />;
}
