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

const tomAndJerryImages = [
  "https://s3.cloud.cmctelecom.vn/tinhte2/2019/01/4555289_cover_Tom_and_jerry_Tinhte.jpg",
  "https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2022/08/nhung-su-that-thu-vi-ve-tom-jerry-ba-giup-viec-bi-an-tung-lo-mat_62e8f715e5c8c.jpeg",
];
const doraemonImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgV1167y0kTestngTAHwue5sCSQdOYmACxsw-gKARioCnk44jXDOoevm4LycyZYO9hmY&usqp=CAU",
  "https://vcdn1-vnexpress.vnecdn.net/2020/09/11/sh8fzyt4-159886611234720470620-5969-5840-1599809570.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=9fS0hHSZamGuZ9BYgx6Tyw",
];
const oLongVienImages = [
  "https://ap.cdnki.com/r_download-truyen-o-long-vien-full---4ee6fa81ce738c356a06303938411003.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/0e/35/37/0e3537a8-7bad-7289-4059-1fd11bc1ded1/source/512x512bb.jpg",
];

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
        images:
          item === "Tom And Jerry"
            ? tomAndJerryImages
            : item === "Doraemon"
            ? doraemonImages
            : oLongVienImages,
      });

      await newMedia.save();
    });
  });
};
