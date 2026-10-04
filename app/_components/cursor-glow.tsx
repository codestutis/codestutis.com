"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Flashlight } from "lucide-react";

const CORD_HEIGHT = 56;
const PULL_THRESHOLD = 24;
const MAX_PULL = 48;

export function CursorGlow() {
  const [lightsOff, setLightsOff] = useState(false);
  const darknessRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const flashlightRef = useRef<HTMLDivElement>(null);
  const cordRef = useRef<HTMLSpanElement>(null);
  const pullRef = useRef<HTMLSpanElement>(null);
  const lightsOffRef = useRef(false);
  const pointerActiveRef = useRef(false);
  const finePointerRef = useRef(false);
  const dragStartRef = useRef<number | null>(null);
  const pullDistanceRef = useRef(0);
  const draggedRef = useRef(false);
  const suppressClickRef = useRef(false);

  useEffect(() => {
    lightsOffRef.current = lightsOff;
    document.documentElement.classList.toggle("lights-out", lightsOff);

    if (glowRef.current) {
      glowRef.current.style.opacity =
        !lightsOff && pointerActiveRef.current && finePointerRef.current
          ? "1"
          : "0";
    }

    if (flashlightRef.current) {
      flashlightRef.current.style.opacity =
        lightsOff && pointerActiveRef.current && finePointerRef.current
          ? "1"
          : "0";
    }

    return () => {
      document.documentElement.classList.remove("lights-out");
    };
  }, [lightsOff]);

  useEffect(() => {
    finePointerRef.current = window.matchMedia("(pointer: fine)").matches;

    let frame: number | null = null;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    function updatePointerEffects() {
      darknessRef.current?.style.setProperty(
        "--flashlight-x",
        `${pointerX}px`,
      );
      darknessRef.current?.style.setProperty(
        "--flashlight-y",
        `${pointerY}px`,
      );

      if (finePointerRef.current) {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
          glowRef.current.style.opacity = lightsOffRef.current ? "0" : "1";
        }

        if (flashlightRef.current) {
          flashlightRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
          flashlightRef.current.style.opacity = lightsOffRef.current ? "1" : "0";
        }
      }

      frame = null;
    }

    function handlePointerMove(event: PointerEvent) {
      pointerActiveRef.current = true;
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frame === null) {
        frame = window.requestAnimationFrame(updatePointerEffects);
      }
    }

    function hidePointerEffects() {
      pointerActiveRef.current = false;

      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }

      if (flashlightRef.current) {
        flashlightRef.current.style.opacity = "0";
      }
    }

    updatePointerEffects();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener(
      "pointerleave",
      hidePointerEffects,
    );

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        hidePointerEffects,
      );

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  function toggleLights() {
    setLightsOff((current) => !current);
  }

  function setPullDistance(distance: number) {
    pullDistanceRef.current = distance;

    if (cordRef.current) {
      cordRef.current.style.height = `${CORD_HEIGHT + distance}px`;
    }

    if (pullRef.current) {
      pullRef.current.style.transform = `translate(-50%, ${distance}px)`;
    }
  }

  function resetPull() {
    if (cordRef.current) {
      cordRef.current.style.transitionDuration = "200ms";
    }

    if (pullRef.current) {
      pullRef.current.style.transitionDuration = "200ms";
    }

    setPullDistance(0);
  }

  function handlePullStart(event: ReactPointerEvent<HTMLButtonElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartRef.current = event.clientY;
    draggedRef.current = false;

    if (cordRef.current) {
      cordRef.current.style.transitionDuration = "0ms";
    }

    if (pullRef.current) {
      pullRef.current.style.transitionDuration = "0ms";
    }
  }

  function handlePullMove(event: ReactPointerEvent<HTMLButtonElement>) {
    if (dragStartRef.current === null) {
      return;
    }

    const distance = Math.min(
      MAX_PULL,
      Math.max(0, event.clientY - dragStartRef.current),
    );

    if (distance > 4) {
      draggedRef.current = true;
    }

    setPullDistance(distance);
  }

  function finishPull() {
    if (dragStartRef.current === null) {
      return;
    }

    const completedPull = pullDistanceRef.current >= PULL_THRESHOLD;
    suppressClickRef.current = draggedRef.current;
    dragStartRef.current = null;
    resetPull();

    if (completedPull) {
      toggleLights();
    }
  }

  function handleClick() {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }

    toggleLights();
  }

  return (
    <>
      <div
        ref={darknessRef}
        aria-hidden="true"
        className={`flashlight-darkness pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 motion-reduce:transition-none ${
          lightsOff ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 h-16 w-16 rounded-full bg-blue-500/15 opacity-0 blur-xl transition-opacity duration-150 motion-reduce:hidden dark:bg-blue-400/20"
      />

      <div
        ref={flashlightRef}
        aria-hidden="true"
        className="flashlight-cursor pointer-events-none fixed left-0 top-0 z-[80] h-9 w-9 text-white opacity-0 transition-opacity duration-100 motion-reduce:transition-none"
      >
        <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white shadow-[0_0_8px_3px_rgba(255,255,255,0.65)]" />
        <Flashlight className="absolute left-1 top-1 h-7 w-7 -rotate-45 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
      </div>

      <div className="fixed right-4 top-0 z-[70] hidden flex-col items-center sm:flex sm:right-6">
        <div
          aria-hidden="true"
          className={`relative h-6 w-14 [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)] transition-[background-color,filter] duration-200 ${
            lightsOff
              ? "bg-zinc-800 dark:bg-zinc-300"
              : "bg-zinc-800 drop-shadow-[0_7px_8px_rgba(59,130,246,0.55)] dark:bg-zinc-200"
          }`}
        >
          <span
            className={`absolute inset-x-3 bottom-0 h-0.5 bg-blue-400 transition-opacity duration-200 ${
              lightsOff ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <button
          type="button"
          aria-label={lightsOff ? "Turn the lights on" : "Turn the lights off"}
          aria-pressed={lightsOff}
          onClick={handleClick}
          onPointerDown={handlePullStart}
          onPointerMove={handlePullMove}
          onPointerUp={finishPull}
          onPointerCancel={finishPull}
          className="relative h-28 w-12 touch-none rounded-b-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span
            ref={cordRef}
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-zinc-400 transition-[height] ease-out dark:bg-zinc-600"
          />
          <span
            ref={pullRef}
            aria-hidden="true"
            className="absolute left-1/2 top-12 h-4 w-4 -translate-x-1/2 rounded-full border border-zinc-400 bg-zinc-100 shadow-sm transition-transform ease-out dark:border-zinc-600 dark:bg-zinc-800"
          />
        </button>
      </div>

      <span className="sr-only" aria-live="polite">
        Lights {lightsOff ? "off" : "on"}
      </span>
    </>
  );
}
