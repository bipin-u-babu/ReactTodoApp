import React from 'react';
import {Link} from 'react-router-dom' 

class ErrorPage extends React.Component {

    render() {
        return (
            
            <div>
              <h2>404 , Page not found</h2>
              <p>
                <Link to = "/">Back to Home</Link>
              </p>
            </div>
        )
    }
}
export default ErrorPage;