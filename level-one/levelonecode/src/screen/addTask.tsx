import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

function AddTask(): React.JSX.Element {
  const onPressFunction = () => {
    // Logique pour enregistrer les informations des champs
    console.log('Enregistrement de la tâche');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#163C45'} barStyle={'light-content'} />
      <View style={{flex: 1, backgroundColor: '#554F41'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>Add Task</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Title"
            placeholderTextColor="#F8BE4B"
            style={styles.input}
          />
          <TextInput
            placeholder="Details"
            placeholderTextColor="#F8BE4B"
            style={styles.input}
            multiline
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPressFunction}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#163C45',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    padding: 10,
    fontSize: 16,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#F8BE4B', // Ligne de soulignement
  },
  buttonContainer: {
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    width: '100%', // Ajuste la taille du bouton
    backgroundColor: '#163C45',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
