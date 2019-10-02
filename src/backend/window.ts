import { remote } from 'electron'

export function closeWindow() {
    remote.getCurrentWindow().close()
}

export function toggleMaximize() {
    const currentWindow = remote.getCurrentWindow()
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize()
    } else {
        currentWindow.maximize()
    }
}

export function minimizeWindow() {
    remote.getCurrentWindow().minimize()
}
