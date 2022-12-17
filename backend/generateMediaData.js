const xlsx = require("xlsx");
const mongoose = require("mongoose");

const Media = require("./models/media.model");

const workbook = xlsx.readFile("./utils/Childhood_Content.xlsx");
let worksheets = {};

for (const sheetName of workbook.SheetNames) {
  worksheets[sheetName] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

const environments = require("./utils/environments");

const { MONGO_ATLAS_URI } = environments;

mongoose.connect(MONGO_ATLAS_URI, {
  autoIndex: true,
  autoCreate: true,
});

const connection = mongoose.connection;
connection.once("open", async () => {
  console.log("MongoDB connected successfully");

  await generateMediaData();

  console.log("Added data to MongoDB");
});

const generateMediaData = async () => {
  Object.keys(worksheets).map((item, index) => {
    worksheets[item].map(async (media) => {
      const newMedia = await new Media({
        name: `${item}`,
        episode: media.Episode || media.Volume,
        description:
          media.Name || `${item} episode ${media.Episode || media.Volume}`,
        url: media.Link,
        type: media.Episode ? "Movie" : "Comic",
        images: [],
      });

      await newMedia.save();
    });
  });
};
