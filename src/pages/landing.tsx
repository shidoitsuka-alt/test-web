/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from 'react';

import useStyle from '@/styles/landing.styles';

interface WindowProps {
  type: 'left' | 'right';
  title: string;
  text: { __html: string };
  image: string;
}

export default function Landing() {
  const { classes } = useStyle();

  const [scrollY, setScrollY] = useState(0);

  // Memoize scroll styles to prevent recalculation on every render
  const parallaxStyle = useMemo(
    () => ({
      transform: `translateY(${scrollY * 0.2}px)`,
    }),
    [scrollY]
  );

  const fastScrollStyle = useMemo(
    () => ({
      transform: `translateY(${scrollY * -0.1}px)`,
    }),
    [scrollY]
  );

  const slowScrollStyle = useMemo(
    () => ({
      transform: `translateY(${scrollY * 0.3}px)`,
    }),
    [scrollY]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Throttle scroll handler to optimize performance
    const throttledHandleScroll = () => {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(handleScroll);
      } else {
        setTimeout(handleScroll, 16); // Fallback for older browsers
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  const dataWindow = useMemo(
    () => [
      {
        title: 'Is that flappy? 👀',
        text: {
          __html:
            'Look at that old nostalgia game in our project.<br/><br/>Remember when you reach level 999 you will meet Mario himself?!<br/>Yes, we add Mario in our flappy, what level? we forgot, it will be random!',
        },
        imagePath: '/images/landing/information/flappy.png',
      },
      {
        title: 'It’s a tree?',
        text: {
          __html:
            'Mining coins? tap tap tap? nahh, it’s too time consuming. Who watch tree grows 24/7<br/><br/>Here you can just plant it and leave it, once it grow you can plant it again!',
        },
        imagePath: '/images/landing/information/tree.png',
      },
    ],
    []
  );

  // Memoize Window component to avoid re-renders unless props change
  const Window = useMemo(
    () =>
      React.memo(({ type, title, text, image }: WindowProps) => {
        return (
          <div className="window container mb-16 md:mb-24 lg:mb-16 xl:mb-0 xl:w-3/4">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-0">
              <div
                className={`${
                  type === 'right' ? 'order:0 sm:order-1' : 'order-0'
                } aspect-square w-full object-cover`}
              >
                <img className="w-full" src={image} alt="" />
              </div>
              <div
                className={`${
                  type === 'right' ? 'sm:pl-8' : 'sm:pr-8'
                } right flex flex-col items-center justify-center xl:col-span-2`}
              >
                <div className="flex flex-col gap-6 sm:gap-10">
                  <h2 className="text-4xl text-white sm:text-5xl">{title}</h2>
                  <h4 className="barlow text-lg font-light text-white sm:text-2xl sm:font-semibold">
                    <div dangerouslySetInnerHTML={text} />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      }),
    []
  );

  return (
    <div className={`${classes.containerWrap}`} style={{ backgroundColor: '#4794A6' }}>
      <div className="fixed left-0 top-0 h-screen w-full"></div>
      <img
        className="fixed left-0 top-0 h-full w-full object-cover opacity-20"
        src="/images/landing/background/texture.png"
        alt="Forest with sky"
      />
      <div
        className={`${classes.bannerCustomHeight} relative flex w-full items-start justify-center`}
      >
        <div className="container absolute z-50 mt-4 flex items-center justify-between lg:mt-6">
          <div className="actionButton">
            <span className="flex gap-2 px-5 py-4 pb-6 pr-7 md:gap-4 md:px-10 md:py-4 md:pb-6 md:pr-12">
              <a href="" className="w-10 md:w-12 lg:w-16">
                <img src="/images/landing/icons/telegram.png" alt="" />
              </a>
              <a href="" className="w-10 md:w-12 lg:w-16">
                <img src="/images/landing/icons/twitter.png" alt="" />
              </a>
            </span>
          </div>
          <div className="actionButton">
            <span className="px-5 py-4 pb-6 pr-7 md:px-10 md:py-4 md:pb-6 md:pr-12">
              <a href="">
                <img src="/images/landing/icons/coin.png" alt="" className="w-10 md:w-12 lg:w-16" />
              </a>
            </span>
          </div>
        </div>
        <div className="relative z-40 flex h-full w-full flex-col items-center justify-center">
          <div className="z-30 flex flex-col items-center justify-start" style={fastScrollStyle}>
            <div className="mb-2 aspect-auto h-auto w-full px-5 sm:mb-6 sm:w-5/6 lg:w-[750px]">
              <img src="/images/landing/layout/logo.png" alt="tree project" className="w-full" />
            </div>
            <h1 className="textBorderShadow mb-10 w-full px-5 text-center text-base text-white/95 sm:mb-12 sm:w-5/6 sm:text-xl lg:mb-16 lg:w-full lg:text-2xl ">
              Well in here you mining trees and play flappy bird.
              <br />
              You purchase our items, then we use ur money to plant real trees.
            </h1>
            <a href="" className="actionButton">
              <span className="px-14 py-4 text-2xl sm:px-20 sm:py-6 md:px-24 md:py-8 md:text-3xl lg:px-28 lg:py-10 lg:text-4xl">
                PLAY
              </span>
            </a>
          </div>
          <div className="absolute bottom-0 h-full w-full">
            <div className="tree absolute bottom-0 z-20 h-[800px] w-full sm:h-[1000px] md:h-[880px]">
              <img
                src="/images/landing/background/tree.png"
                className="absolute h-full w-full object-cover object-left-bottom"
                alt=""
              />
            </div>
            <div className="mountain absolute bottom-0 z-10 flex w-full items-end">
              <div className="bg-[background: rgba(0, 0, 0, 0.05)] h-screen w-full"></div>
              <img
                src="/images/landing/background/mountain.png"
                className="h-[700px] w-full object-cover object-left-bottom md:h-[650px]"
                alt=""
                style={parallaxStyle} // Apply the parallax style
              />
            </div>
            <div style={slowScrollStyle} className="absolute top-0 h-full w-full">
              <img
                src="/images/landing/background/birds.gif"
                alt=""
                className={`${classes.birdsAnimation} birdsOne absolute w-40`}
              />
              <img
                src="/images/landing/background/birds.gif"
                alt=""
                className={`${classes.birdsAnimation} birdsTwo absolute w-40`}
              />
            </div>
            <div style={slowScrollStyle} className="absolute top-0 h-full w-full">
              <div className={`${classes.cloudAnimation} cloudOne z-0`}>
                <img src="/images/landing/background/cloud3.png" alt="Cloud 1" />
              </div>
              <div className={`${classes.cloudAnimation} cloudTwo z-0`}>
                <img src="/images/landing/background/cloud2.png" alt="Cloud 2" />
              </div>
              <div className={`${classes.cloudAnimation} cloudThree z-0`}>
                <img src="/images/landing/background/cloud3.png" alt="Cloud 3" />
              </div>
              <div className={`${classes.cloudAnimation} cloudFour z-0`}>
                <img src="/images/landing/background/cloud2.png" alt="Cloud 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.gradientBackground} relative z-50 h-full w-full pt-24`}>
        <img
          className="absolute left-0 top-0 h-full w-full object-cover opacity-10 brightness-50"
          src="/images/landing/background/texture2.png"
          alt="Forest with sky"
        />
        <div className="z-20">
          <Window
            type="left"
            title={dataWindow[0].title}
            text={dataWindow[0].text}
            image={dataWindow[0].imagePath}
          />
          <Window
            type="right"
            title={dataWindow[1].title}
            text={dataWindow[1].text}
            image={dataWindow[1].imagePath}
          />
          <div className="window container w-3/4"></div>
        </div>
        <div className="container z-20 pb-36 pt-20 text-center sm:w-1/2 sm:pb-24 sm:pt-10 md:pb-40 md:pt-20 lg:pb-48 lg:pt-36">
          <div className="mb-6 text-4xl text-white sm:mb-10 sm:text-5xl">Who the f*ck are we?</div>
          <div className="barlow text-lg font-light text-white sm:text-2xl sm:font-semibold">
            This project is just for fun between me and my friends. It’s all start with “imagine
            playing flappy bird but in telegram lol”
            <br />
            <br />
            And the trees? well, it’s a tree. let’s plant more of that stuff 👍
          </div>
        </div>
        <div className="container flex items-center justify-center border-t border-white py-8 text-xl font-normal text-white sm:text-2xl">
          theforrestproject.wtf
        </div>
      </div>
    </div>
  );
}
