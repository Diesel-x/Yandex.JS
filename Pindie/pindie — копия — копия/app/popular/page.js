"use client";

import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsLis";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  return (
    <main className={"main"}>
      <CardsListSection id="popular" title="Популярные" data={popularGames} />
    </main>
  );
}
