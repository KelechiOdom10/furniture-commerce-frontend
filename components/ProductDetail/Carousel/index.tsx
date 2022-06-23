import { createRef, useEffect } from "react";
import { Box, Image, Stack, Grid } from "@mantine/core";
import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useCarouselStyles } from "./carousel.style";

type Props = {
  options?: Options;
  images: string[];
};

const Carousel: React.FC<Props> = ({ images }) => {
  const mainRef = createRef<Splide>();
  const thumbsRef = createRef<Splide>();
  const { classes } = useCarouselStyles();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, [mainRef, thumbsRef]);

  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    cover: true,
    classes: {
      pagination: `splide__pagination main-pagination`,
    },
    pagination: false,
    breakpoints: {
      500: {
        pagination: true,
        width: "100%",
        arrows: false,
      },
    },
  };

  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: "0rem",
    pagination: false,
    direction: "ttb",
    fixedWidth: 110,
    // fixedHeight: 80,
    height: "100%",
    cover: true,
    focus: "center",
    isNavigation: true,
    arrows: false,
  };

  const renderSlides = () => {
    return images.map(image => (
      <SplideSlide key={image}>
        <Image src={image} alt="Image" />
      </SplideSlide>
    ));
  };

  return (
    <Box className={classes.root}>
      <Grid gutter="xs" grow>
        <Grid.Col sm={2} md={1} className={classes.thumbnailCarousel}>
          <Splide
            options={thumbsOptions}
            ref={thumbsRef}
            aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
          >
            {renderSlides()}
          </Splide>
        </Grid.Col>
        <Grid.Col span={12} sm={10} md={9}>
          <Splide
            options={mainOptions}
            ref={mainRef}
            aria-labelledby="thumbnail-slider-example"
          >
            {renderSlides()}
          </Splide>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Carousel;
