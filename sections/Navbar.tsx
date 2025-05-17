import { MobileNavbar } from "@/components/MobileNavbar";
import { DesktopNavbar } from "@/components/DesktopNavbar";

export default function Navbar() {
  return (
    <header className="bg-primary/40 fixed inset-x-0 z-50 mx-auto w-full max-w-7xl px-5 backdrop-blur-lg sm:px-10 lg:px-15">
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
}
