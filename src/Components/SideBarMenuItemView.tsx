import React from 'react';
import {SideBarMenuItem} from "../types/types";
import {classNames} from "../utils/classes";
import './SideBarMenuItemView.scss'

interface SideBarMenuItemViewProps {
    item: SideBarMenuItem
    isOpen: boolean
}

const SideBarMenuItemView = ({item,isOpen}: SideBarMenuItemViewProps) => {
    return (
        <div className='SideBarMenuItemProps'>
            <a href={item.url}>
                <div className={classNames("itemContent", isOpen ? "" : "collapsed")}>
                    <div className='icon'>
                        <item.icon  size="32"/>
                    </div>
                    <span className='label'>{item.label}</span>
                </div>
            </a>
            {!isOpen ? (
                <div className="tooltip">
                    {item.label}
                </div>
            ) : ""}
        </div>
    );
};

export default SideBarMenuItemView