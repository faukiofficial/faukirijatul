import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
    const [selectedTool, setSelectedTool] = useState(null);

    const value = {
        selectedTool,
        setSelectedTool,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};