import { Home, Info } from "lucide-react";
import { createElement } from "react";

export const routes = [
    { view: true, path: "/",        name: "Home",     icon: createElement(Home) },
    { view: true, path: "/contact", name: "Contact",  icon: createElement(Info) },
]