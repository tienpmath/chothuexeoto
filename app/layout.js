import { Inter, Outfit } from "next/font/google";
import "/public/assets/css/animate.min.css";
import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/flaticon.css";
import "/public/assets/css/fontawesome-all.min.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/odometer.css";
import "/public/assets/css/swiper-bundle.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/default.css";
import "/public/assets/css/main.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});
const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tg-heading-font-family",
  display: "swap",
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
