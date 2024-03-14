import { Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "./layout";
import NotFound from "./sections/auth/not-found";
import GuestGuard from "./guards/guest-guard";
import AuthGuard from "./guards/auth-guard";
import Authentication from "./pages/auth-page";
import Home from "./pages/home";
import BlogDetails from "./pages/blog-details";
import NewBlog from "./pages/new-blog";

function App() {
  return (
    <Routes>
      <Route
        path="sign-up"
        element={
          <MainLayout>
            <GuestGuard>
              <Authentication />
            </GuestGuard>
          </MainLayout>
        }
      />
      <Route
        path="login"
        element={
          <MainLayout>
            <GuestGuard>
              <Authentication />
            </GuestGuard>
          </MainLayout>
        }
      />

      <Route
        path="/"
        element={
          <MainLayout>
            <GuestGuard>
              <Outlet />
            </GuestGuard>
          </MainLayout>
        }
      >
        <Route index element={<Home />} />
        <Route path=":postId" element={<BlogDetails />} />
      </Route>

      <Route
        path="new-blog"
        element={
          <AuthGuard>
            <NewBlog />
          </AuthGuard>
        }
      />

      <Route
        path="*"
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
