import { Platform, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { design, palette } from "../constants";

const Employee = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.ownerProfile} source={{ width: 58, height: 58, uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg' }}>
                </Image>
                {/* details */}
                <View>
                    {/* name */}
                    <Text style={styles.userName}>
                        Employee Name
                    </Text >
                    {/* designation */}
                    <Text style={styles.userDesignation}>
                        Employee
                    </Text>
                </View>

            </View>
            <View style={styles.HomeSection}>

                <Text style={styles.sectionHeading}>Calendar </Text>

                {/* for employees */}
                <TouchableOpacity activeOpacity={0.6} style={styles.SectionBox}>
                    {/* employee profile */}
                    {/* <Image style={styles.ownerProfile} source={{ width: 90, height: 90, uri: 'https://fixthephoto.com/blog/images/uikit_slider/male-photo-edited-by-fixthephoto-service_1649799173.jpg' }}>
                    </Image>
                    <View style={styles.EmployeeDetails}>
                        <Text style={styles.employeeName}>
                            Employee Name
                        </Text>
                        <Text style={styles.atPlace}>
                            At. Address
                        </Text>
                    </View> */}
                </TouchableOpacity>

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
            </View>
        </View>
    )

}
export default Employee;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
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
    HomeSection: {
        padding: design.paddingSize

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