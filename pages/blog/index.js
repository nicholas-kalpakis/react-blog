import Router from "next/dist/next-server/lib/router/router";
import { Fragment, useEffect, useState } from "react";
import BlogCard from "../../components/blog/blogCard";
import { useRouter } from 'next/router';

const Blog = () => {

	const [blogPosts, setBlogPosts] = useState([])
	const router = useRouter();
	useEffect( async () => {
		const response = await fetch('/api/blog', {
			method: 'GET'
		})
		const data = await response.json();
		let blogItems = data.blogItems.map((blog) => {
			return (
				<BlogCard 
					key={blog.fields.id} 
					id={blog.fields.id} 
					blogClickHandler={blogClickHandler} 
					title={blog.fields.name} 
					body={blog.fields.blogBody.content[0].content[0].value}
					summary={blog.fields.summary}
					readTime={blog.fields.readTime}
				/>
			)
		})
		setBlogPosts(blogItems)
		return () => {
		}
	}, [])

	const blogClickHandler =  async (id) => {
		router.push('/blog/'+id)
	}

	return(
		<Fragment>
			{blogPosts}
		</Fragment>
	)
}

export default Blog;