
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header';
import { settings } from '../constants/settings';
import { globalstyles } from '../constants/styles'
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import Flow from '../context';


const Settings = () => {
    const navigation = useNavigation()
    const {setLogged,updateLogged} = useContext(Flow)
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
                <TouchableOpacity key={11} style={[globalstyles.box, { minHeight: 70 }]} onPress={() => {
                    setLogged(false)
                    updateLogged(false)
                }}>
                    <Text style={styles.title}>
                        Logout
                    </Text>
                </TouchableOpacity>

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