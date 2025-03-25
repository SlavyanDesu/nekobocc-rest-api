# NekoBocc REST API
**NekoBocc** with REST API implementation. Visit [NekoBocc repository](https://github.com/SlavyanDesu/NekoBocc) for more detailed explanation.

# Requirements
- Bun
- Internet connection

# Installation
1. Clone the repository
```bash
git clone https://github.com/SlavyanDesu/nekobocc-rest-api
```

2. Navigate to the project directory
```bash
cd nekobocc-rest-api
```

3. Install the dependencies
```bash
bun install
```

# Usage
```bash
bun start
```
Visit http://localhost:3000 in your browser to access the app.

# Technologies Used
- Bun
- ElysiaJS

# API Documentation
## Random Endpoint
- GET `/random`
- Response: [EpisodeMetadata](https://github.com/SlavyanDesu/NekoBocc?tab=readme-ov-file#episodemetadata) or [HentaiMetadata](https://github.com/SlavyanDesu/NekoBocc?tab=readme-ov-file#hentaimetadata)

## Get Endpoint
- GET `/get/:url`
- Parameter: `url` - The URL of the post.
- Response: [EpisodeMetadata](https://github.com/SlavyanDesu/NekoBocc?tab=readme-ov-file#episodemetadata) or [HentaiMetadata](https://github.com/SlavyanDesu/NekoBocc?tab=readme-ov-file#hentaimetadata)

## Release Endpoint
- GET `/release/:page`
- Parameter: `page` - The page number of the release page.
- Response: [HentaiRelease](https://github.com/SlavyanDesu/NekoBocc?tab=readme-ov-file#hentairelease)

## Search Endpoint
- GET `/search/:q`
- Parameter: `q` - The query of the search.
- Response: [HentaiRelease](https://github.com/SlavyanDesu/NekoBocc?tab=readme-ov-file#hentairelease)

# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.