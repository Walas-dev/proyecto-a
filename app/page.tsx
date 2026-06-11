import Header from "@/components/Header/page"
import Footer from "@/components/Footer/page"
export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-neground font-sans dark:bg-neground">
      <Header/>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-neground dark:bg-neground sm:items-start">

      </main>
      <Footer/>
    </div>
  );
}
