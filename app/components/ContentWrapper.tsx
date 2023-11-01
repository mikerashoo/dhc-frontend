import React, { PropsWithChildren } from "react";

function ContentWrapper(props: PropsWithChildren) {
    return (
        <div className="p-4 flex flex-wrap w-full h-full">{props.children}</div>
    );
}

export default ContentWrapper;
