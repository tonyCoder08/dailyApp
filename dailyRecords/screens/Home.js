import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { design, palette } from "../constants";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                    <Image style={styles.ownerProfile} source={{ width: 58, height: 58, uri: 'https://fixthephoto.com/blog/images/uikit_slider/male-photo-edited-by-fixthephoto-service_1649799173.jpg' }}>
                    </Image>
                {/* details */}
                <View>
                    {/* name */}
                    <Text style={styles.userName}>
                        Nimbaram Suthar
                    </Text >
                    {/* designation */}
                    <Text style={styles.userDesignation}>
                        Contractor
                    </Text>
                </View>

            </View>
            <Text>Home Screen</Text>
        </View>
    )

}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: palette.secondary,
        width: "100%"
    },
    headerContainer: {
        width: "100%",
        // height:70,
        borderBottomColor: palette.borderColor,
        borderBottomWidth: 1,
        backgroundColor: palette.primary,
        padding: design.paddingSize,
        flexDirection: "row",
        alignItems:"center"
    },
    ownerProfile: {
        resizeMode: "contain",
        borderRadius: 11,
        marginRight:10
    },
    userName:{
        fontSize:20,
        fontFamily:"Inter_600SemiBold"
    },
    userDesignation:{
        fontFamily:"Inter_300Light",
        fontSize:15
    }
})