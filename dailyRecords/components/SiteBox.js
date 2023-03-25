import { Text, View } from "react-native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { design, palette } from "../constants";

const SiteBox = ({ id, client_name,address,state,navigation }) => {

    const handlePress = () => {
        navigation.navigate("Employee", {
            site: {
                id: id,
                client_name,
                address,
                state:"Done"
            }
        })
    }

    const getBadgeBgColor =() => {
        if(state == "Not Started") {
            return palette.yellow
        }
        if(state == "Working") {
            return palette.success
        }
        if(state == "Done") {
            return palette.blue
        }
    }
    const getBadgeTextColor =() => {
        if(state == "Not Started") {
            return palette.yellowTextColor
        }
        if(state == "Working") {
            return palette.successTextColor
        }
        if(state == "Done") {
            return palette.blueTextColor
        }
    }
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.SectionBox}>
            {/* sites  */}
                <Text style={styles.employeeName}>
                    {client_name}
                </Text>
                <Text style={styles.atPlace}>
                    At. {address}
                </Text>
                <View style={[componentStyles.badge, { backgroundColor: getBadgeBgColor(),marginTop:10 }]}>
                    <Text style={[componentStyles.badgeText, { color: getBadgeTextColor() }]}>{state}</Text>
                </View>
        </TouchableOpacity>
    )
}

export default SiteBox;


const styles = StyleSheet.create({
    SectionBox: {
        backgroundColor: palette.primary,
        borderWidth: 1,
        borderColor: palette.borderColor,
        width: "100%",
        borderRadius: design.borderRadiusProfile,
        minHeight: 100,
        padding: design.paddingSize,
        flexDirection: "column",
        marginBottom: 10
    },
    EmployeeDetails: {
    },
    employeeName: {
        fontSize: 21,
        fontFamily: "Inter_500Medium"
    },
    atPlace: {
        fontSize: 13,
        fontFamily: "Inter_400Regular"
    }
})

const componentStyles = StyleSheet.create({
    badge: {
        padding: 3,
        paddingHorizontal:9,
        borderRadius: 9,
        alignItems: "center",
        backgroundColor: palette.success,
        alignSelf:"flex-end"
    },
    badgeText: {
        fontSize: 18,
        fontFamily: "Inter_500Medium",
        color: palette.successTextColor,

    },
})