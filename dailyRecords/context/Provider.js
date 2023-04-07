import { useState } from "react";
import Flow from "."

const FlowProvider = ({ children }) => {
    const [user,setUser] = useState([])
    const [logged,setLogged] = useState(false)

    const [sites,setSites] = useState([])
    const [employees,setEmployees] = useState([])

    return (
        <Flow.Provider value={{user,setUser,logged,setLogged}}>
            {children}
        </Flow.Provider>
    );
};
export default FlowProvider;