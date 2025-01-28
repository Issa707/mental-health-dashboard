import React from "react";
import { useParams } from "react-router-dom";

const styles = {
    container: {
        border: "1px solid purple",
        padding: "16px",
        margin: "16px auto",
        width: "80%",
        maxWidth: "600px",
        backgroundColor: "white",
        fontFamily: '"Press Start 2P", monospace',
        textAlign: "center",
    },
    title: {
        fontSize: "24px",
        marginBottom: "20px",
    },
    text: {
        fontSize: "16px",
        color: "#555",
    },
};

const CoursePage = () => {
    const { illness } = useParams();

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Course for {illness}</h1>
            <p style={styles.text}>The course content is not yet available.</p>
        </div>
    );
};

export default CoursePage;
