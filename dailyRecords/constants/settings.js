import { shortVibrate } from "./vibration"

export const settings = [
    {
        id: "1",
        title: "User Profile",
        action: (navigation) => {
            console.log("User Profile")
            shortVibrate()
            navigation.navigate("Profile")
        }

    },
    {
        id: "2",
        title: "Options", 
        action: (navigation) => {
            console.log("Options")
            shortVibrate()
            navigation.navigate("Options")
        }


    },
    {
        id: "3",
        title: "Help", 
        action: (navigation) => {
            console.log(" Help")
            shortVibrate()
            navigation.navigate("Options")
            
        }


    },
    // {
    //     id: 4,
    //     title: "Log Out", 
    //     action: (navigation) => {
    //         console.log("Logout")
    //         navigation.navigate("Options")
    //     }

    // }

]