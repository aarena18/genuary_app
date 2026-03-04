import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Tools } from "./components/Toolbox/Toolbox";
// import { Folder } from "./components/Folder/openedFolder";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Tools />
      {/* <Folder /> */}
    </div>
  );
}

export default App;
