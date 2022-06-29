import React from 'react';
import {SideBarMenuCart} from "../types/types";
import {classNames} from "../utils/classes";
import './SideBarMenuCartView.scss'
interface SideBarMenuCartViewProps {
    card: SideBarMenuCart
    isOpen: boolean
}

const SideBarMenuCartView = ({card, isOpen}: SideBarMenuCartViewProps) => {
    return (
        <div className='SidebarMenuCardView'>
            <img
                className='profile'
                src={card.photoUrl}
                alt={card.displayName}
                width='100%'
            />
            <div className={classNames("profileInfo", isOpen ? "" : "collapsed")}>
                <div className='name'>{card.displayName}</div>
                <div className='title'>{card.title}</div>
                <div className='url'>
                    <a href={card.url}>profile</a>
                </div>
            </div>
        </div>
    );
};

export default SideBarMenuCartView;