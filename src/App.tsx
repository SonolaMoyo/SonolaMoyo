import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogList from "./pages/blog/BlogList";
import ArticleView from "./pages/blog/ArticleView";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ArticleEditor from "./pages/admin/ArticleEditor";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<ArticleView />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/editor"
              element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/editor/:id"
              element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              }
            />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
