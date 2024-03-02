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
import { useRouter } from 'next/router';
import {
  Image
} from "antd";
import { Spin } from 'antd';

export default function Home() {
  const [slide, setSlide] = useState([]);
  const [blog, setBlog] = useState([]);
  const [home, setHome] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { locale } = useRouter()
  const getProduct = () => {
    axios
      .get("https://web-developing.site/api/home", {
        params: {
          lang: locale
        },
      })
      .then((response) => {
        setSlide(response.data.meta_info[0].images);
        setHome(response.data.rooms);
        setBlog(response.data.blogs);
      });
  };

  useEffect(() => {
    getProduct();
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(loadingTimeout);
  }, []);
  
  useEffect(() => {
    getProduct();
  }, [locale]);
  return (
    <>
      <Head>
        <title>Nine Housing | House for rent in Hanoi area</title>
        <meta name="description" content="Nine Housing, House for rent in Hanoi area" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo.png" />
      </Head>
      <Layout> 
      
      {/* <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
            opacity: 1,
            transition: '0.5s'
          }}
          className={isLoading? '' : 'hidden'}
        >
          <div>
            <Spin size="large" />
          </div>
      </div> */}
      <div>
          <MainCarousel slide={slide} />
          <DivOne />
          <WhyChooseUs />
          <OurApartments home={home} />
          <Reservation />
          <InteractiveMap />
          <CustomerSay />
          <Activity blog={blog} />
          <Partner />
        </div>

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
