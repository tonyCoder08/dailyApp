import { TouchableOpacity, View, TextInput, Text, StyleSheet, ToastAndroid } from "react-native"
import { globalstyles, position } from "../../constants/styles"
import { useState } from "react"
import { design, palette } from "../../constants"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../../firebase"
import { Feather } from '@expo/vector-icons';

export default SignUp = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [showPassword,setShowPassword] = useState(false)

    const handleSignUp = () => {
        if (email && password) {
            createUser()
        } else {
            ToastAndroid.show("Enter Email and Password!", ToastAndroid.SHORT)
        }

    }

    const handleSignInButton = () => {
        navigation.navigate("SignIn")
    }


    
    const createUser = () => {
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            ToastAndroid.show("Registered!", ToastAndroid.SHORT)
            goToHome()
        }).catch(error => {
            ToastAndroid.show(error.code, ToastAndroid.SHORT)
        })
    }

    const goToHome =() => {
        navigation.navigate("Home")
    }


    const handleShowPasswordButton =()=>{
        setShowPassword(!showPassword)
    }
    return (
        <View style={globalstyles.container}>
            <View style={[globalstyles.Section, position.center]}>
                {/* email input */}
                <View style={[globalstyles.box]}>
                    <TextInput style={styles.inputText} onChangeText={setEmail} placeholder="Email" returnKeyType="join" ></TextInput>
                </View>
                {/* password */}
                <View style={[globalstyles.box, position.center,styles.passwordInput]}>
                    <TextInput secureTextEntry={true} style={[styles.inputText,styles.passwordInputText]}  keyboardType="visible-password" onChangeText={setPassword} placeholder="Password"></TextInput>
                    <Feather onPress={handleShowPasswordButton} name={`${showPassword ? "eye-off":"eye"}`} size={24} color="black" />
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
        fontSize: 20,
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