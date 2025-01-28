import React from "react";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontFamily: '"Press Start 2P", monospace',
    },
    scaleWrapper: {
        position: "relative",
        width: "80%",
        height: "30px",
        background: "linear-gradient(to right, green, yellow, orange, red)",
        borderRadius: "15px",
        margin: "20px 0",
    },
    indicator: (value) => ({
        position: "absolute",
        top: "-10px",
        left: `${value}%`,
        transform: "translateX(-50%)",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "gray",
        border: "2px solid black",
    }),
    labels: {
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        marginTop: "10px",
    },
    label: {
        textAlign: "center",
        fontSize: "12px",
        color: "#333",
    },
};

const ScaleBar = ({ value }) => {
    return (
        <div style={styles.container}>
            <h1>1-100 Scale</h1>
            <p>Enter your sub-headline here</p>
            <div style={styles.scaleWrapper}>
                <div style={styles.indicator(value)}></div>
            </div>
            <div style={styles.labels}>
                {[1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((num) => (
                    <div key={num} style={styles.label}>
                        <strong>{num}</strong>
                        <br />
                        <span>Sample Headline</span>
                        <br />
                        <span style={{ fontSize: "10px" }}>
              This is a sample text you can edit
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScaleBar;
