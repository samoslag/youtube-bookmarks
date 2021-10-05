# YouTube Bookmarks Chrome Extension
Visualize your YouTube bookmarks.

## Development
### Setup
```
npm install
```

### Run
[Load Extension](#load-extension)
```
yarn watch
```
**dist** will rebuild with every change you make.

### Build
```
yarn build
```

## Usage
*Extension is currently not available in Chrome Web Store, so you have to load it as a developer.*

### Load Extension
1. Download **dist** folder from GitHub repo.

2. In order for extension to work you'll have to keep the folder at the same location as it is when you load it into Chrome. So store it somewhere you don't mind. You can rename the folder, but don't change the content inside.

3. Open Chrome and go to **Manage extensions**. Toggle **Developer mode** at the top right corner to turn it on. Click on **Load unpacked** button and wait for popup. Find and select the downloaded **dist** folder (or whatever you renamed it to) and confirm.

4. Once extension is loaded click the puzzle icon at the top right corner of Chrome (Extensions), then click the pin icon next to **YouTube Bookmarks** extension - this will pin the extension next to the puzzle icon so you can access it quickly.

## Issues
### Extension stopped working
You probably changed the location of your extension folder. Don't worry, your bookmarks are safe. Open Chrome, go to **Manage extensions**, remove the extension, then load it again by following the steps above.
If the issue persists, submit it on GitHub.

## Contribute
If you have any bug reports or suggestions/requests regarding functionalities and user experience, be sure to let the creator know.
