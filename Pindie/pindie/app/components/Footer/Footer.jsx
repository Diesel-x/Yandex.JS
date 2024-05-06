import Link from "next/link";
import Styles from "./Footer.module.css";
import "@/app/globals.css";

export const Footer = () => {
  return (
    <footer className={Styles["footer"]}>
      <Link href="/" className={Styles["footer__logo"]}>
        <span className={Styles["footer__logo-name"]}>pindie</span>
        <span className={Styles["footer__logo-copy"]}>, XXI век</span>
      </Link>
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`${Styles["social-list__link"]} button`}>
            YT
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`${Styles["social-list__link"]} button`}>
            ВК
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`${Styles["social-list__link"]} button`}>
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};
