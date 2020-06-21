import React from 'react';
import logo from '../resources/qkteam.png';
import { Menu, Input, Popover, Button } from 'antd';
import LoginModal from "../Auth/LoginModal"
import { Link } from 'react-router-dom';

class HeadMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        })
    }

    hideModal = () => {
        this.setState({
            visible: false,
        })
    }

    search = value => {
        console.log(value);
    }

    render() {
        const MenuItems = [
            { key: 1, descritipn: "综合", url:"/tourist" },
            { key: 2, descritipn: "生活", url:"/tourist/life" },
            { key: 3, descritipn: "科技", url:"/tourist/technology" },
            { key: 4, descritipn: "学习", url:"/tourist/study" },
        ];
        
        const popoverContent = (
            <p>Login/Register</p>
        )

        return (
            <div className="headmenu-container">
                <div className="headmenu-nav">
                    <div className="headmenu-logo">
                        <img alt="logo" src={logo} height="40" width="40" />
                        <span>Bustling</span>
                    </div>
                    <Menu theme="dark" mode="horizontal" style={{ fontSize: "18px", display:"flex", alignItems: "center", flexGrow:1  }}>
                        { MenuItems.map(item => (
                            <Menu.Item key={ item.key } style={{ height:"80px", display:"flex", alignItems: "center" }}>
                                <Link to={item.url}>{ item.descritipn }</Link>
                            </Menu.Item>
                        )) }
                    </Menu>
                    <div className="headmenu-search">
                        <Input.Search placeholder="input search text" onSearch={ this.search } style={{ height:"80px", width:"100%", borderRadius:"0px" }}/>
                    </div>
                    <div  className="headmenu-login">
                        <Popover content={ popoverContent } placement="bottom">
                            <Button  
                                icon="user"
                                size="large" 
                                type="ghost" 
                                style={{ color:"rgb(255, 255, 255)" }} 
                                shape="circle" 
                                onClick={ this.showModal } 
                            />
                        </Popover>
                        <LoginModal visible={ this.state.visible } cancel={ this.hideModal } />
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadMenu;