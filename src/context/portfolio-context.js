import React from "react"

const PortfolioContext = React.createContext({
    scrollY: 0,
    onScrollY: () => { },
})

export default PortfolioContext;