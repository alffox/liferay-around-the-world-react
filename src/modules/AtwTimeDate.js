import React from 'react';

class AtwTimeDate extends React.Component {
    
    render() {
        return (
            <div className="col-md-12 text-info font-weight-bold text-center font-italic">
                <div className="timedate">
                    <i className="far fa-calendar-alt"></i><span className="date px-1">{this.props.date}</span>
                    <i className="far fa-clock"></i><span className="time px-1">{this.props.time}</span>
                </div>
            </div>
            )
        }
    }
    
    export default AtwTimeDate;