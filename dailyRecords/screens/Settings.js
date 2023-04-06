
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header';
import { settings } from '../constants/settings';
import { globalstyles } from '../constants/styles'
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const navigation = useNavigation()
    return (
        <View style={globalstyles.container}>
            <Header title="Settings" navigation={navigation} />
            <View style={globalstyles.Section} >
                {
                    settings.map(tab => 
                    <TouchableOpacity key={tab.id} style={[globalstyles.box, { minHeight: 70 }]} onPress={() => tab.action(navigation)}>
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