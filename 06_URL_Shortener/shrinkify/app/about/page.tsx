import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="mx-auto my-4 max-w-7xl px-4">
      <h1 className="text-center text-3xl font-bold text-purple-900 my-8">About Us</h1>
      <p className="mt-4 text-lg text-gray-700 ">
        Welcome to Shrinkify, the best URL shortener service designed to make your online experience easier and more efficient. 
        Our mission is to provide a simple and straightforward way to shorten your URLs, making them easier to share and manage.
      </p>
      <p className="mt-8 text-lg text-gray-700 ">
        At Shrinkify, we understand the importance of having clean and concise links, whether for personal use, marketing campaigns, or social media sharing. 
        Our platform is user-friendly and allows you to generate short links in just a few clicks.
      </p>
      <p className="mt-6 text-lg text-gray-700">
        We are committed to ensuring the security and reliability of our service. Your data is safe with us, and we continuously work to improve our features and user experience.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Thank you for choosing Shrinkify! If you have any questions or feedback, feel free to reach out to us through our contact page.
      </p>
    </div>
  );
}

export default AboutUsPage;