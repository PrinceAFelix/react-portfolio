import { useState } from "react"

import PortfolioContext from "./portfolio-context"




const PortfolioContextProvider = (props) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [scrollValue, setScrollValue] = useState({
        scrollY: 4,
    })



    const handleForm = (collect) => {
        setForm((prev) => {
            return { ...prev, name: collect.name, email: collect.email, subject: collect.subject, message: collect.message }
        })
    }


    const handleScroll = (value) => {
        setScrollValue((prev) => {
            return { ...prev, scrollY: value }
        })
    }



    const context = {
        form: form,
        scrollY: scrollValue.scrollY,
        onScrollY: handleScroll,
        onSubmitForm: handleForm,
    }

    return <PortfolioContext.Provider value={context}>{props.children}</PortfolioContext.Provider>
}

export default PortfolioContextProvider