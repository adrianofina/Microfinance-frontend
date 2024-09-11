import { Inter, Roboto, Poppins, Montserrat } from "next/font/google";

const inter_init = Inter({ 
    subsets: ["latin"],
    weight: ["100","200", "300", "400", "500", "600", "700", "800", "900",],
    display: "swap",
    variable: "--font-inter",
});

const roboto_init = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
    variable: "--font-roboto",
});

const poppins_init = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
    variable: "--font-poppins",
});

const montserrat_init = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
    variable: "--font-montserrat",
});

export const inter = inter_init.variable;
export const roboto = roboto_init.variable;
export const poppins = poppins_init.variable;
export const montserrat = montserrat_init.variable;
