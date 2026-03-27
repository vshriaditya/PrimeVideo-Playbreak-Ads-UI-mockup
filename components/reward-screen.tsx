"use client"

import { useEffect, useMemo, useState } from "react"
import { Check, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { GameData } from "@/app/page"

interface RewardScreenProps {
  game: GameData
  onContinue: () => void
}

export function RewardScreen({ game, onContinue }: RewardScreenProps) {
  const [showConfetti, setShowConfetti] = useState(true)
  const [countdown, setCountdown] = useState(5)
  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        size: `${4 + (i % 5) * 2}px`,
        color: ["#ffd76d", "#55e480", "#ffffff", "#7ad2ff"][i % 4],
        delay: `${(i % 8) * 0.1}s`,
        duration: `${2.2 + (i % 6) * 0.2}s`,
      })),
    []
  )

  useEffect(() => {
    const timeout = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      onContinue()
    }
  }, [countdown, onContinue])

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-[rgba(4,10,18,0.78)] backdrop-blur-[8px]" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-[#55e480]/14 blur-[56px]" />

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div
          className="relative w-full max-w-[760px] overflow-hidden rounded-[30px] border border-white/12"
          style={{
            boxShadow: "0 0 20px rgba(89, 227, 133, 0.16), 0 30px 64px rgba(0, 0, 0, 0.56)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_34%),linear-gradient(180deg,#151d2b_0%,#09111d_100%)]" />
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />

          <div className="relative px-12 py-11">
            <div className="mb-10 flex items-center gap-8">
              <BrandHeader />
              <div className="flex items-center gap-2">
                <span className="text-[17px] font-semibold uppercase tracking-[0.18em] text-[#75bcff]">Playbreak</span>
                <Gamepad2 className="h-5 w-5 text-[#f07a3c]" />
              </div>
            </div>

            <div className="mb-7 flex justify-center">
              <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-[0_4px_16px_rgba(246,197,79,0.2)]">
                <path
                  d="M25 15 H75 V30 C75 50 65 60 50 70 C35 60 25 50 25 30 Z"
                  fill="#f6c54f"
                  stroke="#d89b2f"
                  strokeWidth="2"
                />
                <rect x="40" y="68" width="20" height="8" fill="#f6c54f" stroke="#d89b2f" strokeWidth="1" />
                <rect x="35" y="76" width="30" height="6" fill="#f6c54f" stroke="#d89b2f" strokeWidth="1" />
                <ellipse cx="15" cy="30" rx="10" ry="15" fill="none" stroke="#f6c54f" strokeWidth="4" />
                <ellipse cx="85" cy="30" rx="10" ry="15" fill="none" stroke="#f6c54f" strokeWidth="4" />
              </svg>
            </div>

            <h2 className="mb-1 text-center text-[58px] font-semibold leading-none tracking-[-0.05em] text-white">
              You Won!
            </h2>
            <p className="mb-2 text-center text-[64px] font-[780] leading-none tracking-[-0.06em] text-[#58dd83]">
              {game.reward}
            </p>
            <p className="mb-7 text-center text-[16px] text-white/68">
              {game.rewardDetail}
            </p>

            <div className="mb-5 rounded-[18px] border border-white/18 bg-white/[0.08] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[14px] bg-[#ddb463]">
                  <svg viewBox="0 0 64 64" className="h-10 w-10">
                    <path d="M16 42c7 6 25 6 32 0" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
                    <path d="M14 20h36c0 16-8 26-18 26S14 36 14 20z" fill="#f3d08a" />
                    <path d="M18 16h28" fill="none" stroke="#25a9e0" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] text-white/58">Your reward has been sent to</p>
                  <p className="text-[18px] font-semibold text-white">david@amazon.com</p>
                  <p className="text-[14px] text-white/50">Also saved under Prime Video &gt; Rentals and purchases</p>
                </div>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#50e274]">
                  <Check className="h-6 w-6 text-[#092037]" />
                </div>
              </div>
            </div>

            <div className="mb-4 flex gap-4">
              <Button
                variant="outline"
                className="h-[52px] flex-1 rounded-full border-white/24 bg-transparent text-[18px] font-medium text-white hover:bg-white/8"
                onClick={onContinue}
              >
                Resume playback
              </Button>
              <Button
                className="h-[52px] flex-1 rounded-full border-0 bg-[linear-gradient(180deg,#45b9ff_0%,#208fe0_100%)] text-[18px] font-semibold text-white shadow-[0_6px_20px_rgba(37,148,234,0.25)] hover:opacity-95"
              >
                View in Prime Video
              </Button>
            </div>

            <p className="text-center text-[14px] text-white/46">
              Returning to your show in {countdown} seconds...
            </p>
          </div>
        </div>
      </div>

      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute animate-confetti rounded-full"
              style={{
                left: piece.left,
                top: `-5%`,
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
                boxShadow: "0 0 10px rgba(255,255,255,0.24)",
                animationDelay: piece.delay,
                animationDuration: piece.duration,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function BrandHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#e51b23]">
        <svg viewBox="0 0 100 70" className="h-4 w-4 fill-current text-white">
          <ellipse cx="50" cy="35" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="35" rx="28" ry="18" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="35" rx="10" ry="30" fill="none" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>
      <span className="text-[16px] font-bold tracking-wide text-white">TOYOTA</span>
    </div>
  )
}
