"use client";

import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Shooter() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className={"main"}>
      <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
    </main>
  );
}
