import './HappyClient.css'

const HappyClient = () => {
    return (
        <div className="stats-container">
        <div className="stats-box">
            <div className="stat-item">
                <div className="stat-number">
                    7<span className="plus">+</span>
                </div>
                <p className="stat-label">Years of exp</p>
            </div>
            <div className="divider" />
            <div className="stat-item">
                <div className="stat-number">
                    60<span className="plus">+</span>
                </div>
                <p className="stat-label">Happy Clients</p>
            </div>
            <div className="divider" />
            <div className="stat-item">
                <div className="stat-number">
                    500<span className="plus">+</span>
                </div>
                <p className="stat-label">Work Done</p>
            </div>
        </div>
    </div>
    )
}

export default HappyClient