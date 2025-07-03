
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'General',
      question: 'What is Nexora AI and how does it work?',
      answer: 'Nexora AI is a comprehensive artificial intelligence platform that provides specialized AI agents for business automation. Our five core agents handle customer service, lead generation, content creation, data analysis, and email marketing. Each agent uses advanced machine learning algorithms to learn from your business data and continuously improve performance.'
    },
    {
      category: 'Packages',
      question: 'What\'s the difference between the Start, Pro, Business, and Custom packages?',
      answer: 'The Start package ($2,999/month) includes our five core AI agents perfect for small businesses. Pro ($5,999/month) adds advanced analytics and custom training. Business ($9,999/month) includes dedicated support and white-label solutions. Custom packages are tailored specifically to your unique requirements with unlimited agents and on-premise deployment options.'
    },
    {
      category: 'Implementation',
      question: 'How long does it take to implement Nexora AI?',
      answer: 'Implementation typically takes 2-4 weeks depending on your package and complexity. Start packages can be deployed in as little as 1 week, while Custom solutions may take 4-8 weeks. We provide dedicated support throughout the entire process to ensure smooth integration with your existing systems.'
    },
    {
      category: 'Security',
      question: 'How secure is my data with Nexora AI?',
      answer: 'We employ enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is processed in secure, isolated environments and never shared with third parties. We also offer on-premise deployment options for maximum security control.'
    },
    {
      category: 'Support',
      question: 'What kind of support do you provide?',
      answer: 'All packages include 24/7 technical support via chat and email. Pro and Business packages include priority support with faster response times. Business and Custom packages also include dedicated account managers and regular optimization consultations.'
    },
    {
      category: 'Integration',
      question: 'Can Nexora AI integrate with my existing software?',
      answer: 'Yes, our AI agents are designed to integrate seamlessly with popular business tools including CRM systems, email platforms, analytics tools, and custom APIs. We provide comprehensive integration support and can develop custom connectors if needed.'
    },
    {
      category: 'Performance',
      question: 'How do you measure the success of AI implementations?',
      answer: 'We track key performance indicators specific to each AI agent, including response times, conversion rates, customer satisfaction scores, and ROI metrics. You\'ll receive detailed analytics dashboards and regular performance reports to monitor your AI investment.'
    },
    {
      category: 'Customization',
      question: 'Can the AI agents be customized for my specific industry?',
      answer: 'Absolutely. Our AI agents can be trained on your specific industry data, terminology, and processes. Pro and higher packages include custom training capabilities, while Custom packages offer complete model development tailored to your unique requirements.'
    },
    {
      category: 'Pricing',
      question: 'Are there any setup fees or hidden costs?',
      answer: 'Our pricing is transparent with no hidden fees. Setup and training are included in your monthly subscription. The only additional costs might be for extensive custom development or premium integrations, which are always discussed and approved in advance.'
    },
    {
      category: 'Scalability',
      question: 'Can I upgrade or downgrade my package?',
      answer: 'Yes, you can change your package at any time. Upgrades take effect immediately, while downgrades are processed at your next billing cycle. We\'ll work with you to ensure a smooth transition and maintain continuity of your AI operations.'
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Nexora AI</title>
        <meta name="description" content="Find answers to common questions about Nexora AI's artificial intelligence solutions, packages, implementation, and support services." />
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Find answers to common questions about our AI solutions, implementation process, and support services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search */}
        <section className="py-10 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent border border-white/20 rounded-lg focus:border-white/50 focus:outline-none transition-colors font-light text-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                onClick={() => setSearchTerm('')}
                variant="outline"
                className={`cyber-button px-6 py-2 font-light tracking-wide ${
                  searchTerm === '' ? 'bg-white text-black' : ''
                }`}
              >
                All
              </Button>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  onClick={() => setSearchTerm(category)}
                  variant="outline"
                  className={`cyber-button px-6 py-2 font-light tracking-wide ${
                    searchTerm === category ? 'bg-white text-black' : ''
                  }`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="cyber-border border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 text-xs border border-white/20 rounded-full mb-2 text-gray-400">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-light text-white">{faq.question}</h3>
                    </div>
                    <div className="ml-4">
                      {openItems.has(index) ? (
                        <Minus className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.has(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 font-light text-lg">
                  No questions found matching your search.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-thin">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Our team of AI specialists is here to help you find the perfect solution for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="cyber-button px-8 py-4 text-lg font-light tracking-wide">
                  <a href="/contact">Contact Support</a>
                </Button>
                <Button variant="outline" className="cyber-button px-8 py-4 text-lg font-light tracking-wide">
                  Schedule a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
