import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { design, palette } from "../constants"
import { useEffect, useState } from "react"

const Option = ({navigation,button}) => {
    console.log(button)
    const handleEmployee =() => {
        navigation.navigate("AddEmployee")
    }
    const handleSite =() => {
        navigation.navigate("AddSite")
    }
    const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });


    const onchangeposition = () => {
        setPosition({
            x:button.x,
            y:button.y,
            width:button.width,
            height:button.height
        })        
    };

    useEffect(() => {
        onchangeposition()


    },[button])
    return (
        <View style={[styles.container, styles.elevation,{top:position.y + position.height,left:position.x - position.width,zIndex:5}]}>
            <TouchableOpacity style={styles.optionContainer} onPress={handleEmployee}>
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
        width: 150,
        backgroundColor: palette.primary,
        borderRadius: design.borderRadius,
        position: "absolute",
        borderWidth: 1.5,
        borderColor: palette.borderColor,
        minHeight: 100,
        padding: 10,
        alignItems: "center",
        transform: [{ translateX: -70 },{translateY:10}],
        zIndex:6
    },
    elevation: {
        shadowColor: '#D5D5D5',
        elevation: 20,
    },
    optionContainer: {
        width: "100%",
        alignItems: "center",
        margin: 3,
        padding: 5,
        zIndex:6


    },
    optionText: {
        fontSize:18
    },
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: palette.borderColor
    }
})