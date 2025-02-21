import React, { useContext, Fragment, useRef } from "react";
import Link from "next/link";
import { MenuContext } from "@/context/menu-context";
import { LogoImage, NavLinks } from "@/data";
import { coderCrackInfo } from "@/information";
import Image from "next/image";

const PopupMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const menuEl = useRef(null);
  const handleMenuClick = (e) => {
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="show-overlay-nav">
      <div className="popup popup__menu">
        <a
          href="#"
          id="close-popup"
          onClick={handleMenuClick}
          className="close-popup"
        ></a>
        <div className="container mobileContainer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <div className="logo2">
                <Link href="/">
                  <a>
                    <Image width={280} height={84} src={LogoImage.light} alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row popupMenuList">
            <div className="col-lg-12">
              <div className="popup-inner">
                <nav
                  className="popup-menu dl-menu__wrap text-center"
                  ref={menuEl}
                >
                  <ul>
                    {NavLinks.map((links, index) => {
                      return (
                        <li
                          key={index}
                          className={`${undefined !== links.subItems
                            ? "menu-item-has-children"
                            : ""
                            }`}
                        >
                          <Link href={links.url} >
                            <a onClick={handleMenuClick}>{links.name}</a>
                          </Link>
                          {/* {undefined !== links.subItems ? (
                            <Fragment>
                              <button
                                onClick={(e) => {
                                  menuEl.current
                                    .querySelectorAll(".sub-menu")
                                    .forEach((item) => {
                                      item.classList.remove("show");
                                    });

                                  let clickedItem = e.currentTarget.parentNode;
                                  clickedItem
                                    .querySelector(".sub-menu")
                                    .classList.toggle("show");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                              <ul className="sub-menu">
                                {links.subItems.map((subLinks, index) => (
                                  <li key={index}>
                                    <Link
                                      href={subLinks.url + "?id=" + subLinks.id}
                                    >
                                      <a style={{ display: "inline" }}>
                                        {subLinks.title}
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Fragment>
                          ) : null} */}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 text-center text-md-left">
              <ul className="footer__contacts">
                <li>+34 {coderCrackInfo.phoneLabel}</li>
                <li>{coderCrackInfo.email}</li>
                <li>{coderCrackInfo.fullAddress}</li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="popUp_social .popUp_social_pos text-center text-md-right">
                <ul>
                  <li>
                    <a target="_blank" href={coderCrackInfo.twitter}>
                      <i className="fa fa-twitter"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={coderCrackInfo.facebook}
                    >
                      <i className="fa fa-facebook-square"></i>Facebook
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>Youtube
                    </a>
                  </li> */}
                  <li>
                    <a
                      target="_blank"
                      href={coderCrackInfo.instagram}
                    >
                      <i className="fa fa-instagram"></i>Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
