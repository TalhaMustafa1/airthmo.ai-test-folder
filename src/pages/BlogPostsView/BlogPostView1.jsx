import React from 'react';
import BlogImage from '../../assets/BlogImage.jpg';
import { Link } from 'react-router-dom';

const BlogPostView1 = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-2 my-8">
      <article>
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={BlogImage} alt="Blog" width="auto" />
          </div>
          <div className="mt-2">
            <Link to="#">
              <h3 className="max-w-[800px] text-[32px] text-[#0029FF] font-bold leading-10 px-4">
                Coming soon
              </h3>
            </Link>
          </div>
        </div>
      </article>
      <div className="my-8">
        <p>
        Coming soon
        </p>
        <div className="my-4">
          <p>
          Coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPostView1;
