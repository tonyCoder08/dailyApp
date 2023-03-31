
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header';
import { settings } from '../constants/settings';
import { globalstyles } from '../constants/styles'

const Settings = ({ navigation }) => {
    return (
        <View style={globalstyles.container}>
            <Header title="Settings" navigation={navigation} />
            <View style={globalstyles.Section} >
                {
                    settings.map(tab => <TouchableOpacity style={[globalstyles.box, { minHeight: 70 }]}>
                        <Text style={styles.title}>
                            {tab.title}
                        </Text>
                    </TouchableOpacity>)
                }

            </View>

        </View>

    )
}
export default Settings;

const styles = StyleSheet.create({
    title: {
        fontSize: 21,
        fontFamily: "Inter_500Medium"
    },
})