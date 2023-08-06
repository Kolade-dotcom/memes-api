const PORT = 5000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const memes = [
    {
        name: "pinterest",
        address: "https://www.pinterest.com/mbstarke/social-media-and-technology-memes/",
    },
    {
        name: "pinterest",
        address: "https://www.pinterest.com/NicoletteS93/memes/"
    },
    {
        name: "yellow-octopus",
        address: "https://www.yellowoctopus.com.au/pages/funny-memes"
    },
];

const memes_data = [];
memes.forEach((meme) => {
    axios(meme.address)
        .then(r => {
            const html = r.data;
            const $ = cheerio.load(html);

            $("img", html).each((_, element) => {
                let url = $(element).attr("src");
                memes_data.push(
                    {
                        url,
                        source: meme.name
                    }
                );
            });
        })
        .catch(e => {
            console.error(e);
        });
});

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my web scraper");
});

app.get("/memes", (req, res) => {
    res.status(200).json(memes_data);
});

app.get("/memes/:memeId", (req, res) => {
    const { memeId } = req.params;
    const meme_url = memes.filter(meme => meme.name === memeId)[0].address;

    axios(meme_url)
        .then(r => {
            const html = r.data;
            const $ = cheerio.load(html);
            const meme_data = [];

            $("img", html).each((_, element) => {
                let url = $(element).attr("src");
                meme_data.push(
                    {
                        url,
                        source: memeId
                    }
                );
            });
            res.status(200).json(meme_data);
        })
        .catch(e => {
            console.error(e);
        });
});

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
