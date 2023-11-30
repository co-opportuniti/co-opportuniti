
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    async function handleLogin() {
        if(email === "" || password === "") {
            // where we would put a warning message to please enter data?
            setError("Please enter login information.");
            return;
        }

        const login = await handleCredentials(email, password);

        
    };

    return (
        <View style = {styles.container}>  
                <TextInput 
                    style = {styles.inputField}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder = "Email"
                    keyboardType = "email-address"
                    autoCapitalize='none'
                    />
                <TextInput
                    style={styles.inputField}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder = "Password"
                    secureTextEntry
                    />
                <Button title="Login" onPress={handleLogin} style={styles.btn}/>

            {/* figuring out how to display error message in login process? */}
            <Text style = {styles.title}> {error} </Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'gray',
        borderRadius: 10
    },

    title: {
        fontSize: 60, 
        marginBottom: 20,
        alignSelf: 'center'
    },
    inputField: {
        height: 40, 
        borderColor: 'black',
        borderWidth:1,
        paddingLeft:10,
        marginBottom:10,
        backgroundColor: 'white', // White background for text input
        borderRadius: 5
    },
    btn: {
        borderRadius: 5,
        backgroundColor: 'gray', // Rounded gray background for the button
        marginTop: 10
    }
});