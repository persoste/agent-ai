
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Target, Shield, Brain, Users, Award } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with artificial intelligence, constantly evolving our solutions to stay ahead of the curve.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and business operations are protected by enterprise-grade security protocols and unwavering commitment to privacy.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Every AI solution we deploy is designed to deliver measurable business outcomes and tangible return on investment.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our mission. We provide dedicated support and continuous optimization to ensure maximum impact.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Businesses Transformed' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '10x', label: 'Average ROI Increase' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <>
      <Helmet>
        <title>About Nexora AI - Pioneering the Future of Business Intelligence</title>
        <meta name="description" content="Learn about Nexora AI's mission to transform businesses through cutting-edge artificial intelligence solutions. Discover our values, expertise, and commitment to innovation." />
      </Helmet>

      <div className="pt-20 pb-32">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-thin tracking-tight">
                About Nexora AI
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
                We are pioneers in the artificial intelligence revolution, dedicated to transforming how businesses operate, scale, and succeed in the digital age. Our mission is to make advanced AI accessible, practical, and transformative for organizations of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-thin mb-8">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 font-light mb-6 leading-relaxed">
                  At Nexora AI, we believe that artificial intelligence should amplify human potential, not replace it. Our specialized AI agents are designed to handle repetitive tasks, analyze complex data, and provide intelligent insights, freeing your team to focus on strategy, creativity, and innovation.
                </p>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  We're committed to democratizing AI technology, making it accessible to businesses regardless of their size or technical expertise. Every solution we create is built with scalability, security, and simplicity in mind.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="cyber-border border border-white/10 rounded-lg p-8 cyber-glow">
                  <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
                    <Zap className="h-24 w-24 text-gray-600" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we build relationships with our clients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-border border border-white/10 rounded-lg p-8 text-center group hover:border-white/30 transition-all duration-300"
                >
                  <value.icon className="h-12 w-12 mx-auto mb-6 text-gray-400 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-light mb-4">{value.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Philosophy */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="cyber-border border border-white/10 rounded-lg p-8 cyber-glow">
                  <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
                    <Brain className="h-24 w-24 text-gray-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-thin mb-8">
                  Our Approach
                </h2>
                <p className="text-lg text-gray-300 font-light mb-6 leading-relaxed">
                  We believe in the power of focused expertise. Rather than spreading ourselves thin across countless technologies, we've dedicated ourselves to perfecting AI solutions that deliver real business value.
                </p>
                <p className="text-lg text-gray-300 font-light mb-6 leading-relaxed">
                  Our lean, agile approach allows us to move quickly, adapt to changing needs, and maintain the highest standards of quality. We work closely with each client to understand their unique challenges and craft solutions that exceed expectations.
                </p>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  Every project is an opportunity to push the boundaries of what's possible with AI, and we bring that passion for innovation to everything we create.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Numbers that reflect our commitment to delivering exceptional AI solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-thin mb-2">{achievement.number}</div>
                  <div className="text-gray-400 font-light">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-thin">
                The Future of Business is Intelligent
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                We're not just building AI solutions for today—we're creating the foundation for tomorrow's intelligent enterprises. Join us in shaping a future where artificial intelligence amplifies human potential and drives unprecedented business success.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
