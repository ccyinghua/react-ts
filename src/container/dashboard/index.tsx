import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import "./index.scss";

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="dash-div">
					<p>我是首页</p>
				</div>

				<Button type="primary" danger>
					Primary
				</Button>
				<Button danger>Default</Button>
				<Button type="dashed" danger>
					Dashed
				</Button>
				<Button type="text" danger>
					Text
				</Button>
				<Button type="link" danger>
					Link
				</Button>
			</div>
		);
	}
}

export default connect()(Dashboard);
