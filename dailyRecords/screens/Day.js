import { View, Text, TextInput } from 'react-native'
import { globalstyles } from '../constants/styles'
import Header from '../components/Header'
import { useState } from 'react'
export default Day = () => {
    const [attendance, setAttendance] = useState(false)
    const [site, setSite] = useState("site_name")
    const [time, setTime] = useState("time")
    return (
        <View style={globalstyles.container}>
            <Header title="Day" />
            <View style={globalstyles.Section}>

                <View style={globalstyles.box}>
                    <TextInput required onChangeText={attendance} placeholder="Attendance"></TextInput>

                </View>
                <View style={globalstyles.box}>
                    <TextInput onChangeText={site} placeholder="Site Name"></TextInput>
                </View>

                <View style={globalstyles.box}>
                    <TextInput onChangeText={time} placeholder="Time"></TextInput>
                </View>
            </View>
        </View>
    )
}

