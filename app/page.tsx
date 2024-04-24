import { Header } from "./component/header";
import { Banner } from "./component/banner";
import { Paragraph } from "./component/paragraph";
import { title, navItems, paragraphList } from "./constant";

export default function Home() {
  return (
    <main>
      <Header title={title} navItems={navItems} />
      <Banner />
      <div className="flex flex-col">
        {paragraphList.map((paragraphData) => (
          <Paragraph paragraphData={paragraphData} />
        ))}
      </div>
    </main>
  );
}
