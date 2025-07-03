
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cpu, Brain, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Advanced AI agents that learn and adapt to your business needs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols protecting your data and operations'
    },
    {
      icon: Cpu,
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture that grows with your business'
    },
    {
      icon: Target,
      title: 'Precision Analytics',
      description: 'Data-driven insights that drive measurable business outcomes'
    }
  ];

  const stats = [
    { number: '500+', label: 'Businesses Transformed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'AI Support' },
    { number: '10x', label: 'Efficiency Increase' }
  ];

  return (
    <>
      <Helmet>
        <title>Nexora AI - Revolutionary AI Solutions for Modern Business</title>
        <meta name="description" content="Transform your business with Nexora AI's cutting-edge artificial intelligence solutions. Scalable AI agents designed for enterprise success." />
      </Helmet>

      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight"
                data-text="Nexora AI"
              >
                <span className="block">Nexora</span>
                <span className="block text-gray-400">AI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Revolutionary artificial intelligence solutions that transform how businesses operate, 
                scale, and succeed in the digital age.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link to="/packages">
                  <Button className="cyber-button px-8 py-4 text-lg font-light tracking-wide group">
                    Explore Packages
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/learn-more">
                  <Button variant="outline" className="cyber-button px-8 py-4 text-lg font-light tracking-wide">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-thin mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                Why Choose Nexora AI
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Experience the future of business automation with our cutting-edge AI solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="cyber-border p-8 h-full border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300">
                    <feature.icon className="h-12 w-12 mb-6 text-gray-400 group-hover:text-white transition-colors" />
                    <h3 className="text-xl font-light mb-4">{feature.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-thin">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Join hundreds of companies already leveraging the power of Nexora AI
              </p>
              <Link to="/contact">
                <Button className="cyber-button px-8 py-4 text-lg font-light tracking-wide group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
