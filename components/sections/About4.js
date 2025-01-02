import Link from "next/link";

export default function About4() {
  return (
    <>
      <section className="about__area-six">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="about__img-wrap-six">
                <img src="/assets/img/images/h4_about_img01.jpg" alt="" />
                <img
                  src="/assets/img/images/h4_about_img02.jpg"
                  alt=""
                  data-parallax='{"x" : 40}'
                />
                <div className="experience__box-four">
                  <h2 className="title">25</h2>
                  <p>
                    Years Experience <br /> in This Field
                  </p>
                </div>
                <div className="shape">
                  <img
                    src="/assets/img/images/h4_about_img_shape.png"
                    alt=""
                    className="alltuchtopdown"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content-six">
                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                  <span className="sub-title">
                    Giới thiệu dịch vụ cho thuê xe ô tô Trung Thành Đà Lạt
                  </span>
                  <h2 className="title tg-element-title">
                    Thuê xe 4 chỗ đà Lạt, Thuê xe 7 chỗ đà Lạt, Thuê xe 16 chỗ
                    đà Lạt, Thuê xe 29 chỗ đà Lạt, Xe đưa đón sân bay liên
                    Khương, Thuê xe du lịch đà lạt
                  </h2>
                </div>
                <p>Ưu điểm chọn dịch vụ của Trung Thành Đà Lạt:</p>
                <div className="about__content-inner-four">
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Giá rẻ nhất Đà Lạt
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Tài xê chuyên nghiệp, lái xe êm ái, vui vẻ
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Tư vấn tiết kiệm chi phí
                      </li>
                    </ul>
                  </div>
                  <div className="about__satisfied-box">
                    <div className="icon">
                      <i className="flaticon-trophy" />
                    </div>
                    <div className="content">
                      <h2 className="title">98%</h2>
                      <p>
                        Các Tour đoàn khách
                        <br /> lựa chọn dịch vụ thuê xe ô tô của chúng tôi
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="https://zalo.me/0918638068" className="btn btn-two">
                  Zalo: 0918 638 068
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about__shape-wrap-four">
          <img src="/assets/img/images/h4_about_shape01.png" alt="" />
          <img
            src="/assets/img/images/h4_about_shape02.png"
            alt=""
            data-parallax='{"x" : -80 , "y" : -80 }'
          />
        </div>
      </section>
    </>
  );
}
