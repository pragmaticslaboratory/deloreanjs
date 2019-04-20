import React, { Component } from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';


class Editor extends Component {

    state = {
        code: '// Code',
    }
    
	updateCode = (newCode) => {
		this.setState({
			code: newCode,
		});
    }
    
	render(){
		var options = {
            lineNumbers: true,
            mode: 'javascript'
		};
		return (
			<CodeMirror 
				value={this.state.code} 
				onChange={this.updateCode} 
				options={options} 
			>
			</CodeMirror>

		)
	}
}

export default Editor;