import Header from "@/components/Header/page"
import Footer from "@/components/Footer/page"
import Hero from "@/components/Hero/page"
import Services from "@/components/Services/page"
import Contacto from "@/components/Contact/page"
import Proceso from "@/components/Process/page"
import Ubication from "@/components/Ubication/page"
export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-neground font-sans dark:bg-neground">
      <Header/>
      <main className="flex flex-1 flex-col items-center justify-between bg-neground dark:bg-neground">
        <Hero/>
        <Services/>
        <Ubication/>
        <Proceso/>
        <Contacto/>
      </main>
      <Footer/>
    </div>
  );
}
