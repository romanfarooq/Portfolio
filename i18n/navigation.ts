import { routing } from "./routing";
import { createNavigation } from "next-intl/navigation";

export const {
  Link,
  redirect,
  useRouter,
  usePathname,
  getPathname,
  permanentRedirect
} = createNavigation(routing);
