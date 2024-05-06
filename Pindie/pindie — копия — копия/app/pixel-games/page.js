"use client";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Pixel() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
  return (
    <main className={"main"}>
      <CardsListSection id="pixel" title="Пиксельные" data={pixelGames} />
    </main>
  );
}
