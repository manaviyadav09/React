import React from 'react'

function withAuth(Components) {
    return function () {
        let isLoggedIn = false;
        if (isLoggedIn) {
            return <Components />;
        }
        return <p>Please login </p>
    };
}

export default withAuth;


