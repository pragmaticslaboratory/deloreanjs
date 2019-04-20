import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Tab from './Tab'

class StatusBar extends Component {
    render(){
        return(
            <div className="status-bar">
                <div>
                    {
                        this.props.tabs.map((tab) => {
                            return (
                            <Tab 
                                key={tab.name}
                                name={tab.name}
                            />
                            )
                        })
                    }
                </div>
                <h5>Delorean</h5>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="small"
                    onClick={this.props.executeCode}
                > 
                    Run!
                </Button>
            </div>
        )
    }
}

export default StatusBar