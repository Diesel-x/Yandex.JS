"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className={"main"}>
      {newGames ? (
        <CardsList id="runner" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
