import React, { useState } from "react";
// import Image from 'next/image'
import {
  Menu,
  Typography,
  Button,
  Drawer,
  Row,
  Col,
  Image,
  Select,
} from "antd";
import {
  EuroOutlined,
  HeartOutlined,
  BarsOutlined,
  MenuOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const { SubMenu } = Menu;
const { Text } = Typography;

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="menu">
      <div className="container">
        <Row>
          <Col span={3}>
            <a href="/">
              <Image src="/image/logo.png" alt="Logo" preview={false} />x
            </a>
          </Col>
          <Col span={12}>
            <Menu
              className={styles.bigmenu}
              onClick={handleClick}
              selectedKeys={[router.pathname]}
              mode="horizontal"
              overflowedIndicator={<MenuOutlined />}
            >
              <Menu.Item key="/">
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
            </Menu>
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
      <>
        <Button
          className={styles.menubtn}
          shape="circle"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        ></Button>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
            <div style={{ marginTop: '20px', display: "flex", alignItems: "center" }}>
              <Select
                defaultValue="Tiếng Việt"
                style={{ width: 120 }}
                options={[{ value: "Tiếng Việt", label: "Tiếng Việt" }]}
              />
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
