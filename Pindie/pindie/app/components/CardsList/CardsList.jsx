import Link from "next/link";
import Styles from "./CardList.module.css";
import { Card } from "@/app/components/Card/Card";

export const CardsList = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>
        {props.data.map((item) => {
          return (
            <li className={Styles["cards-list__item"]} key={item.id}>
              <Link
                href={`/games/${item.id}`}
                target="_blank"
                className={Styles["card-list__link"]}
              >
                <Card {...item} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
