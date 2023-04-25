import { useState } from "react"

import PortfolioContext from "./portfolio-context"




const PortfolioContextProvider = (props) => {

    const [scrollValue, setScrollValue] = useState({
        scrollY: 4,
    })

    const handleScroll = (value) => {
        setScrollValue((prev) => {
            return { ...prev, scrollY: value }
        })
    }


    const context = {
        scrollY: scrollValue.scrollY,
        onScrollY: handleScroll,
    }

    return <PortfolioContext.Provider value={context}>{props.children}</PortfolioContext.Provider>
}

export default PortfolioContextProvider