"use client"

import { useEffect } from "react"
import { Pause, Volume2 } from "lucide-react"

interface PlaybackScreenProps {
  onPause: () => void
}

export function PlaybackScreen({ onPause }: PlaybackScreenProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " " || event.key.toLowerCase() === "k") {
        event.preventDefault()
        onPause()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onPause])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060b12] text-white">
      <img
        src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1920&h=1080&fit=crop"
        alt="Prime Video playback"
        className="absolute inset-0 h-full w-full animate-[playback-pan_14s_ease-in-out_infinite] object-cover scale-[1.06]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.14),transparent_18%),radial-gradient(circle_at_72%_32%,rgba(116,191,255,0.16),transparent_24%),radial-gradient(circle_at_54%_72%,rgba(255,181,71,0.12),transparent_20%)] animate-[playback-shimmer_7s_linear_infinite]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,15,0.2)_0%,rgba(3,8,15,0.05)_34%,rgba(3,8,15,0.18)_62%,rgba(3,8,15,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,131,212,0.12),transparent_28%)]" />
      <div className="absolute inset-y-0 left-[-18%] w-[28%] rotate-[10deg] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)] blur-2xl animate-[playback-scan_6s_ease-in-out_infinite]" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-12 py-10">
        <header className="flex items-start justify-between">
          <div className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#7fcaff] backdrop-blur-sm">
            Prime Video
          </div>
          <div className="rounded-full border border-white/10 bg-black/18 px-4 py-2 text-[13px] text-white/72 backdrop-blur-sm">
            Now playing
          </div>
        </header>

        <div className="flex flex-1 items-end">
          <div className="w-full max-w-[780px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2bb8ff]/30 bg-[#07131f]/72 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8ed8ff] shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#44c8ff] opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#44c8ff]" />
              </span>
              Playback in progress
            </div>

            <h1 className="max-w-[620px] text-[102px] font-[780] leading-[0.9] tracking-[-0.07em] text-white">
              Fallout
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-[16px] text-white/76">
              <span className="rounded bg-white/10 px-3 py-1 text-white">S2 E1</span>
              <span>Episode 1</span>
              <span>TV-14</span>
              <span>Included with Prime</span>
            </div>

            <p className="mt-6 max-w-[720px] text-[20px] leading-8 text-white/74">
              The story is already in motion. Pause once and the Playbreak surprise reveals itself as part of the Prime Video flow.
            </p>

            <div className="mt-10 max-w-[880px]">
              <div className="mb-3 flex items-center justify-between text-[14px] text-white/58">
                <span>21:14 elapsed</span>
                <span>58:02 total runtime</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/14">
                <div className="h-full w-[36%] rounded-full bg-[#19a9ff] animate-[playback-progress_4s_ease-in-out_infinite]" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(180deg,#2bb8ff_0%,#1387e6_100%)] px-7 py-4 text-[18px] font-semibold tracking-tight text-white shadow-[0_14px_28px_rgba(17,120,206,0.32)]"
                onClick={onPause}
              >
                <Pause className="h-5 w-5" />
                Press Pause to continue
              </button>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/22 px-5 py-3 text-[15px] text-white/74 backdrop-blur-sm">
                <Volume2 className="h-5 w-5" />
                You can also press <span className="font-semibold text-white">Space</span> or <span className="font-semibold text-white">K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
