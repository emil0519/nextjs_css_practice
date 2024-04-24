import { Header } from "./component/header";
import { title, navItems } from "./constant";

export default function Home() {
  return (
    <main>
      <Header title={title} navItems={navItems} />
    </main>
  );
}
