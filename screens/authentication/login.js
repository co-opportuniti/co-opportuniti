import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    console.log('Attempting to log in using credentials %s, %s', email, password);
    // Add your login logic here
    if (email === "" || password === "") {
        
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CO</Text>
     <Text style={styles.opportunitiText}>OPPORTUNITI</Text>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputField}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Login" color='white' onPress={handleLogin} style={styles.btn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },

  contentContainer: {
    width: '80%',
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 20,
  },

  inputField: {
    height: 40,
    width: 170,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  btn: {
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  opportunitiText: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});
