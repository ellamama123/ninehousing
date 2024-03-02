/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck

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
import useTrans from './useTrans'

const content = () => {
  const trans = useTrans()

  return (
  <Menu
  className={styles.bigmenu}
  mode="inline"
  overflowedIndicator={<MenuOutlined />}
>
  <Menu.Item key="">
    <Link href="/"><p> { trans.home.title } </p></Link>
  </Menu.Item>
  <Menu.Item key="/product">
    <Link href="/product"><p> { trans.home.product } </p></Link>
  </Menu.Item>
  <Menu.Item key="/post">
    <Link href="/post"><p> { trans.home.blog } </p></Link>
  </Menu.Item>
  <Menu.Item key="/about-us">
    <Link href="/about-us"><p> { trans.home.about_us } </p></Link>
  </Menu.Item>
  <Menu.Item key="/favorite">
    <Link href="/favorite"><p> { trans.home.favorite } </p></Link>
  </Menu.Item>
</Menu>);
};

const Header = () => {
  const [visible, setVisible] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const router = useRouter() 
  const { locale } = useRouter()

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const trans = useTrans()
  
  const changeLang = (lang) => {
    const currentPath = router.asPath;
    const newPath = `/${lang}${currentPath}`;
    router.push(newPath, undefined, { locale: lang });
  }

  const handleLanguageChange = (value) => {
      changeLang(value);
  }

  return (
    <div className={`menu ${scrolled ? 'scrolled-menu' : ''} ${router.pathname !== "/" ? ' product' : '' }`}>
      <div className="container">
        <Row style={{ display: "flex", alignItems: 'center'}}> 
          <Col lg={11} span={10}>
            <Row className="menu-desktop">
              <Col span={1}>
              <Popover content={content} title="">
                  <div style={{color:"black", cursor: "pointer", fontSize: '24px'}}>
                    <MenuOutlined />
                  </div>
                </Popover>
              </Col>
            </Row>
          </Col>
          <Col lg={4} span={5}>
            <Link href="/" >  
              <div style={{cursor: 'pointer'}}>
                <Image src="/image/logo.png" alt="Logo" style={{width: '130%'}} preview={false} />
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
            <Select defaultValue={locale} onChange={handleLanguageChange}>
              <Select.Option value="vi">Tiếng Việt</Select.Option>
              <Select.Option value="en">English</Select.Option>
            </Select>
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
            <p> { trans.home.title } </p>
            </Button>

            <Button type="text" href="/product">
            <p> { trans.home.product } </p>
            </Button>
            <Button
              type="text"
              href="/post"
            >
              <p> { trans.home.blog } </p>
            </Button>
            <Button type="text" href="/about-us">
              <p> { trans.home.about_us } </p>
            </Button>
            <Button type="text" href="/favorite">
              <p> { trans.home.favorite } </p>
            </Button>
            <div style={{ marginTop: '20px', display: "flex", alignItems: "center",  justifyContent: "center" }}>
              <Select defaultValue={locale} onChange={handleLanguageChange}>
                  <Select.Option value="vi">Tiếng Việt</Select.Option>
                  <Select.Option value="en">English</Select.Option>
              </Select>
            </div>
          </div>
        </Drawer>
    </div>
  );
};

export default Header;
