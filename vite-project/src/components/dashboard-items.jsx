import { Package, Lock, MapPin, CreditCard, Wallet, Headphones, Building, Box } from "lucide-react"

export const dashboardItems = [
  {
    icon: Package,
    title: "Your Orders",
    description: "Track, return, or buy things again",
    link: "/orders",
  },
  {
    icon: Lock,
    title: "Login & security",
    description: "Edit login, name, and mobile number",
    link: "/security",
  },
  {
    icon: Box,
    title: "Prime",
    description: "View benefits and payment settings",
    link: "/prime",
  },
  {
    icon: MapPin,
    title: "Your Addresses",
    description: "Edit addresses for orders and gifts",
    link: "/addresses",
  },
  {
    icon: Building,
    title: "Your business account",
    description: "Sign up for free to save up to 28% with GST invoice and bulk discounts",
    link: "/business",
  },
  {
    icon: CreditCard,
    title: "Payment options",
    description: "Edit or add payment methods",
    link: "/payments",
  },
  {
    icon: Wallet,
    title: "Account balance",
    description: "Add money to your balance",
    link: "/balance",
  },
  {
    icon: Headphones,
    title: "Contact Us",
    description: "Contact our customer service via phone or chat",
    link: "/contact",
  },
]

