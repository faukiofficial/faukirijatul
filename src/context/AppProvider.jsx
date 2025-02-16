import { useState } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";

export const AppProvider = ({ children }) => {
    const [selectedTool, setSelectedTool] = useState(null);

    const value = {
        selectedTool,
        setSelectedTool,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};