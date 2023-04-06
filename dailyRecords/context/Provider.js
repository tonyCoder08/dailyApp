import { useState } from "react";
import Flow from "."

const FlowProvider = ({ children }) => {
    const theme = {
        primary: 'dodgerblue',
        text: 'white',
    }
    const [user,setUser] = useState([])

    const [sites,setSites] = useState([])
    const [employees,setEmployees] = useState([])

    return (
        <Flow.Provider value={{user,setUser}}>
            {children}
        </Flow.Provider>
    );
};
export default FlowProvider;