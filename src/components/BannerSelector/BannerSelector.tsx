import {useRef, useState, useLayoutEffect, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {css} from "@emotion/react";
import {getIconByName} from "../../icon-cache.ts";
import React from "react";
import {useNavigate} from "react-router-dom";

type BannerSelectorProps = {
  filter: string;
}

type BannerObject = {
  image: React.FC<React.SVGProps<SVGSVGElement>>;
  fullImage: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  tags: string[];
  path: string;
}

const bannersList: BannerObject[] = [
  {
    image: getIconByName("captain-credit-banner"),
    text: "Captain Credit",
    tags: ['Product design', 'UX/UI', 'SaaS'],
    path: 'captain-credit',
    fullImage: getIconByName("captain-credit-hero")
  },
  {
    image: getIconByName("obli-banner"),
    text: "Obli",
    tags: ['Product design', 'UX/UI', 'SaaS'],
    path: 'obli',
    fullImage: getIconByName("obli-hero")
  },
  {
    image: getIconByName("punct-banner"),
    text: "Punct",
    tags: ['Product design', 'UX/UI', 'SaaS'],
    path: 'punct',
    fullImage: getIconByName("punct-hero")
  },
  {
    image: getIconByName("superwise-banner"),
    text: "Superwise",
    tags: ['Product design', 'UX/UI', 'SaaS'],
    path: 'superwise',
    fullImage: getIconByName("superwise-hero")
  },
];

const BannerSelector: React.FC<BannerSelectorProps> = ({filter}) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const scrollTimeout = useRef<number | null>(null);
  const [banners, setBanners] = useState<BannerObject[]>(bannersList);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cloneStyle, setCloneStyle] = useState<any>(null);

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
    if (scrollTimeout.current || isAnimating) return;

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

  const handleClick = () => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();

    setCloneStyle({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
    setIsAnimating(true);
    document.body.style.overflow = 'hidden';
  };

  useLayoutEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        document.body.style.overflow = '';
        // if (!document) {
        navigate(`/works/${banners[index].path}`);
        // }
        // setIsAnimating(false);
      }, 600);
    }
  }, [isAnimating]);

  const BannerComponentImage = banners[index].image;
  const BannerComponentFullImage = banners[index].fullImage;

  return (
    <div
      onWheel={handleScroll}
      css={css`
        height: 100%;
        width: 1144px; // hero banner size
        display: flex;
        align-items: center;
        justify-content: center;
        //overflow: hidden;
        //position: relative;
      `}
    >
      {/* Clone Banner Animation */}
      {isAnimating && cloneStyle && (
        <motion.div
          initial={{
            position: 'absolute',
            // top: cloneStyle.top,
            // left: cloneStyle.left,
            width: 0,
            height: 0,
          }}
          animate={{
            top: 60,
            // left: 0,
            width: '100%',
            height: '',
          }}
          transition={{duration: 0.6, ease: 'easeOut'}}
          css={css`
            z-index: 20;
            pointer-events: none;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              gap: 16px;
            `}
          >
            {BannerComponentFullImage && <BannerComponentFullImage/>}
            {/*<div css={css`*/}
            {/*  display: flex;*/}
            {/*  gap: 8px;*/}
            {/*  justify-content: center;*/}
            {/*  flex-wrap: wrap;*/}
            {/*`}>*/}
            {/*  {banners[index].tags.map(tag => (*/}
            {/*    <span*/}
            {/*      key={`clone-${banners[index].text}-${tag}`}*/}
            {/*      css={css`*/}
            {/*        font-size: 0.875rem;*/}
            {/*        border: 1px solid #FFFDFD80;*/}
            {/*        border-radius: 10px;*/}
            {/*        padding: 8px 12px;*/}
            {/*      `}*/}
            {/*    >*/}
            {/*      {tag}*/}
            {/*    </span>*/}
            {/*  ))}*/}
            {/*</div>*/}
            {/*<span css={css`*/}
            {/*  color: white;*/}
            {/*  font-size: 1.25rem;*/}
            {/*  font-weight: 400;*/}
            {/*`}>*/}
            {/*  {banners[index].text}*/}
            {/*</span>*/}
          </div>
        </motion.div>
      )}

      {/* Ghost Backgrounds */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ghost-${i}-${index}`}
          initial={{opacity: 0, y: direction > 0 ? -50 : 50}}
          animate={{opacity: 0.1, y: 0}}
          exit={{opacity: 0, y: direction > 0 ? 50 : -50}}
          transition={{duration: 0.5, delay: i * 0.1}}
          css={css`
            position: absolute;
            width: 30%;
            height: 30%;
            background: beige;
            border: 1px solid blue;
            border-radius: 16px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(${1 + i * 0.05});
            z-index: 0;
            filter: blur(${(i + 1) * 1.5}px);
          `}
        />
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={banners[index].text}
          ref={bannerRef}
          onClick={handleClick}
          initial={{opacity: 0, y: direction > 0 ? 50 : -50}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: direction > 0 ? -50 : 50}}
          transition={{duration: 0.6}}
          css={css`
            //position: absolute;
            text-align: center;
            z-index: 1;
            cursor: pointer;
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
            {!isAnimating && BannerComponentImage && <BannerComponentImage/>}
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
