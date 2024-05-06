"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className={"main"}>
      {newGames ? (
        <CardsList id="tds" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
