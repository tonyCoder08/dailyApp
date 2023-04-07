import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native"
import { globalstyles, position } from "../../constants/styles"
import Header from "../../components/Header"
import { useContext, useEffect, useState } from "react"
import Flow from "../../context"
import { EvilIcons } from '@expo/vector-icons';
import { palette } from "../../constants"
import * as ImagePicker from 'expo-image-picker';

export default Profile = ({ navigation }) => {
    const { profile,setProfile } = useContext(Flow)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    useEffect(() => {
        setProfile(profile)
    },[profile])


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });


        if (!result.canceled) {
            setProfile(result.assets[0].uri);
        }
    };

    const handleEditButton = () => {
        pickImage()
    }

    return (
        <View style={globalstyles.container}>
            <Header title={"Edit Profile"} navigation={navigation} />
            <View style={globalstyles.Section}>
                <View style={[styles.profileContainer, position.center]}>
                    <View>

                        <Image style={styles.profileImage} source={{ width: 200, height: 200, uri: profile }} />
                        <TouchableOpacity style={styles.badgeButton} onPress={handleEditButton}>
                            <EvilIcons name="camera" size={34} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={globalstyles.box}>
                    <TextInput style={globalstyles.inputText} onChangeText={setUsername} placeholder="Name"></TextInput>
                </View>

                <View style={globalstyles.box}>
                    <TextInput style={globalstyles.inputText} onChangeText={setEmail} placeholder="Email"></TextInput>
                </View>

                <View style={globalstyles.box}>
                    <TextInput style={globalstyles.inputText} onChangeText={setPhone} placeholder="Phone"></TextInput>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        borderRadius: 100
    },
    profileContainer: {
        marginVertical: 10
    },
    badgeButton: {
        backgroundColor: palette.primary,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: palette.borderColor,
        position: "absolute",
        width: 45,
        height: 45,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        bottom: 10,
        right: 10
    }
})