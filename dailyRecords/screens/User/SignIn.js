import { TouchableOpacity, View, TextInput, Text, StyleSheet, ToastAndroid } from "react-native"
import { globalstyles, position } from "../../constants/styles"
import { useContext, useState } from "react"
import { design, palette } from "../../constants"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../firebase"
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import Flow from "../../context"
import { shortVibrate } from "../../constants/vibration"

export default SignIn = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const {user,setUser,setLogged} = useContext(Flow)

    const handleSignIn = () => {
        shortVibrate()
        if (email && password) {
            signInExistingUser()
        } else {
            ToastAndroid.show("Enter Email and Password!", ToastAndroid.SHORT)
        }
    }


    const handleSignUpButton = () => {
        shortVibrate()
        navigation.navigate("SignUp")
        
    }




    const signInExistingUser = () => {
        const auth = getAuth(app)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                ToastAndroid.show("Success Signin!", ToastAndroid.SHORT)
                changeUserState(user)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                ToastAndroid.show(errorCode, ToastAndroid.SHORT)
            });


    }
    const changeUserState = (_userData) => {
        setUser(_userData)
        setLogged(true)
    }

    const handleShowPasswordButton =() => {
        setShowPassword(!showPassword)
    }

    return (
        <View style={globalstyles.container}>
            <View style={[globalstyles.Section, position.center]}>
                {/* email input */}
                <View style={[globalstyles.box]}>
                    <TextInput style={styles.inputText} onChangeText={setEmail} placeholder="Email" ></TextInput>
                </View>
                {/* password */}
                <View style={[globalstyles.box, position.center,styles.passwordInput]}>
                    <TextInput secureTextEntry={true} style={[styles.inputText,styles.passwordInputText]}  keyboardType="visible-password" onChangeText={setPassword} placeholder="Password"></TextInput>
                    <Feather onPress={handleShowPasswordButton} name={`${showPassword ? "eye-off":"eye"}`} size={24} color="black" />
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

    },
    passwordInput:{
        flexDirection:"row"

    },passwordInputText:{
        flex:1
    }
})