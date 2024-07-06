import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Twitter } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import { Input } from "@/components/ui/input";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr_350px]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-6">
          <div className="font-semibold">Home</div>
        </header>
        <main className="flex-grow p-6">
          <Outlet />
        </main>
      </div>
      <RightSidebar />
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-background lg:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Twitter className="h-6 w-6" />
          <span>Twitter</span>
        </NavLink>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button className="w-full">Tweet</Button>
      </div>
    </div>
  </div>
);

const RightSidebar = () => (
  <div className="hidden border-l bg-background lg:block">
    <div className="flex h-full max-h-screen flex-col gap-2 p-4">
      <Input placeholder="Search Twitter" />
      <div className="rounded-lg bg-muted p-4">
        <h2 className="font-semibold mb-2">Trends for you</h2>
        {/* Add trending topics here */}
      </div>
      <div className="rounded-lg bg-muted p-4">
        <h2 className="font-semibold mb-2">Who to follow</h2>
        {/* Add suggested users here */}
      </div>
    </div>
  </div>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
        isActive ? "text-primary bg-muted" : "text-muted-foreground"
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;