import { Row, Col, Button, Image, Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../layout/Layout";

export default function Post() {
  const [post, setPost] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    getPost();
  }, [pageIndex]);

  const getPost = () => {
    axios
      .get(
        "https://web-developing.site/api/blogs?categories[]=2&categories[]=4"
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

  return (
    <>
      <Head>
        <title>Blog | Nine Housing</title>
      </Head>
      <Layout>
        <div style={{ position: "relative" }}>
          <Image
            height={"200px"}
            width={"100%"}
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
            Blog
          </p>
        </div>
        <div style={{ marginTop: "100px", width: "80%", margin: "0 auto" }}>
          <Row>
            {post.length &&
              post.map((data, index) => (
                <Col lg={8} span={24} className="post-wrap">
                  <div>
                    <Image width={"100%"} height={"75%"} src={data.thumbnail} />
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
                          }}
                        >
                          {data.title}
                        </p>
                        <p
                          style={{
                            fontSize: "18px",
                            marginTop: "15px",
                            color: "black",
                            fontWeight: "500",
                          }}
                          dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                        <p
                          style={{
                            fontSize: "16px",
                            color: "gray",
                            marginTop: "15px",
                          }}
                        >
                          06 Mar 2017 03:55 AP
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
                            href={window.location.origin + "/post/" + data.id}
                            title=""
                          >
                            View more
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
