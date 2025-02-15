import { createContext } from "react";

export const AppContext = createContext({
    selectedTool: null,
    setSelectedTool: () => {},
});