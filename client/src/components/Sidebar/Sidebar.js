import { Link } from "react-router-dom";
import "./Sidebar.css";
import Logo from "./../../assets/logo.png";

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>ABOUT US</span>
				<img src={Logo} alt='' />
				<p>
					We are a blog community like no other. We are early birds as well as
					nights owls. We are what you want us to be
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>CATEGORIES</span>
				<ul className='sidebarList'>
					<li className='sidebarListItem'>
						<Link className='link' to='/'>
							Life
						</Link>
					</li>
					<li className='sidebarListItem'>
						<Link className='link' to='/'>
							Music
						</Link>
					</li>
					<li className='sidebarListItem'>
						<Link className='link' to='/'>
							Sport
						</Link>
					</li>
					<li className='sidebarListItem'>
						<Link className='link' to='/'>
							Style
						</Link>
					</li>
					<li className='sidebarListItem'>
						<Link className='link' to='/'>
							Tech
						</Link>
					</li>
					<li className='sidebarListItem'>
						<Link className='link' to='/'>
							Cinema
						</Link>
					</li>
				</ul>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>FOLLOW US</span>
				<div className='sidebarSocial'>
					<i className='sidebarIcon fab fa-facebook-square'></i>
					<i className='sidebarIcon fab fa-instagram-square'></i>
					<i className='sidebarIcon fab fa-pinterest-square'></i>
					<i className='sidebarIcon fab fa-twitter-square'></i>
				</div>
			</div>
		</div>
	);
}
