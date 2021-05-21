// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb'
import { createClient } from 'contentful';

export default async (req, res) => {

	let data;
	// const {name, blogBody} = data;

	const client = await createClient({
		space: "n48qpphdbfvx",
		accessToken: "RwpKwH4FvTREYczgVEUkNUGyhWfoJsksa8PgTrPu_lQ"
	});
	
	await client
		.getEntries()
		.then(entries => {
			data = entries.items
			// console.log(entries.items[0].fields.blogBody.content[0].content[0].value)
		})
		.catch(error => {
			console.log(error)
		})
	//	MONGODB
	// console.log('attempting to connect');
	// const client = await MongoClient.
	// 	connect('mongodb+srv://nkalpakis:*Hailtopitt1@cluster0.tln5k.mongodb.net/Blog?retryWrites=true&w=majority');
	// console.log('connected');
	// const db = client.db();
	// await db.createCollection('blogs');
	// console.log('created collection')
	// const blogsCollection = db.collection('blogs');
	// const result = await blogsCollection.insertOne({
	// 	name: name,
	// 	blogBody: blogBody
	// });


	res.status(200).json({ blogItems: data })
  }
  