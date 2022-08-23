import { useState } from "react";
import Modal from "./Modal";
import { useScrollLock } from "../hooks/useScrollLock";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/solid";
import { Instagram } from "@material-ui/icons";

import Image from "next/image";

import Link from "next/link";

const sections = [
  {
    text: "Articles",
    href: "/articles",
  },
  {
    text: "Videos",
    href: "/videos",
  },
  {
    text: "Photos",
    href: "/photos",
  },
];

const links = [
  {
    id: "instagram",
    src: "/iconmonstr-instagram-11.svg",
    href: "https://www.instagram.com/joshuatcrowe/",
  },
  {
    id: "linkedin",
    src: "/iconmonstr-linkedin-3.svg",
    href: "/",
  },
];

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { lockScroll, unlockScroll } = useScrollLock();
  let current = sections.find(({ href }) => router.pathname.includes(href));

  // order in the list never changes

  return (
    <div className="sticky top-0 z-20 h-20 flex flex-row justify-start items-center gap-x-2 pl-3 bg-white">
      <button
        onClick={() => {
          setShowModal(true);
          lockScroll();
        }}
      >
        <MenuIcon className="h-12 w-12 " />
      </button>
      <h1 className="">{typeof current !== "undefined" ? current.text : ""}</h1>

      {/* modal */}
      <Modal
        onClose={() => {
          setShowModal(false);
          unlockScroll();
        }}
        show={showModal}
        scrollLock={unlockScroll}
      >
        <div className="w-full grow flex flex-col place-content-center no-scroll">
          {sections.map((section, index) => {
            return (
              <div className="text-black text-center h-16 w-full " key={index}>
                <Link onClick={() => unlockScroll()} href={section.href}>
                  <a>{section.text}</a>
                </Link>
              </div>
            );
          })}
          <div className="flex flex-row place-content-center space-x-7">
            {links.map((link) => {
              return (
                <a href={link.href} key={link.id}>
                  <Image
                    src={link.src}
                    alt="company logo"
                    width={48}
                    height={48}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Nav;
