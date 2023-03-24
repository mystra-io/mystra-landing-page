export const assetsUrl = (path: string): string => `/assets/${path}`;

const brandAssetsUrl = (filename: string): string =>
  assetsUrl(`brand/${filename}`);
const socialAssetsUrl = (filename: string): string =>
  assetsUrl(`socials/${filename}`);
const iconAssetsUrl = (filename: string): string =>
  assetsUrl(`icons/${filename}`);
const partnerAssetsUrl = (filename: string): string =>
  assetsUrl(`partners/${filename}`);
const elementAssetsUrl = (filename: string): string =>
  assetsUrl(`elements/${filename}`);
const effectAssetsUrl = (filename: string): string =>
  assetsUrl(`effects/${filename}`);

export const BrandAssets = {
  ecologyLabel: brandAssetsUrl("eco.svg"),
  ecologyLabelMobile: brandAssetsUrl("eco2.svg"),
  logo: brandAssetsUrl("logo.svg"),
  circle: brandAssetsUrl("circle.png"),
  world: brandAssetsUrl("world.png"),
  computer: brandAssetsUrl("computer.png"),
  chart: brandAssetsUrl("chart.png"),
} as const;

export const EffectAssets = {
  elipse: effectAssetsUrl("elipse.png"),
  mesh: effectAssetsUrl("mesh.png"),
  numbers: effectAssetsUrl("numbers.png"),
  curtain: effectAssetsUrl("curtain.png"),
  dot: effectAssetsUrl("dot.svg"),
} as const;

export const ElementAssets = {
  ticketBackground: elementAssetsUrl("ticket-background.png"),
  ticketCorner: elementAssetsUrl("ticket.png"),
  web3Spinner: elementAssetsUrl("web3-spinner.png"),
  web3SpinnerTransparent: elementAssetsUrl("web3-spinner-transparent.svg"),
  nft: elementAssetsUrl("nft.png"),
  nftBackground: elementAssetsUrl("nft-background.png"),
  nftCards: elementAssetsUrl("nft-cards.png"),
  points: elementAssetsUrl("points.png"),
  validator: elementAssetsUrl("validator.png"),
  tickets: elementAssetsUrl("tickets.png"),
  ticketFront: elementAssetsUrl("ticket-front.png"),
  dot: elementAssetsUrl("dot.png"),
  validatorMenu: elementAssetsUrl("validator-menu.png"),
  ecofriendlyBig: elementAssetsUrl("ecofriendly-big.png"),
  launchAppHomepage: elementAssetsUrl("launchapp-homepage.png"),
  AmlKyc: elementAssetsUrl("amlkyc.png"),
  incubationHub: elementAssetsUrl("incubation-hub.png"),
  ticketRect: elementAssetsUrl("ticket-rect.svg"),
  payWith: elementAssetsUrl("pay-with.png")
} as const;

export const PartnerAssets = {
  dotOracle: partnerAssetsUrl("dotoracle.svg"),
  ariTen: partnerAssetsUrl("ariten.png"),
  tubbly: partnerAssetsUrl("tubbly.svg"),
  casperblockchain: partnerAssetsUrl("casperblockchain.svg"),
  csprPl: partnerAssetsUrl("cspr-pl.svg"),
  casperDash: partnerAssetsUrl("casper-dash.svg"),
  awesomecasper: partnerAssetsUrl("awesome-casper.svg"),
  nftCalendar: partnerAssetsUrl("nftcalendar-svg-white.png"),
} as const;

export const IconAssets = {
  arrowRight: iconAssetsUrl("arrow-right.svg"),
  bell: iconAssetsUrl("bell.svg"),
  arrowRightBrand: iconAssetsUrl("arrow-right-brand.svg"),
  chat: iconAssetsUrl("chat.svg"),
  x: iconAssetsUrl("x.svg"),
  chevronVertical: iconAssetsUrl("chevron-vertical.svg"),
  server: iconAssetsUrl("server.png"),
  eco_friendly: iconAssetsUrl("eco_friendly.png"),
  alert: iconAssetsUrl("alert.svg"),
  alertTriangle: iconAssetsUrl("alert-triangle.svg"),
  casper: iconAssetsUrl("casper.svg"),
  metamask: iconAssetsUrl("metamask.svg"),
  logOut: iconAssetsUrl("log-out.svg"),
  menuDropdown: iconAssetsUrl("menu-dropdown.svg"),
  xCircle: iconAssetsUrl("x-circle.svg"),
  lock: iconAssetsUrl("lock.svg"),
  refresh: iconAssetsUrl("refresh.svg")

} as const;

export const SocialAssets = {
  twitter: socialAssetsUrl("twitter.svg"),
  medium: socialAssetsUrl("medium.svg"),
  telegram: socialAssetsUrl("telegram.svg"),
  discord: socialAssetsUrl("discord.svg"),
} as const;

export const PartnerUrls = {
  dotOracle: "https://dotoracle.network/",
  tubbly: "https://www.tubbly.io/",
  awesomecasper: "https://awesomecasper.com/",
  csprPl: "https://cspr.pl/",
  casperDash: "https://casperdash.io/",
  casperblockchain: "https://casperblockchain.io/",
  nftCalendar: "https://nftcalendar.io/",
  ariTen: "https://ari10.com/"
} as const;

export const SocialMediaUrls = {
  twitter: "https://twitter.com/mystra_io",
  medium: "https://medium.com/@mystra",
  telegram: "https://t.me/mystraio",
  discord: "https://discord.gg/sZQVdRCyqx",
} as const;
