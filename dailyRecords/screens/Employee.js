import { Platform, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { design, palette } from "../constants";
import Feather from '@expo/vector-icons/Feather';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { TimeDatePicker, Modes } from "react-native-time-date-picker";
import { useCallback, useState } from "react";



const Employee = ({ navigation, route }) => {

    const [days, setDays] = useState({
        '2023-04-04': { disabled: true, startingDay: true, color: '#48BFE3', endingDay: true },
        '2023-04-01': { disable: true, color: "#5390D9", startingDay: true, endingDay: true, textColor: "white" },
        '2023-04-02': { disable: true, color: "#5390D9", startingDay: true, endingDay: true, textColor: "white" },
        '2023-04-03': { disable: true, color: "#5390D9", startingDay: true, endingDay: true, textColor: "white" },
        '2023-04-07': { disable: true, color: "#5390D9", startingDay: true, endingDay: true, textColor: "white" },
        '2023-04-05': { disable: true, color: "#5390D9", startingDay: true, endingDay: true, textColor: "white" },
    })
    const employee = route.params?.employee

    const time = new Date()
    const now = time.getTime()
    const handlePress = () => {
        navigation.navigate("EmployeeProfile", { employee })
    }

    const onDayPress = useCallback((day) => {
        console.log("day clicked",day)
        navigation.navigate("Day")
      }, []);
    
    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handlePress}>

                    <Image style={styles.ownerProfile} source={{ width: 58, height: 58, uri: employee?.profile }}>
                    </Image>
                </TouchableOpacity>
                {/* details */}
                <View style={{ flex: 1 }}>
                    {/* name */}
                    <Text style={styles.userName}>
                        {employee?.name}
                    </Text >
                    {/* designation */}
                    <Text style={styles.userDesignation}>
                        Employee
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Home")}>

                    <Feather style={styles.headerIcon} name="home" color={palette.textColor} size={25} />
                </TouchableOpacity>

            </View>
            <ScrollView style={styles.Section}>

                <Text style={styles.sectionHeading}>Calendar </Text>

                {/* for employees */}
                {/* <TouchableOpacity activeOpacity={0.6} style={[styles.SectionBox, { alignContent: "center", alignItems: "center" }]}> */}
                {/* <TimeDatePicker
                        selectedDate={now}
                        mode={Modes.calendar}
                        options={{
                            daysStyle: {
                                borderRadius: 11,
                                borderWidth: 0.5,
                                borderColor: "#f1f1f1",
                                fontSize: 20
                            },
                            defaultFont: "Inter_400Regular",
                            textFontSize: 21,
                            is24Hour: false,

                        }}
                        onMonthYearChange={(month) => {
                            console.log("month: ", month);
                        }}
                        onSelectedChange={(selected) => {
                            console.log("selected: ", selected);
                        }}
                        onTimeChange={(time) => {
                            console.log("time: ", time);
                        }}
                        configs={{
                            dayNames: "Monday"
                        }}

                    /> */}

                <Calendar
                    style={calendar.calendarView}
                    initialDate="2023-04-05"
                    onDayPress={onDayPress}
                    
                    // Collection of dates that have to be marked. Default = {}
                    // markedDates={{
                    //     '2023-04-02': { selected: false, marked: true, selectedColor: 'blue' },
                    //     '2023-04-03': { marked: true },
                    //     '2023-04-04': { marked: true, dotColor: 'red', activeOpacity: 0 },
                    //     '2023-04-10': { disabled: true, disableTouchEvent: true },
                    //     '2023-04-07': { selected: false, marked: true, selectedColor: "violet" },
                    // }}
                    markingType="period"
                    markedDates={days}
                    renderDay={styles.Section}



                />
                {/* </TouchableOpacity> */}

                <Text style={styles.sectionHeading}>Previous Sites  </Text>

                {/* for sites */}
                <TouchableOpacity activeOpacity={0.6} style={styles.SectionBox}>
                    {/* sites  */}
                    <View style={styles.EmployeeDetails}>
                        <Text style={styles.employeeName}>
                            Client Name
                        </Text>
                        <Text style={styles.atPlace}>
                            At. Address
                        </Text>
                        {/* <View style={[componentStyles.badge, { backgroundColor: palette.blue }]}>
                            <Text style={[componentStyles.badgeText, { color: palette.blueTextColor }]}>Done</Text>
                        </View> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.SectionBox}>

                    <View style={styles.EmployeeDetails}>
                        <Text style={styles.employeeName}>
                            Client Name
                        </Text>
                        <Text style={styles.atPlace}>
                            At. Address
                        </Text>
                        {/* <View style={[componentStyles.badge, { backgroundColor: palette.success }]}>
                            <Text style={[componentStyles.badgeText, { color: palette.blueTextColor }]}>In Progress</Text>
                        </View> */}

                    </View>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )

}
export default Employee;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.secondary,
        width: "100%"
    },
    headerContainer: {
        width: "100%",
        // height:70,
        borderBottomColor: palette.borderColor,
        borderBottomWidth: 1,
        backgroundColor: palette.primary,
        padding: design.paddingSize,
        flexDirection: "row",
        alignItems: "center"
    },
    ownerProfile: {
        resizeMode: "contain",
        borderRadius: design.borderRadiusProfile,
        marginRight: 10
    },
    userName: {
        fontSize: 20,
        fontFamily: "Inter_600SemiBold"
    },
    userDesignation: {
        fontFamily: "Inter_300Light",
        fontSize: 15
    },
    Section: {
        padding: design.paddingSize,
        flex: 1,

    },
    sectionHeading: {
        fontSize: 18,
        fontFamily: "Inter_400Regular",
        marginVertical: 10

    },
    SectionBox: {
        backgroundColor: palette.primary,
        borderWidth: 1,
        borderColor: palette.borderColor,
        width: "100%",
        borderRadius: design.borderRadiusProfile,
        minHeight: 100,
        padding: design.paddingSize,
        flexDirection: "row",
        marginBottom: 10
    },
    EmployeeDetails: {
    },
    employeeName: {
        fontSize: 20,
        fontFamily: "Inter_500Medium"
    },
    atPlace: {
        fontSize: 15
        ,
        fontFamily: "Inter_400Regular"
    }
})

const componentStyles = StyleSheet.create({
    badge: {
        padding: 3,
        borderRadius: 9,
        alignItems: "center",



    },
    badgeText: {
        fontSize: 15,
        fontFamily: "Inter_400Regular",
        color: palette.successTextColor,

    }
})

const calendar = StyleSheet.create({
    calendarView: {
        flex: 1,
        borderRadius: 11,
        borderColor: palette.borderColor,
        borderWidth: 1,
        paddingVertical: 20
    }
})

const renderDay = StyleSheet.create({
    day: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    present: {
        backgroundColor: '#7bc043',
    },
    absent: {
        backgroundColor: '#f44242',
    },
    late: {
        backgroundColor: '#f4c141',
    },
    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
    presentText: {
        color: '#fff',
    },
    absentText: {
        color: '#fff',
    },
    lateText: {
        color: '#333',
    },
});