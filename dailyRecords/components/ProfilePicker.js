import { Image, StyleSheet,TouchableOpacity, View } from "react-native"
import { position } from "../constants/styles"
import { EvilIcons } from '@expo/vector-icons';
import { palette } from "../constants";
import { useContext } from "react";
import Flow from "../context";
import * as ImagePicker from 'expo-image-picker';

export default ProfilePicker = ({_profile,setProfile}) => {
    const {profile} = useContext(Flow)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });


        if (!result.canceled) {
            setProfile(result.assets[0].uri);
        }
    };

    const handleEditButton = () => {
        pickImage()
    }

    return (
        <View style={[styles.profileContainer, position.center]}>
            <View>

                <Image style={styles.profileImage} source={{ width: 200, height: 200, uri: _profile || profile }} />
                <TouchableOpacity style={styles.badgeButton} onPress={handleEditButton}>
                    <EvilIcons name="camera" size={34} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    profileImage: {
        borderRadius: 100
    },
    profileContainer: {
        marginVertical: 10
    },
    badgeButton: {
        backgroundColor: palette.primary,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: palette.borderColor,
        position: "absolute",
        width: 45,
        height: 45,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        bottom: 10,
        right: 10
    }
})