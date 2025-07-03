
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Your message has been noted.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch for any inquiries',
      value: 'hello@nexoraai.com',
      action: 'mailto:hello@nexoraai.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our AI specialists',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      value: 'San Francisco, CA',
      action: null
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your AI needs'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated AI specialists ready to help'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick turnaround on all inquiries'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Nexora AI - Get Started with AI Solutions</title>
        <meta name="description" content="Contact Nexora AI to discuss your business needs and discover how our AI solutions can transform your operations. Expert consultation available 24/7." />
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Ready to transform your business with AI? Let's discuss how Nexora AI can help you achieve your goals and unlock new possibilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8">
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white/50 focus:outline-none transition-colors font-light"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white/50 focus:outline-none transition-colors font-light"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-light text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white/50 focus:outline-none transition-colors font-light"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white/50 focus:outline-none transition-colors font-light resize-none"
                      placeholder="Tell us about your project and how we can help..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    className="cyber-button w-full py-4 text-lg font-light tracking-wide group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8">
                  Get in touch
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="cyber-border border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 border border-white/20 rounded-lg cyber-glow">
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-light mb-1">{info.title}</h3>
                          <p className="text-gray-400 font-light text-sm mb-2">{info.description}</p>
                          {info.action ? (
                            <a
                              href={info.action}
                              className="text-white font-light hover:text-gray-300 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-white font-light">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-light mb-6">Why choose us?</h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <feature.icon className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-light mb-1">{feature.title}</h4>
                          <p className="text-gray-400 font-light text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-thin">
                Have Questions?
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Check out our frequently asked questions or reach out directly for personalized assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="cyber-button px-8 py-4 text-lg font-light tracking-wide">
                  <a href="/faq">View FAQ</a>
                </Button>
                <Button variant="outline" className="cyber-button px-8 py-4 text-lg font-light tracking-wide">
                  Schedule a Call
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
