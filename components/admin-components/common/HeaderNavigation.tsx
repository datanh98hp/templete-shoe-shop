"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiBell, BiMenuAltLeft, BiMoon, BiSun } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { RiContactsBookLine, RiProductHuntLine } from "react-icons/ri";
import { VscDashboard } from "react-icons/vsc";
import DropdownMenu from "./DropdownMenu";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function AdminHeaderNavigation() {
    const [isOpenMobile, setOpenMobile] = useState(false);
    const { theme, setTheme } = useTheme();
    const changeMode = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    return (
        <div className="scroll-smooth md:scroll-auto z-10">
            <div className="w-full py-5 flex justify-between items-center md:px-32 px-4  shadow-md dark:bg-slate-800 bg-slate-100">
                <div className="flex justify-center items-center gap-4">
                    <div>
                        <Image
                            src="/imgs/logo.jpg"
                            alt="logo"
                            width={45}
                            height={45}
                            priority={true}
                            className="rounded-full"
                        />
                    </div>
                    <button onClick={() => setOpenMobile(!isOpenMobile)}>
                        <BiMenuAltLeft size={30} />
                    </button>
                </div>
                <div className="flex gap-4 items-center">
                    <div className=" p-2 hover:bg-[#ffba00] rounded-full">
                        <BiBell size={25} />
                    </div>
                    <button onClick={() => changeMode()} className=" p-2 hover:bg-[#ffba00] rounded-full">
                        {theme === "dark" ? <BiSun size={25} /> : <BiMoon size={25} />}
                    </button>
                    <div>Accout</div>
                </div>
            </div>
            <div className="flex">
                {/* sidebar */}
                {isOpenMobile && (
                    <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: "easeIn", duration: 0.3 }}
                        className=" w-fit h-svh overflow-auto shadow-xl dark:bg-slate-800 bg-slate-100">

                        <ul className="flex flex-col justify-center px-2 text-sm">
                            <li className="flex items-center w-full gap-3 hover:bg-slate-200  px-3 py-1 rounded-xl md:w-60 my-4"></li>
                            <li className="flex items-center w-full gap-3 hover:bg-slate-200 px-3 py-1 rounded-xl md:w-60 dark:hover:bg-opacity-20">
                                <span className="rounded-full bg-[#d6d6cd] p-2">
                                    <VscDashboard size={20} />
                                </span>
                                <Link href={"/dashboard"} className="hover:text-[#e4a554]">Dashboard</Link>
                            </li>
                        
                            <li className="flex items-center gap-3 px-3 hover:bg-slate-200  py-1 rounded-xl dark:hover:bg-opacity-20">
                                <DropdownMenu icon={(
                                    <span className="rounded-full bg-[#d6d6cd] p-2">
                                        <IoSettings size={20} />
                                    </span>
                                )} tile="Products manage" list={[
                                    { name: "Product info", href: "/admin/product" },
                                    { name: "Product category", href: "/admin/category" },
                                    { name: "Product Dealing", href: "/admin/dealing" },
                                ]} absolute={false} />
                            </li>
                            <li className="flex items-center gap-3 px-3 hover:bg-slate-200  py-1 rounded-xl dark:hover:bg-opacity-20">
                                <DropdownMenu icon={(
                                    <span className="rounded-full bg-[#d6d6cd] p-2">
                                        <IoSettings size={20} />
                                    </span>
                                )} tile="Promotion" list={[
                                    { name: "Promotion", href: "/admin/promotion" },
                                    { name: "Promotion category", href: "/admin/promotion-category" },
                    
                                ]} absolute={false} />
                            </li>
                            <li className="flex items-center gap-3 px-3 hover:bg-slate-200  py-1 rounded-xl md:w-60 dark:hover:bg-opacity-20">
                                <span className="rounded-full bg-[#d6d6cd] p-2">
                                    <MdOutlineCategory size={20} />
                                </span>
                                <Link href={"/admin/users"} className="hover:text-[#e4a554]">Users</Link>
                            </li>
                            <li className="flex items-center gap-3 px-3 hover:bg-slate-200  py-1 rounded-xl md:w-60 dark:hover:bg-opacity-20">
                                <span className="rounded-full bg-[#d6d6cd] p-2">
                                    <MdOutlineCategory size={20} />
                                </span>
                                <Link href={"/admin/orders"} className="hover:text-[#e4a554]">Orders</Link>
                            </li>
                            <li className="flex items-center gap-3 px-3 hover:bg-slate-200  py-1 rounded-xl md:w-60 dark:hover:bg-opacity-20">
                                <span className="rounded-full bg-[#d6d6cd] p-2">
                                    <RiContactsBookLine size={20} />
                                </span>

                                <Link href={"/admin/contact"} className="hover:text-[#e4a554]">Contact</Link>
                            </li>
                            <li className="flex items-center gap-3 px-3 hover:bg-slate-200  py-1 rounded-xl dark:hover:bg-opacity-20">
                                <DropdownMenu icon={(
                                    <span className="rounded-full bg-[#d6d6cd] p-2">
                                        <IoSettings size={20} />
                                    </span>
                                )} tile="Setting" list={[
                                    { name: "Information", href: "/admin/info" },
                                    { name: "SEO", href: "/admin/seo" },
                                ]} absolute={false} />
                            </li>
                            {/* <li className="mx-[5px] hover:text-[#ffba00] uppercase">
                  About
                </li> */}
                        </ul>
                    </motion.div>
                )}
                <div className="p-4">
                    content
                    {/* max each card content is w-60 */}
                </div>
            </div>
        </div>
    );
}
