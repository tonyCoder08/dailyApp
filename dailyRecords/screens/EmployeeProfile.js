

import { Image, ScrollView, StyleSheet, Systrace, Text, TouchableOpacity, View } from 'react-native'
import { design, palette } from '../constants'
import Ionicons from '@expo/vector-icons/Ionicons';
import Header  from '../components/Header';
const EmployeeProfile = ({ navigation, route }) => {
    const employee = route.params?.employee
    return (
        <View style={styles.container}>
            {/* header */}
            <Header title={"Employee Profile"} />

            {/* user profile */}
            <ScrollView style={styles.Section}>


                <View style={styles.profileContainer}>
                    <Image style={styles.ownerProfile} source={{ width: 108, height: 108, uri: employee?.profile }}>
                    </Image>
                </View>

                <View style={styles.box}>
                    <View style={styles.boxRow}>

                        <Text style={styles.infoLabel}>
                            Name:
                        </Text>
                        <Text style={styles.infoText}>
                            {employee.name}
                        </Text>
                    </View>
                    <View style={styles.boxRow}>

                        <Text style={styles.infoLabel}>
                            Currently:
                        </Text>
                        <Text style={styles.infoText}>
                        </Text>
                    </View>


                </View>
            </ScrollView>

        </View>
    )
}

export default EmployeeProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.secondary,
        width: "100%"
    },
    headerContainer: {
        width: "100%",
        height: 70,
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
    headerTitle: {
        fontSize: 20,
        fontFamily: "Inter_600SemiBold"
    },
    box: {
        backgroundColor: palette.primary,
        borderWidth: 1,
        borderColor: palette.borderColor,
        width: "100%",
        borderRadius: design.borderRadiusProfile,
        minHeight: 100,
        padding: design.paddingSize,
        marginBottom: 10
    },
    boxRow: {
        flexDirection: "row"
    },
    Section: {
        padding: design.paddingSize,
        flex: 1
    }, ownerProfile: {
        resizeMode: "contain",
        borderRadius: design.borderRadiusProfile,
        marginRight: 10
    },
    profileContainer: {
        marginVertical: 10
    },
    infoLabel: {
        fontSize: 18,
        fontFamily: "Inter_400Regular",
    }
    ,
    infoText: {
        fontSize: 18,
        fontFamily: "Inter_500Medium",
        marginLeft: 10
    }
})