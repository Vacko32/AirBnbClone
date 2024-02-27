'use client';
import { IoIosMenu } from "react-icons/io";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toogleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={() => {}}
                className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                cursor-pointer
                transition
                "
                >
                    Airbnb your home 
                </div>
                <div onClick={toogleOpen}
                className="
                py-4
                md:px-2
                border[1px]
                md:py-1
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
                ">
                    <IoIosMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && ( 
                
                <div className="absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm">
                    <div className="flex flex-col cursor-pointer">
                        dfdf
                    </div>
            </div>
            )}
        </div>
    );
}
export default UserMenu;