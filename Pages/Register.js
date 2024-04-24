import { StyleSheet, Text, TextInput, View } from "react-native"

function Register () {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Register Account</Text>
                <View style={[styles.inputContainer, {flexDirection: 'row'}]}>
                    <View>
                        <Text>First Name: </Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text>Last Name: </Text>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Email Address: </Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text>New Password: </Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Birthday: </Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Gender</Text>
                    <TextInput style={styles.input} />
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
          marginBottom: 20,
      },
      title:{
          fontSize: 20
      },
      input:{
          width:'100%',
          borderWidth:1,
          borderColor: 'black'
      },
      
})

export default Register