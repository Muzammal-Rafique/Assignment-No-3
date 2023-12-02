import { useRouter } from 'next/router';
import blogs from '../data/data'; // Update the path to the actual location of your blogs file

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogs.find(blog => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <img src={blog.image} alt={blog.title} />
    </div>
  );
};