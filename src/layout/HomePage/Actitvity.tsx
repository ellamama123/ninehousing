import React from "react";
import { Col, Button, Row, Image, Carousel } from "antd";
import Link from "next/link";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import useTrans from '../useTrans'

interface ActivityProps {
  blog: Array<any>; // Change `any` to the actual type of your items in the array
}

const convertDateString = (originalDateString: any) => {
  const originalDate = new Date(originalDateString);  
  const day = originalDate.getDate();
  const monthIndex = originalDate.getMonth();
  const year = originalDate.getFullYear();
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = monthNames[monthIndex];
  const convertedDateString = `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;

  return convertedDateString;
}

const Activity: React.FC<ActivityProps> = ({ blog }) => {
  const trans = useTrans()

  return (
  <div className="activity">
    <div className="container">
      <p className="activity-title">{trans.home.activity}</p>
      <Carousel
        arrows
        dots={false}
        nextArrow={
          <Button
            style={{ padding: "1rem", height: "auto", width: "auto" }}
            icon={<RightOutlined style={{ fontSize: 20 }} />}
          />
        }
        prevArrow={
          <Button
            style={{ padding: "1rem", height: "auto", width: "auto" }}
            icon={<LeftOutlined style={{ fontSize: 20 }} />}
          />
        }
        slidesToShow={3}
        style={{ margin: '0 -10px' }}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {blog.map((bl, index) => (
          <Col className="post-wrap" key={index}>
            <div>
              <Image width={"100%"}                     
                  style={{
                    aspectRatio: '3 / 2', 
                    objectFit: 'cover'
                  }} 
                  alt="Image" 
                  src={bl.thumbnail} 
              />
            </div>
            <div style={{}}>
              <div>
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderTop: "none",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#DEB25F",
                    }}
                  >
                    {bl.title}
                  </p>
                  <Row style={{ marginTop: "20px" }}>
                    <Col span={12}>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "gray",
                        }}
                      >
                        {convertDateString(bl.created_at)}
                      </p>
                    </Col>
                    <Col span={12}>
                      <div style={{float: "right", cursor: "pointer"}}>
                        <Link
                            href={window.location.origin + "/post/" + bl?.id}
                            title=""
                          >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20" cy="20" r="20" fill="#DEB25F" />
                            <path
                              d="M17 14L23 20L17 26"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Carousel>
    </div>
  </div>
);
}

export default Activity;
