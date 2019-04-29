import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Tab from './Tab'

class StatusBar extends Component {
    render(){
        return(
            <div className="status-bar">
                <div className="tabs-container">
                    {
                        this.props.tabs.map((tab) => {
                            return (
                            <Tab
                                key={tab.name}
                                name={tab.name}
                                input={tab.input}
                                selectTab={this.props.selectTab}
                            />
                            )
                        })
                    }
                </div>
                <h5>Delorean</h5>
                {
                    !this.props.isRunning ? 
                    <Button 
                        variant="contained" 
                        color="primary"
                        size="small"
                        onClick={this.props.executeCode}
                    > 
                    RUN!
                    </Button> : 
                    <Button 
                        variant="contained" 
                        color="primary"
                        size="small"
                        onClick={this.props.stopExecution}
                    > 
                    STOP!
                    </Button>
                }
            </div>
        )
    }
}

export default StatusBar