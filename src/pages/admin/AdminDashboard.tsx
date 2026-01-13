import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  FileText,
  Star,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/contexts/AuthContext";
import { getArticles, deleteArticle, Article } from "@/lib/articles";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
      return;
    }
    fetchArticles();
  }, [user, navigate]);

  const fetchArticles = async () => {
    try {
      const data = await getArticles(false);
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteArticle(deleteId);
      setArticles(articles.filter((a) => a.id !== deleteId));
      toast({
        title: "Article deleted",
        description: "The article has been permanently deleted.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete article.",
        variant: "destructive",
      });
    } finally {
      setDeleteId(null);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const publishedCount = articles.filter((a) => a.published).length;
  const draftCount = articles.filter((a) => !a.published).length;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">
              Admin <span className="text-gradient">Dashboard</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home size={16} />
                Portfolio
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Total Articles</p>
                  <p className="text-3xl font-bold">{articles.length}</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Eye className="text-green-500" size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Published</p>
                  <p className="text-3xl font-bold">{publishedCount}</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <EyeOff className="text-yellow-500" size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Drafts</p>
                  <p className="text-3xl font-bold">{draftCount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Articles</h2>
            <Link to="/admin/editor">
              <Button className="gap-2">
                <Plus size={18} />
                New Article
              </Button>
            </Link>
          </div>

          {/* Articles Table */}
          <div className="glass rounded-xl overflow-hidden">
            {loading ? (
              <div className="p-8 text-center">
                <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
              </div>
            ) : articles.length === 0 ? (
              <div className="p-12 text-center">
                <FileText className="mx-auto text-muted-foreground mb-4" size={48} />
                <p className="text-muted-foreground mb-4">No articles yet</p>
                <Link to="/admin/editor">
                  <Button className="gap-2">
                    <Plus size={18} />
                    Create your first article
                  </Button>
                </Link>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {article.featured && (
                            <Star className="text-yellow-500" size={14} />
                          )}
                          <span className="font-medium line-clamp-1 max-w-[300px]">
                            {article.title}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                          {article.category}
                        </span>
                      </TableCell>
                      <TableCell>
                        {article.published ? (
                          <span className="flex items-center gap-1 text-green-500 text-sm">
                            <Eye size={14} />
                            Published
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-yellow-500 text-sm">
                            <EyeOff size={14} />
                            Draft
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {formatDate(article.createdAt)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Link to={`/admin/editor/${article.id}`}>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit size={16} />
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                            onClick={() => setDeleteId(article.id || null)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </motion.div>
      </main>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent className="glass border-border">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Article</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the article.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;
