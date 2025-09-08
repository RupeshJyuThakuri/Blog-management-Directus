import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:3000/api/blogs");
      const data = await res.json();
      // console.log(data)
    setBlogs(data.data);
    }
     
// {id: 10, Title: 'jfksjf', Content: '<p>jfdfkls sjfs</p>', Date: '2025-09-05T11:15:00', Author: 2, …}

  useEffect(() => {
    fetchData();
  }, []);

    // console.log(blogs.image)
  return (
      <div>
          {blogs.map(blog => {
              
              return (
                <div className="mb-8" key={blog.slug}>
                  <h1 className="text-3xl text-blue-900 font-black">
                    {blog.Title}
                  </h1>
                  
                  {blog.image && <img src={blog.image} alt="" />}
                  <p dangerouslySetInnerHTML={{ __html: blog.Content }}></p>
                </div>
              );
          })}
    </div>
  );
};

export default Blog;
