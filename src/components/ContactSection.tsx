
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }
    
    // Show success notification
    toast.success("Message sent successfully!");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-container bg-black">
      <div className="container mx-auto">
        <h2 className="section-title font-sans">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className="space-y-8">
            <div className="bg-black border border-mesh-orange p-6 rounded-md">
              <h3 className="text-xl font-bold text-mesh-orange mb-4 font-sans">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Have questions about tattoo styles or want to discuss your ideas? 
                Send a message and we'll get back to you as soon as possible.
              </p>
              
              <div className="flex items-start space-x-4 mt-8">
                <div className="bg-mesh-orange/20 p-2 rounded-md">
                  <Mail className="text-mesh-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:steph@meshtattoo.com" className="text-mesh-orange hover:underline">steph@meshtattoo.com</a>
                </div>
              </div>
            </div>
            
            <div className="bg-black border border-mesh-orange p-6 rounded-md">
              <h3 className="text-xl font-bold text-mesh-orange mb-4 font-sans">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/meshtattoo_bcn/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-black border border-mesh-orange text-white p-3 rounded-md hover:bg-mesh-orange/10 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@meshtattoo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-black border border-mesh-orange text-white p-3 rounded-md hover:bg-mesh-orange/10 transition-colors"
                >
                  <span className="sr-only">TikTok</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M15 8h.01"></path>
                    <path d="M11 16c-3 0-6.5-2.5-6.5-6.5C4.5 6 8 4 8 4h8c0 4-3 6-3 6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-black border border-mesh-orange p-6 rounded-md">
            <h3 className="text-xl font-bold text-mesh-orange mb-6 font-sans">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-sans">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-sans">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-sans">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-black text-white border border-mesh-orange rounded-md hover:bg-black/80 w-full transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
