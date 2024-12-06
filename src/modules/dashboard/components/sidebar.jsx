import {
  Home,
  Bell,
  ShoppingBag,
  MessageSquare,
  Wallet,
  Star,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router";

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Bell, label: "Notifications" },
    { icon: ShoppingBag, label: "Shop" },
    { icon: MessageSquare, label: "Conversation" },
    { icon: Wallet, label: "Wallet" },
    { icon: Star, label: "Subscription" },
    { icon: User, label: "My Profile" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-60 rounded-lg flex-col lg:flex hidden">
      <div className="flex items-center py-6 px-6 w-full bg-white rounded-lg shadow-sm mb-8">
        <h1 className="text-2xl font-serif">LOGO</h1>
      </div>
      <nav className="bg-white py-6 rounded-lg shadow-sm">
        <div className="flex-1 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center gap-3 first:text-black first:border-l-2 first:border-l-sidebarActiveBorder px-6 py-2 text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-20">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-6 py-2 text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5" />
            Log out
          </Link>
        </div>
      </nav>
      <p className="text-xs text-gray-400 my-2 p-2">2024 logo name</p>
    </aside>
  );
}
