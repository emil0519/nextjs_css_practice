import { Header } from "./component/header";
import { Banner } from "./component/banner";
import { Paragraph } from "./component/paragraph";
import { title, navItemList, paragraphList } from "./constant";

export default function Home() {
  return (
    <main>
      <Header title={title} navItemList={navItemList} />
      <Banner />
      <div className="flex flex-col">
        {paragraphList.map((paragraphData, index) =>
          index === 0 ? (
            <div id="feature">
              <Paragraph paragraphData={paragraphData} />
            </div>
          ) : (
            <div>
              <Paragraph paragraphData={paragraphData} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
