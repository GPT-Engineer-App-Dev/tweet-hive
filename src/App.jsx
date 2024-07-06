import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Search, Bell, Mail, Bookmark, List, User, MoreHorizontal } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";

const queryClient = new QueryClient();

export const navItems = [
  { title: "Home", to: "/", icon: <Home className="h-4 w-4" /> },
  { title: "Explore", to: "/explore", icon: <Search className="h-4 w-4" /> },
  { title: "Notifications", to: "/notifications", icon: <Bell className="h-4 w-4" /> },
  { title: "Messages", to: "/messages", icon: <Mail className="h-4 w-4" /> },
  { title: "Bookmarks", to: "/bookmarks", icon: <Bookmark className="h-4 w-4" /> },
  { title: "Lists", to: "/lists", icon: <List className="h-4 w-4" /> },
  { title: "Profile", to: "/profile", icon: <User className="h-4 w-4" /> },
  { title: "More", to: "/more", icon: <MoreHorizontal className="h-4 w-4" /> },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;