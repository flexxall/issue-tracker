import mongoose from 'mongoose'

const Schema = mongoose.Schema

const issueSchema = new Schema({	
	description: String,
	forDev: String,
	priority: String
},{
	timestamps: true
});

const Issue = mongoose.model('Issue', issueSchema)

export default Issue