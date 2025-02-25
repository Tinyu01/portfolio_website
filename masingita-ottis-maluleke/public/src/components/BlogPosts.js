// src/components/BlogPosts.js
import React from 'react';

const BlogPosts = () => {
    const posts = [
        { id: 1, title: "Article 1", content: "This is the content of article 1.", date: "2023-10-01" },
        { id: 2, title: "Article 2", content: "This is the content of article 2.", date: "2023-10-02" },
    ];

    return (
        <div className="blog-posts bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Tech Articles & Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map(post => (
                        <div key={post.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-4">{post.content}</p>
                            <p className="text-gray-600">{post.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;