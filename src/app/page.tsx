import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Navbar from "@/components/Navbar";
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
    </div>
  );
}
