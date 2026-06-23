type CSSProperties = {
  boxShadow?: string;
  border?: string;
  [key: string]: string | undefined;
};

export const w95: Record<string, CSSProperties> = {
  raised: {
    boxShadow: 'inset -2px -2px 0px #8070b8, inset 2px 2px 0px #f5eeff, 4px 4px 0px #b0a0d0',
    border: '1px solid #c8b8e8',
  },
  sunken: {
    boxShadow: 'inset 2px 2px 0px #8070b8, inset -2px -2px 0px #f5eeff',
    border: '1px solid #c8b8e8',
  },
  btn: {
    boxShadow: 'inset -2px -2px 0px #5a4888, inset 2px 2px 0px #f8f2ff, 3px 3px 0px #9080c0',
    border: '1px solid #9080c0',
  },
  btnPink: {
    boxShadow: 'inset -2px -2px 0px #a05878, inset 2px 2px 0px #fff0f5, 3px 3px 0px #c888a8',
    border: '1px solid #c888a8',
  },
  panel: {
    boxShadow: 'inset -1px -1px 0px #8070b8, inset 1px 1px 0px #f5eeff, 3px 3px 0px #b0a0d0',
    border: '1px solid #c0b0e0',
  },
};

export const pixel = "font-['Press_Start_2P']";
export const jp = "font-['Noto_Sans_JP']";
