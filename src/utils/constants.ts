export interface InColors {
    black: string;
    white: string;
    'gray-1': string;
    'gray-2': string;
    green: string;
    blue: string;
    primary: string;
}

interface InFonts {
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
}

const colors: InColors = {
    black: '#14193F',
    white: '#F6F8FB',
    'gray-1': '#A4A8AE',
    'gray-2': '#DEDEDE',
    green: '#22B07D',
    blue: '#53C1F9',
    primary: '#5142E6'
}

const fonts: InFonts = {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semibold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
}

const base_url = 'https://kasirsimple.appsku.cloud/api/v1';

export {
    colors,
    base_url,
    fonts,
}