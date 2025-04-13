import globe from "../assets/globe.png"
function Header(){
    return(
        <header>
            <nav>
                <img src={globe} alt="world map" />
                <span>my travel journal</span>
            </nav>
        </header>
    )
}
export default Header;