import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* First Section - Contact Details */}
        <div className="mb-6 pb-6 border-b border-gray-700">
          <div className="flex items-center justify-center space-x-6">
            <img 
              src="/lovable-uploads/6d75de89-7405-42fc-9813-ebecde8e9a71.png" 
              alt="College Logo" 
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold text-blue-400 mb-1">Naveen</h3>
              <p className="text-gray-300 mb-1">Founder and Educator</p>
              <p className="text-gray-300 mb-1">Cell No: 9876543210</p>
              <p className="text-gray-300">Email: algotacademy@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Second Section - Copyright */}
        <div className="text-center mb-6 pb-6 border-b border-gray-700">
          <p className="text-gray-400">
            © 2024 Government Degree College, Morthad. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Affiliated to Telangana University
          </p>
        </div>

        {/* Third Section - Additional Info */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Empowering students through quality education and innovative learning methods. 
            Join us in our mission to create future leaders and skilled professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
