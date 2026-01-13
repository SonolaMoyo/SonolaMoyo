import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Article } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  index?: number;
}

const ArticleCard = ({ article, featured = false, index = 0 }: ArticleCardProps) => {
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass rounded-2xl overflow-hidden glass-hover group"
      >
        <Link to={`/blog/${article.slug}`}>
          <div className="relative h-56 overflow-hidden">
            <img
              src={article.coverImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                <Tag size={10} />
                {article.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {formatDate(article.createdAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {article.readTime}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{article.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
              Read Article <ArrowUpRight size={14} />
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl p-5 glass-hover group"
    >
      <Link to={`/blog/${article.slug}`} className="flex gap-4">
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={article.coverImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-medium">
              {article.category}
            </span>
            <span>{article.readTime}</span>
          </div>
          <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 text-sm">
            {article.title}
          </h4>
        </div>
      </Link>
    </motion.article>
  );
};

export default ArticleCard;
