"use client";
import InfoCard from "@/components/card";
import { useEffect, useState } from "react";

const GridComponent = () => {
  const gridRows = 7;
  const gridCols = 9;
  const [cards, setCards] = useState([]);

  const cardTypes = [
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

  const colors = [
    { primary: "#333333", secondary: true },
    { primary: "#333333", secondary: true },
    { primary: "#333333", secondary: true },
    { primary: "#333333", secondary: true },
    { primary: "#333333", secondary: true },
    { primary: "#333333", secondary: true },
    { primary: "#333333", secondary: true },
  ];

  const store = [];

  const isOccupied = (x, y, width, height) => {
    return store.some(
      (card) =>
        x < card.x + card.width &&
        x + width > card.x &&
        y < card.y + card.height &&
        y + height > card.y
    );
  };

  const chooseRandomPosition = (width, height) => {
    let x, y;
    let attempts = 200;
    do {
      x = Math.floor(Math.random() * (gridCols - width + 1));
      y = Math.floor(Math.random() * (gridRows - height + 1));
    } while (isOccupied(x, y, width, height) && --attempts > 0);

    return attempts > 0 ? { x, y } : null;
  };

  useEffect(() => {
    const placeCards = async () => {
      const newCards = [];
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
              size: size,
            });

            setCards([...newCards]);
          }
        }
      }
    };

    placeCards();
  }, []);

  return (
    <div className="w-screen h-screen bg-stone-900">
      <div
        className="grid gap-2 bg-stone-900 w-full h-full place-content-center"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, 100px)`,
          gridTemplateRows: `repeat(${gridRows}, 100px)`,
          display: "grid",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center overflow-hidden justify-center rounded-4xl"
            style={{
              gridColumn: `${card.x + 1} / span ${card.width}`,
              gridRow: `${card.y + 1} / span ${card.height}`,
            }}
          >
            <InfoCard size={card.size} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
