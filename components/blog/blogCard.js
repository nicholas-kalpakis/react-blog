import classes from './blogCard.module.css'

const BlogCard = (props) => {
	return (
		<div className={classes.blogCardContainer}>
			<div onClick={() => {props.blogClickHandler(props.id)}} className={classes.blogCard}>
				<div className={classes.blogTitle}>{props.title}</div>
				<div className={classes.blogMeta}>{props.summary}</div>
				<div className={classes.readTime}>{props.readTime}</div>
			</div>
		</div>
	)
}

export default BlogCard