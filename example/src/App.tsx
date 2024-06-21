import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { healthCheck } from 'react-native-interview-kit';

export default function App() {
  React.useEffect(() => {
    healthCheck();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello from react-native-interview-kit example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
