"use client";

import { useEffect, useRef, useState } from "react";

type HauntPhase = "off" | "lightning" | "blackout" | "flicker" | "flashlight" | "scare";

export function HalloweenHaunt({ active }: { active: boolean }) {
  const [phase, setPhase] = useState<HauntPhase>("off");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let started = false;
    let scared = false;
    let startTimer = 0;
    let lightningTimer = 0;
    let blackoutTimer = 0;
    let flickerTimer = 0;
    let scareTimer = 0;
    let beamFrame = 0;
    let beamX = window.innerWidth / 2;
    let beamY = window.innerHeight / 2;
    let targetX = beamX;
    let targetY = beamY;

    const animateBeam = () => {
      beamX += (targetX - beamX) * 0.26;
      beamY += (targetY - beamY) * 0.26;
      overlayRef.current?.style.setProperty("--flashlight-x", `${beamX}px`);
      overlayRef.current?.style.setProperty("--flashlight-y", `${beamY}px`);
      if (Math.abs(targetX - beamX) > 0.5 || Math.abs(targetY - beamY) > 0.5) {
        beamFrame = window.requestAnimationFrame(animateBeam);
      } else {
        beamX = targetX;
        beamY = targetY;
        overlayRef.current?.style.setProperty("--flashlight-x", `${beamX}px`);
        overlayRef.current?.style.setProperty("--flashlight-y", `${beamY}px`);
        beamFrame = 0;
      }
    };

    const pointFlashlight = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!beamFrame) beamFrame = window.requestAnimationFrame(animateBeam);
    };

    const changePhase = (next: HauntPhase) => {
      setPhase(next);
      if (next === "off") delete root.dataset.hauntPhase;
      else root.dataset.hauntPhase = next;
    };

    const stop = () => {
      started = true;
      window.clearTimeout(startTimer);
      window.clearTimeout(lightningTimer);
      window.clearTimeout(blackoutTimer);
      window.clearTimeout(flickerTimer);
      window.clearTimeout(scareTimer);
      window.cancelAnimationFrame(beamFrame);
      beamFrame = 0;
      changePhase("off");
    };

    const enterScare = () => {
      if (!started || scared || root.dataset.hauntPhase !== "flashlight") return false;
      scared = true;
      changePhase("scare");
      scareTimer = window.setTimeout(() => {
        changePhase("flashlight");
      }, 2000);
      return true;
    };

    const updateFlashlight = (event: PointerEvent) => {
      if (root.dataset.hauntPhase === "flashlight") pointFlashlight(event);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && root.dataset.hauntPhase) {
        event.preventDefault();
        stop();
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) stop();
    };

    const scareImage = new window.Image();
    scareImage.src = "/halloween/jumpscare-face-v2.webp";
    window.addEventListener("pointermove", updateFlashlight);
    window.addEventListener("keydown", handleKeyDown);
    reducedMotion.addEventListener("change", handleMotionChange);

    startTimer = window.setTimeout(() => {
      if (started) return;
      started = true;
      changePhase("lightning");
      lightningTimer = window.setTimeout(() => {
        changePhase("blackout");
        blackoutTimer = window.setTimeout(() => {
          changePhase("flicker");
          flickerTimer = window.setTimeout(() => {
            changePhase("flashlight");
            scareTimer = window.setTimeout(() => {
              const randomDelay = 1000 + Math.floor(Math.random() * 4001);
              scareTimer = window.setTimeout(enterScare, randomDelay);
            }, 5000);
          }, 800);
        }, 2000);
      }, 720);
    }, 1400);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(lightningTimer);
      window.clearTimeout(blackoutTimer);
      window.clearTimeout(flickerTimer);
      window.clearTimeout(scareTimer);
      window.cancelAnimationFrame(beamFrame);
      window.removeEventListener("pointermove", updateFlashlight);
      window.removeEventListener("keydown", handleKeyDown);
      reducedMotion.removeEventListener("change", handleMotionChange);
      delete root.dataset.hauntPhase;
    };
  }, [active]);

  if (phase === "off") return null;

  const announcement = phase === "lightning"
    ? "Lightning strikes. A short blackout follows, then the flashlight comes on. Press Escape to end the effect."
    : phase === "scare"
      ? "A face lunges from the darkness. Press Escape to end the effect."
      : phase === "blackout"
        ? "The page is briefly black. The flashlight will flicker on shortly. Press Escape to end the effect."
        : phase === "flicker"
          ? "The flashlight is flickering on. Explore the page; the surprise will arrive after a short pause. Press Escape to end the effect."
          : "The flashlight is on. Explore anywhere; the surprise will arrive after a short pause. Press Escape to end the effect.";

  return <>
    <div ref={overlayRef} className={`haunt-overlay haunt-overlay-${phase}`} aria-hidden="true">
      {phase === "lightning" && (
        <div className="haunt-lightning">
          <svg className="haunt-bolt" viewBox="0 0 180 800" preserveAspectRatio="none">
            <path d="M112 0 48 308l56-33-42 251 97-336-63 38L144 0Z" />
            <path d="m52 266-45 95 48-23m87 117 33 55-48-16" />
          </svg>
          <svg className="haunt-bolt haunt-bolt-secondary" viewBox="0 0 180 800" preserveAspectRatio="none">
            <path d="m97 0-51 250 50-25-30 183 80-270-53 28 33-166Z" />
          </svg>
        </div>
      )}
      {phase === "blackout" && <div className="haunt-blackout" />}
      {(phase === "flicker" || phase === "flashlight" || phase === "scare") && <>
        <div className="haunt-darkness" />
        <div className="haunt-beam" />
      </>}
      {phase === "flicker" && <div className="haunt-flicker" />}
      {phase === "scare" && <>
        <div className="haunt-face haunt-face-visible" />
        <div className="haunt-scare-flash" />
        <div className="haunt-static" />
      </>}
    </div>
    <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
  </>;
}

