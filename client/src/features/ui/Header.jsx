import React from 'react';
import header from "../../assets/images/ui/header-clouds.jpg"

const Header = () => {
    return (
    <>
        <div className="w-full px-20 py-4">
            <div className="w-full px-10 flex flex-row items-center">
                <h1 className="absolute top-10">under</h1>
                <ul className="w-fit flex flex-col gap-2 relative top-10 left-60">
                    {Object.entries(navigationItems).map(([key, value], index) => (
                        <li
                            key={key}
                            className={`button-hover relative text-md font-bold w-fit cursor-pointer`}
                            style={{ right: `${index % 2 === 0? index*2: -index*2}rem`, top: `3rem` }}
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <hr className="border-red-900 absolute top-16 w-full" />
    </>
);
};

const navigationItems = {
    events: "усі заходи",
    add_event: "додати подію",
    search: "шукати",
}

export default Header;