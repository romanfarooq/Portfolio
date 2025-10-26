import { skills } from "@/constants";
import { OrbitingCircles } from "@/components/OrbitingCircles";

const halfLength = Math.ceil(skills.length / 2);
const firstCircle = skills.slice(0, halfLength);
const secondCircle = skills.slice(halfLength);

export function Frameworks() {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {firstCircle.map((skill) => (
          <span
            key={skill.name}
            className="rounded-sm duration-200 hover:scale-110"
          >
            <skill.icon width={40} height={40} />
          </span>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} speed={2} reverse>
        {secondCircle.map((skill) => (
          <span
            key={skill.name}
            className="rounded-sm duration-200 hover:scale-110"
          >
            <skill.icon width={25} height={25} />
          </span>
        ))}
      </OrbitingCircles>
    </div>
  );
}
