import "./_header.scss"
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
import Avatar from 'react-avatar';


const Header = ({handleToggleSidebar}) => {
    return (
        <div className="header">
            <FaBars
                className="header__menu" size={26} onClick={handleToggleSidebar}
            />
            <img src="https://www.designbust.com/download/1005/png/transparent_background_youtube_logo_png512.png" alt="logo" className="header__logo" />
            <form><input type="text" placeholder="Search" /><button type="submit"><AiOutlineSearch size={22} /></button></form>
            <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <Avatar name="Zedan" size={40} round textSizeRatio={2} className="Avatar"/>
            </div>
        </div>
    )
}

export default Header
