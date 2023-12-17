import blogs from '../data/data'; 

interface props {
    params : {id : number}
}

const Blog = ({params}: props) => {
  const blog = blogs.find(blog => blog.id === Number(params.id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className='flex m-4'>
  <div className="flex-1 space-y-3">
    <h1 className="text-2xl font-bold mb-2 text-black">{blog.title}</h1>
    <p className="text-gray-600">{blog.description}</p>
  </div>
  <img className=" " width='600px' height='500px'  src={blog.image} alt={blog.title} />
</div>

  );
};
export default Blog