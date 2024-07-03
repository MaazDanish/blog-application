import React, { useEffect, useState } from "react";

import './BlogForm.module.css';

const BlogForm = (props) => {
    const [title, setTitle] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [desc, setDesc] = useState("")
    console.log(props);
    const { currentBlog, updateBlog, onfetchData } = props

    useEffect(() => {
        if (props.currentBlog) {
            setTitle(currentBlog.title)
            setImageLink(currentBlog.imageLink)
            setDesc(currentBlog.desc)
        }
    }, [currentBlog])

    const titleHandler = (event) => {
        setTitle(event.target.value)
        // console.log(title);
    }
    const imageLinkHandler = (event) => {
        setImageLink(event.target.value)
    }
    const descHandler = (event) => {
        setDesc(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (currentBlog) {
            updateBlog({ title: title, imageLink: imageLink, desc: desc })
        } else {

            const blogData = {
                title, imageLink, desc
            }

            onfetchData(blogData);
        }

        setTitle("")
        setImageLink("")
        setDesc("")
    }


    return (

        <form onSubmit={formSubmitHandler} className="blog-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={title} onChange={titleHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="imageLink">Image Link</label>
                <input type="text" id="imageLink" name="imageLink" value={imageLink} onChange={imageLinkHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" name="desc" value={desc} onChange={descHandler} />
            </div>

            <button type="submit" className="submit-button">Post Blog</button>

        </form>

    )

}

export default BlogForm;