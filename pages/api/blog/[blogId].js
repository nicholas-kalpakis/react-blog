import { createClient } from 'contentful';

export default async (req, res) => {	

	const { blogId } = req.query
	const client = await createClient({
		space: "n48qpphdbfvx",
		accessToken: "RwpKwH4FvTREYczgVEUkNUGyhWfoJsksa8PgTrPu_lQ"
	});
	
	let blogInfo
	await client
	.getEntry(blogId)
	.then(entry => {
		console.log(entry)
		blogInfo = {
			blogBody: entry.fields.blogBody.content[0].content[0].value,
			blogTitle: entry.fields.name,
			blogReadTime: entry.fields.readTime,
			blogSummary: entry.fields.summary
		}
		
	})
	.catch(err => console.log(err))

	res.status(200).json(blogInfo)
}