import Link from 'next/link';
import blogs from './data/data'; 

const BlogList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {blogs.map(blog => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>    
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src={blog.image} alt={blog.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
              </div>
            </div>
         </Link>
      ))}
    </div>
  );
};

export default BlogList;
