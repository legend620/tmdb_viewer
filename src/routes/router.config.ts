import { lazy } from "react";

export const appRoutes = [
  {
    path: "/home",
    name: "Home",
    component: lazy(() => import("pages/Home")),
  },
  {
    path: "/liked",
    name: "Liked",
    component: lazy(() => import("pages/Liked")),
  },
];
