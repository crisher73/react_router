import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
    const auth = useAuth();
    return (
        <>
            <p>ProfilePage</p>
            <p>Holi, {auth.user.username}</p>
        </>

    );
}

export { ProfilePage };