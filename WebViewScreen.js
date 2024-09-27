import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://www.wix.com' }} // Google'a yönlendir
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
