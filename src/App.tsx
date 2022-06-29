import React from 'react';
import SidebarMenu from "./Components/SidebarMenu";
import {SideBarMenuCart, SideBarMenuItem} from "./types/types";
import {FcAdvertising, FcAutomatic, FcChargeBattery} from "react-icons/fc";

function App() {
    const items: SideBarMenuItem[] = [
        {id: "1", label: "Hula", icon: FcAdvertising, url: "/" },
        {id: "2", label: "Hula", icon: FcAutomatic, url: "/" },
        {id: "3", label: "Hula", icon: FcChargeBattery, url: "/" }
    ]
    const card: SideBarMenuCart = {
        id: "cart01",
        displayName: "Markos Rivas",
        title: "Youtuber",
        photoUrl: "10.png",
        url: '/'
    }
    return (
        <div>
            <SidebarMenu
                items={items}
                card={card}
            />
        </div>
    );
}

export default App;
