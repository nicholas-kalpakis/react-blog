import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import BlogPostComponent from '../../../components/blog/blog-post/BlogPost';

const BlogPost = () => {

	const router = useRouter();
	const id = router.query.blogId
	const [blogTitle, setblogTitle] = useState('');
	const [blogBody, setblogBody] = useState('');
	const [blogReadTime, setblogReadTime] = useState('')
	const [blogSummary, setblogSummary] = useState('')

	useEffect( async() => {
		const response = await fetch('/api/blog/' + id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json()
		setblogTitle(data.blogTitle);
		setblogBody(data.blogBody)
		setblogReadTime(data.blogReadTime)
		setblogSummary(data.blogSummary)

	}, [])

	return (
		<BlogPostComponent title={blogTitle} body={blogBody} summary={blogSummary} readTIme={blogReadTime}></BlogPostComponent>
	)
}

export default BlogPost