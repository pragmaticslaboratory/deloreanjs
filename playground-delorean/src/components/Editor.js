import React, { Component } from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';


class Editor extends Component {
	render(){
		var options = {
            lineNumbers: true,
            mode: 'javascript'
		};
		return (
			<CodeMirror 
				value={this.props.code} 
				onChange={this.props.updateCode} 
				options={options} 
			>
			</CodeMirror>

		)
	}
}

export default Editor;