import React from "react";

const CollapsedText = (props) => {
    let className = 'collapse';
    if (props.nameLabel === 'expandedLabel') {
        className = 'show';
    }else if(props.nameLabel === 'collapsedLabel') {
        className = 'collapse'
    }

    return (
        <div className={className} animation>
            <div className="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
        </div>
    );
}

export default CollapsedText;