import React from 'react';
import BlogImage from '../../assets/BlogImage.jpg';

import { Link } from 'react-router-dom';

const SingleBlog5 = () => {
  return (
    <article className="max-w-[300px] m-4 mt-[24px]">
      <div>
        <img src={BlogImage} alt="Blog" width={300} />
      </div>
      <div className="mt-4">
        <Link to="/blog-post-view5">
          <h3 className="text-[18px] text-[#0029FF] font-bold leading-6">
            Coming soon
          </h3>
        </Link>
      </div>
      <div>
        <span className="text-[#111] text-[10px]">January 10, 2023</span>
      </div>
    </article>
  );
};

export default SingleBlog5;
