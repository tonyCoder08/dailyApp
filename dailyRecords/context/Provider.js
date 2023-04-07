import { useState } from "react";
import Flow from "."
import AsyncStorage from "@react-native-async-storage/async-storage";
const tempProfile = 'https://fixthephoto.com/blog/images/uikit_slider/male-photo-edited-by-fixthephoto-service_1649799173.jpg'

const FlowProvider = ({ children }) => {
    const [user,setUser] = useState([])
    const [profile,setProfile] = useState(tempProfile)
    const [logged,setLogged] = useState(false)
    const [sites,setSites] = useState([])
    const [employees,setEmployees] = useState([])

    return (
        <Flow.Provider value={{user,setUser,logged,setLogged,profile,setProfile}}>
            {children}
        </Flow.Provider>
    );
};
export default FlowProvider;