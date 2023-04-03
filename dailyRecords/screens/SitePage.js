import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { globalstyles } from '../constants/styles'
import Feather from '@expo/vector-icons/Feather';
import { palette } from '../constants';
import Ionicons from '@expo/vector-icons/Ionicons';
export default SitePage = ({ navigation, route }) => {
    const site = route.params?.site


    const handleBack =() =>{
        navigation.goBack()
    }




    return (
        <View style={globalstyles.container}>
            <View style={globalstyles.headerContainer}>
                <TouchableOpacity onPress={handleBack} >

                    <Ionicons style={{marginRight:10}} name="ios-chevron-back-outline" size={32} color={palette.textColor} />
                </TouchableOpacity>
                {/* details */}
                <View style={{ flex: 1 }}>
                    {/* name */}
                    <Text style={globalstyles.headerTitle}>
                        Site Details
                    </Text >
                </View>
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Home")}>

                    <Feather style={styles.headerIcon} name="home" color={palette.textColor} size={25} />
                </TouchableOpacity>
            </View>

            {/* for site details */}


            <View style={globalstyles.Section}>
                <View style={globalstyles.box}>
                  <Text>{site.client_name}</Text>  
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    userName: {
        fontSize: 20,
        fontFamily: "Inter_600SemiBold"
    },
    userDesignation: {
        fontFamily: "Inter_300Light",
        fontSize: 15
    },

})