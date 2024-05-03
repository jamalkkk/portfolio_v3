// api/audio.js

import fs from "fs";
import path from "path";

export default async function (req, res) {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Title is required." });
  }

  try {
    // Construct the path to the audio file
    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "audios",
      `${title}.mp3`
    );

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found." });
    }

    // Create a read stream for the audio file
    const stream = fs.createReadStream(filePath);

    // Set the appropriate headers for streaming audio
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Length", fs.statSync(filePath).size);

    // Pipe the audio stream to the response
    stream.pipe(res);
  } catch (error) {
    console.error("Error serving audio file:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
