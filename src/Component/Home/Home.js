import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

function Route () {
    return (
        <div>
            <FontAwesomeIcon icon={faSpinner} spin/>
            <FontAwesomeIcon icon={faSignInAlt}/>
            In Protected Comp!
        </div>
    )
}

export default Route;
