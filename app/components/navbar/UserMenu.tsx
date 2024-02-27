'use client';
import { IoIosMenu } from "react-icons/io";
import Avatar from "../Avatar";

const UserMenu = () => {
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
                <div onClick={() => {}}
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
        </div>
    );
}
export default UserMenu;