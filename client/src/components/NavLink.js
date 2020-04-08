import React from "react";
import { Link } from "@reach/router";
import COLORS from "../constants";

export const NavLink = props => (<Link {...props} getProps={({ isCurrent }) => {
    // the object returned here is passed to the
    // anchor element's props
    return {
        style: {
            color: isCurrent ? `${COLORS.primary}` : "black"
        }
    };
}} />);

export default NavLink;
