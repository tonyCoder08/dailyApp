import { StyleSheet, Text, TouchableOpacity, View, useAnimatedValue } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { design, palette } from "../constants";
import { shortVibrate } from "../constants/vibration";
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>

            <TouchableOpacity onPress={() => {
                shortVibrate()
                navigation.goBack()
            }}>


                <Ionicons style={styles.headerIcon} name="ios-chevron-back-outline" size={32} color={palette.textColor} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
                {title}
            </Text>

        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
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
})