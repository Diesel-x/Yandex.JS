"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function TDS() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className={"main"}>
      <CardsListSection id="TDS" title="TDS" data={tdsGames} />
    </main>
  );
}
