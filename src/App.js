import { useState } from 'react';
import BlogForm from './components/blogForm/BlogFrom';
import BlogCard from './components/blogcard/BlogCard';

function App() {
  const [data, setData] = useState([])
  const [currentBlog, setCurrentBlog] = useState(null)
  const [editIndex, setEditIndex] = useState(null)

  const fetchDataHandler = (data) => {
    setData((prevdata) => {
      return [data, ...prevdata];
    })
  }

  const deleteBlogHandler = (index) => {
    setData(data.filter((_, i) => i !== index));
  }

  const editBlogHandler = (index, blog) => {
    setCurrentBlog(blog)
    setEditIndex(index)
  }

  const updateBlog = (updatedBlog) => {
    const updatedBlogs = data.map((data, i) => (i === editIndex ? updateBlog : data))
    setData(updatedBlogs);
    setCurrentBlog(null);
    setEditIndex(null);

  }



  return (
    <div>
      <h2>Blogs <span> {data.length} </span></h2>
      <BlogForm onfetchData={fetchDataHandler}  currentBlog={currentBlog} updateBlog={updateBlog}></BlogForm>
      <hr></hr>
      <BlogCard blogsData={data} deleteBlog={deleteBlogHandler} editBlog={editBlogHandler}></BlogCard>
    </div>
  );
}

export default App;
