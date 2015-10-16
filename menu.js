'use strict';

var MenuExample = React.createClass({
	displayName: 'MenuExample',

	getInitalState: function getInitalState() {
		return { selectedItemIndex: 0 };
		//added
	},
	clicked: function clicked(index) {
		this.setState({ selectedItemIndex: index });
	},
	render: function render() {
		var _this = this;
		return React.createElement(
			'div',
			null,
			React.createElement(
				'ul',
				{ className: 'nav nav-pills' },
				this.props.items.map(function (menuItemName, menuItemIndex) {
					var className = ' ';

					if (_this.state.selectedItemIndex == menuItemIndex) {
						className = 'active';
					}
					return React.createElement(
						'li',
						{ role: 'presentation',
							className: className,
							onClick: _this.clicked.bind(_this, menuItemIndex) },
						React.createElement(
							'a',
							{ href: '#' },
							menuItemName
						)
					);
				})
			),
			React.createElement(
				'p',
				null,
				' Selected: ',
				this.props.items[this.state.selectedItemIndex]
			)
		);
	}
});

///Here we are passing 2 values
React.render(React.createElement(MenuExample, { items: ['Home', 'About', 'Prices', 'Contact US'] }), document.body);
