# SisterClaire's Song Database
npm install  
npm run generate_default_styles  
npm run generate_theme  

npm run deploy


## Requirements
node -v  
npm cache clean -f  
npm install -g n  
n stable (I used v14.15.0)  

sudo rm -rf node_modules  
sudo rm package-lock.json  
sudo npm install  

### after above, version check
npm outdated

### TODO: Dependencies
I couldn't use the latest libraries, because I can't solve the build error that follows by changing the dependency.  

### Guide for archive_data.js
`archive_data.js` is JSON structure.  
`setlist_maker.html` is made for easy to make this data. This is single HTML page. Open it in your browser.  
`youtube_id` is, for example in this page https://www.youtube.com/watch?v=Pr14W3WT1og, -> Pr14W3WT1og.  
`setlist_maker_bili.html` is also made for bilibili archive data. The usage is similar to Youtube maker.  

### Data creation sequence
1. Make archive JSON data. Use above `setlist_maker.html`. Write archive_data.js.  
2. Make `song_data.js`. archive data's `SongData.get('song_title_key').title`, `song_title_key` is must be match `song_data.js`'s song data Map's key.  
3. Run your local server `npm run dev`. And access `http://localhost:4000/search_data`  
4. Copy contents in textarea data, and paste at `search_data.js`.  
5. `npm run deploy`  

### Thanks to : https://github.com/Metnew/vue-element-starter  

## LICENSE  
MIT