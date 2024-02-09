import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";


 const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
          <ul className="grid gap-2">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/" className="p-4">
          Products
        </Link>
        <Link to="/" className="">
          About
        </Link>
        <Link to="/" className="p-4">
          Contact
        </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;