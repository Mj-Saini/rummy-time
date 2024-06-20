import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { DropdownArrow } from "./Icon";

const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  const [navbar, setNavbar] = useState(false);
  if (navbar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleClick = (event) => {
    setDropdown(event.currentTarget);
  };

  const handleClose = () => {
    setDropdown(null);
  };
  const createHandleMenuClick = (menuItem) => () => {
    console.log(menuItem);
    handleClose();
  };
  return (
    <section className="py-4 relative z-10">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="font-bold text-4xl text-white capitalize hover:text-[#cda677] duration-300"
          >
            refferal
          </a>
          <div
            className={`flex flex-col md:flex-row justify-center gap-3 lg:gap-4 items-center duration-300 max-md:fixed max-md:h-screen max-md:w-screen top-0 ${
              !navbar ? "-left-full" : "left-0 bg-[#51065d]"
            }`}
          >
            <a
              href="/"
              className="font-normal text-lg text-white capitalize hover:text-[#cda677] duration-300"
            >
              rummy app
            </a>
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="!font-normal !text-lg !text-white !capitalize hover:!text-[#cda677] duration-300 !mt-1"
              >
                how to play
                <span>
                  <DropdownArrow />
                </span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={dropdown}
                keepMounted
                open={Boolean(dropdown)}
                onClose={handleClose}
              >
                <MenuItem onClick={createHandleMenuClick("Profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Language settings")}>
                  Language settings
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Log out")}>
                  Log out
                </MenuItem>
              </Menu>
            </div>
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="!font-normal !text-lg !text-white !capitalize hover:!text-[#cda677] duration-300 !mt-1"
              >
                Rummy Variations
                <span>
                  <DropdownArrow />
                </span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={dropdown}
                keepMounted
                open={Boolean(dropdown)}
                onClose={handleClose}
              >
                <MenuItem onClick={createHandleMenuClick("Profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Language settings")}>
                  Language settings
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Log out")}>
                  Log out
                </MenuItem>
              </Menu>
            </div>
          </div>{" "}
          <div
            onClick={() => {
              setNavbar(!navbar);
            }}
            className="flex flex-col justify-between h-5 w-6 md:hidden z-[100] relative cursor-pointer group duration-300"
          >
            <span
              className={` border-[3px]  group-hover:border-greenCyan w-full rounded-sm duration-300 ${
                navbar
                  ? "translate-y-[7px] -rotate-45 border-[#cda677]"
                  : "border-white"
              }`}
            ></span>
            <span
              className={` border-[3px]  group-hover:border-greenCyan w-full rounded-sm duration-300 ${
                navbar ? "rotate-45 mb-[1px] border-[#cda677]" : "border-white"
              }`}
            ></span>
            <span
              className={` border-[3px]  group-hover:border-greenCyan w-full rounded-sm duration-300 ${
                navbar ? "opacity-0 border-[#cda677]" : "border-white"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
