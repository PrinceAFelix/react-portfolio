import React, { useState, useCallback } from "react";
import PortfolioContext from "./portfolio-context";

const PortfolioContextProvider = (props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [scrollValue, setScrollValue] = useState({
        scrollY: 4,
    });

    const handleForm = useCallback((collect) => {
        setForm(prev => ({
            ...prev,
            name: collect.name,
            email: collect.email,
            subject: collect.subject,
            message: collect.message
        }));
    }, []);

    const handleScroll = useCallback((value) => {
        setScrollValue(prev => ({
            ...prev,
            scrollY: value
        }));
    }, []);

    const context = {
        form: form,
        scrollY: scrollValue.scrollY,
        onScrollY: handleScroll,
        onSubmitForm: handleForm,
    };

    return (
        <PortfolioContext.Provider value={context}>
            {props.children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioContextProvider;
