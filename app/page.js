import Layout from "@/components/layout/Layout";
import About4 from "@/components/sections/About4";
import Banner3 from "@/components/sections/Banner3";
import BlogPost4 from "@/components/sections/BlogPost4";
import Brand4 from "@/components/sections/Brand4";
import Features2 from "@/components/sections/Features2";
import Pricing1 from "@/components/sections/Pricing1";
import Request4 from "@/components/sections/Request4";
import Services4 from "@/components/sections/Services4";
import Team4 from "@/components/sections/Team4";
import Testimonial4 from "@/components/sections/Testimonial4";

export const metadata = {
  title: "Thuê xe 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt",
  description:
    "Dịch vụ Thuê xe 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt. DỊCH VỤ THUÊ XE Ô TÔ ĐÀ LẠT (CÓ TÀI XẾ); Thuê xe ô tô Đà Lạt tham quan các địa điểm theo yêu cầu",
  openGraph: {
    title: "Thuê xe 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt",
    description:
      "Dịch vụ Thuê xe 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt. DỊCH VỤ THUÊ XE Ô TÔ ĐÀ LẠT (CÓ TÀI XẾ); Thuê xe ô tô Đà Lạt tham quan các địa điểm theo yêu cầu",
    images: "/logo.jpg",
  },
};

export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={4}>
        <Banner3 />
        <Features2 />
        <Brand4 />
        <About4 /> <Pricing1 />
        <Request4 />
        <Team4 />
        <Testimonial4 />
        <BlogPost4 />
      </Layout>
    </>
  );
}
