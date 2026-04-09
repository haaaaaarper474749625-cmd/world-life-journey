"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type TravelerProfile = {
  origin: string;
  goal: string;
  trait: string;
  startingBudget: number;
};

type EffectDelta = {
  cash?: number;
  energy?: number;
  mood?: number;
  relationship?: number;
  skill?: number;
  health?: number;
  day?: number;
  city?: string;
};

type GameState = {
  initialized: boolean;
  profile: TravelerProfile | null;
  city: string;
  cash: number;
  energy: number;
  health: number;
  mood: number;
  relationship: number;
  skill: number;
  day: number;
  activityLog: string[];
  routeHistory: string[];
};

type GameStateContextValue = {
  state: GameState;
  createTraveler: (profile: TravelerProfile) => void;
  applyPlannerEffects: (entries: { label: string; result: string; effect: EffectDelta }[]) => void;
  applyRouteEffect: (routeLabel: string, methodLabel: string, effect: EffectDelta) => void;
  applyAction: (title: string, effect: EffectDelta) => void;
  resetGame: () => void;
};

const STORAGE_KEY = "world-life-journey-save";

const defaultState: GameState = {
  initialized: false,
  profile: null,
  city: "Tokyo",
  cash: 1240,
  energy: 68,
  health: 85,
  mood: 72,
  relationship: 18,
  skill: 12,
  day: 14,
  activityLog: [
    "Arrived in Tokyo and chose a capsule hotel for three nights.",
    "Accepted a weekend cafe shift to extend the travel budget.",
  ],
  routeHistory: ["Auckland -> Tokyo"],
};

const GameStateContext = createContext<GameStateContextValue | null>(null);

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function reduceState(state: GameState, effect: EffectDelta) {
  return {
    ...state,
    city: effect.city ?? state.city,
    cash: state.cash + (effect.cash ?? 0),
    energy: clamp(state.energy + (effect.energy ?? 0)),
    health: clamp(state.health + (effect.health ?? 0)),
    mood: clamp(state.mood + (effect.mood ?? 0)),
    relationship: clamp(state.relationship + (effect.relationship ?? 0)),
    skill: clamp(state.skill + (effect.skill ?? 0)),
    day: state.day + (effect.day ?? 0),
  };
}

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(defaultState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setState(JSON.parse(raw) as GameState);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [hydrated, state]);

  const value = useMemo<GameStateContextValue>(
    () => ({
      state,
      createTraveler(profile) {
        setState({
          ...defaultState,
          initialized: true,
          profile,
          city: profile.origin,
          cash: profile.startingBudget,
          energy: 82,
          health: 88,
          mood: 74,
          relationship: 10,
          skill: profile.goal === "Study abroad life" ? 20 : 12,
          day: 1,
          activityLog: [
            `Started a new journey from ${profile.origin}.`,
            `Primary goal selected: ${profile.goal}.`,
          ],
          routeHistory: [`Origin set to ${profile.origin}`],
        });
      },
      applyPlannerEffects(entries) {
        setState((current) => {
          const next = entries.reduce((acc, entry) => reduceState(acc, entry.effect), current);
          return {
            ...next,
            day: next.day + 1,
            activityLog: [
              `Planned a full day in ${current.city}: ${entries.map((entry) => entry.label).join(", ")}.`,
              ...current.activityLog,
            ].slice(0, 12),
          };
        });
      },
      applyRouteEffect(routeLabel, methodLabel, effect) {
        setState((current) => {
          const next = reduceState(current, effect);
          return {
            ...next,
            activityLog: [
              `Chose ${methodLabel} on ${routeLabel}.`,
              ...current.activityLog,
            ].slice(0, 12),
            routeHistory: [`${routeLabel} via ${methodLabel}`, ...current.routeHistory].slice(0, 12),
          };
        });
      },
      applyAction(title, effect) {
        setState((current) => {
          const next = reduceState(current, effect);
          return {
            ...next,
            activityLog: [`${title} in ${current.city}.`, ...current.activityLog].slice(0, 12),
          };
        });
      },
      resetGame() {
        setState(defaultState);
      },
    }),
    [state],
  );

  return <GameStateContext.Provider value={value}>{children}</GameStateContext.Provider>;
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error("useGameState must be used within GameStateProvider");
  }
  return context;
}
