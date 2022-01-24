// param action: купить, снять, снять посуточно, ипотека
// param search: квартира, комната, дом, коммерческая, участок
// param new_buildings: ?


import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { ApartmentIcon, RoomIcon, HouseIcon, CommercialIcon, PlotIcon } from '../../../assets/Icons';

import styles from './NavigationHeader.module.css';

function NavigationHeader() {
    const [param, setParam] = useSearchParams();
    const [subMenuItems, setSubMenuItems] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [activeNavLink, setActiveNavLink] = useState();

    
    useEffect(() => {
        setActiveNavLink(styles[param.get('action')]);
    }, [param])

    const navigation = [
        {
            name: 'Купить',
            key: 'buy',
            subMenu: [
                {
                    name: 'Квартиру',
                    key: 'apartment',
                    icon: ApartmentIcon
                },
                {
                    name: 'Дом',
                    key: 'house',
                    icon: HouseIcon
                },
                {
                    name: 'Коммерческая',
                    key: 'commercial',
                    icon: CommercialIcon
                },
                {
                    name: 'Участок',
                    key: 'plot',
                    icon: PlotIcon
                }
            ],
        },
        {
            name: 'Снять',
            key: 'rent',
            subMenu: [
                {
                    name: 'Квартиру',
                    key: 'apartment',
                    icon: ApartmentIcon
                },
                {
                    name: 'Комнату',
                    key: 'room',
                    icon: RoomIcon
                },
                {
                    name: 'Дом',
                    key: 'house',
                    icon: HouseIcon
                },
                {
                    name: 'Коммерческая',
                    key: 'commercial',
                    icon: CommercialIcon
                }
            ],
        },
        {
            name: 'Снять посуточно',
            key: 'daily_rent',
            subMenu: [
                {
                    name: 'Квартиру',
                    key: 'apartment',
                    icon: ApartmentIcon
                },
                {
                    name: 'Комнату',
                    key: 'room',
                    icon: RoomIcon
                },
                {
                    name: 'Дом',
                    key: 'house',
                    icon: HouseIcon
                }
            ],
        },
        {
            name: 'Ипотека',
            key: 'mortgage',
            subMenu: [
                {
                    name: 'Квартиры',
                    key: 'apartment',
                    icon: ApartmentIcon
                },
                {
                    name: 'Дома',
                    key: 'house',
                    icon: HouseIcon
                },
                {
                    name: 'Коммерческая',
                    key: 'commercial',
                    icon: CommercialIcon
                }
            ],
        },
    ]

    function openSubMenu(parentKey, subMenu = []) {
        subMenu.forEach(elem => elem.parentLink = parentKey);
        setSubMenuItems(subMenu);
        setIsActive(true);
    }

    function generateLink({ action, search }) {
        return `offers?${action ? `action=${action}` : ''}${search ? `&search=${search}` : ''}`;
    }

    return (
        <nav className={styles.menu_navigation}>
            <div className={`${styles.menu} ${activeNavLink}`}>
                {navigation.map(navItem => {
                    return <NavLink
                        to={generateLink({ action: navItem.key })}
                        className={styles.navigation_item}
                        onMouseEnter={() => openSubMenu(navItem.key, navItem.subMenu)}
                        onMouseLeave={() => setIsActive(false)}
                        onClick={() => setIsActive(false)}
                        data-title={navItem.key}
                        key={navItem.key}>
                        {navItem.name}
                    </NavLink>
                })}
            </div>
            <Transition in={isActive} timeout={{ appear: 300, enter: 0, exit: 300 }} mountOnEnter unmountOnExit>
                {animationClass => <SubMenu clName={animationClass} links={subMenuItems} generate={generateLink} state={{ isActive, setIsActive }} />}
            </Transition>
        </nav>
    );
}

function SubMenu({ clName, links, generate, state }) {
    return <div className={`${styles.sub_menu} ${styles[clName] || ''}`} onMouseEnter={() => state.setIsActive(true)} onMouseLeave={() => state.setIsActive(false)}>
        <div className={styles.sub_menu_wrapper}>
            {links.map(link => {
                return <NavLink to={generate({ action: link.parentLink, search: link.key })} key={link.key} onClick={() => state.setIsActive(false)}>
                    <div className={styles.icon}>{link.icon()}</div>
                    <div className={styles.text}>{link.name}</div>
                </NavLink>
            })}
        </div>
    </div>
}

export default NavigationHeader;