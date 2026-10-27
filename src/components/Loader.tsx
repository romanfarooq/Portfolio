import { useProgress } from "@react-three/drei";

export function Loader() {
  const active = useProgress((state) => state.active);

  if (!active) return null;

  return (
    <div
      role="status"
      aria-label="Loading 3D scene"
      className="loader pointer-events-none"
    >
      <div className="loading" aria-hidden="true" />
    </div>
  );
}
