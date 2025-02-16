import {RouteObject} from "react-router-dom";
import {ROUTE_PRINT_HERO} from "shared/router";
import {PrintHero} from "pages/printHero";

export const print: RouteObject[] = [
    {
        path: ROUTE_PRINT_HERO,
        element: <PrintHero></PrintHero>,
    },
]
