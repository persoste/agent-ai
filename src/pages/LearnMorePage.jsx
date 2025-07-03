
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageSquare, Users, PenTool, BarChart3, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LearnMorePage = () => {
  const aiAgents = [
    {
      icon: MessageSquare,
      name: 'Customer Service AI Agent',
      description: 'Revolutionize your customer support with intelligent, 24/7 assistance that understands context and provides personalized solutions.',
      features: [
        'Natural language processing for human-like conversations',
        'Multi-channel support (chat, email, phone)',
        'Sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Real-time language translation',
        'Integration with CRM and helpdesk systems'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Handle 10x more inquiries simultaneously',
        'Improve customer satisfaction scores',
        'Lower operational costs by 60%'
      ]
    },
    {
      icon: Users,
      name: 'Lead Generation AI Agent',
      description: 'Transform your sales pipeline with AI that identifies, qualifies, and nurtures leads with unprecedented precision and efficiency.',
      features: [
        'Predictive lead scoring and qualification',
        'Automated prospect research and profiling',
        'Personalized outreach campaigns',
        'Social media and web scraping for lead discovery',
        'Behavioral analysis and intent prediction',
        'CRM integration and pipeline management'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Improve conversion rates by 150%',
        'Reduce sales cycle time by 40%',
        'Automate 80% of lead qualification'
      ]
    },
    {
      icon: PenTool,
      name: 'Content Creation AI Agent',
      description: 'Scale your content marketing with AI that creates engaging, brand-consistent content across all channels and formats.',
      features: [
        'Multi-format content generation (blogs, social, ads)',
        'Brand voice and tone consistency',
        'SEO optimization and keyword integration',
        'Visual content creation and editing',
        'Content calendar planning and scheduling',
        'Performance tracking and optimization'
      ],
      benefits: [
        'Produce 10x more content',
        'Maintain consistent brand messaging',
        'Improve SEO rankings by 200%',
        'Reduce content creation costs by 70%'
      ]
    },
    {
      icon: BarChart3,
      name: 'Data Analysis AI Agent',
      description: 'Unlock actionable insights from your data with AI that analyzes patterns, predicts trends, and recommends strategic actions.',
      features: [
        'Real-time data processing and analysis',
        'Predictive modeling and forecasting',
        'Automated report generation',
        'Anomaly detection and alerts',
        'Cross-platform data integration',
        'Interactive dashboard creation'
      ],
      benefits: [
        'Make data-driven decisions 5x faster',
        'Identify opportunities 90% earlier',
        'Reduce analysis time by 95%',
        'Improve forecast accuracy by 80%'
      ]
    },
    {
      icon: Mail,
      name: 'Email Marketing AI Agent',
      description: 'Maximize email campaign performance with AI that personalizes content, optimizes timing, and predicts customer behavior.',
      features: [
        'Dynamic content personalization',
        'Send time optimization',
        'A/B testing automation',
        'Subscriber segmentation and targeting',
        'Deliverability optimization',
        'Automated drip campaigns'
      ],
      benefits: [
        'Increase open rates by 250%',
        'Improve click-through rates by 180%',
        'Boost conversion rates by 300%',
        'Reduce unsubscribe rates by 60%'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agent Capabilities - Learn More | Nexora AI</title>
        <meta name="description" content="Discover the powerful capabilities of Nexora AI's five specialized agents. Learn how our AI solutions transform customer service, lead generation, content creation, data analysis, and email marketing." />
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
                AI Agent Capabilities
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-4xl mx-auto">
                Explore the advanced capabilities of our five specialized AI agents. Each agent is designed to transform a critical aspect of your business operations with cutting-edge artificial intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Agents Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {aiAgents.map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 border border-white/20 rounded-lg cyber-glow">
                        <agent.icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-thin">{agent.name}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
                      {agent.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-light mb-4 text-white">Key Features</h3>
                        <ul className="space-y-2">
                          {agent.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-400 font-light text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-light mb-4 text-white">Business Impact</h3>
                        <ul className="space-y-2">
                          {agent.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-gray-400 font-light text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="cyber-border border border-white/10 rounded-lg p-8 cyber-glow">
                      <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
                        <agent.icon className="h-24 w-24 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                Seamless Integration
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Our AI agents work together as a unified system, sharing insights and optimizing performance across your entire business ecosystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cross-Agent Intelligence',
                  description: 'Agents share data and insights to provide comprehensive business intelligence'
                },
                {
                  title: 'Unified Dashboard',
                  description: 'Monitor all AI agents from a single, intuitive control center'
                },
                {
                  title: 'Scalable Architecture',
                  description: 'Add new agents and capabilities as your business grows'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center cyber-border border border-white/10 rounded-lg p-8"
                >
                  <h3 className="text-xl font-light mb-4">{feature.title}</h3>
                  <p className="text-gray-400 font-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-thin">
                Ready to Deploy AI Agents?
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Choose your package and start transforming your business with intelligent automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/packages">
                  <Button className="cyber-button px-8 py-4 text-lg font-light tracking-wide group">
                    View Packages
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="cyber-button px-8 py-4 text-lg font-light tracking-wide">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LearnMorePage;
