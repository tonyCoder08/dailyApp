import { useContext, useEffect, useState } from "react";
import Flow from "."
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
const tempProfile = 'https://fixthephoto.com/blog/images/uikit_slider/male-photo-edited-by-fixthephoto-service_1649799173.jpg'
const tempAvatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png'

const FlowProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [profile, setProfile] = useState(tempAvatar)
    const [logged, setLogged] = useState(false)
    const [sites, setSites] = useState([])
    const [employees, setEmployees] = useState([])

    const checkLogged = async () => {
        // updateLogged()
        const log = await getLogged()
        if (log) {
            await retrieveUserFromStorage()
            setLogged(true)
        } else {
            setLogged(false)
        }


    }

    const getLogged = async () => {
        const _logged = await AsyncStorage.getItem("@logged")
        const _loggedJSon = JSON.parse(_logged)
        return _loggedJSon.isLogged
    }


    const updateLogged = async (_what) => {
        const _loggedJS = JSON.stringify({
            isLogged: _what
        })

        await AsyncStorage.setItem("@logged", _loggedJS)
    }

    const updateUser = async (_user) => {
        updateLogged(true)
        const _userdata = JSON.stringify(_user)
        await AsyncStorage.setItem("@user", _userdata)

    }

    const retrieveUserFromStorage = async () => {
        const data = await AsyncStorage.getItem("@user")
        const dataJSON = JSON.parse(data)
        setUser(dataJSON)

    }

    useEffect(() => {
        checkLogged()
    }, [])

    return (
        <Flow.Provider value={{ user, setUser, logged, setLogged, profile, setProfile, updateUser ,updateLogged}}>
            {children}
        </Flow.Provider>
    );
};
export default FlowProvider;