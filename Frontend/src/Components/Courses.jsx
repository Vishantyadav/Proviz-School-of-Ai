import React from 'react';

const Courses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Machine Learning</h3>
            <p className="text-gray-700 mb-4">Master the fundamentals of machine learning and AI algorithms.</p>
            <button className="text-yellow-400 hover:text-yellow-500">Learn More</button>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Deep Learning</h3>
            <p className="text-gray-700 mb-4">Dive into neural networks and deep learning techniques.</p>
            <button className="text-yellow-400 hover:text-yellow-500">Learn More</button>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Data Science</h3>
            <p className="text-gray-700 mb-4">Learn how to work with data, analyze it, and build predictive models.</p>
            <button className="text-yellow-400 hover:text-yellow-500">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
