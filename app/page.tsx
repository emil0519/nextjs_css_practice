import { Header } from "./component/header";
import { Banner } from "./component/banner";
import { Paragraph } from "./component/paragraph";
import { title, navItemList, paragraphList } from "./constant";

export default function Home() {
  return (
    <main>
      <Header title={title} navItemList={navItemList} />
      <Banner />
      <div className="flex flex-col" id="feature">
        {paragraphList.map((paragraphData) => (
          <Paragraph paragraphData={paragraphData} key={paragraphData.title} />
        ))}
      </div>
    </main>
  );
}
