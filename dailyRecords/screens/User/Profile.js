import { Text, View } from "react-native"
import { globalstyles } from "../../constants/styles"
import Header from "../../components/Header"

export default Profile =({navigation}) => {
    return (
        <View style={globalstyles.container}>
            <Header  title={"Edit Profile"} navigation={navigation} />
            <View style={globalstyles.Section}>
                <View style={globalstyles.box}>
                    <Text>
                        User
                    </Text>

                </View>

            </View>
        </View>
    )
}