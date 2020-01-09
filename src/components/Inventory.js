import React from 'react';
import AddFishForm from './AddFirmForm';
class Inventory extends React.Component {
	render() {
		return (
            <div className="inventory">
				<AddFishForm/>
			</div>
		);
	}
}

export default Inventory;