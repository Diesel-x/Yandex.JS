import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное"></CardsList>
      <CardsList id="new" title="Новинки"></CardsList>
      <Promo />
    </main>
  );
}
