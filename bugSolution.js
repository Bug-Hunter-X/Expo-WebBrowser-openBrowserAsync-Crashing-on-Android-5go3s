import * as WebBrowser from 'expo-web-browser';
import { Linking } from 'react-native';

const handlePress = async () => {
  if (await WebBrowser.hasCustomScheme('https')) {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    console.log({ result });
  } else {
    const supported = await Linking.canOpenURL('https://example.com');
    if (supported) {
      await Linking.openURL('https://example.com');
    } else {
      console.error('Don\'t know how to open URI: ', 'https://example.com');
    }
  }
};