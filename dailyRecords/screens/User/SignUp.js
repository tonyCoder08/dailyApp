import { TouchableOpacity, View, TextInput, Text, StyleSheet, ToastAndroid } from "react-native"
import { globalstyles, position } from "../../constants/styles"
import { useState } from "react"
import { design, palette } from "../../constants"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

export default SignUp = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = () => {
        if (email && password) {

            // signInExistingUser()
            createUser()
        } else {

            ToastAndroid.show("Enter Email and Password!", ToastAndroid.SHORT)
        }

    }

    const handleSignInButton = () => {
        navigation.navigate("SignIn")
    }


    const auth = getAuth()

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            ToastAndroid.show("Success!", ToastAndroid.SHORT)
            console.log(user)
        }).catch(error => {
            console.log(error)
            ToastAndroid.show(error.code, ToastAndroid.SHORT)
        })
    }
    return (
        <View style={globalstyles.container}>
            <View style={[globalstyles.Section, position.center]}>
                {/* email input */}
                <View style={[globalstyles.box, position.center]}>
                    <TextInput style={styles.inputText} onChangeText={setEmail} placeholder="Email" ></TextInput>
                </View>
                {/* password */}
                <View style={[globalstyles.box, position.center]}>
                    <TextInput style={styles.inputText} onChangeText={setPassword} placeholder="Password"></TextInput>
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.8} style={[[globalstyles.button, styles.button, styles.buttonPrimary]]} onPress={handleSignUp}>
                    <Text style={styles.buttonTextPrimary}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[globalstyles.button, styles.button, { backgroundColor: "#CED4DA", borderWidth: 0 }]} onPress={handleSignInButton}>
                    <Text style={[globalstyles.buttonText, { color: "white" }]}>
                        Sign In
                    </Text>
                </TouchableOpacity>


            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    inputText: {
        fontSize: 20
    },
    shadow: {
        shadowColor: palette.pacificBlue,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.5,
        elevation: 9,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        padding: 10,
        gap: 7
    },
    button: {
        flex: 1,
    },
    buttonPrimary: {
        backgroundColor: palette.primary,
        borderWidth: 1,
        borderColor: palette.borderColor,
        borderRadius: design.borderRadiusProfile,
        padding: design.paddingSize,
    }, buttonTextPrimary: {
        fontSize: 20,
        color: "#000",

    },
    buttonSecondary: {

    }
})