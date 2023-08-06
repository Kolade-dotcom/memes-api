# Web Scraper for Memes

This is a simple web scraper built using Node.js and Express to fetch memes from various sources. It utilizes Axios for making HTTP requests and Cheerio for parsing HTML content. The scraper provides endpoints to access the fetched memes.

## Prerequisites

Before running the web scraper, make sure you have the following installed:

- Node.js

## Getting Started

1. Clone this repository to your local machine:

   ```
   git clone <repository_url>
   cd web-scraper-for-memes
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Run the web scraper:

   ```
   npm start
   ```

4. The server will be up and running on `http://localhost:5000`. You can access the web scraper using this address.

## Endpoints

### 1. Home

- Endpoint: `/`
- Method: GET
- Description: Displays a welcome message for the web scraper.

### 2. Fetch All Memes

- Endpoint: `/memes`
- Method: GET
- Description: Retrieves an array of memes with their URLs and sources.

### 3. Fetch Memes by Source

- Endpoint: `/memes/:memeId`
- Method: GET
- Description: Retrieves an array of memes based on the specified `memeId` (source).

## Memes Data

The `memes` array contains a list of meme sources with their addresses. The web scraper fetches images from each source and stores them in the `memes_data` array.

Please note that the scraper might take some time to fetch and populate the `memes_data` array, as it makes asynchronous requests to the meme sources.

## Usage

- You can access the home page by visiting `http://localhost:5000` in your web browser.
- To fetch all memes, make a GET request to `http://localhost:5000/memes`.
- To fetch memes from a specific source, replace `:memeId` in the URL with the desired source name. For example, to get memes from the "pinterest" source, make a GET request to `http://localhost:5000/memes/pinterest`.

## Note

This web scraper is intended for educational and personal use. Please be respectful of the meme sources and their terms of use. The scraper may not work if the sources change their structure or block scraping.

**Happy meme scraping!** 🎉