import React, {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {css} from "@emotion/react";
import {getIconByName} from "../../icon-cache.ts";
import {useNavigate} from "react-router-dom";

type BannerSelectorProps = {
  filter: string;
}

type BannerObject = {
  image: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  tags: string[];
  path: string;
}

const bannersList: BannerObject[] = [
  {
    image: getIconByName("captain-credit-banner"),
    text: "Captain Credit",
    tags: ['Product design', 'UX/UI', 'SaaS'],
    path: 'captain-credit'
  },
  {
    image: getIconByName("obli-banner"),
    text: "Obli",
    tags: ['Product design', 'UX/UI', 'SaaS'],
    path: 'obli'
  },
  {
    image: getIconByName("punct-banner"),
    text: "Punct",
    tags: ['Product design', 'UX/UI', 'SaaS'],
    path: 'punct'
  },
  {
    image: getIconByName("superwise-banner"),
    text: "Superwise",
    tags: ['Product design', 'UX/UI', 'SaaS'],
    path: 'superwise'
  },
];

const BannerSelector: React.FC<BannerSelectorProps> = ({filter}) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [banners, setBanners] = useState<BannerObject[]>(bannersList);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const filteredBanners = () => {
      setIndex(0);
      if (filter === 'Product design') return bannersList.filter(banner => banner.text !== 'Obli');
      if (filter === 'Branding') return bannersList.filter(banner => banner.text === 'Obli');
      return bannersList;
    }

    setBanners(filteredBanners);
  }, [filter]);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollTimeout.current) return;

    const delta = e.deltaY;
    setDirection(delta > 0 ? 1 : -1);

    scrollTimeout.current = setTimeout(() => {
      setIndex((prev) => {
        const next = delta > 0 ? (prev + 1) % banners.length : (prev - 1 + banners.length) % banners.length;
        return next;
      });
      scrollTimeout.current = null;
    }, 300);
  };

  const onNavigate = (path: string) => {
    navigate(path);
  }

  const BannerComponent = banners[index].image;

  return (
    <div
      onWheel={handleScroll}
      css={css`
        height: 50vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
      `}
    >
      {/* Animated Ghost Cards */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ghost-${i}-${index}`}
          initial={{opacity: 0, y: direction > 0 ? 50 : -50}}
          animate={{opacity: 0.08, y: 0}}
          exit={{opacity: 0, y: direction > 0 ? -50 : 50}}
          transition={{duration: 0.5, delay: i * 0.1}}
          css={css`
            position: absolute;
            width: ${60 - i * 8}%;
            height: ${60 - i * 8}%;
            background: red;
            border: 1px solid rebeccapurple;
            border-radius: 16px;
            top: ${i * 2}%;
            //left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
              //filter: blur(${(i + 1) * 1.2}px);
          `}
        />
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={banners[index].text}
          initial={{opacity: 0, y: direction > 0 ? 50 : -50}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: direction > 0 ? -50 : 50}}
          transition={{duration: 0.5}}
          css={css`
            position: absolute;
            text-align: center;
            z-index: 1;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            `}
          >
            {BannerComponent && <BannerComponent
              onClick={() => {
                onNavigate(banners[index].path);
              }}
              css={css`
                cursor: pointer;
              `}/>}
          </div>
          <div css={css`
            display: flex;
            margin-top: 12px;
            justify-content: space-between;
            align-items: center;
          `}>
            <div css={css`
              display: flex;
              gap: 8px;
            `}>
              {banners[index].tags.map(tag => (
                <span
                  key={`${banners[index].text}-${tag}`}
                  css={css`
                    font-size: 0.875rem;
                    border: 1px solid #FFFDFD80;
                    border-radius: 10px;
                    padding: 8px 12px;
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span css={css`
              color: white;
              font-size: 1.25rem;
              font-weight: 400;
            `}>
              {banners[index].text}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BannerSelector;
