import { useState } from "react"
import { Image } from "../atoms/Image";
import { Button } from "../atoms/Button"
import Logo from "../../../icono.png";
import { NavButtons, NavLinks } from "../particles/DataLists"
import { List } from "../atoms/List";
import { useAuth } from "../../Auth/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { Slide } from "react-awesome-reveal";


const NavBar = () => {
    const navigate = useNavigate();

   const { isAuthenticated, userInfo} = useAuth();
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }


    return (
        <header className="w-full h-auto bg-[#a4a4d7] overflow-x-hidden fixed z-10 0 top-0 left-0 ">
            <Slide direction="down">
                <nav className={`w-full md:h-24 h-20 lg:px-24 md:px-12 px-8 flex justify-between items-center`}>
                    <Image as="a" href="/" className="md:h-10 h-8" image={Logo} alt="Logo" />
                    <div className="lg:flex hidden items-center gap-20">
                        <ul className="flex items-center justify-start gap-8">
                            {
                                NavLinks.map((navlink, index) => (
                                    <List className="w-full text-base" key={index}>
                                        <NavLink to={navlink.url} className="relative inline-block overflow-hidden pt-2 pl-2 before:w-2 before:h-2 before:bg-[#54D0E7] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[#54D0E7] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in">{navlink.name}</NavLink>
                                    </List>
                                ))
                            }

                        </ul>
                        <ul className="flex items-center justify-end gap-6">
                            {isAuthenticated && userInfo != null?
                                <>
                                <List className="w-full text-base" >
                                        <NavLink to={"#"} className="relative inline-block overflow-hidden pt-2 pl-2 before:w-2 before:h-2 before:bg-[#54D0E7] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[#54D0E7] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in">Bienvenido! {userInfo.username}</NavLink>
                                </List>
                                <List className="w-full" >
                                        <Button onClick={() => navigate("/panel/dashboard")} type="button" className={"before:bottom-0 border-b-2 border-transparent hover:border-gray-950 py-2 px-8 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-[#54D0E7] before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base"}>Acceder al panel</Button>
                                </List>
                                </>
                                :
                                NavButtons.map((navbutton, index) => (
                                    <List className="w-full" key={index}>
                                        <Button onClick={() => navigate("/"+navbutton.url)} type="button" className={`${navbutton.name === "Signup" ? "border-2 border-gray-950 before:top-0" : "before:bottom-0 border-b-2 border-transparent hover:border-gray-950"} py-2 px-8 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-[#54D0E7] before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base`}>{navbutton.name}</Button>
                                    </List>
                                ))
                               
                            }
                        </ul>
                    </div>
                    
                </nav>
            </Slide>


            {/* Mobile Nav  */}
            <nav className={`flex justify-end lg:hidden h-screen w-full bg-gray-950/90 fixed top-0  ${open ? "right-0" : "-right-[120vw]"} transition-all duration-500 ease-out`}>
                <div className={`w-[70%] h-screen bg-white flex flex-col justify-between items-center relative ${open ? "right-0" : "-right-[120vw]"} transition-all duration-500 ease-out delay-300`}>
                    <section className="w-full px-4 py-6 flex flex-col gap-16">
                        <div className="w-full flex justify-between items-center">
                            <Image as="a" href="/" className="md:h-10 h-8" image={Logo} alt="Logo" />
                            <div className="hamburger text-gray-950 cursor-pointer" onClick={handleToggle}>
                                <ArrowCircleRight size={25} color="currentColor" weight="fill" />
                            </div>
                        </div>
                        <ul className="flex flex-col gap-3 pl-2">
                            {
                                NavLinks.map((navlink, index) => (
                                    <List className="w-full text-base" key={index}>
                                        <NavLink to={navlink.url} onClick={handleToggle} className={`relative overflow-hidden inline-block before:w-full before:h-0.5 before:bg-[#54D0E7] before:absolute before:bottom-0 before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 `}>{navlink.name}</NavLink>
                                    </List>
                                ))
                            }
                        </ul>
                    </section>
                    <ul className="w-full flex items-center justify-center pb-24 gap-4">
                        {
                            NavButtons.map((navbutton, index) => (
                                <List className="w-auto" key={index}>
                                    <Button onClick={() => navigate(navbutton.url)} type="button" className={`${navbutton.name === "Signup" ? "border-2 border-gray-950 before:top-0" : "before:bottom-0 border-b-2 border-white hover:border-gray-950"} py-1.5 px-5 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-[#54D0E7] before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base`}>{navbutton.name}</Button>
                                </List>
                            ))
                        }
                    </ul>
                </div>
            </nav>

        </header >
    )
}

export default NavBar
