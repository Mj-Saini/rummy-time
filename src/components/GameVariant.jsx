import React, { useState } from "react";
import variantRummy from "../assets/image/png/rummy-varinnt.png";
import points from "../assets/image/png/points.png";
import safe from "../assets/image/png/content-icon-safe.png";

const GameVariant = () => {
  const [activeTabs, setActiveTabs] = useState("variant");

  return (
    <div className="bg-[#1F033C] py-20">
      <div className="container max-w-[1140px] px-4 mx-auto">
        <div className="flex">
          <div className="w-4/12 pe-4">
            <div className="flex flex-col gap-5">
              <button
                onClick={() => setActiveTabs("variant")}
                className={`font-normal text-sm text-white flex gap-3 items-center rounded-xl px-3 bg-[#290e44] h-[118px]  ${
                  activeTabs === "variant"
                    ? "border border-[#CEA879] border-l-[4px] w-[105%] bg-[#290e44] z-[1] border-r-transparent rounded-r-none"
                    : "w-full"
                }`}
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#CEA879]/30 border border-[#CEA879] ">
                  <img
                    className="w-6 h-6"
                    src={variantRummy}
                    alt="variantRummy"
                  />
                </span>
                Variants of rummy
              </button>
              <button
                onClick={() => setActiveTabs("safe")}
                className={`font-normal text-sm text-white flex gap-3 items-center rounded-xl px-3 bg-[#290e44] h-[118px]  ${
                  activeTabs === "safe"
                    ? "border border-[#CEA879] border-l-[4px] w-[105%] bg-[#290e44] z-[1] border-r-transparent rounded-r-none"
                    : "w-full"
                }`}
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#CEA879]/30 border border-[#CEA879] ">
                  <img className="w-6 h-6" src={safe} alt="variantRummy" />
                </span>
                Variants of rummy
              </button>
            </div>
          </div>
          <div className="w-8/12">
            <div
              id="variant"
              className={`py-6 px-8 border border-[#CEA879] bg-[#290e44] h-full rounded-r-xl rounded-b-xl ${
                activeTabs === "variant" ? "rounded-t-none" : " rounded-t-xl"
              }`}
            >
              {activeTabs === "variant" && (
                <div>
                  <div className="flex justify-between items-center ">
                    <h2 className="font-bold text-xl md:text-2xl text-white/90">
                      Rummy Game Variants on RummyTime.com
                    </h2>
                    <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#CEA879]/30 border border-[#CEA879] ">
                      <img
                        className="w-9 h-9"
                        src={variantRummy}
                        alt="variantRummy"
                      />
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-base font-normal text-white/90">
                      Rummy Game Variants on RummyTime.com There are three
                      different variants of rummy available on RummyTime. This
                      is because the platform caters to a diverse group of
                      gamers who can choose their favourite format and play what
                      they want. Whether there is someone who doesn’t have a lot
                      of time to play a game or there is someone who wants to
                      take their time to strategise, there truly is something
                      for everyone who logs into RummyTime. The platform is also
                      popular because there are so many tournaments and massive
                      prize pools. Players can potentially win from lakhs of
                      rupees and that makes it even more exciting and thrilling.
                      Here are the different variants of rummy that are
                      available on RummyTime.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      The platform is also popular because there are so many
                      tournaments and massive prize pools. Players can
                      potentially win from lakhs of rupees and that makes it
                      even more exciting and thrilling.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      Here are the{" "}
                      <span className="text-[#CEA879]">
                        different variants of rummy
                      </span>{" "}
                      that are available on RummyTime.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mt-6">
                    <h2 className="font-bold text-xl md:text-2xl text-white/90 flex items-center gap-2">
                      <img className="w-10 h-10" src={points} alt="points" />{" "}
                      points Rummy
                    </h2>
                    <p className="text-base font-normal text-white/90 -mt-4">
                      This is one of the quickest variants of rummy. But
                      regardless of how fast the games can be,
                      <span className="text-[#CEA879]">Points Rummy</span>{" "}
                      requires quick thinking from all the players. As the name
                      suggests, the game is played for points. All players will
                      try to arrange their cards into sequences and sets. The
                      goal is to reach 0 points, which only happens when a
                      player makes a valid declaration.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      On RummyTime, there is a pre-decided value assigned to
                      every point that’s in play during the game. As a player,
                      you can choose to either join a 2-player table or a
                      6-player table. There are
                      <span className="text-[#CEA879]">
                        free rummy games
                      </span>{" "}
                      requires and practice games that you can choose from. You
                      can also Add Cash and play cash games. You can choose cash
                      games where the predetermined value is ₹0.05 and it can go
                      all the way to ₹500 for a 2-player game. For a 6-player
                      game, the predetermined value ranges from ₹0.05 to ₹125.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mt-6">
                    <h2 className="font-bold text-xl md:text-2xl text-white/90 flex items-center gap-2">
                      <img className="w-10 h-10" src={points} alt="points" />{" "}
                      Pool Rummy
                    </h2>
                    <p className="text-base font-normal text-white/90 -mt-4">
                      RummyTime offers three sub-variants of
                      <span className="text-[#CEA879]"> Pool Rummy </span> .
                      They are called: 61 Pool, 101 Pool, and 201 Pool. There is
                      a fixed entry fee to play the game. This becomes part of
                      the prize pool. The first person to make a valid
                      declaration during each deal will be the winner of that
                      round. They will receive 0 points. Those who lose a
                      particular round will carry the number of points they
                      accumulated to the next round. Players get eliminated if
                      they reach the maximum number of points on the table. So,
                      if one is playing 201 Pool rummy, then players who get 201
                      points or above will be automatically eliminated. The
                      objective is to score the least amount of points at the
                      end of the game. So, the person who wins the entire game
                      will also be the one who has the least number of points.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      Even if you have been eliminated from the game, there is a
                      possibility you can rejoin the game. However, you will
                      have to meet certain criteria for it to happen. Do note
                      that these rules are in play only for the RummyTime
                      platform. They are: The fixed entry fee for the table
                      should be less than ₹2,000. In 61 Pool, the highest score
                      of the remaining players shouldn’t exceed 44 points. In
                      101 Pool, the highest score held by the remaining players
                      should be 79 points or less. While playing 201 Pool, the
                      highest score held by the remaining players should be no
                      higher than 174 points.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      The prize pool depends on the Buy-In. So, if the Buy-In is
                      ₹25, then the prize pool for a 6-player game will be ₹150.
                      This is the kind of format you will enjoy if you want to
                      spend a lot of time strategising toward an exciting win.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mt-6">
                    <h2 className="font-bold text-xl md:text-2xl text-white/90 flex items-center gap-2">
                      <img className="w-10 h-10" src={points} alt="points" />{" "}
                      Deals Rummy
                    </h2>
                    <p className="text-base font-normal text-white/90 -mt-4">
                      What sets
                      <span className="text-[#CEA879]"> Deals Rummy </span>{" "}
                      apart from other variants is that at the very beginning of
                      the game, all players are allocated a set number of chips.
                      Players will have to play with these chips for a
                      predetermined number of deals. At the end of every deal,
                      the player who wins (the first player to make a valid
                      declaration) will get all the chips. The player with the
                      most number of chips at the end of all the pre-decided
                      deals will then be declared the winner.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      It is also a long-format game, however, RummyTime offers a
                      version of this variant that’s called “Express Deal” and
                      this version is quick. And it only includes 1 deal.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      If you choose a 2-player game of Deals rummy, then you
                      will have to play at least 2 deals. If you choose to play
                      a 6-player version of this game, you will have to play 3
                      deals.
                    </p>
                  </div>
                </div>
              )}
              {activeTabs === "safe" && (
                <div>
                  <div className="flex justify-between items-center ">
                    <h2 className="font-bold text-xl md:text-2xl text-white/90">
                      Safe and Secure Rummy Games on RummyTime
                    </h2>
                    <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#CEA879]/30 border border-[#CEA879] ">
                      <img className="w-9 h-9" src={safe} alt="variantRummy" />
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-base font-normal text-white/90">
                      The reason over 1.7 crore players have trusted RummyTime
                      to play the game is because it is a highly safe and secure
                      platform. The platform employs state-of-the-art technology
                      to ensure the security of players. It also has a series of
                      fair-play policies created specifically to ensure secure
                      gaming for all players. Here are just some of the measures
                      at play:
                    </p>
                    <p className="text-base font-normal text-white/90">
                      The platform is also popular because there are so many
                      tournaments and massive prize pools. Players can
                      potentially win from lakhs of rupees and that makes it
                      even more exciting and thrilling.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      Here are the{" "}
                      <span className="text-[#CEA879]">
                        different variants of rummy
                      </span>{" "}
                      that are available on RummyTime.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mt-6">
                    <h2 className="font-bold text-xl md:text-2xl text-white/90 flex items-center gap-2">
                      <img className="w-10 h-10" src={points} alt="points" />{" "}
                      points Rummy
                    </h2>
                    <p className="text-base font-normal text-white/90 -mt-4">
                      This is one of the quickest variants of rummy. But
                      regardless of how fast the games can be,
                      <span className="text-[#CEA879]">Points Rummy</span>{" "}
                      requires quick thinking from all the players. As the name
                      suggests, the game is played for points. All players will
                      try to arrange their cards into sequences and sets. The
                      goal is to reach 0 points, which only happens when a
                      player makes a valid declaration.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      On RummyTime, there is a pre-decided value assigned to
                      every point that’s in play during the game. As a player,
                      you can choose to either join a 2-player table or a
                      6-player table. There are
                      <span className="text-[#CEA879]">
                        free rummy games
                      </span>{" "}
                      requires and practice games that you can choose from. You
                      can also Add Cash and play cash games. You can choose cash
                      games where the predetermined value is ₹0.05 and it can go
                      all the way to ₹500 for a 2-player game. For a 6-player
                      game, the predetermined value ranges from ₹0.05 to ₹125.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mt-6">
                    <h2 className="font-bold text-xl md:text-2xl text-white/90 flex items-center gap-2">
                      <img className="w-10 h-10" src={points} alt="points" />{" "}
                      Pool Rummy
                    </h2>
                    <p className="text-base font-normal text-white/90 -mt-4">
                      RummyTime offers three sub-variants of
                      <span className="text-[#CEA879]"> Pool Rummy </span> .
                      They are called: 61 Pool, 101 Pool, and 201 Pool. There is
                      a fixed entry fee to play the game. This becomes part of
                      the prize pool. The first person to make a valid
                      declaration during each deal will be the winner of that
                      round. They will receive 0 points. Those who lose a
                      particular round will carry the number of points they
                      accumulated to the next round. Players get eliminated if
                      they reach the maximum number of points on the table. So,
                      if one is playing 201 Pool rummy, then players who get 201
                      points or above will be automatically eliminated. The
                      objective is to score the least amount of points at the
                      end of the game. So, the person who wins the entire game
                      will also be the one who has the least number of points.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      Even if you have been eliminated from the game, there is a
                      possibility you can rejoin the game. However, you will
                      have to meet certain criteria for it to happen. Do note
                      that these rules are in play only for the RummyTime
                      platform. They are: The fixed entry fee for the table
                      should be less than ₹2,000. In 61 Pool, the highest score
                      of the remaining players shouldn’t exceed 44 points. In
                      101 Pool, the highest score held by the remaining players
                      should be 79 points or less. While playing 201 Pool, the
                      highest score held by the remaining players should be no
                      higher than 174 points.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      The prize pool depends on the Buy-In. So, if the Buy-In is
                      ₹25, then the prize pool for a 6-player game will be ₹150.
                      This is the kind of format you will enjoy if you want to
                      spend a lot of time strategising toward an exciting win.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mt-6">
                    <h2 className="font-bold text-xl md:text-2xl text-white/90 flex items-center gap-2">
                      <img className="w-10 h-10" src={points} alt="points" />{" "}
                      Deals Rummy
                    </h2>
                    <p className="text-base font-normal text-white/90 -mt-4">
                      What sets
                      <span className="text-[#CEA879]"> Deals Rummy </span>{" "}
                      apart from other variants is that at the very beginning of
                      the game, all players are allocated a set number of chips.
                      Players will have to play with these chips for a
                      predetermined number of deals. At the end of every deal,
                      the player who wins (the first player to make a valid
                      declaration) will get all the chips. The player with the
                      most number of chips at the end of all the pre-decided
                      deals will then be declared the winner.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      It is also a long-format game, however, RummyTime offers a
                      version of this variant that’s called “Express Deal” and
                      this version is quick. And it only includes 1 deal.
                    </p>
                    <p className="text-base font-normal text-white/90">
                      If you choose a 2-player game of Deals rummy, then you
                      will have to play at least 2 deals. If you choose to play
                      a 6-player version of this game, you will have to play 3
                      deals.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameVariant;
