import React, { useCallback, useEffect, useRef, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import {
  EmblaOptionsType,
  EmblaCarouselType,
  EmblaEventType,
} from "embla-carousel";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import classes from "./AuthSlide.module.scss";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface SlideType {
  image: StaticImageData;
  alt: string;
  text: string;
}

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = React.memo(({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000 }),
  ]);
  const tweenFactor = useRef(TWEEN_FACTOR_BASE);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(
        `.${classes.embla__slide__number}`
      ) as HTMLElement;
    });
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const diffToTarget = scrollSnap - scrollProgress;
        const scale = numberWithinRange(
          1 - Math.abs(diffToTarget * tweenFactor.current),
          0,
          1
        ).toString();

        if (slidesInView.includes(snapIndex)) {
          const tweenNode = tweenNodes.current[snapIndex];
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
          }
        }
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, setTweenNodes, tweenScale]);

  const renderSlides = useMemo(
    () =>
      slides.map((slide, index) => (
        <div className={classes.embla__slide} key={index}>
          <div className={classes.embla__slide__number}>
            <Image
              src={slide.image}
              alt={slide.alt}
              priority={index === 0} // Set priority only for the first slide
              loading={index === 0 ? undefined : "lazy"} // Lazy load all other slides
              quality={75}
            />
            <p>{slide.text}</p>
          </div>
        </div>
      )),
    [slides]
  );

  return (
    <section className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>{renderSlides}</div>
      </div>

      <div className={classes.embla__controls}>
        <div className={classes.embla__buttons}>
          <PrevButton onClick={() => emblaApi?.scrollPrev()} />
          <NextButton onClick={() => emblaApi?.scrollNext()} />
        </div>
        <div className={classes.embla__dots}>
          {slides.map((_, index) => (
            <DotButton
              key={index}
              className={`${classes.embla__dot} ${
                emblaApi?.selectedScrollSnap() === index
                  ? classes.embla__dotSelected
                  : ""
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default EmblaCarousel;
