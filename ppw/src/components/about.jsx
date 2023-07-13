import { useState } from "react";
import { Collapse } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const About = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div id="about" className="w-full h-fit p-10 bg-gray-900">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex justify-center h-fit">
          <img
          className="aspect-square"
            src="https://sandhikagalih.github.io/portfolio-tailwind-css/dist/img/sandhika.png"
            alt=""
          />
        </div>
        <div className="text-gray-400 flex flex-col gap-5">
          <Typography variant="h5">My Career So Far</Typography>
          <Typography>
            Halo, perkenalkan nama saya Jovan Panji Pratama. Saya seorang
            mahasiswa yang memiliki minat dan keahlian di bidang pengembangan
            web. Pada usia 20 tahun, saya telah menguasai teknologi ReactJS,
            HTML, CSS, dan JavaScript murni (vanilla JavaScript).
          </Typography>
          <Typography>
            Sebagai mahasiswa, saya tinggal di kota Solo untuk mengejar impian
            saya dalam memperdalam ilmu pemrograman. Saya telah mencapai tingkat
            kemahiran yang lumayan di bidang frontend, dan juga telah memperoleh
            pemahaman yang baik di bidang backend. Bahkan, saya memiliki
            pengetahuan dasar dalam alur kerja DevOps.
          </Typography>
          <Collapse in={isCollapsed}>
            <div className="flex flex-col gap-5">
              <Typography>
                Selain dunia pemrograman, saya juga menyukai bermain game. Saya
                percaya bahwa game dapat memperluas kreativitas dan memperkaya
                pengalaman. Ketertarikan saya terhadap dunia game juga mendorong
                saya untuk terus belajar dan mengembangkan diri dalam menghadapi
                tantangan baru.
              </Typography>
              <Typography>
                Saya berharap dapat terus meningkatkan keterampilan dan
                pengetahuan saya dalam bidang pengembangan web. Saya sangat
                bersemangat untuk mengaplikasikan pengetahuan saya dalam
                proyek-proyek yang menarik, dan berkontribusi dalam menciptakan
                solusi yang inovatif dan berdampak positif bagi masyarakat.
              </Typography>
              <Typography>
                Terima kasih telah meluangkan waktu untuk mengunjungi web
                personal portfolio saya. Jangan ragu untuk menjelajahi
                proyek-proyek yang telah saya kerjakan dan konten lainnya. Jika
                Anda tertarik untuk berkolaborasi atau ingin mendiskusikan ide,
                silakan hubungi saya melalui informasi kontak yang tersedia di
                halaman ini.
              </Typography>
            </div>
          </Collapse>
          <Button
            onClick={handleToggleCollapse}
            startIcon={isCollapsed ? <HiChevronUp /> : <HiChevronDown />}
            className="text-blue-500"
          >
            {isCollapsed ? "Read Less" : "Read More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
