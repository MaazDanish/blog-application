import React from "react";

const BlogCard = (props) => {
    console.log(props);
    const blogData = props.blogsData
    // const { title, imageLink, desc } = blogData
    return (
        <>
            {blogData.map((blog, index) => (
                <div key={index} className="blog-card">
                    <p>Title - {blog.title}</p>
                    <div>
                        <img src={blog.imageLink} alt={blog.title} />
                    </div>
                    <p>{blog.desc}</p>
                    <div>
                        <button onClick={() => props.editBlog(index,blog)}>Edit Blog</button>
                        <button onClick={() => props.deleteBlog(index)}>Delete Blog</button>
                    </div>
                </div>
            ))}
        </>
    )

}

export default BlogCard;