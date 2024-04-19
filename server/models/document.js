import { Schema, model } from "mongoose";

const DocumentSchema = new Schema({
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
}, { collection: 'documents' });

export default model("Document", DocumentSchema);