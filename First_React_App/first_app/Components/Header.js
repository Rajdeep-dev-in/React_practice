import React from "react";

function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="icon-contener">
                    <p>Moviezz</p>
                </div>
                <div className="search-bar">
                    <div className="search-box">
                        <input
                            type="text"
                            id="usersearch"
                            placeholder="search movie name"
                        />
                    </div>
                    <div className="search-btn">
                        <button
                            id="search"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header;