import { Platform, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import EmployeeBox from "../components/EmployeeBox";
import { design, employees, palette } from "../constants";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.ownerProfile} source={{ width: 58, height: 58, uri: 'https://fixthephoto.com/blog/images/uikit_slider/male-photo-edited-by-fixthephoto-service_1649799173.jpg' }}>
                </Image>
                {/* details */}
                <View style={{ flex: 1 }}>
                    {/* name */}
                    <Text style={styles.userName}>
                        Nimbaram Suthar
                    </Text >
                    {/* designation */}
                    <Text style={styles.userDesignation}>
                        Contractor
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.6}>

                    <Ionicons style={styles.headerIcon} name="ios-add-circle-outline" color={palette.textColor} size={30} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>

                    <Feather style={styles.headerIcon} name="settings" color={palette.textColor} size={25} />
                </TouchableOpacity>

            </View>
            <ScrollView style={styles.HomeSection}>

                <Text style={styles.sectionHeading}>Employees </Text>

                {/* for employees */}



                {/* dynamic employee */}
                {
                    employees.map((employee) => <EmployeeBox id={employee.id} name={employee.name} profile={employee.profile} key={employee.id} currently={employee.currently} navigation={navigation} />)
                }


                <Text style={styles.sectionHeading}>Sites  </Text>

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
                        <View style={[componentStyles.badge, { backgroundColor: palette.blue }]}>
                            <Text style={[componentStyles.badgeText, { color: palette.blueTextColor }]}>Done</Text>
                        </View>
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
                        <View style={[componentStyles.badge, { backgroundColor: palette.success }]}>
                            <Text style={[componentStyles.badgeText, { color: palette.blueTextColor }]}>In Progress</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )

}
export default Home;

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
    headerIcon: {
        marginRight: 10
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
        padding: design.paddingSize,
        flex: 1

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