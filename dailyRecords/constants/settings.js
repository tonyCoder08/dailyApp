
export const settings = [
    {
        id: "1",
        title: "User Profile",
        action: (navigation) => {
            console.log("User Profile")
            navigation.navigate("Profile")
        }

    },
    {
        id: "2",
        title: "Options", 
        action: (navigation) => {
            console.log("Options")
            navigation.navigate("Options")
        }


    },
    {
        id: "3",
        title: "Help", 
        action: (navigation) => {
            console.log(" Help")
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