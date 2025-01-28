import React from "react";
import { useNavigate } from "react-router-dom";
import ScaleBar from "./ScaleBar";
import sampleData from "../data/sampleData";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{ textAlign: "center", fontFamily: '"Press Start 2P", monospace' }}>
                Mental Health Dashboard
            </h1>
            {sampleData.map((item, index) => (
                <div key={index} style={{ marginBottom: "20px", textAlign: "center" }}>
                    <ScaleBar value={item.degree} />
                    <button
                        style={{
                            backgroundColor: "#c4b0ff",
                            border: "none",
                            padding: "12px 20px",
                            cursor: "pointer",
                            fontSize: "14px",
                            borderRadius: "12px",
                            color: "white",
                            fontFamily: '"Press Start 2P", monospace',
                        }}
                        onClick={() => navigate(`/course/${item.illness}`)}
                    >
                        View Course
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
