
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a project in mind or questions about my services? I'm here to help! Let's discuss how we can work together.
          </p>
          <div className="w-20 h-1 bg-marketing-purple mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-poppins font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 (123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-marketing-blue hover:bg-marketing-darkblue"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-poppins font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactItem 
                icon={Mail} 
                label="Email" 
                value="hello@metamagic.com" 
                href="mailto:hello@metamagic.com"
              />
              
              <ContactItem 
                icon={Phone} 
                label="Phone" 
                value="+92 300 1234567" 
                href="tel:+923001234567"
              />
              
              <ContactItem 
                icon={MapPin} 
                label="Location" 
                value="Karachi, Pakistan" 
              />
              
              <ContactItem 
                icon={MessageSquare} 
                label="WhatsApp" 
                value="+92 300 1234567" 
                href="https://wa.me/923001234567"
              />
            </div>
            
            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              
              <div className="flex gap-4">
                <SocialLink icon={Instagram} href="https://instagram.com" label="Instagram" />
                <SocialLink icon={Facebook} href="https://facebook.com" label="Facebook" />
                <SocialLink icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
                <SocialLink icon={Youtube} href="https://youtube.com" label="YouTube" />
              </div>
            </div>
            
            {/* Quick Action */}
            <div className="mt-12 p-6 bg-marketing-blue/10 rounded-lg">
              <h4 className="text-lg font-medium mb-3">Need Quick Help?</h4>
              <p className="text-gray-600 mb-4">
                Schedule a free 30-minute consultation call to discuss your project.
              </p>
              <Button className="bg-marketing-blue hover:bg-marketing-darkblue">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

const ContactItem = ({ icon: Icon, label, value, href }: ContactItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-marketing-blue/10 p-3 rounded-full">
        <Icon className="text-marketing-blue" size={20} />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        {href ? (
          <a 
            href={href} 
            className="text-gray-600 hover:text-marketing-blue hover:underline transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-600">{value}</p>
        )}
      </div>
    </div>
  );
};

interface SocialLinkProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

const SocialLink = ({ icon: Icon, href, label }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-marketing-lightgray hover:bg-marketing-blue hover:text-white p-3 rounded-full transition-colors"
      aria-label={label}
    >
      <Icon size={20} />
    </a>
  );
};

export default ContactSection;
