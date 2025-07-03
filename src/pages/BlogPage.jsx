
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BlogPage = () => {
  const { toast } = useToast();

  const blogPosts = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt: 'Explore how artificial intelligence is revolutionizing business operations and what it means for the future of work.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI Trends',
      image: 'AI automation in modern business environment'
    },
    {
      title: 'Implementing AI Agents: A Step-by-Step Guide',
      excerpt: 'Learn the essential steps to successfully integrate AI agents into your existing business infrastructure.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Implementation',
      image: 'Step-by-step AI implementation process'
    },
    {
      title: 'ROI Analysis: Measuring AI Success in Your Organization',
      excerpt: 'Discover key metrics and methodologies for evaluating the return on investment of your AI initiatives.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Analytics',
      image: 'Business analytics dashboard showing AI ROI metrics'
    },
    {
      title: 'Customer Service Revolution: AI Agents vs Traditional Support',
      excerpt: 'Compare the effectiveness of AI-powered customer service against traditional support methods.',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Customer Service',
      image: 'AI customer service agent helping customers'
    },
    {
      title: 'Data Security in AI: Best Practices for Enterprise',
      excerpt: 'Essential security considerations and best practices when implementing AI solutions in enterprise environments.',
      date: '2023-12-20',
      readTime: '15 min read',
      category: 'Security',
      image: 'Secure AI data processing with encryption'
    },
    {
      title: 'The Psychology of Human-AI Collaboration',
      excerpt: 'Understanding how humans and AI can work together effectively to achieve better business outcomes.',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Collaboration',
      image: 'Human and AI working together in office environment'
    }
  ];

  const categories = ['All', 'AI Trends', 'Implementation', 'Analytics', 'Customer Service', 'Security', 'Collaboration'];

  const handleReadMore = (title) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Blog post "${title}" noted for reading.`,
    });
  };

  const handleCategoryFilter = (category) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Filter by "${category}" category noted.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>AI Insights Blog - Nexora AI</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and best practices in artificial intelligence and business automation from Nexora AI experts." />
      </Helmet>

      <div className="pt-20 pb-32">
        {/* Header */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-thin tracking-tight">
                AI Insights
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Discover the latest trends, insights, and best practices in artificial intelligence and business automation from our team of experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <Button
                  key={index}
                  onClick={() => handleCategoryFilter(category)}
                  variant="outline"
                  className="cyber-button px-6 py-2 font-light tracking-wide"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-border border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8">
                    <img  
                      className="w-full h-full object-cover rounded"
                      alt={`Blog post about ${post.title}`}
                     src="https://images.unsplash.com/photo-1577510409458-a70f1efcba3d" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 font-light mb-4">
                      <span className="px-3 py-1 border border-white/20 rounded-full text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-light mb-3 group-hover:text-gray-300 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-400 font-light text-sm mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Button
                      onClick={() => handleReadMore(post.title)}
                      variant="ghost"
                      className="p-0 h-auto font-light text-white hover:text-gray-300 group"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-thin">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Subscribe to our newsletter for the latest AI insights and industry updates
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white/50 focus:outline-none transition-colors font-light"
                />
                <Button 
                  onClick={() => toast({
                    title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                    description: "Newsletter subscription noted.",
                  })}
                  className="cyber-button px-6 py-3 font-light tracking-wide"
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
