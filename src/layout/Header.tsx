import React, { useState, useEffect } from "react";
import {useRouter} from 'next/router'; 

import {
  Menu,
  Popover,
  Button,
  Drawer,
  Row,
  Col,
  Image,
  Select,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const content = () => {

  return (
  <Menu
  className={styles.bigmenu}
  mode="inline"
  overflowedIndicator={<MenuOutlined />}
>
  <Menu.Item key="">
    <Link href="/"> Home </Link>
  </Menu.Item>
  <Menu.Item key="/product">
    <Link href="/product"> Our Product </Link>
  </Menu.Item>
  <Menu.Item key="/post">
    <Link href="/post"> Blog </Link>
  </Menu.Item>
  <Menu.Item key="/about-us">
    <Link href="/about-us"> About Us </Link>
  </Menu.Item>
</Menu>);
};

const Header = () => {
  const [visible, setVisible] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const router = useRouter() 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={`menu ${scrolled ? 'scrolled-menu' : ''} ${router.pathname !== "/" ? ' product' : '' }`}>
      <div className="container">
        <Row style={{ display: "flex", alignItems: 'center'}}> 
          <Col span={12}>
            <Row className="menu-desktop">
              <Col span={1}>
              <Popover content={content} title="">
                  <div style={{color:"white", cursor: "pointer", fontSize: '24px'}}>
                    <MenuOutlined />
                  </div>
                </Popover>
              </Col>
            </Row>
          </Col>
          <Col span={3}>
            <Link href="/" >  
              <div style={{cursor: 'pointer'}}>
                <Image src="/image/logo.png" alt="Logo" preview={false} />
              </div>
            </Link>
          </Col>
          <Col
            span={9}
            className="choose-language"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div>
              <Select
                defaultValue="Tiếng Việt"
                style={{ width: 120 }}
                options={[{ value: "Tiếng Việt", label: "Tiếng Việt" }]}
              />
            </div>
          </Col>
        </Row>
      </div>
      
        <Button
          className={styles.menubtn}
          shape="circle"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        ></Button>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <div style={{ display: "flex", flexDirection: "column", }}>
            <Button type="text" href="/">
            Home
            </Button>

            <Button type="text" href="/product">
            Our Product
            </Button>
            <Button
              type="text"
              href="/post"
            >
              Blog
            </Button>
            <Button type="text" href="/about-us">
              About us
            </Button>
            <div style={{ marginTop: '20px', display: "flex", alignItems: "center",  justifyContent: "center" }}>
              <Select
                defaultValue="Tiếng Việt"
                style={{ width: 120 }}
                options={[{ value: "Tiếng Việt", label: "Tiếng Việt" }]}
              />
            </div>
          </div>
        </Drawer>
      
    </div>
  );
};

export default Header;
