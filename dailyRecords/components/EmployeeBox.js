import { Text, View } from "react-native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { design, palette } from "../constants";
import { shortVibrate } from "../constants/vibration";

const EmployeeBox = ({ id, name, currently, profile, navigation }) => {

    const handlePress = () => {
        shortVibrate()
        navigation.navigate("Employee", {
            employee: {
                id: id,
                name: name,
                profile: profile
            }
        })
    }
    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.6} style={styles.SectionBox}>
            {/* employee profile */}
            <Image style={styles.ownerProfile} source={{ width: 90, height: 90, uri: profile }}>
            </Image>
            <View style={styles.EmployeeDetails}>
                <Text style={styles.employeeName}>
                    {name}
                </Text>
                <Text style={styles.atPlace}>
                    At.{" "}
                    <Text style={[styles.atPlace,{color:palette.blueTextColor,fontFamily:"Inter_400Regular"}]}>
                        {currently}
                    </Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default EmployeeBox;


const styles = StyleSheet.create({
    ownerProfile: {
        resizeMode: "contain",
        borderRadius: design.borderRadiusProfile,
        marginRight: 10
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
        backgroundColor: palette.success



    },
    badgeText: {
        fontSize: 15,
        fontFamily: "Inter_400Regular",
        color: palette.successTextColor,

    }
})