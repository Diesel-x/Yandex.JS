"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";

import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { getJWT, getMe, isResponseOk, removeJWT } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { AuthContext } from "@/app/context/app-context";

export const Header = () => {
  const authContext = useContext(AuthContext);
  const handleLogout = () => {
    authContext.logout(); // Метод logout из контекста
  };
  const pathname = usePathname();
  // const [isAuthorized, setIsAuthorized] = useState(false);
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const openPopup = () => {
    setPopupIsOpened(true);
  };
  const closePopup = () => {
    setPopupIsOpened(false);
  };
  // const handleLogout = () => {
  //   // removeJWT();
  //   // setIsAuthorized(false);
  //   authContext.logout();
  // };
  // useEffect(() => {
  //   const handleAuthorized = async (jwt) => {
  //     const userData = await getMe(endpoints.me, jwt);
  //     if (isResponseOk(userData)) {
  //       setIsAuthorized(true);
  //     } else {
  //       setIsAuthorized(false);
  //       removeJWT();
  //     }
  //   };
  //   const jwt = getJWT();
  //   if (jwt) {
  //     handleAuthorized(jwt);
  //   }
  // }, []);

  return (
    <header className={Styles["header"]}>
      <Link href="/" className={Styles["logo"]}>
        <img
          className={Styles["logo__image"]}
          src="/images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooter"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooter" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runner"
              className={`${Styles["menu__link"]} ${
                pathname === "/runner" ? Styles["menu__link_active"] : ""
              }`}
            >
              Раннеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/tds"
              className={`${Styles["menu__link"]} ${
                pathname === "/tds" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {/* Определяем, авторизован ли пользователь */}
          {authContext.isAuth ? (
            <button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
          )}
        </div>
      </nav>
      <Overlay popupIsOpened={popupIsOpened} closePopup={closePopup} />
      <Popup popupIsOpened={popupIsOpened} closePopup={closePopup}>
        <AuthForm close={closePopup} setAuth={authContext.login} />
      </Popup>
    </header>
  );
};
