import { MobileNavbar } from "@/components/MobileNavbar";
import { DesktopNavbar } from "@/components/DesktopNavbar";

export function Navbar() {
  return (
    <header className="bg-primary/40 fixed inset-x-0 z-50 w-full px-5 backdrop-blur-lg md:px-10 lg:px-15">
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
}
