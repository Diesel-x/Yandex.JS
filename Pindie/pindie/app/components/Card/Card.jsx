import Styles from "./Card.module.css";

export function Card() {
  return (
    <li className="cards-list__item">
      <a href="/game-id.html" className={Styles["card-list__link"]}>
        <article className="card">
          <img
            src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
            alt=""
            className={Styles["card__image"]}
          />
          <div className={Styles["card__content-block"]}>
            <h3 className={Styles["card__title"]}>
              Dangeons'n'Caves. Prologue
            </h3>
            <p className={Styles["card__description"]}>
              Безымянный герой исследует пещеры и подземелья, чтобы найти больше
              информации о себе.
            </p>
            <div className={Styles["card__info-container"]}>
              <p className={Styles["card__author"]}>
                Автор: <span className={Styles["card__accent"]}>F-Style</span>
              </p>
              <p className={Styles["card__votes"]}>
                Голосов на сайте:{" "}
                <span className={Styles["card__accent"]}>10</span>
              </p>
            </div>
          </div>
        </article>
      </a>
    </li>
  );
}
