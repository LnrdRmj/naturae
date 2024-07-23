import EuWorkLogo from "../../src/components/landingPage/assets/partnerLogos/EuWork.png";
import ListoneGiordanoLogo from "../../src/components/landingPage/assets/partnerLogos/Listone Giordano.png";
import TecnoGraficaLogo from "../../src/components/landingPage/assets/partnerLogos/Tecno Grafica.png";

import EuWorkGrayLogo from "../../src/components/landingPage/assets/partnerLogos/gray/EuWork.png";
import ListoneGiordanoGrayLogo from "../../src/components/landingPage/assets/partnerLogos/gray/Listone Giordano.png";
import TecnoGraficaGrayLogo from "../../src/components/landingPage/assets/partnerLogos/gray/Tecno Grafica.png";

export const partnerLogos = [ListoneGiordanoLogo, TecnoGraficaLogo, EuWorkLogo];

export type Partner = {
  name: string;
  logo: string;
  grayLogo: string;
  website: string;
};
export const partnersData: Partner[] = [
  {
    name: "Listone Giordano",
    logo: ListoneGiordanoLogo,
    grayLogo: ListoneGiordanoGrayLogo,
    website: "https://listonegiordano.com",
  },
  {
    name: "Eu Work",
    logo: EuWorkLogo,
    grayLogo: EuWorkGrayLogo,
    website: "https://tecnografica.net",
  },
  {
    name: "Tecno Grafica",
    logo: TecnoGraficaLogo,
    grayLogo: TecnoGraficaGrayLogo,
    website: "https://euwork.it",
  },
];
