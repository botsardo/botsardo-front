import { useState } from 'react';
import Image from 'next/image';
import MenuElement from 'components/MenuElement/MenuElement';
import menuIcon from 'assets/icons/menu.svg';
import homeIcon from 'assets/icons/home.svg';
import exchangeIcon from 'assets/icons/exchange.svg';
import logoutIcon from 'assets/icons/logout.svg';
import { colors } from 'styles/globals';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(true);
    const menuElements = [
        {
            location: '#',
            icon: homeIcon,
            text: 'Inicio',
            showText: showMenu,
        },
        {
            location: 'exchanges',
            icon: exchangeIcon,
            text: 'Exchanges',
            showText: showMenu,
        },
    ];

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className={showMenu ? 'nav-expanded' : 'nav-collapsed'}>
            <header>
                <a href="#">
                    <span>Botsardo</span>
                </a>
                <button type="button" role="button" onClick={handleMenu}>
                    <Image src={menuIcon} width={50} height={50}></Image>
                </button>
            </header>
            <div className="elements">
                {menuElements.map(
                    ({ location, icon, text, showText }, index) => {
                        return (
                            <MenuElement
                                key={index + text}
                                location={location}
                                icon={icon}
                                text={text}
                                showText={showText}
                            />
                        );
                    }
                )}
            </div>
            <div className="logout">
                <MenuElement
                    icon={logoutIcon}
                    text={'Cerrar sesión'}
                    showText={showMenu}
                />
            </div>

            <style jsx>{`
                nav {
                    background-color: ${colors.darkOcean};
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    z-index: 10;
                }

                .nav-expanded {
                    width: 300px;
                }

                .nav-collapsed {
                    width: 100px;
                }

                header {
                    background-color: ${colors.ocean};
                    display: flex;
                    height: 57px;
                }

                .nav-collapsed header {
                    justify-content: center;
                }

                .nav-expanded header {
                    align-items: center;
                    justify-content: space-between;
                }

                a {
                    cursor: pointer;
                    text-decoration: none;
                }

                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .nav-collapsed header a {
                    display: none;
                }

                .nav-expanded header span {
                    color: ${colors.white};
                    font-size: 20px;
                    margin-left: 20px;
                }

                div {
                    padding: 10px;
                }

                .nav-collapsed .elements {
                    justify-content: center;
                }

                .logout {
                    margin-top: auto;
                }
            `}</style>
        </nav>
    );
}
