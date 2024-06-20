interface Question {
  id: number;
  title: string;
  answer?: string;
  link?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    title: 'What is the difference between React and React Native?',
    answer: `React is a library for building web applications, while React Native is a 
    framework for building native mobile applications using React.`,
  },
  {
    id: 2,
    title: 'Which framework is better Flutter or React Native?',
    answer: `It depends on the project requirements and the developer's skill set.
    But in short, React Native would be a better choice for web developers who are already familiar with React.
    And also if you want to attract a larger audience, React Native is a better choice because it has been around longer and has a larger community. Also uses TypeScript, which is has a larger community than Dart.
    Also with React Native you can target many platforms with a single codebase, while Flutter is limited to Android and iOS (and Web, kinda).
    `,
  },
  {
    id: 3,
    title: 'What are the basic React Native components? Explain their usage.',
    answer: `View, Text, Image, ScrollView, TextInput, StyleSheet`,
    link: 'https://reactnative.dev/docs/components-and-apis#basic-components',
  },
  {
    id: 4,
    title:
      'What are the advantages of using React Native vs. native development?',
    answer: `1. Faster development time
    2. Cross-platform support
    3. Hot reloading
    4. Large community
    5. Code reusability`,
  },
];
