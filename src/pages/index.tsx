import Head from 'next/head'
import Layout from '../layout/Layout';
import MainCarousel from '@/layout/HomePage/MainCarousel';
import DivOne from '@/layout/HomePage/DivOne';
import WhyChooseUs from '@/layout/HomePage/WhyChooseUs';
import OurApartments from '@/layout/HomePage/OurApartments';
import InteractiveMap from '@/layout/HomePage/InteractiveMap';
import CustomerSay from '@/layout/HomePage/CustomerSay';
import Reservation from '@/layout/HomePage/Reservation';
import Activity from '@/layout/HomePage/Actitvity';
import Partner from '@/layout/HomePage/Partner';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [slide, setSlide] = useState([]);
  const [blog, setBlog] = useState([]);
  const [home, setHome] = useState([]);

  const getProduct = () => {
    axios
      .get("https://web-developing.site/api/home")
      .then((response) => {
        // setSlide(response.data.data.meta-info);
        setHome(response.data.rooms);
        setBlog(response.data.blogs);
        
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Head>
        <title>Nine Housing | House for rent in Hanoi area</title>
        <meta name="description" content="Nine Housing, House for rent in Hanoi area" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo.png" />
      </Head>
      <Layout> 
        <MainCarousel />
        <DivOne />
        <WhyChooseUs />
        <OurApartments home={home} />
        <Reservation />
        <InteractiveMap />
        <CustomerSay />
        <Activity blog={blog} />
        <Partner />
      </Layout>
    </>
  )
}

import React from 'react';
import { Button, Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);
