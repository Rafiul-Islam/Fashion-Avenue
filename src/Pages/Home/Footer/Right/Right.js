import React from 'react';
import MainMenu from "./MainMenu/MainMenu";
import Company from "./Company/Company";
import Discover from "./Discover/Discover";
import FindUsOn from "./FindUsOn/FindUsOn";

const Right = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MainMenu/>
                    </div>
                    <div className="col">
                        <Company/>
                    </div>
                    <div className="col">
                        <Discover/>
                    </div>
                    <div className="col">
                        <FindUsOn/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;
