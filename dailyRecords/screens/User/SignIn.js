import { TouchableOpacity, View, TextInput, Text, StyleSheet, ToastAndroid } from "react-native"
import { globalstyles, position } from "../../constants/styles"
import { useState } from "react"
import { design, palette } from "../../constants"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../firebase"

export default SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignIn = () => {
        if (email && password) {

            signInExistingUser()
            // createUser()
        } else {

            ToastAndroid.show("Enter Email and Password!", ToastAndroid.SHORT)
        }
    }


    const handleSignUpButton = () => {
        navigation.navigate("SignUp")
    }




    const signInExistingUser = () => {

        const auth = getAuth(app)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                ToastAndroid.show("Success Signin!", ToastAndroid.SHORT)
                // ...
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                ToastAndroid.show(errorCode, ToastAndroid.SHORT)
            });


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
                <TouchableOpacity activeOpacity={0.8} style={[[globalstyles.button, styles.button, styles.buttonPrimary]]} onPress={handleSignIn}>
                    <Text style={styles.buttonTextPrimary}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[globalstyles.button, styles.button, { backgroundColor: "#CED4DA", borderWidth: 0 }]} onPress={handleSignUpButton}>
                    <Text style={[globalstyles.buttonText, { color: "white" }]}>
                        Sign Up
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