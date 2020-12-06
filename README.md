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
I couldn't use the latest libraries because I couldn't do anything about the build error that follows by changing the dependency.  

### Guide for archive_data.js
`archive_data.js` is JSON structure.  
`setlist_maker.html` is made for this data.  
This is single HTML page. Open it in your browser.  
`youtube_id` is, for example in this page https://www.youtube.com/watch?v=Pr14W3WT1og, -> Pr14W3WT1og.  


### Thanks to : https://github.com/Metnew/vue-element-starter  

## LICENSE  
MIT