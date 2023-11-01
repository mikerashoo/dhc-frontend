import React, { PropsWithChildren } from "react";

function ContentWrapper(props: PropsWithChildren) {
    return (
        <div className="px-2 flex flex-wrap w-full h-full">
            {props.children}
        </div>
    );
}

export default ContentWrapper;
