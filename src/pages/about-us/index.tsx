import React from "react";
import { Tabs, Button, Image } from "antd";
import Contact from "./contact";
import Regulation from "./regulation";
import AboutUs from "./about-us";
import Head from "next/head";
import Layout from "../../layout/Layout";
import useTrans from '../../layout/useTrans'

const { TabPane } = Tabs;

export default function PostDetail() {
  const trans = useTrans()  

  return (
    <>
      <Head>
        <title>About us | Nine Housing</title>
      </Head>
      <Layout>
        <div style={{ position: "relative" }}>
          <Image
            preview={false}
            height={"200px"}
            width={"100%"}
            alt="Image"
            src="https://static.vecteezy.com/system/resources/previews/000/677/302/original/abstract-technology-banner-background.jpg"
          ></Image>
          <p
            style={{
              color: "#FFD600",
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              fontSize: "50px",
              fontWeight: "bold",
              fontFamily: "system-ui",
            }}
          >
            {trans.contact.about_us}
          </p>
        </div>
        <div style={{ marginTop: "100px", marginBottom: "50px", width: "80%", margin: "0 auto", padding: "80px 0" }}>
          <Tabs
            defaultActiveKey="1"
            tabBarStyle={{ display: "flex", justifyContent: "start" }}
          >
            <TabPane
              tab={
                <Button className="tab-button" type="primary">
                  {trans.contact.about_us}
                </Button>
              }
              key="1"
            >
              <AboutUs />
            </TabPane>
            <TabPane
              tab={
                <Button className="tab-button" type="primary">
                  {trans.contact.regulation}
                </Button>
              }
              key="2"
            >
              <Regulation />
            </TabPane>
            <TabPane
              tab={
                <Button className="tab-button" type="primary">
                  {trans.contact.contact}
                </Button>
              }
              key="3"
            >
              <Contact />
            </TabPane>
          </Tabs>
        </div>
      </Layout>
    </>
  );
}
