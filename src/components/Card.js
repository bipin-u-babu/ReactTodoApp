import React from 'react';

class Card extends React.Component {

    render () {
        const {item, onDelete} = this.props; 
        return (
            <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick = {(e) => onDelete(item.id)}>Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
        );

    }
}
export default Card;