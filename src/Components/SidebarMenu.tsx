import React, {useState} from 'react';
import {SideBarMenuCart, SideBarMenuItem} from "../types/types";
import {classNames} from "../utils/classes";
import {VscMenu} from "react-icons/vsc";
import SideBarMenuCartView from "./SideBarMenuCartView";
import SideBarMenuItemView from "./SideBarMenuItemView";
import './SidebarMenu.scss'


interface SideBarMenuProps {
    items: SideBarMenuItem[]
    card: SideBarMenuCart
}

const SidebarMenu = ({items,card}: SideBarMenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={classNames("SideBarMenu", isOpen ? "expanded" : "collapsed")}>
            <div className="menuButton">
                <button className="hamburgerButton" onClick={handleClick}>
                    <VscMenu />
                </button>
            </div>
            <SideBarMenuCartView  card={card} isOpen={isOpen}/>
            {
                items.map(item => (
                    <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen}/>
                ))
            }
        </div>
    );
};

export default SidebarMenu;