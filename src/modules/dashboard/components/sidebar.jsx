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
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r bg-white p-4 hidden md:block">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 w-[calc(100%-32px)]">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100"
        >
          <LogOut className="h-5 w-5" />
          Log out
        </Link>
      </div>
    </aside>
  );
}
