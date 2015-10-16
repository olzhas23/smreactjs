var MenuExample = React.createClass({
	getInitalState: function(){
		return ({selectedItemIndex:0})
		//added 

	},
	clicked: function (index){
		this.setState({selectedItemIndex:index})
	},
	render: function(){
		var _this = this
		return (
			<div>
				<ul className = "nav nav-pills">
				{this.props.items.map(function(menuItemName, menuItemIndex){
					var className = ' '
					
					 if (_this.state.selectedItemIndex == menuItemIndex){
					 	className = 'active'
					 } 
					 	return ( <li role = 'presentation'
					 		className={className}
					 		onClick={_this.clicked.bind(_this, menuItemIndex)}>
					 		<a href="#">{menuItemName}</a>
					 		</li>)
					})}
					</ul>
					<p> Selected: {this.props.items[this.state.selectedItemIndex]}</p>

			</div>
			)
	}
})

///Here we are passing 2 values
React.render(
	<MenuExample items = {['Home', 'About', 'Prices', 'Contact US']}/>,
	document.body);
