import React from "react";
import "./App.css";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import CircularText from "./components/CircularText/CircularText";
import ShinyText from "./components/ShinyText/ShinyText";

import ChromaGrid from "./blocks/Components/ChromaGrid/ChromaGrid";
function App() {
  const items = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
  ];
  return (
    <div className="bg-slate-100 font-primary">
      <div className="flex justify-center items-center h-screen ">
        <SplitText
          text="Hello, GSAP!"
          className="text-9xl font-semibold"
          delay={100}
          duration={2}
          ease="elastic.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="h-screen flex justify-center items-center">
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-9xl mb-8"
        />
      </div>

      <div className="h-screen flex justify-center items-center">
        <CircularText
          text="I AM RONEL VEGA "
          onHover="goBonkers"
          spinDuration={20}
          className="custom-class w-[500px] h-[500px]"
        />
      </div>

      <div className="h-screen flex justify-center items-center bg-slate-800">
        <ShinyText
          text="Just some shiny text!"
          disabled={false}
          speed={5}
          className="custom-class text-6xl"
        />
      </div>

      <div className="h-screen">
        <div style={{ height: "600px", position: "relative" }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
