
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Shield, Cpu, Brain, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PackagesPage = () => {
  const { toast } = useToast();

  const packages = [
    {
      name: 'Start',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses ready to embrace AI automation',
      features: [
        'Customer Service AI Agent',
        'Lead Generation AI Agent',
        'Content Creation AI Agent',
        'Data Analysis AI Agent',
        'Email Marketing AI Agent'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$5,999',
      period: '/month',
      description: 'Comprehensive AI solution for growing businesses',
      features: [
        'Everything in Start package',
        'Advanced Analytics Dashboard',
        'Custom AI Training',
        'Priority Support',
        'API Integration'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$9,999',
      period: '/month',
      description: 'Enterprise-grade AI infrastructure for large organizations',
      features: [
        'Everything in Pro package',
        'Dedicated AI Specialist',
        'Custom Model Development',
        'White-label Solutions',
        'SLA Guarantee'
      ],
      popular: false
    },
    {
      name: 'Agent AI Custom',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored AI solutions designed specifically for your unique needs',
      features: [
        'Fully Custom AI Development',
        'Unlimited AI Agents',
        'On-premise Deployment',
        '24/7 Dedicated Support',
        'Complete Source Code'
      ],
      popular: false
    }
  ];

  const handleGetStarted = (packageName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${packageName} package selection noted.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>AI Packages - Nexora AI Solutions</title>
        <meta name="description" content="Choose from our comprehensive AI packages designed to transform your business operations. From startup solutions to enterprise-grade AI systems." />
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
                AI Packages
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Choose the perfect AI solution for your business. Each package includes five specialized AI agents designed to transform your operations.
              </p>
              <Link to="/learn-more">
                <Button variant="outline" className="cyber-button px-6 py-3 font-light tracking-wide group">
                  Learn More About Our AI Agents
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative cyber-border rounded-lg overflow-hidden ${
                    pkg.popular ? 'border-white/30 cyber-glow' : 'border-white/10'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-white text-black text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 h-full ${pkg.popular ? 'pt-16' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-light mb-2">{pkg.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-thin">{pkg.price}</span>
                        <span className="text-gray-400 font-light">{pkg.period}</span>
                      </div>
                      <p className="text-gray-400 font-light text-sm">{pkg.description}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-light text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleGetStarted(pkg.name)}
                      className={`w-full cyber-button font-light tracking-wide ${
                        pkg.popular ? 'bg-white text-black hover:bg-gray-200' : ''
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                What's Included
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Every package comes with enterprise-grade features designed for maximum impact
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI Agent Suite',
                  description: 'Five specialized AI agents tailored to your business needs'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-level encryption and compliance standards'
                },
                {
                  icon: Cpu,
                  title: 'Cloud Infrastructure',
                  description: 'Scalable, reliable, and lightning-fast performance'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="h-12 w-12 mx-auto mb-6 text-gray-400" />
                  <h3 className="text-xl font-light mb-4">{feature.title}</h3>
                  <p className="text-gray-400 font-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PackagesPage;
