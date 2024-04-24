import { Button, StyleSheet, Text, TextInput, View } from "react-native"

function Forgot ({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Find You Account</Text>
                
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email Address or Number" />
                    <View style={{flexDirection:'row'}}>
                        <Button style={styles.button} title="Cancel" onPress={() => navigation.navigate('Login')} />
                        <Button title="Reset Password" />
                    </View>
                </View>
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
        borderColor: 'black',
        marginVertical: 20
    },
  });
  

export default Forgot