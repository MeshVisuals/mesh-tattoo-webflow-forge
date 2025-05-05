
import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Message sent! We'll get back to you soon.");
    
    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="section-container bg-black">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="bg-muted/20 p-6 border border-muted rounded-lg space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Your Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                  className="input-field"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="input-field h-32"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-muted/20 p-6 border border-muted rounded-lg h-full">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-mesh-orange/10 p-3 rounded-full">
                    <Mail className="text-mesh-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:steph@meshtattoo.com" className="text-gray-300 hover:text-mesh-orange transition-colors">
                      steph@meshtattoo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-mesh-orange/10 p-3 rounded-full">
                    <Instagram className="text-mesh-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Instagram</h4>
                    <a href="https://www.instagram.com/meshtattoo_bcn/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mesh-orange transition-colors">
                      @meshtattoo_bcn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-mesh-orange/10 p-3 rounded-full">
                    <MapPin className="text-mesh-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-300">Barcelona, Spain</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-800">
                  <h4 className="font-medium mb-3">Studio Hours</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span>10:00 - 19:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Saturday</span>
                      <span>10:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
