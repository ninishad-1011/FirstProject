import React from "react";

const Blog = () => {
  // Example blog data with 10 posts
  const blogPosts = [
    { id: 1, title: "How to Learn React Quickly", summary: "Tips and tricks to accelerate your React learning process." },
    { id: 2, title: "Understanding React Hooks", summary: "A deep dive into useState, useEffect, and custom hooks." },
    { id: 3, title: "React Router Best Practices", summary: "How to structure routes for clean and maintainable React apps." },
    { id: 4, title: "State Management in React", summary: "Overview of Context API, Redux, and Zustand." },
    { id: 5, title: "Building Responsive UI", summary: "Learn to use Tailwind CSS and Flexbox/Grid for responsive designs." },
    { id: 6, title: "Optimizing React Performance", summary: "Tips to reduce re-renders and improve performance in React apps." },
    { id: 7, title: "React Forms Made Easy", summary: "Handling forms in React using controlled and uncontrolled components." },
    { id: 8, title: "Deploying React Apps", summary: "Step by step guide to deploy React apps on Netlify, Vercel, and Firebase." },
    { id: 9, title: "React and TypeScript", summary: "How to use TypeScript for type safety in your React projects." },
    { id: 10, title: "Testing in React", summary: "Introduction to testing components using Jest and React Testing Library." }
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Our Blog</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.summary}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
