const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={require("../../public/images/logo.png")} alt="Logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li><img src={require("../../public/images/grocery-store.png")} alt="cart icon" /></li>
                    <li><img src={require("../../public/images/old-man.png")} alt="user profile icon" /></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;