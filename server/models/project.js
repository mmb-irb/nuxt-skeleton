import { Schema, model } from "mongoose";

const ProjectSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  longDescription: {
    type: String,
  },
  authors: {
    type: Array,
  },
  created: {
    type: Date,
    default: Date.now,
  }
}, { collection: 'projects' });

export default model("Project", ProjectSchema);