"use client"

import { useState } from "react"
import {
  ChevronLeft,
  Gamepad2,
  Pause,
  Play,
  Settings,
  Subtitles,
  Volume2,
} from "lucide-react"

interface FireTVInterfaceProps {
  onPlaybreakClick: () => void
}

const relatedTitles = [
  {
    title: "Episode 2",
    subtitle: "Vaultfall",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=480&h=270&fit=crop",
  },
  {
    title: "Bonus",
    subtitle: "Inside the Wasteland",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=480&h=270&fit=crop",
  },
  {
    title: "Customers also watched",
    subtitle: "Reacher",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=480&h=270&fit=crop",
  },
]

export function FireTVInterface({ onPlaybreakClick }: FireTVInterfaceProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060b12] text-white">
      <img
        src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1920&h=1080&fit=crop"
        alt="Prime Video paused playback"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,18,0.58)_0%,rgba(4,10,18,0.14)_24%,rgba(4,10,18,0.26)_54%,rgba(4,10,18,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(39,133,214,0.18),transparent_32%)]" />

      <div className="relative z-10 flex min-h-screen flex-col px-12 py-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-black/24">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#7fcaff]">
                Prime Video
              </p>
              <p className="text-[15px] text-white/72">Paused playback experience</p>
            </div>
          </div>

          <PrimeVideoWordmark />
        </header>

        <div className="flex flex-1 items-end">
          <div className="grid w-full grid-cols-[1.12fr_0.88fr] gap-10">
            <section className="pb-5">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/28 px-4 py-2 text-[13px] text-white/72">
                <Pause className="h-4 w-4" />
                Playback paused at 21:14
              </div>

              <h1 className="max-w-[620px] text-[92px] font-[780] leading-[0.9] tracking-[-0.06em] text-white">
                Fallout
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-[16px] text-white/76">
                <span className="rounded bg-white/10 px-3 py-1 text-white">S2 E1</span>
                <span>45 min remaining</span>
                <span>TV-14</span>
                <span>Included with Prime</span>
              </div>

              <p className="mt-6 max-w-[640px] text-[18px] leading-8 text-white/76">
                Lucy and The Ghoul cross deeper into the wasteland as Vault-Tec secrets start to surface.
                Prime Video resumes instantly when the viewer exits Playbreak.
              </p>

              <div className="mt-8 max-w-[720px]">
                <div className="mb-3 flex items-center justify-between text-[14px] text-white/58">
                  <span>21:14 elapsed</span>
                  <span>58:02 total runtime</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/14">
                  <div className="h-full w-[36%] rounded-full bg-[#19a9ff]" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <ControlButton icon={Play} label="Resume" active />
                <ControlButton icon={Volume2} label="Audio" />
                <ControlButton icon={Subtitles} label="Subtitles" />
                <ControlButton icon={Settings} label="More" />
              </div>

              <div className="mt-10">
                <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  Up next on Prime Video
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {relatedTitles.map((item) => (
                    <div
                      key={item.subtitle}
                      className="overflow-hidden rounded-[18px] border border-white/8 bg-black/18 backdrop-blur-sm"
                    >
                      <img src={item.image} alt={item.subtitle} className="aspect-video w-full object-cover" />
                      <div className="px-4 py-3">
                        <p className="text-[12px] uppercase tracking-[0.18em] text-white/40">{item.title}</p>
                        <p className="mt-1 text-[16px] font-medium text-white/88">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="flex items-end">
              <button
                className={`ml-auto w-full max-w-[760px] overflow-hidden rounded-[28px] border bg-[linear-gradient(180deg,rgba(22,29,43,0.95)_0%,rgba(9,16,28,0.96)_100%)] text-left transition-all duration-200 ${
                  isFocused
                    ? "border-[#63c5ff] shadow-[0_0_0_3px_rgba(71,171,255,0.22),0_24px_60px_rgba(0,0,0,0.42)]"
                    : "border-white/10 shadow-[0_20px_48px_rgba(0,0,0,0.34)]"
                }`}
                onClick={onPlaybreakClick}
                onMouseEnter={() => setIsFocused(true)}
                onMouseLeave={() => setIsFocused(false)}
              >
                <div className="border-b border-white/8 px-9 py-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-[0.26em] text-[#7fcaff]">
                        Sponsored pause ad
                      </p>
                      <p className="mt-3 text-[38px] font-[760] tracking-[-0.05em] text-white">Playbreak</p>
                    </div>
                    <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-white text-[#0b1220]">
                      <Gamepad2 className="h-10 w-10" />
                    </div>
                  </div>
                </div>

                <div className="p-9">
                  <div className="mb-7 flex items-center gap-4">
                    <BrandHeader />
                    <span className="rounded-full border border-white/10 bg-white/6 px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.18em] text-white/72">
                      10 seconds
                    </span>
                  </div>

                  <p className="max-w-[560px] text-[40px] font-[760] leading-[1.06] tracking-[-0.045em] text-white">
                    Which Toyota SUV was rated America&apos;s Most Loved in 2025?
                  </p>

                  <p className="mt-5 max-w-[560px] text-[18px] leading-[1.6] text-white/64">
                    Answer with your remote before playback resumes. Correct answers unlock a Prime Video credit instantly.
                  </p>

                  <div className="mt-10 flex items-end justify-between gap-8">
                    <div>
                      <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-white/42">
                        Viewer reward
                      </p>
                      <p className="mt-4 whitespace-nowrap text-[34px] font-[760] leading-none tracking-[-0.045em] text-[#66d57f]">
                        $3 Prime Video credit
                      </p>
                    </div>

                    <div className="whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#2bb8ff_0%,#1387e6_100%)] px-8 py-4 text-[18px] font-semibold tracking-tight text-white">
                      Press OK to play
                    </div>
                  </div>
                </div>
              </button>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

function ControlButton({
  icon: Icon,
  label,
  active,
}: {
  icon: typeof Play
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`flex items-center gap-3 rounded-full border px-5 py-3 text-[15px] font-medium transition-colors ${
        active ? "border-[#3eb7ff] bg-[#1291e8] text-white" : "border-white/12 bg-black/22 text-white/80"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  )
}

function PrimeVideoWordmark() {
  return (
    <div className="text-right">
      <div className="text-[25px] font-semibold tracking-[-0.03em] text-[#2e8dff]">prime video</div>
      <svg viewBox="0 0 52 12" className="ml-auto mt-1 h-3 w-12 text-[#2ea7ff]">
        <path
          d="M2 2.5c6 4.5 24 6 48 1"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}

function BrandHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#ff1f29] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <svg viewBox="0 0 100 70" className="h-5 w-5 fill-current text-white">
          <ellipse cx="50" cy="35" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="35" rx="28" ry="18" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="35" rx="10" ry="30" fill="none" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>
      <span className="text-[20px] font-bold tracking-[0.08em] text-white">TOYOTA</span>
    </div>
  )
}
