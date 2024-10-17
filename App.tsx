import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';

function App(): React.JSX.Element {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#163C45'} />

      {/* Header */}
      <View style={styles.HeaderStyle}>
        <Text style={styles.HeaderIconStyle}>{'<'} </Text>
        <Text style={styles.HeaderTextStyle}>Edit Task</Text>
      </View>

      {/* Formulaire */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#fbc02d"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Detail"
          placeholderTextColor="#fbc02d"
          value={detail}
          onChangeText={setDetail}
        />

        {/* Boutons */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Update"
              onPress={() => console.log('Bouton modifier')}
              color="#163C45"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => console.log('bouton cancel')}
              color="#163C45"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: '#163C45',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  HeaderTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  HeaderIconStyle: {
    color: 'white',
    marginRight: 18,
    fontSize: 20,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5b4f3b',
  },
  input: {
    height: 40,
    borderColor: '#fbc02d',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: '45%',
    borderRadius: 10,
  },
});

export default App;
