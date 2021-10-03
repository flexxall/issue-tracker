import mongoose from 'mongoose'

const issueSchema = mongoose.Schema

const issueSchema = new Schema({
	priority: {
		type: Number,
		min: 1,
		max: 4,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
  asignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},{
	timestamps: true
});

const Issue = mongoose.model('Issue', issueSchema)

export default Issue