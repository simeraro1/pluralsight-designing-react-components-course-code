import { ThemeContext } from "./Layout";
import { useContext } from "react";

function Header() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                        <img alt="SVCC Home Page"
                            src="/images/SVCCLogo.png" />
                    </div>
                    <div  className={theme === "light" ? "text-dark" : "text-light"}>
                        <h4 className="header-title">
                            Silicon Valley Code Camp
                        </h4>
                    </div>
                    <div className={theme === "light" ? "text-dark" : "text-light"}>
                        Hello Mr. Smith &nbsp;&nbsp;
                    </div>
                    <span>
                        <a href="#">sign-out</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;