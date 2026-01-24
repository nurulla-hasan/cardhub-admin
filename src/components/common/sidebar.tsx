import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  LayoutGrid,
  Settings,
  LogOut,
  ChevronDown,
  Package,
  Users,
  History,
  BarChart3,
  ShieldAlert,
  User,
  Info,
  ReceiptText,
  GlobeLock,
  ListOrdered,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}) => {
  const location = useLocation();
  const prevLocation = useRef(location);
  const section = location.pathname.split("/")[1] || "";
  const isSettingsPath = section === "settings";
  const isManagementPath = section === "management";

  const [isManagementOpen, setIsManagementOpen] = useState(!isManagementPath);
  const [isSettingsOpen, setIsSettingsOpen] = useState(!isSettingsPath);

  useEffect(() => {
    if (prevLocation.current !== location && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
    prevLocation.current = location;
  }, [location, isSidebarOpen, setIsSidebarOpen]);

  const navItems = useMemo(
    () => [{ name: "Dashboard", icon: LayoutGrid, href: "/" }],
    [],
  );

  const managementItems = [
    { name: "Users", icon: Users, href: "/user-management" },
    { name: "Listing", icon: Package, href: "/listing-management" },
    { name: "Transactions", icon: History, href: "/transactions" },
    { name: "Report Management", icon: ShieldAlert, href: "/report-management" },
    { name: "Analytics", icon: BarChart3, href: "/transaction-reports" },
  ];

  const settingsSubItems = useMemo(
    () => [
      { name: "Profile", icon: User, href: "/settings/profile" },
      { name: "About Us", icon: Info, href: "/settings/about" },
      { name: "Terms and Conditions", icon: ReceiptText, href: "/settings/terms" },
      { name: "Privacy Policy", icon: GlobeLock, href: "/settings/privacy" },
    ],
    [],
  );

  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen text-foreground w-64 transition-transform duration-300 ease-in-out transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 flex flex-col`}
    >
      <div className="p-6">
        <span className="text-3xl font-bold font-rakkas text-primary">
          Cardhub Admin
        </span>
      </div>
      <ScrollArea className="h-[calc(100vh-149px)]">
        <nav className="grow space-y-3 p-4">
          {/* Dashboard */}
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end
              className={({ isActive }) =>
                `w-full flex items-center justify-start p-2 rounded-sm text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "border-x-2 border-primary bg-primary/20"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }
                            `
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="mr-2 w-4 h-4" />
              {item.name}
            </NavLink>
          ))}

          {/* Management group */}
          <Collapsible defaultOpen={isManagementOpen}>
            <CollapsibleTrigger
              onClick={() => setIsManagementOpen(!isManagementOpen)}
              className={`w-full flex items-center justify-between p-2 rounded-sm text-base font-medium cursor-pointer transition-colors duration-200 
                    ${
                      isManagementPath
                        ? "border-x-2 border-primary bg-primary/20"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }
                            `}
            >
              <div className="flex items-center text-sm px-2">
                <ListOrdered className="mr-2 h-4 w-4" />
                Management
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isManagementOpen ? "-rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="py-2 space-y-2">
              {managementItems.map((item, index) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: "both",
                  }}
                  className={({ isActive }) =>
                    `animate-fade-in-up w-[90%] ml-5 flex items-center justify-start px-2 py-2 rounded-sm text-sm font-medium transition-colors duration-200   
                                ${
                                  isActive
                                    ? "border-x-2 border-primary bg-primary/20"
                                    : "hover:bg-accent hover:text-accent-foreground"
                                }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon className="mr-2 w-4 h-4" />
                  {item.name}
                </NavLink>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Settings group */}
          <Collapsible defaultOpen={isSettingsOpen}>
            <CollapsibleTrigger
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`w-full flex items-center justify-between p-2 rounded-sm text-base font-medium cursor-pointer transition-colors duration-200 
                    ${
                      isSettingsPath
                        ? "border-x-2 border-primary bg-primary/20"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }
                            `}
            >
              <div className="flex items-center text-sm px-2">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isSettingsOpen ? "-rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="py-2 space-y-2">
              {settingsSubItems.map((item, index) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: "both",
                  }}
                  className={({ isActive }) =>
                    `animate-fade-in-up w-[90%] ml-5 flex items-center justify-start px-2 py-2 rounded-sm text-sm font-medium transition-colors duration-200   
                                ${
                                  isActive
                                    ? "border-x-2 border-primary bg-primary/20"
                                    : "hover:bg-accent hover:text-accent-foreground"
                                }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon className="mr-2 w-4 h-4" />
                  {item.name}
                </NavLink>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </ScrollArea>
      <div className="border-t p-4">
        <Link to="/auth/login" className="block w-full text-center">
          <Button variant="outline" className="justify-start w-full">
            <LogOut />
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;