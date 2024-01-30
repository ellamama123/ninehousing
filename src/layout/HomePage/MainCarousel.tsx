import React from "react";
import { Carousel, Image, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

interface MailCarouselProps {
  slide: Array<any>; // Change `any` to the actual type of your items in the array
}

const MainCarousel: React.FC<MailCarouselProps> = ({slide}) => {
  const onChange = (currentSlide: number) => {
    console.log(slide);
  };

  React.useEffect(() => {
    console.log(slide);
  }, [])

  return (
    <Carousel
      afterChange={onChange}
      arrows
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
    >
      {
        slide?.map((data, index) => (
          <div key={index}>
            <div className="slide-image-wrap">
              <Image
                className="slide-image main"
                src={data}
                alt="Logo"
                preview={false}
              />
              {/* <p className="slide-text">Serviced Apartment</p> */}
            </div>
          </div>
        ))
      }


    </Carousel>
  );
};

export default MainCarousel;
