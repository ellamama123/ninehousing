import { Row, Col, Button, Image, Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../layout/Layout";
import useTrans from '../../layout/useTrans'
import { useRouter } from 'next/router'

export default function Post() {
  const [post, setPost] = useState<{thumbnail: any,title: any, content: any, id: any, created_at: any, description: any}[]>([]);
  const [perPage, setPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const trans = useTrans()  
  const { locale } = useRouter()

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    getPost();
  }, [pageIndex]);

  useEffect(() => {
    getPost();
  }, [locale]);

  const getPost = () => {
    axios
      .get(
        "https://web-developing.site/api/blogs?categories[]=2&categories[]=4", {
          params: {
            lang: locale
          },
        }
      )
      .then((response) => {
        setPost(response.data.data);
        setPerPage(response.data.meta.per_page);
        setPageIndex(response.data.meta.current_page);
        setTotalPage(response.data.meta.total);
      });
  };

  const onChange = (page: any) => {
    setPageIndex(page);
  };

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

  return (
    <>
      <Head>
        <title>Blog | Nine Housing</title>
      </Head>
      <Layout>
        <div style={{ position: "relative" }}>
          <Image
            alt="image"
            height={"200px"}
            width={"100%"}
            preview={false}
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
            {trans.post.post}
          </p>
        </div>
        <div style={{ marginTop: "100px", width: "80%", margin: "0 auto" }}>
          <Row>
            {post.length &&
              post.map((data, index) => (
                <Col lg={8} span={24} key={index} className="post-wrap">
                  <div>
                    <Image alt="image" width={"100%"}                           
                      style={{
                        aspectRatio: '3 / 2', 
                        objectFit: 'cover'
                      }}  
                      src={data?.thumbnail} 
                      preview={false}
                    />
                  </div>
                  <div style={{}}>
                    <div>
                      <div
                        style={{
                          padding: "20px",
                          backgroundColor: "#DEB25F",
                          borderEndStartRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "black",
                            minHeight: "22px"
                          }}
                        >
                          {data?.title}
                        </p>
                        <p
                          style={{
                            fontSize: "18px",
                            marginTop: "15px",
                            color: "black",
                            fontWeight: "500",
                            minHeight: "22px"
                          }}
                          dangerouslySetInnerHTML={{ __html: data?.description }}
                        />
                        <p
                          style={{
                            fontSize: "16px",
                            color: "gray",
                            marginTop: "15px",
                          }}
                        >
                          { convertDateString(data?.created_at) }
                        </p>
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            marginTop: "10px",
                            fontWeight: "bold",
                            padding: "5px 10px",
                          }}
                        >
                          <Link
                            href={window.location.origin + "/post/" + data?.id}
                            title=""
                          >
                            <span>{trans.post.view_more}</span>
                            
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "50px"
          }}
        >
          <Pagination
            style={{ marginTop: 30 }}
            onChange={onChange}
            pageSize={perPage}
            current={pageIndex}
            total={totalPage}
          />
        </div>
      </Layout>
    </>
  );
}
