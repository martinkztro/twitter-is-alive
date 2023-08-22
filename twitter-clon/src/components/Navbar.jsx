import React from 'react';
import { Button } from '@nextui-org/react'
import {Popover, PopoverTrigger, PopoverContent, User} from "@nextui-org/react";
import {UserTwitterCard} from './UserTwitterCard';

const Navbar = () => {
    return (
        <>
            <div className=''>
                <nav className='flex flex-col gap-20'>
                    <ul className='flex flex-col gap-4 ml-[30%] mt-6'>
                        <li className='text-white'>
                            <a href="#">
                                <img width={30} src="public/twitter_logo.png" alt="" />
                            </a>
                        </li>
                        <li className='text-white flex justify-center font-bold text-xl '>
                            <a
                                className='flex w-full flex-basis gap-4 items-center text-xl'
                                href="#">
                                <ion-icon name="home-outline"></ion-icon>
                                Home
                            </a>
                        </li>
                        <li className='text-white flex justify-center font-bold text-xl '>
                            <a
                                className='flex w-full flex-basis gap-4 items-center text-xl'
                                href="#">
                                <ion-icon name="newspaper-outline"></ion-icon>
                                Explore
                            </a>
                        </li>
                        <li className='text-white flex justify-center font-bold text-xl '>
                            <a
                                className='flex w-full flex-basis gap-4 items-center text-xl'
                                href="#">
                                <ion-icon name="notifications-outline"></ion-icon>
                                Notifications
                            </a>
                        </li>
                        <li className='text-white flex justify-center font-bold text-xl '>
                            <a
                                className='flex w-full flex-basis gap-4 items-center text-xl'
                                href="#">
                                <ion-icon name="mail-outline"></ion-icon>
                                Messages
                            </a>
                        </li>
                        <li className='text-white flex justify-center font-bold text-xl '>
                            <a
                                className='flex w-full flex-basis gap-4 items-center text-xl'
                                href="#">
                                <ion-icon name="bookmark-outline"></ion-icon>
                                Bookmarks
                            </a>
                        </li>
                        <li className='text-white flex justify-center font-bold text-xl '>
                            <a
                                className='flex w-full flex-basis gap-4 items-center text-xl'
                                href="#">
                                <ion-icon name="document-text-outline"></ion-icon>
                                List
                            </a>
                        </li>
                        <li className='text-white flex justify-center font-bold text-xl '>
                            <a
                                className='flex w-full flex-basis gap-4 items-center text-xl'
                                href="#">
                                <ion-icon name="document-text-outline"></ion-icon>
                                Profile
                            </a>
                        </li>
                        <li className='text-white flex justify-center font-bold text-xl '>
                            <a
                                className='flex w-full flex-basis gap-4 items-center text-xl'
                                href="#">
                                <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
                                More
                            </a>
                        </li>
                        <li className='text-white flex justify-between font-bold text-xl '>
                            <Button color="primary" variant="solid" className='px-20 font-sans font-medium rounded-3xl'>Tweet</Button>
                        </li>
                    </ul>

                    <figure className='flex items-center justify-center gap-2'>
                        <Popover showArrow placement="bottom">
                            <PopoverTrigger>
                                <User
                                    as="button"
                                    name="Martin Castro"
                                    description= "@martinkztro"
                                    className="transition-transform text-white font-medium font-sans"
                                    avatarProps={{
                                        src: "https://unavatar.io/kikobeats"
                                    }}
                                />
                            </PopoverTrigger>
                            <PopoverContent className="p-1">
                                <UserTwitterCard />
                            </PopoverContent>
                        </Popover>
                        <span className='text-white ml-10'>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </span>
                    </figure>
                </nav>
            </div>







        </>

    )
}

export default Navbar;