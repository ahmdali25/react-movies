import TrendingMovie from "../components/TrendingMovie";

export default function Home() {
  return (
    <section>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-primary">Trending Movies</h1>
      </div>
      <TrendingMovie />
    </section>
  );
}
