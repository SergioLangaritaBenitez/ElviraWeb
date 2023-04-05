import React from 'react';
import { Button, Menu } from "antd";
import "./Icon.css" 


import ButtonLateral from "./ButtomLateral";

import { 
  MenuUnfoldOutlined,
  MenuFoldOutlined, 
  ExportOutlined, 
  UploadOutlined,
  DownloadOutlined,
 } from "@ant-design/icons";


import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-top: 1rem;
`;



class MenuLateral extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      menuExtended: this.props.menuExtended,
    };
  }

  handleClick = (click) => {
      this.setState({
        ...this.state,
        menuExtended : !this.state.menuExtended,
      });
  };
  

  render() {
    const divDark ='ant-menu ant-menu-root ant-menu-inline ant-menu-dark css-dev-only-do-not-override-1n7nwfa'
    const divLight ='ant-menu ant-menu-root ant-menu-inline ant-menu-light css-dev-only-do-not-override-1n7nwfa'
    const colorDark='rgba(255, 255, 255, 0.65)'
    const colorLight='rgba(0, 0, 0, 0.88)'
    const buttonExtended='ant-menu-item botonMenuLateral ant-menu ant-menu-root ant-menu-vertical ant-menu-dark ant-menu-inline-collapsed css-dev-only-do-not-override-1n7nwfa'
    const buttonCompress='ant-menu ant-menu-root ant-menu-vertical ant-menu-dark ant-menu-inline-collapsed css-dev-only-do-not-override-1n7nwfa'
    const onDragStart = (event, nodeType) => {
      event.dataTransfer.setData('application/reactflow', nodeType);
      event.dataTransfer.effectAllowed = 'move';
    };
  
    /*       <Menu theme={this.props.theme}
                mode="inline"
                style={{height: window.innerHeight} }
                inlineCollapsed={!this.state.menuExtended}
                items={this.state.menuExtended ? this.menuItemsExpanded : this.menuItemsCompresed } 
                onClick={this.handleClick} 
                
                onDragStart={(event) => onDragStart(event, this)} draggable
              />
    */
    return  <div className="lateralPrincipal"  >
              <div  className={ this.props.theme==="dark" ? divDark : divLight  }
             style={{height: window.innerHeight, textAlign:'center'}} >
               <Button type="text"  className=
                  {this.state.menuExtended ? buttonExtended : buttonCompress }
                  style={this.props.theme==="dark" ? {color:colorDark } : {color:colorLight }}
                  theme={this.props.theme}
                  icon={this.state.menuExtended ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} 
                  onClick={this.handleClick} 
                  >
                    {this.state.menuExtended ? 'Comprimir' : '' } 
                </Button>
                <br></br>
                <Button type="text" className=
                  {this.state.menuExtended ? buttonExtended : buttonCompress }
                  style={this.props.theme==="dark" ? {color:colorDark } : {color:colorLight }}
                  icon={<div className={this.state.menuExtended ? 'circleIcon': 'circleIconSmall' }> </div>}
                  theme={this.props.theme}
                  onDragStart={(event) => onDragStart(event, 'oval')} draggable >
                     {this.state.menuExtended ?  <p >&nbsp;Nodo</p> : '' } 
                </Button>

                <Button type="text" className=
                  {this.state.menuExtended ? buttonExtended : buttonCompress }
                  style={this.props.theme==="dark" ? {color:colorDark } : {color:colorLight }}

                  theme={this.props.theme}
                  icon={<ExportOutlined /> }
                  onDragStart={(event) => onDragStart(event, 'default')} draggable>
                  {this.state.menuExtended ? 'Default' : '' } 
                </Button>
              </div>
          </div>
    
  }
}

export default MenuLateral;
