import Link from "next/link";
import "./globals.css";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await response.json();

  return (
    <div className="home-container">
      <section>
        <h4 className="section-title">All Blogs</h4>
        <p className="text-lg text-gray-600">
          Explore it more by clicking the blog.
        </p>
      </section>
      <div className="blog-list">
        <ol>
          {blogs.map((blog) => (
            <li key={blog.id} className="blog-item">
              <Link href={`/blog/${blog.id}`} className="blog-link">
                <span>{blog.id}. </span> {blog.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
