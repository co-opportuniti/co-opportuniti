import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        console.log('Attempting to log in using credentials %s, %s', email, password);
        if (email === "" || password === "") {
            // here's where we will handle empty fields / login once coded
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                    {/* Use TouchableOpacity instead of Button */}
                    <TouchableOpacity onPress={handleLogin} style={styles.btnContainer}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
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

    opportunitiText: {
        fontSize: 24,
        marginBottom: 30,
        fontWeight: 'bold',
        color: 'red',
    },

    btnText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },

    btnContainer: {
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'white',
        width: 90, 
        height: 40,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', 
    },
});
