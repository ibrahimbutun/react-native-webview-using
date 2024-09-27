import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('WebView'); // WebView ekranına yönlendir
  };

  return (
    <View style={styles.container}>
      <Button title="Go to Website" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
