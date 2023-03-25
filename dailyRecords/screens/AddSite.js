import { Text, TouchableOpacity, View } from "react-native";
import { globalstyles } from "../constants/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from "../constants";

const AddSite = ({navigation}) => {
    const handleBackButton = () => {
        navigation.goBack()
    }
    return (
        <View style={globalstyles.container}>
            <View style={globalstyles.headerContainer}>
                <TouchableOpacity onPress={handleBackButton}>

                    <Ionicons style={{marginRight:10}} name="ios-chevron-back-outline" size={32} color={palette.textColor} />
                </TouchableOpacity>
                <Text style={globalstyles.headerTitle}>
                    Add Site
                </Text>
            </View>
        </View>
    )
}
export default AddSite;

