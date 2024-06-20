import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { questions } from 'react-native-interview-kit';

export default function App() {
  React.useEffect(() => {
    console.log(questions);
  }, []);

  return (
    <View style={styles.container}>
      {questions.map((question) => (
        <View key={question.id} style={styles.box}>
          <Text>{question.title}</Text>
          <Text>{question.answer}</Text>
          {question.link && <Text>Learn more: {question.link}</Text>}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
