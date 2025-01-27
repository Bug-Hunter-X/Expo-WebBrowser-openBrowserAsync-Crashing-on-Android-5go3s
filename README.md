# Expo WebBrowser openBrowserAsync Crashing on Android

This repository demonstrates a bug where `expo-web-browser`'s `openBrowserAsync` function crashes or freezes the app on Android devices.  The issue seems to be related to how Expo handles web browser interactions on Android, specifically when certain browser configurations or permissions are involved.

The `bug.js` file contains a minimal example that reproduces the problem. The `bugSolution.js` file offers a potential workaround, but it may not resolve all instances of this issue.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an Android emulator or device.
4. Press the button; observe the app crash or freeze. 

## Potential Solutions

The `bugSolution.js` file provides a workaround that involves checking browser availability before calling `openBrowserAsync`.  This might not be a full solution, as the underlying cause of the crash may involve factors such as browser configuration or system permissions.

This is likely a bug within Expo's implementation of WebBrowser on Android. Please raise this issue to the relevant Expo maintainers to assist in solving this problem for everyone. 