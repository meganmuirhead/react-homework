import React from 'react';

const Validation = (props) => {
    let validationText = 'Your text is above 5 characters';

    if (props.inputLength <= 5) {
        return validationText = 'Your text is less 5 characters';

    }

    return(
        <div >
            {validationText}

        </div>
    )
}

export default Validation;