import Apod from "./components/Apod/Apod";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Loading from "./components/Loading";

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <main className={`bg-[rgba(0,0,0,0.9)] w-full`}>
        <div className="mx-auto bg-black max-w-7xl min-h-screen">
          <Header />
          <Apod />
        </div>
        <Footer />
      </main>
    </SkeletonTheme>
  );
}

export default App;
