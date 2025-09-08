import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogBySlug = () => {
  const { slug } = useParams(); // get slug from route params
  const [blog, setBlog] = useState(null);

  async function fetchBlog() {
    try {
    //   console.log(`http://localhost:3000/api/blogs/${slug}`);
      const res = await fetch(`http://localhost:3000/api/blogs/${slug}`);
        const data = await res.json();
        // console.log(data)
      setBlog(data.data); // depends on your API structure
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  }

  useEffect(() => {
    fetchBlog();
  }, [slug]);

    if (!blog) return <p>There is no Blog with "{ slug }" slug</p>;

  return (
    <div className="mb-8">
      <h1 className="text-3xl text-blue-900 font-black">{blog.Title}</h1>
      <p dangerouslySetInnerHTML={{ __html: blog.Content }}></p>
    </div>
  );
}

export default BlogBySlug
