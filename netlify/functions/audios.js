const fs = require("fs");
const path = require("path");

module.exports.handler = async (event, context) => {
  try {
    const { title } = event.queryStringParameters;
    const audioFilePath = `./public/audios/${title}.mp3`;

    // Check if the requested audio file exists
    if (!fs.existsSync(path.resolve(audioFilePath))) {
      return {
        statusCode: 404,
        body: `Audio file for titleuage '${title}' not found`,
      };
    }

    // Read the audio file
    const audioFile = fs.readFileSync(path.resolve(audioFilePath));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "audio/mpeg",
      },
      body: audioFile.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
