
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, User } from "lucide-react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error("Please fill out all fields");
      return;
    }
    
    // Show success message
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="section-container bg-black">
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-mesh-orange">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Have questions or want to discuss your tattoo ideas? Get in touch with us using the contact form or through our social media channels.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-mesh-orange/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-mesh-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-400">info@meshtattoo.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-mesh-orange/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-mesh-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-gray-400">+34 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-mesh-orange/10 p-3 rounded-full">
                  <User className="h-6 w-6 text-mesh-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.instagram.com/meshtattoo_bcn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mesh-orange transition-colors">Instagram</a>
                    <a href="https://www.tiktok.com/@meshtattoo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mesh-orange transition-colors">TikTok</a>
                    <a href="https://beacons.ai/meshtattoo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mesh-orange transition-colors">Beacons</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input-field min-h-[150px]"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-mesh-orange hover:bg-opacity-80 text-white mt-2"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
