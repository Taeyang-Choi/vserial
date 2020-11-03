const {app, BrowserWindow} = require("electron");
const isDev = require("electron-is-dev");
const p = require("path");
const url = require("url");

const createWindow = () => {
	let win = new BrowserWindow({
		//width: 800,
		//height: 600,
		center: true,
		resizable: true,
		webPreferences: {
			nodeIntegration: true,
		},
	});

/*
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.json(__dirname, "../build/index.html"),
		protocol: "file",
		slashes: true,
	});

	win.loadURL(startUrl);
*/
	if(isDev) {
		win.loadURL("http://localhost:3000");
		win.webContents.openDevTools();
	} else {
		win.loadFile(p.join(__dirname, "../build/index.html"));
	}
}

app.on("ready", createWindow);
//app.whenReady().then(createWindow);


