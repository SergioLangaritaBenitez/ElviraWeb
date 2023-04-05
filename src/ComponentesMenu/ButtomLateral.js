import React from 'react';
import { Button } from "antd";

//import logo from './images/about.gif';

import { 
  MenuUnfoldOutlined,
  MenuFoldOutlined, 
  ExportOutlined, 
  UploadOutlined,
  DownloadOutlined,
 } from "@ant-design/icons";




class ButtomLateral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuExtended: this.props.menuExtended,
      theme:this.props.theme,
    };
  }
  handleClick = (click) => {
    this.setState({
      ...this.state,
      menuExtended : !this.state.menuExtended,
    });
};

  render() {
    return  <Button type="text"  className=
              {this.state.menuExtended ? 'ant-menu-item botonMenuLateral ant-menu ant-menu-root ant-menu-vertical ant-menu-dark ant-menu-inline-collapsed css-dev-only-do-not-override-1n7nwfa' :
              'ant-menu ant-menu-root ant-menu-vertical ant-menu-dark ant-menu-inline-collapsed css-dev-only-do-not-override-1n7nwfa'}
              style={this.props.theme==="dark" ? {color:"rgba(255, 255, 255, 0.65)" } : {color:"rgba(0, 0, 0, 0.88)" }}
            
              theme={this.state.menuExtended}
              icon={this.state.menuExtended ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} 
              >
                {this.state.menuExtended ? 'Comprimir' : '' } 
            </Button>
  }
}

export default ButtomLateral;

