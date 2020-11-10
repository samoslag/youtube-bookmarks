# YouTube Bookmarks Chrome Extension
Awesome visualization of your YouTube bookmarks.

## Setup
```
npm install
```

## Run
```
yarn watch
```

## Build
```
yarn build
```

## Use Extension
### Organize Bookmarks
Place all YouTube bookmarks you want to display in a folder named **YouTube** (case-insensitive) at the top level of your Bookmarks Bar.

### Load Extension
*Extension is currently not available on Chrome Web Store, so you have to load it as a developer.*
1. Download **dist** folder from GitHub repo.

2. In order for extension to work you'll have to keep the folder at the same location as it is when you load it into Chrome. So store it somewhere you don't mind. You can rename the folder, but don't change the content inside.

3. Open Chrome and go to **Manage extensions**. Toggle **Developer mode** at the top right corner to turn it on. Click on **Load unpacked** button and wait for popup. Find and select the downloaded **dist** folder (or whatever you renamed it to) and confirm.

4. Once extension is loaded click the puzzle icon at the top right corner of Chrome (Extensions), then click the pin icon next to **YouTube Bookmarks** extension - this will pin the extension next to the puzzle icon so you can access it quickly.

### Issues
#### Extension stopped working
You probably changed the location of your extension folder. Don't worry, this could have happened unintentionally. Open Chrome, go to **Manage extensions** and remove the extension. Then repeat steps 3. and 4.
