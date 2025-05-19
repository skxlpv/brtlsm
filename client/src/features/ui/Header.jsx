import React from 'react';

const Header = () => {
    return (
        <div className="w-full px-10 py-6">
            <div className="mb-20">
                <h1 className="mb-8">Internal Bleeding</h1>
                <ul className="cursor-pointer w-fit flex flex-col gap-3">
                    <li className="button-hover">History</li>
                    <li className="button-hover">Gallery</li>
                    <li className="button-hover">LinkTree</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;