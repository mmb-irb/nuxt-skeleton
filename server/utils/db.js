// Convert the stream to data and return a promise
const streamToData = (stream) => {
  return new Promise(async (resolve, reject) => {

    // Create an array to store the chunks
    const chunks = [];
    stream.on('data', (chunk) => {
      chunks.push(chunk);
    });
  
    // Close the response when the stream ends and resolve the promise
    stream.on('end', () => {   
      const payload = Buffer.concat(chunks)/*.toString()*/
      resolve(payload);
    });

  });
}

module.exports = {
  streamToData
}