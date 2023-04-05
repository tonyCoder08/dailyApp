import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { design, palette } from "../constants"
import { useEffect, useState } from "react"

const Option = ({ button, navigation }) => {
    const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
    console.log(position)
    const handleEmployee = () => {
        navigation.navigate("AddEmployee")
    }
    const handleSite = () => {
        navigation.navigate("AddSite")
    }


    const onchangeposition = () => {
        setPosition({
            x: button.x,
            y: button.y,
            width: button.width,
            height: button.height
        })
    };

    useEffect(() => {
        onchangeposition()
    }, [button])

    useEffect(() => {
        onchangeposition()
    }, [])
    return (
        <View style={[styles.container, styles.elevation, { top: position.y + position.height, left: position.x - position.width, zIndex: 5 }]}>
            <TouchableOpacity style={styles.optionContainer} onPress={handleEmployee} >
                <Text style={styles.optionText}>
                    Employee
                </Text>
            </TouchableOpacity>
            <View style={styles.seperator}>

            </View>
            <TouchableOpacity style={styles.optionContainer} onPress={handleSite}>
                <Text style={styles.optionText}>
                    Site
                </Text>
            </TouchableOpacity>

        </View>

    )
}
export default Option


const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: palette.primary,
        borderRadius: 15,
        position: "absolute",
        borderWidth: 1.5,
        borderColor: palette.borderColor,
        minHeight: 100,
        padding: 10,
        alignItems: "center",
        transform: [{ translateX: -110 }, { translateY: 10 }],
        zIndex: 6,
        gap:6
    },
    elevation: {
        shadowColor: '#D5D5D5',
        elevation: 20,
    },
    optionContainer: {
        width: "100%",
        alignItems: "center",
        zIndex: 6,
        backgroundColor: "#f4f4f4",
        borderRadius:7,
        paddingVertical:10,


    },
    optionText: {
        fontSize: 18,
        color:palette.textColor,
        fontFamily:"Inter_500Medium"
    },
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: palette.borderColor
    }
})