import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function SettingScreen() {
  return (
    <LinearGradient
      colors={['#ffafbd', '#ffc3a0']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Text style={styles.text}>
        Tebrikler! Notification sayfasına hoş geldiniz!
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
});
