import {RouteObject} from "react-router-dom";
import {print} from "../router/print.tsx";

export const getPrintRoutes = (): RouteObject[] => {
    return [...print];
};
