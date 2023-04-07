import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalstyles } from "../constants/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from "../constants";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../firebase";




const tempProfile = 'https://fixthephoto.com/blog/images/uikit_slider/male-photo-edited-by-fixthephoto-service_1649799173.jpg'
const tempAvatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png'
const AddEmployee = ({ navigation }) => {
    const [storage, setStorage] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const handleBackButton = () => {
        navigation.goBack()
    }

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });


        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const d = new Date()
    const id = d.getTime()

    const handleSave = () => {
        const data = {
            id: id,
            name,
            email,
            phone,
            profile: image || tempAvatar
        }
        const list = storage
        list.push(data)
        setFirestoreCollection()
        savetoStorage(list)
        goToHome()
    }

    const goToHome = () => {
        navigation.goBack()
    }

    const savetoStorage = async (_storage) => {
        const _storageString = JSON.stringify(_storage)
        await AsyncStorage.setItem("@employees", _storageString)
    }


    const getData = async () => {
        const data = await AsyncStorage.getItem("@employees")
        const dataJson = JSON.parse(data) || []
        setStorage(dataJson)

    }



    const setFirestoreCollection = async () => {
        const db = getFirestore(app);

        const data = {
            id: id,
            name,
            email,
            phone,
            profile: image || tempAvatar
        }
        await setDoc(doc(db, "employees", name), {
            name,
            email,
            phone,
            profile:tempAvatar,
            id:id
        })
        console.log("DONE")
    }


    useEffect(() => {
        getData()
    }, [])
    return (
        <View style={globalstyles.container}>

            <View style={globalstyles.headerContainer}>
                <TouchableOpacity onPress={handleBackButton}>

                    <Ionicons style={{ marginRight: 10 }} name="ios-chevron-back-outline" size={32} color={palette.textColor} />
                </TouchableOpacity>
                <Text style={globalstyles.headerTitle}>
                    Add Employee
                </Text>
            </View>
            <View style={globalstyles.Section}>
                <View style={[globalstyles.box]}>
                    <Image style={globalstyles.ownerProfile} source={{ width: 108, height: 108, uri: image || tempProfile }}>
                    </Image>
                    <TouchableOpacity style={[globalstyles.box, { marginTop: 10 }]} onPress={pickImage}>
                        <Text style={styles.text}>
                            Add a profile
                        </Text>

                    </TouchableOpacity>
                </View>


                <View style={globalstyles.box}>
                    <TextInput onChangeText={setName} placeholder="Name"></TextInput>
                </View>

                <View style={globalstyles.box}>
                    <TextInput onChangeText={setEmail} placeholder="Email"></TextInput>
                </View>

                <View style={globalstyles.box}>
                    <TextInput onChangeText={setPhone} placeholder="Phone"></TextInput>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddEmployee;

const styles = StyleSheet.create({
    text: {
        fontSize: 11,
        fontFamily: "Inter_400Regular",

    },
    button: {
        padding: 10,
        backgroundColor: "#11181C",
        borderColor: palette.borderColor,
        borderWidth: 1,
        borderRadius: 11,
        alignItems: "center"

    },
    buttonText: {
        fontSize: 20,
        color: "#D9D9D9",
    }
})

