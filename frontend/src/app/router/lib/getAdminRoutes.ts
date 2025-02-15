import {RouteObject} from "react-router-dom";
import {admin} from "../router/admin.tsx";

export const getAdminRoutes = (): RouteObject[] => {
    return [...admin];
};
