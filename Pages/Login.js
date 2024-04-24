import { Button, StyleSheet, Text, TextInput, View } from "react-native"

function Login ({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <Text>Username</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Password</Text>
                    <TextInput style={styles.input} />
                </View>
                <Button title="Login" onPress={() => navigation.navigate('Home')}/>
                <Button title="Register Account" onPress={() => navigation.navigate('Register')}/>
                <Button title="Forgot Password" onPress={() => navigation.navigate('Forgot')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        padding: 20
    },
    inputContainer:{
        marginBottom: 20
    },
    title:{
        fontSize: 20
    },
    input:{
        width:'100%',
        borderWidth:1,
        borderColor: 'black'
    },
  });
  

export default Login