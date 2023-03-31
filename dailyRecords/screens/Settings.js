
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';
import { globalstyles } from '../constants/styles'

const Settings = ({navigation}) => {
    return (
        <View style={globalstyles.container}>
            <Header title="Settings" navigation={navigation} />
            
        </View>

    )
}
export default Settings;

const styles = StyleSheet.create({

})