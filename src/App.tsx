import { SafeAreaView, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 30px;
  color: blue;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Hello World!</Text>
      <TextNew>NOVO TESTE</TextNew>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

export default App;
