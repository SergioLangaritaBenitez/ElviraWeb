import React, { Children } from "react";
import { cloneDeep } from "lodash";
//import { PageContent, PortCustom, SideNav } from "./components";
import { initialState } from "./initialState";
import Flow from "./Flow/Flow"
//import { useState } from 'react';
import styled, { ThemeConsumer } from "styled-components";
import { Button, Layout, Menu, Switch } from "antd";
import "./index.css"
import MenuLateral from "./ComponentesMenu/MenuLateral";



import { 
  //MenuUnfoldOutlined,
  //MenuFoldOutlined, 
  DownloadOutlined,
  ExportOutlined, 
  RightSquareFilled, 
  SettingOutlined, 
  UploadOutlined
  } from "@ant-design/icons";
import { saveAs } from "file-saver";
import { dark } from "@material-ui/core/styles/createPalette";
/*import { NodeInnerCustom } from "./components/NodeInnerCustom";
import { ModalS3Provider } from "./components/ModalS3Provider";
import { ModalOneDataProvider } from "./components/ModalOneDataProvider";
import { ModalMinioProvider } from "./components/ModalMinioProvider";
import { ModalTemplate } from "./components/ModalTemplate";
import { yamlExporter } from "./utils/yamlExporter";
import { showerror } from "./components/showError";*/

const { Header } = Layout;
const { SubMenu } = Menu;

const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-top: 1rem;
  
`;

export class App extends React.Component {
  state = cloneDeep(initialState);
  menuItems = [
      {
          key: 'download',
          icon: <DownloadOutlined />,
          label: 'Descargar Red Bayesiana',
      },
      {
        key: 'load',
        icon: <UploadOutlined />,
        label: 'Cargar Red Bayesiana',
      },
      {
        key: 'calculate',
        icon: <ExportOutlined />,
        label: 'Calcular Red Bayesiana',
      },
      {
        key: 'storage',
        icon: <SettingOutlined />,
        label: 'Storage providers',
        children:[
            {
              key: 's3',
              icon: <ExportOutlined />,
              label: 'New S3',
            },
            {
              key: 'minio',
              icon: <ExportOutlined />,
              label: 'New MinIO',
            },
            {
              key: 'onedata',
              icon: <ExportOutlined />,
              label: 'New ONE DATA',
            },
        ]

      }

  ];
  menuItems2 = [
      {
        key: 'Language',
        icon: <DownloadOutlined />,
        label: 'Language',
      children:[
        {
          key: 'es',
          icon: <ExportOutlined />,
          label: 'Español',
        },
        {
          key: 'En',
          icon: <ExportOutlined />,
          label: 'English',
        }
        ]
      },
     {
        key: 'more',
        icon: <DownloadOutlined />,
        label: 'More',
      children:[
        {
          key: 's3',
          icon: <ExportOutlined />,
          label: 'New S3',
        },
        {
          key: 'minio',
          icon: <ExportOutlined />,
          label: 'New MinIO',
        },
        {
          key: 'onedata',
          icon: <ExportOutlined />,
          label: 'New ONE DATA',
        },
      ]
    }
];



/*

  <Menu theme="dark" mode="horizontal" > 
  <StyledButton
    ghost
    icon={<DownloadOutlined />}
    onClick={() => this.exportState()}
  >
    Descargar Red Bayesiana
  </StyledButton>

  <StyledButton
    ghost
    icon={<UploadOutlined />}
    onClick={() => this.importState()}
  >
    Cargar Red Bayesiana
  </StyledButton>


  <StyledButton
    ghost
    icon={<ExportOutlined />}
    onClick={() => {
      this.exportToYaml();
    }}
  >
    Calcular Red Bayesiana
  </StyledButton>

  <SubMenu
    key="SubMenu"
    icon={<SettingOutlined />}
    title="Storage providers"
  >
    <Menu.Item
      key="storage:s3"
      onClick={() => {
        this.setState({ ...this.state, s3ModalVisible: true });
      }}
    >
      New S3
    </Menu.Item>
    <Menu.Item
      key="storage:minio"
      onClick={() => {
        this.setState({ ...this.state, minioModalVisible: true });
      }}
    >
      New MinIO
    </Menu.Item>
    <Menu.Item
      key="storage:onedata"
      onClick={() => {
        this.setState({ ...this.state, oneDataModalVisible: true });
      }}
    >
      New Onedata
    </Menu.Item>
  </SubMenu>
</Menu>*/



  /**
   *
   */
  constructor(props) {
    super(props);
    //state = cloneDeep(initialState);
    this.state = {
      menuExtended : true,
      theme : "dark",
      colorTheme : "#001529",
    }
    
    //console.log(initialState)
    this.removeStorageProvider = this.removeStorageProvider.bind(this);
    this.editStorageProvider = this.editStorageProvider.bind(this);
    this.importFileState = this.importFileState.bind(this);
  }

  exportToYaml() {
    //const nodeValues = Object.values(this.state.nodes);
    //const linkValues = Object.values(this.state.links);

    //var outputyaml=yamlExporter(nodeValues, linkValues);
    /*if(outputyaml !== undefined){
      showerror(outputyaml)
    }
    */
    
  }

  exportState() {
    const stateStringified = JSON.stringify(this.state);
    const blob = new Blob([stateStringified], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "state.json");
  }

  importFileState(file) {
    this.setState(file);
  }
  /*importState() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      // var file = e!.target!.files[0];
      console.log(e.target.files[0].name);

      const fr = new FileReader();
      fr.onload = async (e) => {
        if (e?.target?.result) {
          const fileContentObj = JSON.parse(e?.target?.result);
          console.log();
          if (!fileContentObj.nodes && !fileContentObj.storageProviders) {
            notification.open({
              message: "Not valid",
              description:
                "The file selected does not match a proper file structure",
            });
          } else {
            console.log(fileContentObj)
            this.setState(fileContentObj);
          }
        }
      };

      //fr.readAsText(input.files?[0]);
    };
    input.click();
  }*/

  editStorageProvider(type, name) {
    console.log(`editing ${type} ${name}`);

    /*const storageProvider = this.state.storageProviders.find(
      (x) => x.type === type && x.properties.name === name
    );*/

    /*switch (type) {
      case "s3":
        this.setState({
          ...this.state,
          s3DefaultValue: storageProvider?.properties,
          s3ModalVisible: true,
        });
        break;
      case "onedata":
        this.setState({
          ...this.state,
          oneDataDefaultValue: storageProvider?.properties,
          oneDataModalVisible: true,
        });
        break;
      case "minio":
        this.setState({
          ...this.state,
          minioDefaultValue: storageProvider?.properties,
          minioModalVisible: true,
        });
        break;
    }*/
  }

  removeStorageProvider(type, name) {
    console.log(`removing ${type} ${name}`);
    console.log(this.state.storageProviders);

    const index = this.state.storageProviders.findIndex(
      (x) => x.type === type && x.properties.name === name
    );
    const storageProviders = [...this.state.storageProviders];
    storageProviders.splice(index, 1);

    this.setState({ ...this.state, storageProviders: storageProviders });
  }

  /*addOrUpdateStorageProvider(type, sidebarItemProps) {
    const index = this.state.storageProviders.findIndex(
      (x) => x.type === type && sidebarItemProps.name === x.properties?.name
    );

    const oldValues = [...this.state.storageProviders];
    index !== -1 && oldValues.splice(index, 1);
    const storageProviders = [
      ...oldValues,
      {
        type: type,
        ports: {
          port1: {
            id: "port1",
            type: "top",
            properties: {
              path: "",
            },
          },
          port2: {
            id: "port2",
            type: "right",
            properties: {
              path: "",
            },
          },
          port3: {
            id: "port3",
            type: "bottom",
            properties: {
              path: "",
            },
          },
          port4: {
            id: "port4",
            type: "left",
            properties: {
              path: "",
            },
          },
        },
        properties: sidebarItemProps,
      },
    ];
     const nodes = this.state.nodes;
      Object.keys(nodes).forEach(key => {
        if(nodes[key].type === type &&  nodes[key].properties.name === this.state.minioDefaultValue?.name){
          nodes[key].properties=sidebarItemProps
        }
      });
    this.setState({
      ...this.state,
      storageProviders: storageProviders,
      s3ModalVisible: false,
      oneDataModalVisible: false,
      minioModalVisible: false,
      minioDefaultValue: undefined,
      s3DefaultValue: undefined,
      OneDataDefaultVisible: undefined,
    });
  }*/

  changeTheme = () => {
    if(this.state.theme == "dark"){
      this.setState({
        ...this.state,
        theme : "light",
        colorTheme : "#ffffff",

      });
      
    }else{
      this.setState({
        ...this.state,
        theme : "dark",
        colorTheme : "#001529",
      });
    }
    
  };
  
  render() {


    return (
      <div className="App"  >
          <Header  id="header" >
            <Layout className="layoutHeader" style={{ background:  this.state.colorTheme  }} >
              <Menu theme={this.state.theme} mode="horizontal" items={this.menuItems}  
              style={{width:"84%", display: "inline-block", borderBottom: "none" }} />
              <Switch
                checked={this.state.theme === 'dark'}
                theme={this.state.theme}
                onChange={this.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
                style={{width:"5%",display:" inline-block",  border: "1px solid rgba(5, 5, 5, 0.06)"}}
              />
              <Menu theme={this.state.theme} mode="horizontal" items={this.menuItems2}  
              style={{width:"11%", display: "inline-block", textAlign: 'right', borderBottom: "none" }} />

            </Layout>
          </Header>
          <div className="pageContent">
            <MenuLateral menuExtended = {this.state.menuExtended} theme={this.state.theme}  />
            <Flow ></Flow>
          </div>
      </div>
    );
  }
}

//