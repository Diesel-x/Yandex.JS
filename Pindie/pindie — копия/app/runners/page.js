"use client";

import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Runner() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className={"main"}>
      <CardsListSection id="runner" title="Раннеры" data={runnerGames} />
    </main>
  );
}
