const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const LOG_FILE = "photos_download.log";
const DOWNLOAD_DIR = "./downloaded_photos";

const log = (message) => {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}`;
  console.log(entry);
  fs.appendFileSync(LOG_FILE, entry + "\n");
};

async function getAccessToken() {
  try {
    log("🔐 Requesting access token...");
    const res = await axios.post("https://oauth2.googleapis.com/token", null, {
      params: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: process.env.REFRESH_TOKEN,
        grant_type: "refresh_token",
      },
    });
    const token = res.data.access_token;
    if (!token) throw new Error("No access token received");
    log("✅ Access token obtained.");
    return token;
  } catch (err) {
    log(`❌ Failed to obtain access token: ${err.message}`);
    process.exit(1);
  }
}

async function fetchMediaItems(token) {
  try {
    log("🖼️  Fetching media items...");
    const res = await axios.get(
      "https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=100",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const items = res.data.mediaItems || [];
    log(`📸 ${items.length} media items retrieved.`);
    return items;
  } catch (err) {
    log(`❌ Failed to fetch media items: ${err.message}`);
    process.exit(1);
  }
}

async function downloadImage(url, filename) {
  try {
    const fullUrl = `${url}=d`;
    const writer = fs.createWriteStream(filename);

    const response = await axios({
      url: fullUrl,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", () => {
        log(`✅ Downloaded ${filename}`);
        resolve();
      });
      writer.on("error", (err) => {
        log(`❌ Failed to write ${filename}: ${err.message}`);
        reject(err);
      });
    });
  } catch (err) {
    log(`❌ Failed to download ${url}: ${err.message}`);
  }
}

(async () => {
  log(`📥 Starting Google Photos download at ${new Date().toLocaleString()}`);
  await fs.ensureDir(DOWNLOAD_DIR);

  const accessToken = await getAccessToken();
  const mediaItems = await fetchMediaItems(accessToken);

  for (let i = 0; i < mediaItems.length; i++) {
    const item = mediaItems[i];
    const baseUrl = item.baseUrl;
    const filename = path.join(DOWNLOAD_DIR, `photo_${i + 1}.jpg`);
    await downloadImage(baseUrl, filename);
  }

  log(`🎉 Download complete at ${new Date().toLocaleString()}`);
})();
