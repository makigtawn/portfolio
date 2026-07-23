import { Routes, Route, Navigate } from "react-router-dom";
import { RadioSite } from "./pages/RadioSite";
import { NotFound } from "./pages/NotFound";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminProjects } from "./pages/admin/AdminProjects";
import { AdminProjectNew } from "./pages/admin/AdminProjectNew";
import { AdminMessages } from "./pages/admin/AdminMessages";
import { AdminContent } from "./pages/admin/AdminContent";
import { AdminLayout } from "./layout/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RadioSite />} />
      <Route path="/about" element={<Navigate to="/#log" replace />} />
      <Route path="/projects" element={<Navigate to="/#broadcasts" replace />} />
      <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/new" element={<AdminProjectNew />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="content" element={<AdminContent />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
