import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { globalstyles } from '../constants/styles'
import Header from '../components/Header'
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react'
import { NavigationHelpersContext } from '@react-navigation/native';


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
export default Day = ({navigation,route}) => {
    const [attendance, setAttendance] = useState("Present")
    const [date,setDate]=useState("")

    const day = route.params.day

    useEffect(() => {
        setDate(day.dateString)
    },[day])

    const handleSaveDay =() =>{
        navigation.navigate("Employee",{day:{
            attendance:attendance,
            date:date,

        }})
    }





    return (
        <View style={globalstyles.container}>
            <Header title={date} navigation={navigation} />
            <View style={globalstyles.Section}>

                <View style={globalstyles.box}>
                    <TextInput required onChangeText={setAttendance} placeholder="Attendance"></TextInput>
                    <Picker
                        selectedValue={attendance}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setAttendance(itemValue)}
                    >
                        <Picker.Item label="Present" value="present" />
                        <Picker.Item label="Absent" value="absent" />
                    </Picker>
                </View>
                {/* <View style={globalstyles.box}>
                    <TextInput onChangeText={setSite} placeholder="Site Name"></TextInput>
                </View> */}

                {/* <View style={globalstyles.box}>
                    <TextInput onChangeText={setTime} placeholder="Time"></TextInput>
                </View> */}
                <TouchableOpacity activeOpacity={0.8} style={globalstyles.button} onPress={handleSaveDay} >
                    <Text style={globalstyles.buttonText}>
                        Save Day
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

