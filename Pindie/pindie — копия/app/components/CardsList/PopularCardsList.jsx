import Styles from "./CardList.module.css";
import { PopularCardsFragment } from "./PopularCardsFragments";

export const PopularCardsList = () => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id="new">
        Популярное
      </h2>
      <ul className={Styles["cards-list"]}>
        <PopularCardsFragment />
      </ul>
    </section>
  );
};
