import Link from "next/link";

export default function Banner3() {
  return (
    <>
      <section
        className="banner__area-three banner__bg-three"
        data-background="/assets/img/banner/h4_banner_bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="banner__content-three">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Dịch vụ chuyên Thuê xe 4 chỗ đà Lạt, Thuê xe 7 chỗ đà Lạt,
                  Thuê xe 16 chỗ đà, Thuê xe 29 chỗ đà Lạt, Xe đưa đón sân bay
                  liên Khương, Lạt !
                </span>
                <h2 className="title" data-aos="fade-up" data-aos-delay={300}>
                  Thuê xe du lịch đà lạt
                </h2>
                <Link
                  href="tel:0918638068"
                  className="btn"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  0918 638 068
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="banner__img">
                <img
                  src="/assets/img/banner/thue-xe-du-lich-di-noi-thanh-da-lat-1.png"
                  alt=""
                  data-aos="fade-left"
                  data-aos-delay={800}
                />
              </div>
            </div>
          </div>
          <div className="banner-social banner-social-three">
            <h5 className="title">Follow us</h5>
            <ul className="list-wrap">
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
