import { Header } from "./component/header";
import { Banner } from "./component/banner";
import { Paragraph } from "./component/paragraph";
import { title, navItemList, paragraphList } from "./constant";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row">
      <Header title={title} navItemList={navItemList} />
      <div className="block lg:flex lg:flex-col lg:flex-auto">
        <Banner />
        <div className="flex flex-col" id="feature">
          {paragraphList.map((paragraphData) => (
            <Paragraph
              paragraphData={paragraphData}
              key={paragraphData.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
