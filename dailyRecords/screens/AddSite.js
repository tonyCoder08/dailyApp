import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalstyles } from "../constants/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from "../constants";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddSite = ({ navigation }) => {
    const [storage,setStorage] = useState([])
    const [Architect,setArchitect] = useState("")
    const [clientName,setClientName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")


    const date =new Date()
    const id= date.getTime()




    const getSites = async () => {
        const data = await AsyncStorage.getItem("@sites")
        const dataJSON = JSON.parse(data) || []
        setStorage(dataJSON)
        
    }


    const saveSiteToStorage = async (_storage) => {
        const _storageJSON = JSON.stringify(_storage)
        await AsyncStorage.setItem("@sites",_storageJSON)
    }

    useEffect(() => {
        getSites()

    },[])
    const handleSave = () => {
        if(clientName) {
            const siteData = {
                id:id,
                Architect:Architect || "unknown",
                client_name:clientName ||" unknown",
                email:email || "unknown@gmail.com",
                phone:phone ||"919342349234",
                address:address||"unknown",
                state:"Not Started"
            }
            const list = storage
            list.push(siteData)
    
            saveSiteToStorage(list)
            goToHome()
        }
    }

    const goToHome = () => {
        navigation.goBack()
    }





    const handleBackButton = () => {
        navigation.goBack()
    }
    return (
        <View style={globalstyles.container}>
            <View style={globalstyles.headerContainer}>
                <TouchableOpacity onPress={handleBackButton}>

                    <Ionicons style={{ marginRight: 10 }} name="ios-chevron-back-outline" size={32} color={palette.textColor} />
                </TouchableOpacity>
                <Text style={globalstyles.headerTitle}>
                    Add Site
                </Text>
            </View>
            <View style={globalstyles.Section}>



                <View style={globalstyles.box}>
                    <TextInput required onChangeText={setArchitect}  placeholder="Architect Name"></TextInput>
                </View>
                <View style={globalstyles.box}>
                    <TextInput onChangeText={setClientName} placeholder="Client Name"></TextInput>
                </View>

                <View style={globalstyles.box}>
                    <TextInput onChangeText={setEmail} placeholder="Email"></TextInput>
                </View>

                <View style={globalstyles.box}>
                    <TextInput onChangeText={setPhone} placeholder="Phone"></TextInput>
                </View>
                <View style={globalstyles.box}>
                    <TextInput onChangeText={setAddress} placeholder="Address"></TextInput>
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
export default AddSite;



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