import Blog from "@/components/Blog";
import Company from "@/components/Company";
import FooterPage from "@/components/Footer";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Sevices";
import Work from "@/components/Work";



export default function Home() {
  return (
    <div>
      <Headline />
      <Navbar />
      <Header />
      <Work />
      <Services />
      <Company />
      <Blog />
      <Process />
      <FooterPage />
    </div>
  );
}
