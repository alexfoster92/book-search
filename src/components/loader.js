import React from "react";

const Loader = ({ loading, searchTerm }) => {
    return (
        <>
            {loading && (
                <div class="fetching-confirmation">Fetching books for "{searchTerm}". Won't be a sec.</div>
            )}
        </>
    );
};

export default Loader;