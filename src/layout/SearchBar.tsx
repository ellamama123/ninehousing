// @ts-nocheck

import { useEffect, useState } from "react";
import React from 'react'
import {
    Row,
    Col,
    Button,
    Input,
    DatePicker,
    Select
  } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from 'next/router';
import useTrans from './useTrans'
interface District {
  code: string;
  name: string;
}

export default function SearchBar({ onChildData }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [districts, setDistricts] = useState<any>();
  const [roomLocation, setRoomLocation] = useState<any>();
  const [price, setPrice] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const currentRoute = router.pathname;
  const trans = useTrans()

  const handleChange = (value: string) => {
    setPrice(value)
  };

  const optionPrice = [
    { label: trans.search.price_1 , value: "Lessthan50" },
    { label: trans.search.price_2, value: "About50To100" },
    { label: trans.search.price_3, value: "About100To200" },
    { label: trans.search.price_4, value: "GretherThan200" },
  ];

  const changeStartDate = (data: any) => {
    setStartDate(data)
  }

  const changeEndDate = (data: any) => {
    setEndDate(data)
  }

  useEffect(() => {
    axios.get("https://web-developing.site/api/locations/1")
    .then((response: any) => {
      let districtList: District[] = response.data.districts;
      setDistricts([
        ...districtList?.map(district => ({ value: district.code, label: district.name }))
      ])
    })

  }, []);

  const setUpdateProduct = () => {
    if (currentRoute == '/') {
      router.push({
        pathname: '/product',
        query: { name_search: name, price_search: price, startDate_search: startDate, endDate_search: endDate, roomLocation_search: roomLocation },
      });
    } else {
      onChildData(name, price, startDate, endDate, roomLocation);
    }
  }

  useEffect(() => {
    const searchBar = document.querySelector(".search-bar-home");
    console.log("searchBar:", searchBar);
  
    if (currentRoute === '/' && window.innerWidth < 992 && searchBar) {
      searchBar.style.display = "none";
    }
  }, [currentRoute]);

  return (
    <Row>
        <Col lg={6} span={24} className="search-name">
        <Input
            className="input-name"
            size="large"
            placeholder={ trans.search.name }
            prefix={<SearchOutlined />}
            onChange={(e) => setName(e.target.value)}
        />
        </Col>
        <Col lg={7} span={24} className="search-date">
        <DatePicker
            onChange={changeStartDate}
            style={{
            width: 125,
            padding: 15,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            }}
            placeholder="Check in"
        />
        <DatePicker
            onChange={changeEndDate}
            style={{
            width: 125,
            padding: 15,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            }}
            placeholder="Check out"
        />
        </Col>
        <Col lg={4} span={24} className="search-name" style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        }}>
        <Select
            defaultValue={ trans.search.price }
            style={{ width: "90%", height: "100%" }}
            options={optionPrice}
            onChange={handleChange}
        />
        </Col>
        <Col lg={4} span={24} className="search-name"  style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        }}>
        <Select
            defaultValue={ trans.search.address }
            style={{ width: "90%", height: "100%", }}
            onChange={value => {
            setRoomLocation(value)
            }}
            options={districts}
        />
        </Col>
        <Col
        lg={3}
        span={24}
        className="search-button"
        style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        }}
        >
        <Button
            className="button-search"
            type="primary"
            style={{
            height: "100%",
            backgroundColor: "#DEB25F",
            width: 125,
            fontWeight: "bold",
            }}
            onClick={setUpdateProduct}
        >
            { trans.search.search }
        </Button>
        </Col>
    </Row>
  )
}
