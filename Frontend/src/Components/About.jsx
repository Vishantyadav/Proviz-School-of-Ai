import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">About Us</h2>
        <p className="text-xl text-gray-700 mb-6">At Proviz School of AI, we offer cutting-edge education in AI and data science to prepare you for the future.</p>
        <div className="flex justify-center space-x-8">
          <div>
            <h3 className="text-2xl font-semibold">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry experts who are passionate about teaching.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Practical Learning</h3>
            <p className="text-gray-600">Hands-on projects that prepare you for real-world AI challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
