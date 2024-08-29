import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const About = () => {
  return (
    <div className="container mx-auto px-8 md:px-44 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to Unread Echoes! Our platform is a sanctuary for those unspoken words and emotions that linger in our hearts. Inspired by "The Unsent Project," our goal is to offer a space where you can share the messages you've held onto, whether they are expressions of love, regret, or nostalgia. We believe that each message has a story, and by sharing them, we find a collective voice in our experiences.
      </p>
      <p className="text-lg mb-4">
        Unread Echoes is more than just a place to post messages; it is a community where personal expression is cherished. We strive to create an environment where your feelings can be explored and understood, offering a means to connect with others through shared experiences.
      </p>
      <p className="text-lg mb-4">
        This platform was created with a deep sense of reflection and a desire to give voice to those silent thoughts. Sometimes, the things we want to say remain unsaid, and this site aims to honor those moments by bringing them into the light.
      </p>
      <p className="text-lg mb-4">
        If you have any questions or feedback, please don’t hesitate to reach out through our contact page. Thank you for being a part of Unread Echoes and for sharing your heartfelt messages with us!
      </p>

      {/* Social Media Links */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Connect with me?</h2>
        <div className="flex justify-center gap-6">
          <a href="https://x.com/krraymis" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.facebook.com/KrayMAII/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com/kraymis" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-islam-aymen-maachi-81859925a/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
