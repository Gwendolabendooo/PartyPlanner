import React from 'react';

const Translate = ({keys}) => {
    const fr = {
    }

    const en = {
    }

    let country = localStorage.getItem("country");

    const translation = function() {
        if (country === "FR") {
            return fr[keys] ? fr[keys] : keys
        }
        return en[keys] ? en[keys] : keys
    }

    return translation();
};

export default props => <Translate {...props}></Translate>;