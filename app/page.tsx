import { Header } from "./component/header";
import { Banner } from "./component/banner";
import { title, navItems } from "./constant";

export default function Home() {
  return (
    <main>
      <Header title={title} navItems={navItems} />
      <Banner />
    </main>
  );
}
