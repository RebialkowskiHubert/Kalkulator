const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

/**
 * Okno aplikacji
 */
let win;

/**
 * Tworzy okno aplikacji
 */
function createWindow(){
    //inicjalizacja okna
    win = new BrowserWindow({
        width: 300,
        height: 300,
        icon: __dirname + './img/icon.png'
    });

    //ustawienie ścieżki pliku html odpowiedzialnego za kontent aplikacji
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Otwarcie konsoli przy starcie okna
    //win.webContents.openDevTools();

    //Zamknięcie okna
    win.on('closed', () => {
        win = null;
    });
}

/**
 * Wywoływana przy starcie aplikacji
 */
app.on('ready', createWindow);

/**
 * Wywoływana przy zamknięciu wszystkich okien aplikacji
 */
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});