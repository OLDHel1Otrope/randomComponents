"use client";
import InfoCard from "@/components/card";
import { useEffect, useState } from "react";

interface Card {
  className: string;
  width: number;
  height: number;
  data: string;
  color: string;
  textColor: string;
  size: number;
  x: number;
  y: number;
}

interface CardType {
  className: string;
  width: number;
  height: number;
  count: number;
  data: string;
  size: number;
}

interface Color {
  primary: string;
  secondary: boolean;
}

const gridRows = 7;
const gridCols = 9;

const store: { x: number; y: number; width: number; height: number }[] = [];

const cardTypes: CardType[] = [
  {
    className: "card-7x4",
    width: 5,
    height: 4,
    count: 1,
    data: "Portfolio",
    size: 4,
  },
  {
    className: "card-3x3",
    width: 6,
    height: 2,
    count: 7,
    data: "High Tier weight carrying things",
    size: 2,
  },
  {
    className: "card-2x2",
    width: 2,
    height: 2,
    count: 150,
    data: "Experiences",
    size: 2,
  },
  {
    className: "card-2x2",
    width: 3,
    height: 1,
    count: 150,
    data: "Experiences",
    size: 1,
  },
  {
    className: "card-1x1",
    width: 1,
    height: 1,
    count: 200,
    data: "general stuff",
    size: 1,
  },
];

const colors: Color[] = [
  { primary: "#333333", secondary: true },
  { primary: "#333333", secondary: true },
  { primary: "#333333", secondary: true },
  { primary: "#333333", secondary: true },
  { primary: "#333333", secondary: true },
  { primary: "#333333", secondary: true },
  { primary: "#333333", secondary: true },
];

const chooseRandomPosition = (width: number, height: number) => {
  let x, y;
  let attempts = 200;
  do {
    x = Math.floor(Math.random() * (gridCols - width + 1));
    y = Math.floor(Math.random() * (gridRows - height + 1));
  } while (isOccupied(x, y, width, height) && --attempts > 0);

  return attempts > 0 ? { x, y } : null;
};

const isOccupied = (x: number, y: number, width: number, height: number) => {
  return store.some(
    (card) =>
      x < card.x + card.width &&
      x + width > card.x &&
      y < card.y + card.height &&
      y + height > card.y
  );
};

const GridComponent = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const placeCards = async () => {
      const newCards: Card[] = [];
      for (const { className, width, height, count, data, size } of cardTypes) {
        for (let i = 0; i < count; i++) {
          const position = chooseRandomPosition(width, height);
          if (position) {
            const chosenColor =
              colors[Math.floor(Math.random() * colors.length)];
            store.push({ ...position, width, height });

            newCards.push({
              className,
              ...position,
              width,
              height,
              data,
              color: chosenColor.primary,
              textColor: chosenColor.secondary ? "white" : "#282828",
              size,
            });

            setCards([...newCards]);
          }
        }
      }
    };

    placeCards();
  }, []);

  return (
    // <div className="w-full h-screen flex items-center justify-center bg-stone-900">
    //   <div className="border">
    //     <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
    //       My Projects
    //     </h1>
    //     <p className="text-lg text-stone-400 mt-2">
    //        SHOWCASE OF ALL MY WORK
    //     </p>
    //   </div>
    //   <div
    //     className="grid gap-2 bg-stone-900 w-full h-full place-content-center"
    //     style={{
    //       gridTemplateColumns: `repeat(${gridCols}, 100px)`,
    //       gridTemplateRows: `repeat(${gridRows}, 100px)`,
    //       display: "grid",
    //     }}
    //   >
    //     {cards.map((card, index) => (
    //       <div
    //         key={index}
    //         className="flex items-center overflow-hidden justify-center rounded-4xl"
    //         style={{
    //           gridColumn: `${card.x + 1} / span ${card.width}`,
    //           gridRow: `${card.y + 1} / span ${card.height}`,
    //         }}
    //       >
    //         <InfoCard size={card.size} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="w-full h-screen bg-stone-900 flex items-center justify-center p-8 gap-40">
      <div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
          My Projects
        </h1>
        <p className="text-lg text-stone-400 mt-2">
           SHOWCASE OF ALL MY WORK
        </p>
      </div>
      <div
        className="grid gap-2 p-6 bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-4xl shadow-[inset_0px_0px_15px_rgba(0,0,0,0.5)] backdrop-blur-lg border border-stone-700/30 group hover:shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] transition-all duration-300"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, 100px)`,
          gridTemplateRows: `repeat(${gridRows}, 100px)`,
          display: "grid",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-center overflow-hidden rounded-3xl bg-stone-800/50    group-hover:border-stone-600/40 transition-all duration-300"
            style={{
              gridColumn: `${card.x + 1} / span ${card.width}`,
              gridRow: `${card.y + 1} / span ${card.height}`,
            }}
          >
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_60%)] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div> */}
            <InfoCard size={card.size} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
