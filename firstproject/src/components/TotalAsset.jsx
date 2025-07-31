import React, { useState } from 'react';
import './TotalAsset.css';

function TotalAsset() {
    const [assignedWorks, setAssignedWorks] = useState([
        "Prepare Monthly Report",
        "Attend Team Meeting",
        "Update Project Timeline",
        "Review Code Merge",
        "Fix Critical Bugs",
        "Conduct Code Reviews",
        "Collaborate with QA Team",
        "Optimize Database Queries",
        "Deploy to Staging Server",
        "Document New Features"
    ]);

    const [selectedWork, setSelectedWork] = useState("");

    const handleWorkDone = () => {
        if (selectedWork) {
            setAssignedWorks(prev => prev.filter(item => item !== selectedWork));
            setSelectedWork("");
        }
    };

    return (
        <div className="cointainer">
            <div className="card">
                <div className="asset-head">
                    <h1>ASSETS ASSIGNED</h1>
                </div>
                <div className="asset-content">
                    <h3>LAPTOP</h3>
                </div>
                <img
                    src="https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg"
                    alt="Laptop"
                    className="asset-image"
                />
                <div className="asset-content">
                    <h3>MOUSE</h3>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
                    alt="Mouse"
                    className="asset-image"
                />
            </div>

            <div className="card">
                <div className="asset-head">
                    <h1>ASSIGNED WORK</h1>
                </div>

                <div className="asset-content">
                    {assignedWorks.length > 0 ? (
                        <ol className="work-list">
                            {assignedWorks.map((work, index) => (
                                <li key={index}>{work}</li>
                            ))}
                        </ol>
                    ) : (
                        <p>🎉 All tasks completed!</p>
                    )}
                </div>

                {assignedWorks.length > 0 && (
                    <>
                        <div className="asset-content">
                            <label htmlFor="work-select"><strong>Select Work:</strong></label><br />
                            <select
                                id="work-select"
                                value={selectedWork}
                                onChange={(e) => setSelectedWork(e.target.value)}
                                className="work-select"
                            >
                                <option value="">-- Choose a task --</option>
                                {assignedWorks.map((work, index) => (
                                    <option key={index} value={work}>{work}</option>
                                ))}
                            </select>
                        </div>

                        <div className="asset-content">
                            <button
                                onClick={handleWorkDone}
                                className="work-done-btn"
                            >
                                Work Done ✅
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default TotalAsset;
