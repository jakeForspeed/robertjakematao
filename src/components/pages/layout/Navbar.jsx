import { useEffect, useState } from "react";

const NavBar = () => {

    const [isSticky, setIsSticky] = useState(false)

    const handleScroll = () => {
            setIsSticky(window.scrollY > 50)
    }

    useEffect(()=>{

        window.addEventListener('scroll',handleScroll);

        return () => window.removeEventListener('scroll',handleScroll)

    },[])

    return(
        <>
        <nav
            className={`fixed bg-white left-0 right-0 z-50 mx-auto transition-all duration-300 shadow-md py-3 text-(--color-text)
                ${
                    isSticky
                    ? 'w-full top-0 rounded-none'
                    : 'w-[80%] top-2 rounded-xl'
                }
                `}
        >

            <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                <h1 className="font-bold text-xl">RJM</h1>
                <ul className="flex gap-5 text-sm">
                    <li className="cursor-pointer hover:text-(--color-accent)">Home</li>
                    <li className="cursor-pointer hover:text-(--color-accent)">About</li>
                    <li className="cursor-pointer hover:text-(--color-accent)">Projects</li>
                    <li className="cursor-pointer hover:text-(--color-accent)">Contact</li>
                </ul>
            </div>

        </nav>

        </>
    )
}

export default NavBar;