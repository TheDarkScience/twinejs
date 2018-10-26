/*
Exposes a limited set of Electron modules to a renderer process. Because the
renderer processes load rmeote content (e.g. story formats), they must be
isolated.
*/

const {ipcRenderer, remote, shell} = require('electron');

window.twineElectron = {openUrl: shell.openExternal, ipcRenderer, remote};
