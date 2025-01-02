import Link from "next/link";
import Image from "next/image";
const BlogPost4 = async () => {
  const res = await fetch(
    `https://admin.raovatlamdong.vn/api/cms-kit-public/blog-posts/default?SkipCount=1&MaxResultCount=7&Sorting=Id`,
    {
      method: "GET",
      next: { tags: ["collection"], revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  const dataBlog = await res.json();

  return (
    <>
      <section className="blog__post-area-four">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title">
                  Chuyên Tour du lịch tham quan Đà Lạt - Thuê xe ô tô Đà Lạt giá
                  rẻ - Có tài xế
                </span>
                <h2 className="title tg-element-title">
                  Thuê xe 4 - 5 - 7 - 16 - 29 chỗ <br /> Đà Lạt
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {dataBlog.items.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-10">
                <div className="blog-post-item blog__post-three shine-animate-item">
                  <div className="blog-post-thumb blog__post-thumb-three">
                    <Link href={`/blog/${item.slug}`} className="shine-animate">
                      <Image
                        src={
                          "https://admin.raovatlamdong.vn/uploads/host/my-file-container/" +
                          item.coverImageMediaId
                        }
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                    {/* <Link href="/blog-details" className="shine-animate">
                      <img src="/assets/img/blog/blog_post01.jpg" alt="" />
                    </Link> */}
                  </div>
                  <div className="blog-post-content blog__post-content-three">
                    <Link href="/blog" className="post-tag">
                      Business
                    </Link>
                    <h2 className="title">
                      <Link href="/blog-details">
                        Marketing your are business downturn now a days
                      </Link>
                    </h2>
                    <div className="blog-post-meta mb-20">
                      <ul className="list-wrap">
                        <li>
                          <i className="fas fa-calendar-alt" />
                          Oct 21, 2024
                        </li>
                      </ul>
                    </div>
                    <Link href="/blog-details" className="btn">
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost4;
