import { Text, TouchableOpacity, View } from "react-native";
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
        const siteData = {
            id:id,
            Architect:Architect,
            client_name:clientName,
            email:email,
            phone:phone
        }
        const list = storage
        list.push(siteData)

        saveSiteToStorage(list)
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
                    <TextInput onChangeText={setArchitect}  placeholder="Architect Name"></TextInput>
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

