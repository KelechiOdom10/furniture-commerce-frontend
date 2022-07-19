import { CategoryDetailType, IDesktopNavItem } from "types";

export const main_links: IDesktopNavItem[] = [
  { title: "Shop", href: "/products" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const sub_links: CategoryDetailType[] = [
  {
    name: "Sofas",
    slug: "sofas",
    description:
      "Sink into a little slice of heaven. Our modern sofas and sleepers are here to satisfy your seating senses. Available in sumptuous leather, soft velvet and a variety of other fabrics to complete your living room ensemble.",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    id: 1,
    createdAt: "2021-03-28T00:17:53.724151+00:00",
    productTypes: [
      {
        name: "Modular Sofas",
        categoryName: "Sofas",
        slug: "modular-sofas",
        imageUrl:
          "https://www.lapalma.it/uploads/product/thumbnail/135/collection_webp_plus_classic_trasparente.png.webp",
        id: 3,
        categorySlug: "sofas",
        createdAt: "2021-07-20T23:17:53.724176+00:00",
      },
      {
        name: "3 Seater Sofas",
        categoryName: "Sofas",
        slug: "3-seater-sofas",
        imageUrl:
          "https://images.dfs.co.uk/i/dfs/mya_3a_simplywoollook_steelgrey_view1?$dfs_v2_pdp_m$&fmt=auto",
        id: 2,
        categorySlug: "sofas",
        createdAt: "2021-12-18T00:17:53.724175+00:00",
      },
      {
        name: "Corner Sofas",
        categoryName: "Sofas",
        slug: "corner-sofas",
        imageUrl:
          "https://i.pinimg.com/originals/46/8c/0a/468c0abf669104e862355303efc1b6e7.png",
        id: 1,
        categorySlug: "sofas",
        createdAt: "2021-09-08T23:17:53.724173+00:00",
      },
    ],
  },
  {
    name: "Kitchen",
    slug: "kitchen",
    description:
      "Best kitchenware and accessories with functionality and a modern style.",
    imageUrl: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2",
    id: 2,
    createdAt: "2021-03-18T00:17:53.724161+00:00",
    productTypes: [
      {
        name: "Tableware",
        categoryName: "Kitchen",
        slug: "tableware",
        imageUrl:
          "http://cdn.ecommercedns.uk/files/4/228904/0/13183260/9120001338-0.png",
        id: 6,
        categorySlug: "kitchen",
        createdAt: "2021-12-18T00:17:53.724181+00:00",
      },
      {
        name: "Kitchen Accessories",
        categoryName: "Kitchen",
        slug: "kitchen-accessories",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0526/4261/1399/products/1.png?v=1628686245",
        id: 5,
        categorySlug: "kitchen",
        createdAt: "2021-09-08T23:17:53.72418+00:00",
      },
      {
        name: "Cookware",
        categoryName: "Kitchen",
        slug: "cookware",
        imageUrl:
          "https://www.lecreuset.co.uk/dw/image/v2/BDSR_PRD/on/demandware.static/-/Sites-master-catalog-LC/default/dwda0e17d9/images/hires/Full_HD_PNG/LC_20190624_ZS_PS_FS_51804000010002_001.png?sw=765&sh=575&sm=fit",
        id: 4,
        categorySlug: "kitchen",
        createdAt: "2021-10-28T23:17:53.724178+00:00",
      },
    ],
  },
  {
    name: "Beds",
    slug: "beds",
    description:
      "Whether beautifully upholstered or baring their elegant wood frames to the world, our modern beds are so good-looking you’ll want to leave the lights on.",
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    id: 3,
    createdAt: "2021-03-23T00:17:53.724163+00:00",
    productTypes: [
      {
        name: "King Size Beds",
        categoryName: "Beds",
        slug: "king-size-beds",
        categorySlug: "beds",
        imageUrl:
          "https://www.bedsofparadise.co.uk/a-bespoke-client-folders/paradise/bespoke-images/product/Bern%20Frame%20Grey.png",
        id: 9,
        createdAt: "2021-09-28T23:17:53.724185+00:00",
      },
      {
        name: "Single Beds",
        categoryName: "Beds",
        slug: "single-beds",
        imageUrl:
          "https://www.afs-admin.co.uk/images-product/rialto-light-grey-linen-bed-90cm-78246",
        id: 8,
        categorySlug: "beds",
        createdAt: "2021-10-28T23:17:53.724184+00:00",
      },
      {
        name: "Double Beds",
        categoryName: "Beds",
        slug: "double-beds",
        categorySlug: "beds",
        imageUrl:
          "https://www.bedsofparadise.co.uk/a-bespoke-client-folders/paradise/bespoke-images/product/carnival-double-bed-frame-3727",
        id: 7,
        createdAt: "2021-07-20T23:17:53.724182+00:00",
      },
    ],
  },
  {
    name: "Lighting",
    slug: "lighting",
    description: "Quality lighting that evokes emotion.",
    imageUrl: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f",
    id: 4,
    createdAt: "2021-03-25T00:17:53.724164+00:00",
    productTypes: [
      {
        name: "Ceiling Lights",
        categoryName: "Lighting",
        slug: "ceiling-lights",
        categorySlug: "lighting",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0342/2425/products/UMAGE_packshot_2329_AsteriaUp_pearlwhite__3_4df81b09-4b79-4bdb-892b-7c5121e4c6fd_600x.png?v=1636450893",
        id: 12,
        createdAt: "2021-11-28T00:17:53.724189+00:00",
      },
      {
        name: "Wall Lights",
        categoryName: "Lighting",
        slug: "wall-lights",
        categorySlug: "lighting",
        imageUrl:
          "https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_auto,f_auto,w_auto/v2/products/brooklyn-wall-light-with-tube-glass-brass-holder-brass-ring-tube-glass-industville-clippings-11324159.png",
        id: 11,
        createdAt: "2021-12-28T00:17:53.724188+00:00",
      },
      {
        name: "Floor Lamps",
        categoryName: "Lighting",
        categorySlug: "lighting",
        slug: "floor-lamps",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0251/5529/products/206100313_01copy_360x.png?v=1623766088",
        id: 10,
        createdAt: "2022-01-07T00:17:53.724186+00:00",
      },
    ],
  },
  {
    name: "Office",
    slug: "office",
    description:
      "Keep home office morale high. Whether you’re conferencing for eight or working at a power desk for one, we’ve got you covered.",
    imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
    id: 5,
    createdAt: "2021-03-26T00:17:53.724166+00:00",
    productTypes: [
      {
        name: "Office Desks",
        categoryName: "Office",
        slug: "office-desks",
        categorySlug: "office",
        imageUrl:
          "https://cdn11.bigcommerce.com/s-a9q2mnae4u/images/stencil/1280x1280/products/987/1466/91e9720027c98bffd301fe0e816dc3e16f774a68__69715.1646422397.png?c=1&imbypass=on",
        id: 14,
        createdAt: "2021-05-31T23:17:53.724192+00:00",
      },
      {
        name: "Office Chairs",
        categoryName: "Office",
        categorySlug: "office",
        slug: "office-chairs",
        imageUrl:
          "https://northdecoshop.com/5910-large_default/office-chair-low-leather.jpg",
        id: 13,
        createdAt: "2021-05-01T23:17:53.724191+00:00",
      },
    ],
  },
];
