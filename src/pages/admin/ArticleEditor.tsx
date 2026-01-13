import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Save,
  Eye,
  ArrowLeft,
  Image as ImageIcon,
  Settings,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import RichTextEditor from "@/components/blog/RichTextEditor";
import { useAuth } from "@/contexts/AuthContext";
import {
  getArticleById,
  createArticle,
  updateArticle,
  generateSlug,
  calculateReadTime,
} from "@/lib/articles";
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = ["Cloud", "AI/ML", "Full Stack", "DevOps", "Tutorial", "Career"];

const ArticleEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Cloud");
  const [coverImage, setCoverImage] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [published, setPublished] = useState(false);
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
      return;
    }

    if (id) {
      fetchArticle();
    }
  }, [user, id, navigate]);

  const fetchArticle = async () => {
    if (!id) return;
    try {
      const article = await getArticleById(id);
      if (article) {
        setTitle(article.title);
        setSlug(article.slug);
        setExcerpt(article.excerpt);
        setContent(article.content);
        setCategory(article.category);
        setCoverImage(article.coverImage);
        setAuthor(article.author);
        setPublished(article.published);
        setFeatured(article.featured);
      }
    } catch (error) {
      console.error("Error fetching article:", error);
      toast({
        title: "Error",
        description: "Failed to load article.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!id) {
      setSlug(generateSlug(value));
    }
  };

  const handleSave = async (asDraft = false) => {
    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a title for your article.",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);

    try {
      const articleData = {
        title,
        slug: slug || generateSlug(title),
        excerpt,
        content,
        category,
        coverImage,
        author,
        published: asDraft ? false : published,
        featured,
        readTime: calculateReadTime(content),
      };

      if (id) {
        await updateArticle(id, articleData);
        toast({
          title: "Article updated",
          description: "Your changes have been saved.",
        });
      } else {
        const newId = await createArticle(articleData);
        toast({
          title: "Article created",
          description: asDraft ? "Saved as draft." : "Your article is now live!",
        });
        navigate(`/admin/editor/${newId}`);
      }
    } catch (error) {
      console.error("Error saving article:", error);
      toast({
        title: "Error",
        description: "Failed to save article. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft size={16} />
                Back
              </Button>
            </Link>
            <h1 className="text-xl font-bold hidden md:block">
              {id ? "Edit Article" : "New Article"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {slug && published && (
              <Link to={`/blog/${slug}`} target="_blank">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Eye size={16} />
                  Preview
                </Button>
              </Link>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Settings size={16} />
                  <span className="hidden md:inline">Settings</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="glass border-border">
                <SheetHeader>
                  <SheetTitle>Article Settings</SheetTitle>
                  <SheetDescription>
                    Configure article metadata and publishing options
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="slug">URL Slug</Label>
                    <Input
                      id="slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="article-url-slug"
                      className="bg-card/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="bg-card/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Author name"
                      className="bg-card/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverImage">Cover Image URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="coverImage"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        placeholder="https://..."
                        className="bg-card/50"
                      />
                      <Button variant="outline" size="icon">
                        <ImageIcon size={16} />
                      </Button>
                    </div>
                    {coverImage && (
                      <img
                        src={coverImage}
                        alt="Cover preview"
                        className="w-full h-32 object-cover rounded-lg mt-2"
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="published">Published</Label>
                      <p className="text-sm text-muted-foreground">
                        Make this article visible to readers
                      </p>
                    </div>
                    <Switch
                      id="published"
                      checked={published}
                      onCheckedChange={setPublished}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="featured">Featured</Label>
                      <p className="text-sm text-muted-foreground">
                        Show in featured section
                      </p>
                    </div>
                    <Switch
                      id="featured"
                      checked={featured}
                      onCheckedChange={setFeatured}
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSave(true)}
              disabled={saving}
            >
              Save Draft
            </Button>
            <Button
              size="sm"
              onClick={() => handleSave(false)}
              disabled={saving}
              className="gap-2"
            >
              {saving ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Save size={16} />
              )}
              {published ? "Update" : "Publish"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Input
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Article title..."
              className="text-3xl md:text-4xl font-bold border-0 bg-transparent px-0 h-auto focus-visible:ring-0 placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A brief summary of your article..."
              className="bg-card/50 resize-none"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Content</Label>
            <RichTextEditor
              content={content}
              onChange={setContent}
              placeholder="Start writing your article..."
            />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ArticleEditor;
