import { StyleSheet } from "react-native";
import { design, palette } from ".";

export const globalstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.secondary,
        width: "100%"
    },
    headerContainer: {
        width: "100%",
        minHeight:70,
        borderBottomColor: palette.borderColor,
        borderBottomWidth: 1,
        backgroundColor: palette.primary,
        padding: design.paddingSize,
        flexDirection: "row",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: "Inter_600SemiBold"
    },
    box: {
        backgroundColor: palette.primary,
        borderWidth: 1,
        borderColor: palette.borderColor,
        width: "100%",
        borderRadius: design.borderRadiusProfile,
        padding: design.paddingSize,
        marginBottom: 10
    }, Section: {
        padding: design.paddingSize,
        flex: 1
    },
    ownerProfile: {
        resizeMode: "contain",
        borderRadius: design.borderRadiusProfile,
        marginRight: 10
    },text: {
        fontSize: 11,
        fontFamily: "Inter_400Regular",

    },
    button: {
        padding: 10,
        backgroundColor: "#11181C",
        borderColor: palette.borderColor,
        borderWidth: 1,
        borderRadius: 11,
        alignItems: "center"

    },
    buttonText: {
        fontSize: 20,
        color: "#D9D9D9",
    }
})


export const position = StyleSheet.create({
    center:{
        alignItems:"center",
        justifyContent:"center"
    }
})