import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, Article } from "@/lib/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ArticleView = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      try {
        const data = await getArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-card rounded w-1/4" />
              <div className="h-12 bg-card rounded w-3/4" />
              <div className="h-64 bg-card rounded" />
              <div className="space-y-2">
                <div className="h-4 bg-card rounded w-full" />
                <div className="h-4 bg-card rounded w-5/6" />
                <div className="h-4 bg-card rounded w-4/6" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog">
              <Button variant="ghost" className="gap-2 mb-8">
                <ArrowLeft size={18} />
                Back to Blog
              </Button>
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium bg-primary/20 text-primary rounded-full">
                  <Tag size={14} />
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {formatDate(article.createdAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {article.readTime}
                </span>
              </div>
            </header>

            {article.coverImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 rounded-2xl overflow-hidden"
              >
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleView;
