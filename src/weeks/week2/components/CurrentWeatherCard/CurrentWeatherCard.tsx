import React from "react";

type CurrentWeaherCardStyles = {
    root: React.CSSProperties,
}

const divWithBorder: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid green',
}

const styles: CurrentWeaherCardStyles = {
    root: {
        ...divWithBorder,
        height: '300px',
        marginBottom: '8px',
    },
}

interface CurrentWeaherCardProps {
    order: number;
    excited: boolean;
}

function CurrentWeaherCard({
    order,
    excited,
}: CurrentWeaherCardProps) {
    return (
        <div style={styles.root}>
            <div>Current Weather Card</div>
            <div>{`Order that this will be worked on: ${order}`}</div>
            <div>{`I am${excited ? '' : ' not'} excited to work on this part`}</div>
        </div>
    )
}

export default CurrentWeaherCard;
