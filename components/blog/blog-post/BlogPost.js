import classes from './BlogPost.module.css'

const BlogPost = (props) => {
	return (
		<div className={classes.blogContainer}>
			<div className={classes.title}>{props.title}</div>
			<div className={classes.body}>{props.body}</div>
		</div>
		
	)
}

export default BlogPost