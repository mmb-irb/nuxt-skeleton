import { Schema, model } from "mongoose";

const DocumentSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
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
  files: {
    type: Array,
  },
  created: {
    type: Date,
    default: Date.now,
  }
}, { collection: 'documents' });

export default model("Document", DocumentSchema);