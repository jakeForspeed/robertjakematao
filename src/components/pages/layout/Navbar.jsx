import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-blue-600">Robert Jake Matao</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 border-b text-gray-700 hover:bg-blue-100"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}


// import { useEffect, useState } from "react";
// const NavBar = () => {
//     const [isSticky, setIsSticky] = useState(false)
//     const handleScroll = () => {
//             setIsSticky(window.scrollY > 50)
//     }
//     useEffect(()=>{
//         window.addEventListener('scroll',handleScroll);
//         return () => window.removeEventListener('scroll',handleScroll)
//     },[])
//     return(
//         <>
//         <nav
//             className={`fixed bg-white left-0 right-0 z-50 mx-auto transition-all duration-300 shadow-md py-3 text-(--color-text)
//                 ${
//                     isSticky
//                     ? 'w-full top-0 rounded-none'
//                     : 'w-[80%] top-2 rounded-xl'
//                 }
//                 `}
//         >
//             <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
//                 <h1 className="font-bold text-xl">RJM</h1>
//                 <ul className="flex gap-5 text-sm">
//                     <li className="cursor-pointer hover:text-(--color-accent)">Home</li>
//                     <li className="cursor-pointer hover:text-(--color-accent)">About</li>
//                     <li className="cursor-pointer hover:text-(--color-accent)">Projects</li>
//                     <li className="cursor-pointer hover:text-(--color-accent)">Contact</li>
//                 </ul>
//             </div>
//         </nav>
//         </>
//     )
// }
// export default NavBar;