/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});

export default App;
