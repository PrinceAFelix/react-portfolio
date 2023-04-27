import React from "react"

const PortfolioContext = React.createContext({
    form: {
        name: '',
        email: '',
        subject: '',
        message: ''
    },
    scrollY: 0,
    onScrollY: () => { },
    onSubmitForm: () => { }
})

export default PortfolioContext;