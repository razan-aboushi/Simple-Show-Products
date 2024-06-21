import {ModeToggle} from "./ModeToggle";
import Link from "next/link";

const Navbar = ()=> {
    return (
        <nav className="navbar">
            <ul className="navList">
                <li className="navItem">
                    <Link href="/" className="navLink">Home</Link>
                </li>
                <li className="navItem">
                    <Link href="/all-products" className="navLink">All Products</Link>
                </li>
                <li className="navItem">
                    <ModeToggle />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;