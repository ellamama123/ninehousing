import { Row, Col, Button, Image, Form, Input, InputNumber } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../../layout/Layout";
import Link from "next/link";

export default function PostDetail() {
  interface Post {
    title: any,
    content: any,
    related_blogs: any
  }
  const router = useRouter();
  const [post, setPost] = useState<{title: any, content: any, related_blogs: any}>();

  useEffect(() => {
    let id = router.query.id;

    if (id) {
      axios
        .get("https://web-developing.site/api/blogs/" + id)
        .then((response) => {
          setPost(response.data);
        });
    }
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>{post?.title} | Nine Housing</title>
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
            Blog
          </p>
        </div>
        <div style={{ marginTop: "100px", marginBottom: "50px", width: "80%", margin: "0 auto", paddingBottom: '50px' }}>
          <p style={{ paddingTop: "20px" }}>Blog/ Bài viết</p>
          <div>
            <Row>
              <Col lg={16} span={24}>
                <h4
                  style={{
                    marginTop: "40px",
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "#FFD600",
                    textTransform: "uppercase",
                  }}
                >
                  {post?.title}
                </h4>
                <p
                  style={{ marginTop: "20px", color: "black" }}
                  dangerouslySetInnerHTML={{ __html: post?.content }}
                />
              </Col>
              <Col lg={8} span={24}>
                <div className="related-post">
                  <p
                    style={{
                      color: "white",
                      fontSize: "24px",
                      margin: "10px 0",
                      fontWeight: "bold",
                    }}
                  >
                    Related blog posts
                  </p>
                  {
                    post?.related_blogs.slice(-2).map((blog: any , index: any) => (
                        <div style={{ marginBottom: "30px" }} key={index}>
                          <Link
                            href={window.location.origin + "/post/" + blog?.id}
                            title=""
                          >
                            <div style={{cursor: 'pointer'}}>
                        <Image
                          alt="image"
                          width={"100%"}
                          preview={false}
                          style={{
                            aspectRatio: '3 / 2', 
                            objectFit: 'cover'
                          }} 
                          src={blog.thumbnail}
                        />
                        <div
                          style={{
                            backgroundColor: "#DEB25F",
                            padding: 20,
                            borderEndStartRadius: "10px",
                            borderBottomRightRadius: "10px",
                          }}
                        >
                          <p>
                            {blog.title}
                          </p>
                        </div>
                        </div>
                        </Link>
                      </div>
                    ))
                  }
                  
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
}
