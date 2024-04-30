import { Schema, model } from "mongoose";

const FileSchema = new Schema({
  filename: String,
  contentType: String,
  metadata: Object,
  chunkSize: Number,
  length: Number,
  uploadDate: Date
}, { collection: 'fs.files' });

export default model("File", FileSchema);