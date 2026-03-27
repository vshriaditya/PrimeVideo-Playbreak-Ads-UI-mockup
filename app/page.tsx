"use client"

import { useState } from "react"
import { FireTVInterface } from "@/components/fire-tv-interface"
import { GameScreen } from "@/components/game-screen"
import { RewardScreen } from "@/components/reward-screen"

export type PlaybreakState = "watching" | "playing" | "reward"

export interface GameData {
  id: string
  brand: string
  brandLogo: string
  brandColor: string
  type: "trivia"
  surface: string
  question: string
  options: string[]
  correctAnswer: number
  reward: string
  rewardAmount: string
  rewardDetail: string
}

const toyotaGame: GameData = {
  id: "toyota",
  brand: "Toyota",
  brandLogo: "",
  brandColor: "#EB0A1E",
  type: "trivia",
  surface: "Prime Video pause ad",
  question: "Which Toyota SUV was rated America's Most Loved in 2025?",
  options: ["RAV4", "Highlander", "4Runner", "Tacoma"],
  correctAnswer: 0,
  reward: "$3 Prime Video credit",
  rewardAmount: "$3",
  rewardDetail: "Added instantly to your Prime Video account for your next rental or purchase.",
}

export default function Home() {
  const [state, setState] = useState<PlaybreakState>("watching")
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null)

  const handlePlaybreakClick = () => {
    setSelectedGame(toyotaGame)
    setState("playing")
  }

  const handleGameComplete = (won: boolean) => {
    if (won) {
      setState("reward")
    } else {
      setState("watching")
      setSelectedGame(null)
    }
  }

  const handleContinueWatching = () => {
    setState("watching")
    setSelectedGame(null)
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {state === "watching" && (
        <FireTVInterface onPlaybreakClick={handlePlaybreakClick} />
      )}

      {state === "playing" && selectedGame && (
        <GameScreen game={selectedGame} onComplete={handleGameComplete} />
      )}

      {state === "reward" && selectedGame && (
        <RewardScreen game={selectedGame} onContinue={handleContinueWatching} />
      )}
    </main>
  )
}
