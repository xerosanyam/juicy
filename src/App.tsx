import CautionMarquee from "./components/DontEnter";
import Eyes from "./components/Eyes";

export default function App() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <img
        className="w-40 h-40 block"
        src="/android-chrome-512x512.png"
        alt=""
      />
      <Eyes />
      <br />
      <CautionMarquee />
    </div>
  );
}
