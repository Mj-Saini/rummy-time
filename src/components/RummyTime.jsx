import React from "react";

const RummyTime = () => {
  return (
    <div className="bg-[url('/src/assets/image/png/rummy-time-img.png')] bg-cover bg-top bg-no-repeat py-16">
      <div className="container max-w-[1140px] px-4 mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#CEA879] opacity-90 lg:!leading-[55px] mt-3 text-center">
            Play rummy online on RummyTime
          </h2>
          <p className="font-normal text-base text-white text-center opacity-90 mt-6">
            Rummy is one of the most popular card games in India. Some believe
            that the roots of the game can be traced back to the 16th century.
            That’s why there are crores of players who play this game every day
            online.
          </p>
          <p className="font-normal text-base text-white text-center opacity-90 mt-8">
            Traditionally, the game is played between 2-6 players. Generally,
            all players are dealt 13 cards each. The objective of the game is
            simple. The cards have to be arranged into sequences and sets. The
            first player to make a valid declaration (which includes at least
            two sequences of which one sequence should be a pure sequence) will
            win. There are many variants of rummy that make this game so
            exciting for players around the world.
          </p>
          <button className="font-normal text-sm text-[#CEA879] text-center mt-6">
            read more
          </button>
          <div className="bg-custom-gradient flex mt-14 h-1 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default RummyTime;
