require([ 'react', 'react-dom', 'demo-component', 'antd' ], function(React, ReactDOM, DemoComponent, antd) {
	var h = React.createElement;

	var handleClick = function() {
		console.log('hello');
	};

	ReactDOM.render(
		h('div', {}, [
			h(antd.Button, { type: 'primary', onClick: handleClick }, '确认'),
			' ',
			h(antd.Button, { type: 'error' }, '错误'),
			' ',
			h(antd.Button, { type: 'dashed' }, '确认'),
			' ',
			h(antd.Button, { type: 'danger' }, '确认')
		]),
		document.getElementById('root')
	);
});
