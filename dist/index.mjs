var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/color-name/index.js
var require_color_name = __commonJS((exports, module) => {
  "use strict";
  module.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS((exports, module) => {
  var cssKeywords = require_color_name();
  var reverseKeywords = {};
  for (const key of Object.keys(cssKeywords)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
  var convert = {
    rgb: {channels: 3, labels: "rgb"},
    hsl: {channels: 3, labels: "hsl"},
    hsv: {channels: 3, labels: "hsv"},
    hwb: {channels: 3, labels: "hwb"},
    cmyk: {channels: 4, labels: "cmyk"},
    xyz: {channels: 3, labels: "xyz"},
    lab: {channels: 3, labels: "lab"},
    lch: {channels: 3, labels: "lch"},
    hex: {channels: 1, labels: ["hex"]},
    keyword: {channels: 1, labels: ["keyword"]},
    ansi16: {channels: 1, labels: ["ansi16"]},
    ansi256: {channels: 1, labels: ["ansi256"]},
    hcg: {channels: 3, labels: ["h", "c", "g"]},
    apple: {channels: 3, labels: ["r16", "g16", "b16"]},
    gray: {channels: 1, labels: ["gray"]}
  };
  module.exports = convert;
  for (const model of Object.keys(convert)) {
    if (!("channels" in convert[model])) {
      throw new Error("missing channels property: " + model);
    }
    if (!("labels" in convert[model])) {
      throw new Error("missing channel labels property: " + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error("channel and label counts mismatch: " + model);
    }
    const {channels, labels} = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], "channels", {value: channels});
    Object.defineProperty(convert[model], "labels", {value: labels});
  }
  convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
  }
  convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)) {
      const value = cssKeywords[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
    g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
    b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = colorString.split("").map((char) => {
        return char + char;
      }).join("");
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 255;
    const g = integer >> 8 & 255;
    const b = integer & 255;
    return [r, g, b];
  };
  convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f = 0;
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    let f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hsv = convert.gray.hsl;
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
});

// node_modules/color-convert/route.js
var require_route = __commonJS((exports, module) => {
  var conversions = require_conversions();
  function buildGraph() {
    const graph = {};
    const models = Object.keys(conversions);
    for (let len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions[current]);
      for (let len = adjacents.length, i = 0; i < len; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  module.exports = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for (let len = models.length, i = 0; i < len; i++) {
      const toModel = models[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS((exports, module) => {
  var conversions = require_conversions();
  var route = require_route();
  var convert = {};
  var models = Object.keys(conversions);
  function wrapRaw(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === "object") {
        for (let len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach((fromModel) => {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", {value: conversions[fromModel].channels});
    Object.defineProperty(convert[fromModel], "labels", {value: conversions[fromModel].labels});
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel) => {
      const fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  module.exports = convert;
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS((exports, module) => {
  "use strict";
  var wrapAnsi16 = (fn, offset) => (...args) => {
    const code = fn(...args);
    return `[${code + offset}m`;
  };
  var wrapAnsi256 = (fn, offset) => (...args) => {
    const code = fn(...args);
    return `[${38 + offset};5;${code}m`;
  };
  var wrapAnsi16m = (fn, offset) => (...args) => {
    const rgb = fn(...args);
    return `[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
  };
  var ansi2ansi = (n) => n;
  var rgb2rgb = (r, g, b) => [r, g, b];
  var setLazyProperty = (object, property, get) => {
    Object.defineProperty(object, property, {
      get: () => {
        const value = get();
        Object.defineProperty(object, property, {
          value,
          enumerable: true,
          configurable: true
        });
        return value;
      },
      enumerable: true,
      configurable: true
    });
  };
  var colorConvert;
  var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
    if (colorConvert === void 0) {
      colorConvert = require_color_convert();
    }
    const offset = isBackground ? 10 : 0;
    const styles = {};
    for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
      const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
      if (sourceSpace === targetSpace) {
        styles[name] = wrap(identity, offset);
      } else if (typeof suite === "object") {
        styles[name] = wrap(suite[targetSpace], offset);
      }
    }
    return styles;
  };
  function assembleStyles() {
    const codes = new Map();
    const styles = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `[${style[0]}m`,
          close: `[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "[39m";
    styles.bgColor.close = "[49m";
    setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
    setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
    setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
    setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
    setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
    setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
    return styles;
  }
  Object.defineProperty(module, "exports", {
    enumerable: true,
    get: assembleStyles
  });
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS((exports, module) => {
  "use strict";
  module.exports = (flag, argv = process.argv) => {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  };
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS((exports, module) => {
  "use strict";
  var os = require("os");
  var tty = require("tty");
  var hasFlag = require_has_flag();
  var {env} = process;
  var forceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    forceColor = 0;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = 1;
  }
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
      forceColor = 0;
    } else {
      forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === void 0) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (process.platform === "win32") {
      const osRelease = os.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  }
  function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
  }
  module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
  };
});

// node_modules/chalk/source/util.js
var require_util = __commonJS((exports, module) => {
  "use strict";
  var stringReplaceAll = (string, substring, replacer) => {
    let index = string.indexOf(substring);
    if (index === -1) {
      return string;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = "";
    do {
      returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
      endIndex = index + substringLength;
      index = string.indexOf(substring, endIndex);
    } while (index !== -1);
    returnValue += string.substr(endIndex);
    return returnValue;
  };
  var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
    let endIndex = 0;
    let returnValue = "";
    do {
      const gotCR = string[index - 1] === "\r";
      returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
      endIndex = index + 1;
      index = string.indexOf("\n", endIndex);
    } while (index !== -1);
    returnValue += string.substr(endIndex);
    return returnValue;
  };
  module.exports = {
    stringReplaceAll,
    stringEncaseCRLFWithFirstIndex
  };
});

// node_modules/chalk/source/templates.js
var require_templates = __commonJS((exports, module) => {
  "use strict";
  var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
  var ESCAPES = new Map([
    ["n", "\n"],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", ""],
    ["a", "\x07"]
  ]);
  function unescape(c) {
    const u = c[0] === "u";
    const bracket = c[1] === "{";
    if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }
    if (u && bracket) {
      return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    }
    return ESCAPES.get(c) || c;
  }
  function parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks) {
      const number = Number(chunk);
      if (!Number.isNaN(number)) {
        results.push(number);
      } else if (matches = chunk.match(STRING_REGEX)) {
        results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
      } else {
        throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
      }
    }
    return results;
  }
  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      const name = matches[1];
      if (matches[2]) {
        const args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }
    return results;
  }
  function buildStyle(chalk2, styles) {
    const enabled = {};
    for (const layer of styles) {
      for (const style of layer.styles) {
        enabled[style[0]] = layer.inverse ? null : style.slice(1);
      }
    }
    let current = chalk2;
    for (const [styleName, styles2] of Object.entries(enabled)) {
      if (!Array.isArray(styles2)) {
        continue;
      }
      if (!(styleName in current)) {
        throw new Error(`Unknown Chalk style: ${styleName}`);
      }
      current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
    }
    return current;
  }
  module.exports = (chalk2, temporary) => {
    const styles = [];
    const chunks = [];
    let chunk = [];
    temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
      if (escapeCharacter) {
        chunk.push(unescape(escapeCharacter));
      } else if (style) {
        const string = chunk.join("");
        chunk = [];
        chunks.push(styles.length === 0 ? string : buildStyle(chalk2, styles)(string));
        styles.push({inverse, styles: parseStyle(style)});
      } else if (close) {
        if (styles.length === 0) {
          throw new Error("Found extraneous } in Chalk template literal");
        }
        chunks.push(buildStyle(chalk2, styles)(chunk.join("")));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(character);
      }
    });
    chunks.push(chunk.join(""));
    if (styles.length > 0) {
      const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(errMessage);
    }
    return chunks.join("");
  };
});

// node_modules/chalk/source/index.js
var require_source = __commonJS((exports, module) => {
  "use strict";
  var ansiStyles = require_ansi_styles();
  var {stdout: stdoutColor, stderr: stderrColor} = require_supports_color();
  var {
    stringReplaceAll,
    stringEncaseCRLFWithFirstIndex
  } = require_util();
  var {isArray} = Array;
  var levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ];
  var styles = Object.create(null);
  var applyOptions = (object, options = {}) => {
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
      throw new Error("The `level` option should be an integer from 0 to 3");
    }
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === void 0 ? colorLevel : options.level;
  };
  var ChalkClass = class {
    constructor(options) {
      return chalkFactory(options);
    }
  };
  var chalkFactory = (options) => {
    const chalk3 = {};
    applyOptions(chalk3, options);
    chalk3.template = (...arguments_) => chalkTag(chalk3.template, ...arguments_);
    Object.setPrototypeOf(chalk3, Chalk.prototype);
    Object.setPrototypeOf(chalk3.template, chalk3);
    chalk3.template.constructor = () => {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
    };
    chalk3.template.Instance = ChalkClass;
    return chalk3.template;
  };
  function Chalk(options) {
    return chalkFactory(options);
  }
  for (const [styleName, style] of Object.entries(ansiStyles)) {
    styles[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
        Object.defineProperty(this, styleName, {value: builder});
        return builder;
      }
    };
  }
  styles.visible = {
    get() {
      const builder = createBuilder(this, this._styler, true);
      Object.defineProperty(this, "visible", {value: builder});
      return builder;
    }
  };
  var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (const model of usedModels) {
    styles[model] = {
      get() {
        const {level} = this;
        return function(...arguments_) {
          const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
          return createBuilder(this, styler, this._isEmpty);
        };
      }
    };
  }
  for (const model of usedModels) {
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
      get() {
        const {level} = this;
        return function(...arguments_) {
          const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
          return createBuilder(this, styler, this._isEmpty);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {
  }, __assign(__assign({}, styles), {
    level: {
      enumerable: true,
      get() {
        return this._generator.level;
      },
      set(level) {
        this._generator.level = level;
      }
    }
  }));
  var createStyler = (open, close, parent) => {
    let openAll;
    let closeAll;
    if (parent === void 0) {
      openAll = open;
      closeAll = close;
    } else {
      openAll = parent.openAll + open;
      closeAll = close + parent.closeAll;
    }
    return {
      open,
      close,
      openAll,
      closeAll,
      parent
    };
  };
  var createBuilder = (self2, _styler, _isEmpty) => {
    const builder = (...arguments_) => {
      if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
        return applyStyle(builder, chalkTag(builder, ...arguments_));
      }
      return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
    };
    Object.setPrototypeOf(builder, proto);
    builder._generator = self2;
    builder._styler = _styler;
    builder._isEmpty = _isEmpty;
    return builder;
  };
  var applyStyle = (self2, string) => {
    if (self2.level <= 0 || !string) {
      return self2._isEmpty ? "" : string;
    }
    let styler = self2._styler;
    if (styler === void 0) {
      return string;
    }
    const {openAll, closeAll} = styler;
    if (string.indexOf("") !== -1) {
      while (styler !== void 0) {
        string = stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
      }
    }
    const lfIndex = string.indexOf("\n");
    if (lfIndex !== -1) {
      string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    }
    return openAll + string + closeAll;
  };
  var template;
  var chalkTag = (chalk3, ...strings) => {
    const [firstString] = strings;
    if (!isArray(firstString) || !isArray(firstString.raw)) {
      return strings.join(" ");
    }
    const arguments_ = strings.slice(1);
    const parts = [firstString.raw[0]];
    for (let i = 1; i < firstString.length; i++) {
      parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"), String(firstString.raw[i]));
    }
    if (template === void 0) {
      template = require_templates();
    }
    return template(chalk3, parts.join(""));
  };
  Object.defineProperties(Chalk.prototype, styles);
  var chalk2 = Chalk();
  chalk2.supportsColor = stdoutColor;
  chalk2.stderr = Chalk({level: stderrColor ? stderrColor.level : 0});
  chalk2.stderr.supportsColor = stderrColor;
  module.exports = chalk2;
});

// node_modules/token-stream/index.js
var require_token_stream = __commonJS((exports, module) => {
  "use strict";
  module.exports = TokenStream;
  function TokenStream(tokens) {
    if (!Array.isArray(tokens)) {
      throw new TypeError("tokens must be passed to TokenStream as an array.");
    }
    this._tokens = tokens;
  }
  TokenStream.prototype.lookahead = function(index) {
    if (this._tokens.length <= index) {
      throw new Error("Cannot read past the end of a stream");
    }
    return this._tokens[index];
  };
  TokenStream.prototype.peek = function() {
    if (this._tokens.length === 0) {
      throw new Error("Cannot read past the end of a stream");
    }
    return this._tokens[0];
  };
  TokenStream.prototype.advance = function() {
    if (this._tokens.length === 0) {
      throw new Error("Cannot read past the end of a stream");
    }
    return this._tokens.shift();
  };
  TokenStream.prototype.defer = function(token) {
    this._tokens.unshift(token);
  };
});

// node_modules/pug-error/index.js
var require_pug_error = __commonJS((exports, module) => {
  "use strict";
  module.exports = makeError;
  function makeError(code, message, options) {
    var line = options.line;
    var column = options.column;
    var filename = options.filename;
    var src = options.src;
    var fullMessage;
    var location = line + (column ? ":" + column : "");
    if (src && line >= 1 && line <= src.split("\n").length) {
      var lines = src.split("\n");
      var start = Math.max(line - 3, 0);
      var end = Math.min(lines.length, line + 3);
      var context = lines.slice(start, end).map(function(text, i) {
        var curr = i + start + 1;
        var preamble = (curr == line ? "  > " : "    ") + curr + "| ";
        var out = preamble + text;
        if (curr === line && column > 0) {
          out += "\n";
          out += Array(preamble.length + column).join("-") + "^";
        }
        return out;
      }).join("\n");
      fullMessage = (filename || "Pug") + ":" + location + "\n" + context + "\n\n" + message;
    } else {
      fullMessage = (filename || "Pug") + ":" + location + "\n\n" + message;
    }
    var err = new Error(fullMessage);
    err.code = "PUG:" + code;
    err.msg = message;
    err.line = line;
    err.column = column;
    err.filename = filename;
    err.src = src;
    err.toJSON = function() {
      return {
        code: this.code,
        msg: this.msg,
        line: this.line,
        column: this.column,
        filename: this.filename
      };
    };
    return err;
  }
});

// node_modules/pug-parser/lib/inline-tags.js
var require_inline_tags = __commonJS((exports, module) => {
  "use strict";
  module.exports = [
    "a",
    "abbr",
    "acronym",
    "b",
    "br",
    "code",
    "em",
    "font",
    "i",
    "img",
    "ins",
    "kbd",
    "map",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup"
  ];
});

// node_modules/pug-parser/index.js
var require_pug_parser = __commonJS((exports, module) => {
  "use strict";
  var assert = require("assert");
  var TokenStream = require_token_stream();
  var error = require_pug_error();
  var inlineTags = require_inline_tags();
  module.exports = parse2;
  module.exports.Parser = Parser;
  function parse2(tokens, options) {
    var parser = new Parser(tokens, options);
    var ast = parser.parse();
    return JSON.parse(JSON.stringify(ast));
  }
  function Parser(tokens, options) {
    options = options || {};
    if (!Array.isArray(tokens)) {
      throw new Error('Expected tokens to be an Array but got "' + typeof tokens + '"');
    }
    if (typeof options !== "object") {
      throw new Error('Expected "options" to be an object but got "' + typeof options + '"');
    }
    this.tokens = new TokenStream(tokens);
    this.filename = options.filename;
    this.src = options.src;
    this.inMixin = 0;
    this.plugins = options.plugins || [];
  }
  Parser.prototype = {
    constructor: Parser,
    error: function(code, message, token) {
      var err = error(code, message, {
        line: token.loc.start.line,
        column: token.loc.start.column,
        filename: this.filename,
        src: this.src
      });
      throw err;
    },
    advance: function() {
      return this.tokens.advance();
    },
    peek: function() {
      return this.tokens.peek();
    },
    lookahead: function(n) {
      return this.tokens.lookahead(n);
    },
    parse: function() {
      var block = this.emptyBlock(0);
      while (this.peek().type != "eos") {
        if (this.peek().type == "newline") {
          this.advance();
        } else if (this.peek().type == "text-html") {
          block.nodes = block.nodes.concat(this.parseTextHtml());
        } else {
          var expr = this.parseExpr();
          if (expr) {
            if (expr.type === "Block") {
              block.nodes = block.nodes.concat(expr.nodes);
            } else {
              block.nodes.push(expr);
            }
          }
        }
      }
      return block;
    },
    expect: function(type) {
      if (this.peek().type === type) {
        return this.advance();
      } else {
        this.error("INVALID_TOKEN", 'expected "' + type + '", but got "' + this.peek().type + '"', this.peek());
      }
    },
    accept: function(type) {
      if (this.peek().type === type) {
        return this.advance();
      }
    },
    initBlock: function(line, nodes) {
      if ((line | 0) !== line)
        throw new Error("`line` is not an integer");
      if (!Array.isArray(nodes))
        throw new Error("`nodes` is not an array");
      return {
        type: "Block",
        nodes,
        line,
        filename: this.filename
      };
    },
    emptyBlock: function(line) {
      return this.initBlock(line, []);
    },
    runPlugin: function(context, tok) {
      var rest = [this];
      for (var i = 2; i < arguments.length; i++) {
        rest.push(arguments[i]);
      }
      var pluginContext;
      for (var i = 0; i < this.plugins.length; i++) {
        var plugin = this.plugins[i];
        if (plugin[context] && plugin[context][tok.type]) {
          if (pluginContext)
            throw new Error("Multiple plugin handlers found for context " + JSON.stringify(context) + ", token type " + JSON.stringify(tok.type));
          pluginContext = plugin[context];
        }
      }
      if (pluginContext)
        return pluginContext[tok.type].apply(pluginContext, rest);
    },
    parseExpr: function() {
      switch (this.peek().type) {
        case "tag":
          return this.parseTag();
        case "mixin":
          return this.parseMixin();
        case "block":
          return this.parseBlock();
        case "mixin-block":
          return this.parseMixinBlock();
        case "case":
          return this.parseCase();
        case "extends":
          return this.parseExtends();
        case "include":
          return this.parseInclude();
        case "doctype":
          return this.parseDoctype();
        case "filter":
          return this.parseFilter();
        case "comment":
          return this.parseComment();
        case "text":
        case "interpolated-code":
        case "start-pug-interpolation":
          return this.parseText({block: true});
        case "text-html":
          return this.initBlock(this.peek().loc.start.line, this.parseTextHtml());
        case "dot":
          return this.parseDot();
        case "each":
          return this.parseEach();
        case "eachOf":
          return this.parseEachOf();
        case "code":
          return this.parseCode();
        case "blockcode":
          return this.parseBlockCode();
        case "if":
          return this.parseConditional();
        case "while":
          return this.parseWhile();
        case "call":
          return this.parseCall();
        case "interpolation":
          return this.parseInterpolation();
        case "yield":
          return this.parseYield();
        case "id":
        case "class":
          if (!this.peek().loc.start)
            debugger;
          this.tokens.defer({
            type: "tag",
            val: "div",
            loc: this.peek().loc,
            filename: this.filename
          });
          return this.parseExpr();
        default:
          var pluginResult = this.runPlugin("expressionTokens", this.peek());
          if (pluginResult)
            return pluginResult;
          this.error("INVALID_TOKEN", 'unexpected token "' + this.peek().type + '"', this.peek());
      }
    },
    parseDot: function() {
      this.advance();
      return this.parseTextBlock();
    },
    parseText: function(options) {
      var tags = [];
      var lineno = this.peek().loc.start.line;
      var nextTok = this.peek();
      loop:
        while (true) {
          switch (nextTok.type) {
            case "text":
              var tok = this.advance();
              tags.push({
                type: "Text",
                val: tok.val,
                line: tok.loc.start.line,
                column: tok.loc.start.column,
                filename: this.filename
              });
              break;
            case "interpolated-code":
              var tok = this.advance();
              tags.push({
                type: "Code",
                val: tok.val,
                buffer: tok.buffer,
                mustEscape: tok.mustEscape !== false,
                isInline: true,
                line: tok.loc.start.line,
                column: tok.loc.start.column,
                filename: this.filename
              });
              break;
            case "newline":
              if (!options || !options.block)
                break loop;
              var tok = this.advance();
              var nextType = this.peek().type;
              if (nextType === "text" || nextType === "interpolated-code") {
                tags.push({
                  type: "Text",
                  val: "\n",
                  line: tok.loc.start.line,
                  column: tok.loc.start.column,
                  filename: this.filename
                });
              }
              break;
            case "start-pug-interpolation":
              this.advance();
              tags.push(this.parseExpr());
              this.expect("end-pug-interpolation");
              break;
            default:
              var pluginResult = this.runPlugin("textTokens", nextTok, tags);
              if (pluginResult)
                break;
              break loop;
          }
          nextTok = this.peek();
        }
      if (tags.length === 1)
        return tags[0];
      else
        return this.initBlock(lineno, tags);
    },
    parseTextHtml: function() {
      var nodes = [];
      var currentNode = null;
      loop:
        while (true) {
          switch (this.peek().type) {
            case "text-html":
              var text = this.advance();
              if (!currentNode) {
                currentNode = {
                  type: "Text",
                  val: text.val,
                  filename: this.filename,
                  line: text.loc.start.line,
                  column: text.loc.start.column,
                  isHtml: true
                };
                nodes.push(currentNode);
              } else {
                currentNode.val += "\n" + text.val;
              }
              break;
            case "indent":
              var block = this.block();
              block.nodes.forEach(function(node) {
                if (node.isHtml) {
                  if (!currentNode) {
                    currentNode = node;
                    nodes.push(currentNode);
                  } else {
                    currentNode.val += "\n" + node.val;
                  }
                } else {
                  currentNode = null;
                  nodes.push(node);
                }
              });
              break;
            case "code":
              currentNode = null;
              nodes.push(this.parseCode(true));
              break;
            case "newline":
              this.advance();
              break;
            default:
              break loop;
          }
        }
      return nodes;
    },
    parseBlockExpansion: function() {
      var tok = this.accept(":");
      if (tok) {
        var expr = this.parseExpr();
        return expr.type === "Block" ? expr : this.initBlock(tok.loc.start.line, [expr]);
      } else {
        return this.block();
      }
    },
    parseCase: function() {
      var tok = this.expect("case");
      var node = {
        type: "Case",
        expr: tok.val,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      var block = this.emptyBlock(tok.loc.start.line + 1);
      this.expect("indent");
      while (this.peek().type != "outdent") {
        switch (this.peek().type) {
          case "comment":
          case "newline":
            this.advance();
            break;
          case "when":
            block.nodes.push(this.parseWhen());
            break;
          case "default":
            block.nodes.push(this.parseDefault());
            break;
          default:
            var pluginResult = this.runPlugin("caseTokens", this.peek(), block);
            if (pluginResult)
              break;
            this.error("INVALID_TOKEN", 'Unexpected token "' + this.peek().type + '", expected "when", "default" or "newline"', this.peek());
        }
      }
      this.expect("outdent");
      node.block = block;
      return node;
    },
    parseWhen: function() {
      var tok = this.expect("when");
      if (this.peek().type !== "newline") {
        return {
          type: "When",
          expr: tok.val,
          block: this.parseBlockExpansion(),
          debug: false,
          line: tok.loc.start.line,
          column: tok.loc.start.column,
          filename: this.filename
        };
      } else {
        return {
          type: "When",
          expr: tok.val,
          debug: false,
          line: tok.loc.start.line,
          column: tok.loc.start.column,
          filename: this.filename
        };
      }
    },
    parseDefault: function() {
      var tok = this.expect("default");
      return {
        type: "When",
        expr: "default",
        block: this.parseBlockExpansion(),
        debug: false,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
    },
    parseCode: function(noBlock) {
      var tok = this.expect("code");
      assert(typeof tok.mustEscape === "boolean", "Please update to the newest version of pug-lexer.");
      var node = {
        type: "Code",
        val: tok.val,
        buffer: tok.buffer,
        mustEscape: tok.mustEscape !== false,
        isInline: !!noBlock,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      if (node.val.match(/^ *else/))
        node.debug = false;
      if (noBlock)
        return node;
      var block;
      block = this.peek().type == "indent";
      if (block) {
        if (tok.buffer) {
          this.error("BLOCK_IN_BUFFERED_CODE", "Buffered code cannot have a block attached to it", this.peek());
        }
        node.block = this.block();
      }
      return node;
    },
    parseConditional: function() {
      var tok = this.expect("if");
      var node = {
        type: "Conditional",
        test: tok.val,
        consequent: this.emptyBlock(tok.loc.start.line),
        alternate: null,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      if (this.peek().type == "indent") {
        node.consequent = this.block();
      }
      var currentNode = node;
      while (true) {
        if (this.peek().type === "newline") {
          this.expect("newline");
        } else if (this.peek().type === "else-if") {
          tok = this.expect("else-if");
          currentNode = currentNode.alternate = {
            type: "Conditional",
            test: tok.val,
            consequent: this.emptyBlock(tok.loc.start.line),
            alternate: null,
            line: tok.loc.start.line,
            column: tok.loc.start.column,
            filename: this.filename
          };
          if (this.peek().type == "indent") {
            currentNode.consequent = this.block();
          }
        } else if (this.peek().type === "else") {
          this.expect("else");
          if (this.peek().type === "indent") {
            currentNode.alternate = this.block();
          }
          break;
        } else {
          break;
        }
      }
      return node;
    },
    parseWhile: function() {
      var tok = this.expect("while");
      var node = {
        type: "While",
        test: tok.val,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      if (this.peek().type == "indent") {
        node.block = this.block();
      } else {
        node.block = this.emptyBlock(tok.loc.start.line);
      }
      return node;
    },
    parseBlockCode: function() {
      var tok = this.expect("blockcode");
      var line = tok.loc.start.line;
      var column = tok.loc.start.column;
      var body = this.peek();
      var text = "";
      if (body.type === "start-pipeless-text") {
        this.advance();
        while (this.peek().type !== "end-pipeless-text") {
          tok = this.advance();
          switch (tok.type) {
            case "text":
              text += tok.val;
              break;
            case "newline":
              text += "\n";
              break;
            default:
              var pluginResult = this.runPlugin("blockCodeTokens", tok, tok);
              if (pluginResult) {
                text += pluginResult;
                break;
              }
              this.error("INVALID_TOKEN", "Unexpected token type: " + tok.type, tok);
          }
        }
        this.advance();
      }
      return {
        type: "Code",
        val: text,
        buffer: false,
        mustEscape: false,
        isInline: false,
        line,
        column,
        filename: this.filename
      };
    },
    parseComment: function() {
      var tok = this.expect("comment");
      var block;
      if (block = this.parseTextBlock()) {
        return {
          type: "BlockComment",
          val: tok.val,
          block,
          buffer: tok.buffer,
          line: tok.loc.start.line,
          column: tok.loc.start.column,
          filename: this.filename
        };
      } else {
        return {
          type: "Comment",
          val: tok.val,
          buffer: tok.buffer,
          line: tok.loc.start.line,
          column: tok.loc.start.column,
          filename: this.filename
        };
      }
    },
    parseDoctype: function() {
      var tok = this.expect("doctype");
      return {
        type: "Doctype",
        val: tok.val,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
    },
    parseIncludeFilter: function() {
      var tok = this.expect("filter");
      var attrs = [];
      if (this.peek().type === "start-attributes") {
        attrs = this.attrs();
      }
      return {
        type: "IncludeFilter",
        name: tok.val,
        attrs,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
    },
    parseFilter: function() {
      var tok = this.expect("filter");
      var block, attrs = [];
      if (this.peek().type === "start-attributes") {
        attrs = this.attrs();
      }
      if (this.peek().type === "text") {
        var textToken = this.advance();
        block = this.initBlock(textToken.loc.start.line, [
          {
            type: "Text",
            val: textToken.val,
            line: textToken.loc.start.line,
            column: textToken.loc.start.column,
            filename: this.filename
          }
        ]);
      } else if (this.peek().type === "filter") {
        block = this.initBlock(tok.loc.start.line, [this.parseFilter()]);
      } else {
        block = this.parseTextBlock() || this.emptyBlock(tok.loc.start.line);
      }
      return {
        type: "Filter",
        name: tok.val,
        block,
        attrs,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
    },
    parseEach: function() {
      var tok = this.expect("each");
      var node = {
        type: "Each",
        obj: tok.code,
        val: tok.val,
        key: tok.key,
        block: this.block(),
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      if (this.peek().type == "else") {
        this.advance();
        node.alternate = this.block();
      }
      return node;
    },
    parseEachOf: function() {
      var tok = this.expect("eachOf");
      var node = {
        type: "EachOf",
        obj: tok.code,
        val: tok.val,
        block: this.block(),
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      return node;
    },
    parseExtends: function() {
      var tok = this.expect("extends");
      var path = this.expect("path");
      return {
        type: "Extends",
        file: {
          type: "FileReference",
          path: path.val.trim(),
          line: path.loc.start.line,
          column: path.loc.start.column,
          filename: this.filename
        },
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
    },
    parseBlock: function() {
      var tok = this.expect("block");
      var node = this.peek().type == "indent" ? this.block() : this.emptyBlock(tok.loc.start.line);
      node.type = "NamedBlock";
      node.name = tok.val.trim();
      node.mode = tok.mode;
      node.line = tok.loc.start.line;
      node.column = tok.loc.start.column;
      return node;
    },
    parseMixinBlock: function() {
      var tok = this.expect("mixin-block");
      if (!this.inMixin) {
        this.error("BLOCK_OUTISDE_MIXIN", "Anonymous blocks are not allowed unless they are part of a mixin.", tok);
      }
      return {
        type: "MixinBlock",
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
    },
    parseYield: function() {
      var tok = this.expect("yield");
      return {
        type: "YieldBlock",
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
    },
    parseInclude: function() {
      var tok = this.expect("include");
      var node = {
        type: "Include",
        file: {
          type: "FileReference",
          filename: this.filename
        },
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      var filters = [];
      while (this.peek().type === "filter") {
        filters.push(this.parseIncludeFilter());
      }
      var path = this.expect("path");
      node.file.path = path.val.trim();
      node.file.line = path.loc.start.line;
      node.file.column = path.loc.start.column;
      if ((/\.jade$/.test(node.file.path) || /\.pug$/.test(node.file.path)) && !filters.length) {
        node.block = this.peek().type == "indent" ? this.block() : this.emptyBlock(tok.loc.start.line);
        if (/\.jade$/.test(node.file.path)) {
          console.warn(this.filename + ", line " + tok.loc.start.line + ':\nThe .jade extension is deprecated, use .pug for "' + node.file.path + '".');
        }
      } else {
        node.type = "RawInclude";
        node.filters = filters;
        if (this.peek().type === "indent") {
          this.error("RAW_INCLUDE_BLOCK", "Raw inclusion cannot contain a block", this.peek());
        }
      }
      return node;
    },
    parseCall: function() {
      var tok = this.expect("call");
      var name = tok.val;
      var args = tok.args;
      var mixin = {
        type: "Mixin",
        name,
        args,
        block: this.emptyBlock(tok.loc.start.line),
        call: true,
        attrs: [],
        attributeBlocks: [],
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      this.tag(mixin);
      if (mixin.code) {
        mixin.block.nodes.push(mixin.code);
        delete mixin.code;
      }
      if (mixin.block.nodes.length === 0)
        mixin.block = null;
      return mixin;
    },
    parseMixin: function() {
      var tok = this.expect("mixin");
      var name = tok.val;
      var args = tok.args;
      if (this.peek().type == "indent") {
        this.inMixin++;
        var mixin = {
          type: "Mixin",
          name,
          args,
          block: this.block(),
          call: false,
          line: tok.loc.start.line,
          column: tok.loc.start.column,
          filename: this.filename
        };
        this.inMixin--;
        return mixin;
      } else {
        this.error("MIXIN_WITHOUT_BODY", "Mixin " + name + " declared without body", tok);
      }
    },
    parseTextBlock: function() {
      var tok = this.accept("start-pipeless-text");
      if (!tok)
        return;
      var block = this.emptyBlock(tok.loc.start.line);
      while (this.peek().type !== "end-pipeless-text") {
        var tok = this.advance();
        switch (tok.type) {
          case "text":
            block.nodes.push({
              type: "Text",
              val: tok.val,
              line: tok.loc.start.line,
              column: tok.loc.start.column,
              filename: this.filename
            });
            break;
          case "newline":
            block.nodes.push({
              type: "Text",
              val: "\n",
              line: tok.loc.start.line,
              column: tok.loc.start.column,
              filename: this.filename
            });
            break;
          case "start-pug-interpolation":
            block.nodes.push(this.parseExpr());
            this.expect("end-pug-interpolation");
            break;
          case "interpolated-code":
            block.nodes.push({
              type: "Code",
              val: tok.val,
              buffer: tok.buffer,
              mustEscape: tok.mustEscape !== false,
              isInline: true,
              line: tok.loc.start.line,
              column: tok.loc.start.column,
              filename: this.filename
            });
            break;
          default:
            var pluginResult = this.runPlugin("textBlockTokens", tok, block, tok);
            if (pluginResult)
              break;
            this.error("INVALID_TOKEN", "Unexpected token type: " + tok.type, tok);
        }
      }
      this.advance();
      return block;
    },
    block: function() {
      var tok = this.expect("indent");
      var block = this.emptyBlock(tok.loc.start.line);
      while (this.peek().type != "outdent") {
        if (this.peek().type == "newline") {
          this.advance();
        } else if (this.peek().type == "text-html") {
          block.nodes = block.nodes.concat(this.parseTextHtml());
        } else {
          var expr = this.parseExpr();
          if (expr.type === "Block") {
            block.nodes = block.nodes.concat(expr.nodes);
          } else {
            block.nodes.push(expr);
          }
        }
      }
      this.expect("outdent");
      return block;
    },
    parseInterpolation: function() {
      var tok = this.advance();
      var tag = {
        type: "InterpolatedTag",
        expr: tok.val,
        selfClosing: false,
        block: this.emptyBlock(tok.loc.start.line),
        attrs: [],
        attributeBlocks: [],
        isInline: false,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      return this.tag(tag, {selfClosingAllowed: true});
    },
    parseTag: function() {
      var tok = this.advance();
      var tag = {
        type: "Tag",
        name: tok.val,
        selfClosing: false,
        block: this.emptyBlock(tok.loc.start.line),
        attrs: [],
        attributeBlocks: [],
        isInline: inlineTags.indexOf(tok.val) !== -1,
        line: tok.loc.start.line,
        column: tok.loc.start.column,
        filename: this.filename
      };
      return this.tag(tag, {selfClosingAllowed: true});
    },
    tag: function(tag, options) {
      var seenAttrs = false;
      var attributeNames = [];
      var selfClosingAllowed = options && options.selfClosingAllowed;
      out:
        while (true) {
          switch (this.peek().type) {
            case "id":
            case "class":
              var tok = this.advance();
              if (tok.type === "id") {
                if (attributeNames.indexOf("id") !== -1) {
                  this.error("DUPLICATE_ID", 'Duplicate attribute "id" is not allowed.', tok);
                }
                attributeNames.push("id");
              }
              tag.attrs.push({
                name: tok.type,
                val: "'" + tok.val + "'",
                line: tok.loc.start.line,
                column: tok.loc.start.column,
                filename: this.filename,
                mustEscape: false
              });
              continue;
            case "start-attributes":
              if (seenAttrs) {
                console.warn(this.filename + ", line " + this.peek().loc.start.line + ":\nYou should not have pug tags with multiple attributes.");
              }
              seenAttrs = true;
              tag.attrs = tag.attrs.concat(this.attrs(attributeNames));
              continue;
            case "&attributes":
              var tok = this.advance();
              tag.attributeBlocks.push({
                type: "AttributeBlock",
                val: tok.val,
                line: tok.loc.start.line,
                column: tok.loc.start.column,
                filename: this.filename
              });
              break;
            default:
              var pluginResult = this.runPlugin("tagAttributeTokens", this.peek(), tag, attributeNames);
              if (pluginResult)
                break;
              break out;
          }
        }
      if (this.peek().type == "dot") {
        tag.textOnly = true;
        this.advance();
      }
      switch (this.peek().type) {
        case "text":
        case "interpolated-code":
          var text = this.parseText();
          if (text.type === "Block") {
            tag.block.nodes.push.apply(tag.block.nodes, text.nodes);
          } else {
            tag.block.nodes.push(text);
          }
          break;
        case "code":
          tag.block.nodes.push(this.parseCode(true));
          break;
        case ":":
          this.advance();
          var expr = this.parseExpr();
          tag.block = expr.type === "Block" ? expr : this.initBlock(tag.line, [expr]);
          break;
        case "newline":
        case "indent":
        case "outdent":
        case "eos":
        case "start-pipeless-text":
        case "end-pug-interpolation":
          break;
        case "slash":
          if (selfClosingAllowed) {
            this.advance();
            tag.selfClosing = true;
            break;
          }
        default:
          var pluginResult = this.runPlugin("tagTokens", this.peek(), tag, options);
          if (pluginResult)
            break;
          this.error("INVALID_TOKEN", "Unexpected token `" + this.peek().type + "` expected `text`, `interpolated-code`, `code`, `:`" + (selfClosingAllowed ? ", `slash`" : "") + ", `newline` or `eos`", this.peek());
      }
      while (this.peek().type == "newline")
        this.advance();
      if (tag.textOnly) {
        tag.block = this.parseTextBlock() || this.emptyBlock(tag.line);
      } else if (this.peek().type == "indent") {
        var block = this.block();
        for (var i = 0, len = block.nodes.length; i < len; ++i) {
          tag.block.nodes.push(block.nodes[i]);
        }
      }
      return tag;
    },
    attrs: function(attributeNames) {
      this.expect("start-attributes");
      var attrs = [];
      var tok = this.advance();
      while (tok.type === "attribute") {
        if (tok.name !== "class" && attributeNames) {
          if (attributeNames.indexOf(tok.name) !== -1) {
            this.error("DUPLICATE_ATTRIBUTE", 'Duplicate attribute "' + tok.name + '" is not allowed.', tok);
          }
          attributeNames.push(tok.name);
        }
        attrs.push({
          name: tok.name,
          val: tok.val,
          line: tok.loc.start.line,
          column: tok.loc.start.column,
          filename: this.filename,
          mustEscape: tok.mustEscape !== false
        });
        tok = this.advance();
      }
      this.tokens.defer(tok);
      this.expect("end-attributes");
      return attrs;
    }
  };
});

// node_modules/is-expression/node_modules/acorn/dist/acorn.js
var require_acorn = __commonJS((exports, module) => {
  (function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.acorn = {}));
  })(exports, function(exports2) {
    "use strict";
    var reservedWords = {
      3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
      5: "class enum extends super const export import",
      6: "enum",
      strict: "implements interface let package private protected public static yield",
      strictBind: "eval arguments"
    };
    var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
    var keywords = {
      5: ecma5AndLessKeywords,
      "5module": ecma5AndLessKeywords + " export import",
      6: ecma5AndLessKeywords + " const class extends export import super"
    };
    var keywordRelationalOperator = /^in(stanceof)?$/;
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
    var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function isInAstralSet(code, set) {
      var pos = 65536;
      for (var i = 0; i < set.length; i += 2) {
        pos += set[i];
        if (pos > code) {
          return false;
        }
        pos += set[i + 1];
        if (pos >= code) {
          return true;
        }
      }
    }
    function isIdentifierStart(code, astral) {
      if (code < 65) {
        return code === 36;
      }
      if (code < 91) {
        return true;
      }
      if (code < 97) {
        return code === 95;
      }
      if (code < 123) {
        return true;
      }
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
      }
      if (astral === false) {
        return false;
      }
      return isInAstralSet(code, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code, astral) {
      if (code < 48) {
        return code === 36;
      }
      if (code < 58) {
        return true;
      }
      if (code < 65) {
        return false;
      }
      if (code < 91) {
        return true;
      }
      if (code < 97) {
        return code === 95;
      }
      if (code < 123) {
        return true;
      }
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
      }
      if (astral === false) {
        return false;
      }
      return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
    }
    var TokenType = function TokenType2(label, conf) {
      if (conf === void 0)
        conf = {};
      this.label = label;
      this.keyword = conf.keyword;
      this.beforeExpr = !!conf.beforeExpr;
      this.startsExpr = !!conf.startsExpr;
      this.isLoop = !!conf.isLoop;
      this.isAssign = !!conf.isAssign;
      this.prefix = !!conf.prefix;
      this.postfix = !!conf.postfix;
      this.binop = conf.binop || null;
      this.updateContext = null;
    };
    function binop(name, prec) {
      return new TokenType(name, {beforeExpr: true, binop: prec});
    }
    var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};
    var keywords$1 = {};
    function kw(name, options) {
      if (options === void 0)
        options = {};
      options.keyword = name;
      return keywords$1[name] = new TokenType(name, options);
    }
    var types = {
      num: new TokenType("num", startsExpr),
      regexp: new TokenType("regexp", startsExpr),
      string: new TokenType("string", startsExpr),
      name: new TokenType("name", startsExpr),
      eof: new TokenType("eof"),
      bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
      bracketR: new TokenType("]"),
      braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
      braceR: new TokenType("}"),
      parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
      parenR: new TokenType(")"),
      comma: new TokenType(",", beforeExpr),
      semi: new TokenType(";", beforeExpr),
      colon: new TokenType(":", beforeExpr),
      dot: new TokenType("."),
      question: new TokenType("?", beforeExpr),
      questionDot: new TokenType("?."),
      arrow: new TokenType("=>", beforeExpr),
      template: new TokenType("template"),
      invalidTemplate: new TokenType("invalidTemplate"),
      ellipsis: new TokenType("...", beforeExpr),
      backQuote: new TokenType("`", startsExpr),
      dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),
      eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
      assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
      incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
      prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
      logicalOR: binop("||", 1),
      logicalAND: binop("&&", 2),
      bitwiseOR: binop("|", 3),
      bitwiseXOR: binop("^", 4),
      bitwiseAND: binop("&", 5),
      equality: binop("==/!=/===/!==", 6),
      relational: binop("</>/<=/>=", 7),
      bitShift: binop("<</>>/>>>", 8),
      plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
      modulo: binop("%", 10),
      star: binop("*", 10),
      slash: binop("/", 10),
      starstar: new TokenType("**", {beforeExpr: true}),
      coalesce: binop("??", 1),
      _break: kw("break"),
      _case: kw("case", beforeExpr),
      _catch: kw("catch"),
      _continue: kw("continue"),
      _debugger: kw("debugger"),
      _default: kw("default", beforeExpr),
      _do: kw("do", {isLoop: true, beforeExpr: true}),
      _else: kw("else", beforeExpr),
      _finally: kw("finally"),
      _for: kw("for", {isLoop: true}),
      _function: kw("function", startsExpr),
      _if: kw("if"),
      _return: kw("return", beforeExpr),
      _switch: kw("switch"),
      _throw: kw("throw", beforeExpr),
      _try: kw("try"),
      _var: kw("var"),
      _const: kw("const"),
      _while: kw("while", {isLoop: true}),
      _with: kw("with"),
      _new: kw("new", {beforeExpr: true, startsExpr: true}),
      _this: kw("this", startsExpr),
      _super: kw("super", startsExpr),
      _class: kw("class", startsExpr),
      _extends: kw("extends", beforeExpr),
      _export: kw("export"),
      _import: kw("import", startsExpr),
      _null: kw("null", startsExpr),
      _true: kw("true", startsExpr),
      _false: kw("false", startsExpr),
      _in: kw("in", {beforeExpr: true, binop: 7}),
      _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
      _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
      _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
      _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
    };
    var lineBreak = /\r\n?|\n|\u2028|\u2029/;
    var lineBreakG = new RegExp(lineBreak.source, "g");
    function isNewLine(code, ecma2019String) {
      return code === 10 || code === 13 || !ecma2019String && (code === 8232 || code === 8233);
    }
    var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
    var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
    var ref = Object.prototype;
    var hasOwnProperty = ref.hasOwnProperty;
    var toString = ref.toString;
    function has(obj, propName) {
      return hasOwnProperty.call(obj, propName);
    }
    var isArray = Array.isArray || function(obj) {
      return toString.call(obj) === "[object Array]";
    };
    function wordsRegexp(words) {
      return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
    }
    var Position = function Position2(line, col) {
      this.line = line;
      this.column = col;
    };
    Position.prototype.offset = function offset(n) {
      return new Position(this.line, this.column + n);
    };
    var SourceLocation = function SourceLocation2(p, start, end) {
      this.start = start;
      this.end = end;
      if (p.sourceFile !== null) {
        this.source = p.sourceFile;
      }
    };
    function getLineInfo(input, offset) {
      for (var line = 1, cur = 0; ; ) {
        lineBreakG.lastIndex = cur;
        var match = lineBreakG.exec(input);
        if (match && match.index < offset) {
          ++line;
          cur = match.index + match[0].length;
        } else {
          return new Position(line, offset - cur);
        }
      }
    }
    var defaultOptions = {
      ecmaVersion: 10,
      sourceType: "script",
      onInsertedSemicolon: null,
      onTrailingComma: null,
      allowReserved: null,
      allowReturnOutsideFunction: false,
      allowImportExportEverywhere: false,
      allowAwaitOutsideFunction: false,
      allowHashBang: false,
      locations: false,
      onToken: null,
      onComment: null,
      ranges: false,
      program: null,
      sourceFile: null,
      directSourceFile: null,
      preserveParens: false
    };
    function getOptions(opts) {
      var options = {};
      for (var opt in defaultOptions) {
        options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt];
      }
      if (options.ecmaVersion >= 2015) {
        options.ecmaVersion -= 2009;
      }
      if (options.allowReserved == null) {
        options.allowReserved = options.ecmaVersion < 5;
      }
      if (isArray(options.onToken)) {
        var tokens = options.onToken;
        options.onToken = function(token) {
          return tokens.push(token);
        };
      }
      if (isArray(options.onComment)) {
        options.onComment = pushComment(options, options.onComment);
      }
      return options;
    }
    function pushComment(options, array) {
      return function(block, text, start, end, startLoc, endLoc) {
        var comment = {
          type: block ? "Block" : "Line",
          value: text,
          start,
          end
        };
        if (options.locations) {
          comment.loc = new SourceLocation(this, startLoc, endLoc);
        }
        if (options.ranges) {
          comment.range = [start, end];
        }
        array.push(comment);
      };
    }
    var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128;
    function functionFlags(async, generator) {
      return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
    }
    var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
    var Parser = function Parser2(options, input, startPos) {
      this.options = options = getOptions(options);
      this.sourceFile = options.sourceFile;
      this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
      var reserved = "";
      if (options.allowReserved !== true) {
        for (var v = options.ecmaVersion; ; v--) {
          if (reserved = reservedWords[v]) {
            break;
          }
        }
        if (options.sourceType === "module") {
          reserved += " await";
        }
      }
      this.reservedWords = wordsRegexp(reserved);
      var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
      this.reservedWordsStrict = wordsRegexp(reservedStrict);
      this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
      this.input = String(input);
      this.containsEsc = false;
      if (startPos) {
        this.pos = startPos;
        this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
        this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
      } else {
        this.pos = this.lineStart = 0;
        this.curLine = 1;
      }
      this.type = types.eof;
      this.value = null;
      this.start = this.end = this.pos;
      this.startLoc = this.endLoc = this.curPosition();
      this.lastTokEndLoc = this.lastTokStartLoc = null;
      this.lastTokStart = this.lastTokEnd = this.pos;
      this.context = this.initialContext();
      this.exprAllowed = true;
      this.inModule = options.sourceType === "module";
      this.strict = this.inModule || this.strictDirective(this.pos);
      this.potentialArrowAt = -1;
      this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
      this.labels = [];
      this.undefinedExports = {};
      if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
        this.skipLineComment(2);
      }
      this.scopeStack = [];
      this.enterScope(SCOPE_TOP);
      this.regexpState = null;
    };
    var prototypeAccessors = {inFunction: {configurable: true}, inGenerator: {configurable: true}, inAsync: {configurable: true}, allowSuper: {configurable: true}, allowDirectSuper: {configurable: true}, treatFunctionsAsVar: {configurable: true}};
    Parser.prototype.parse = function parse3() {
      var node = this.options.program || this.startNode();
      this.nextToken();
      return this.parseTopLevel(node);
    };
    prototypeAccessors.inFunction.get = function() {
      return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
    };
    prototypeAccessors.inGenerator.get = function() {
      return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
    };
    prototypeAccessors.inAsync.get = function() {
      return (this.currentVarScope().flags & SCOPE_ASYNC) > 0;
    };
    prototypeAccessors.allowSuper.get = function() {
      return (this.currentThisScope().flags & SCOPE_SUPER) > 0;
    };
    prototypeAccessors.allowDirectSuper.get = function() {
      return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
    };
    prototypeAccessors.treatFunctionsAsVar.get = function() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    };
    Parser.prototype.inNonArrowFunction = function inNonArrowFunction() {
      return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0;
    };
    Parser.extend = function extend() {
      var plugins = [], len = arguments.length;
      while (len--)
        plugins[len] = arguments[len];
      var cls = this;
      for (var i = 0; i < plugins.length; i++) {
        cls = plugins[i](cls);
      }
      return cls;
    };
    Parser.parse = function parse3(input, options) {
      return new this(options, input).parse();
    };
    Parser.parseExpressionAt = function parseExpressionAt2(input, pos, options) {
      var parser = new this(options, input, pos);
      parser.nextToken();
      return parser.parseExpression();
    };
    Parser.tokenizer = function tokenizer2(input, options) {
      return new this(options, input);
    };
    Object.defineProperties(Parser.prototype, prototypeAccessors);
    var pp = Parser.prototype;
    var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
    pp.strictDirective = function(start) {
      for (; ; ) {
        skipWhiteSpace.lastIndex = start;
        start += skipWhiteSpace.exec(this.input)[0].length;
        var match = literal.exec(this.input.slice(start));
        if (!match) {
          return false;
        }
        if ((match[1] || match[2]) === "use strict") {
          skipWhiteSpace.lastIndex = start + match[0].length;
          var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
          var next = this.input.charAt(end);
          return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
        }
        start += match[0].length;
        skipWhiteSpace.lastIndex = start;
        start += skipWhiteSpace.exec(this.input)[0].length;
        if (this.input[start] === ";") {
          start++;
        }
      }
    };
    pp.eat = function(type) {
      if (this.type === type) {
        this.next();
        return true;
      } else {
        return false;
      }
    };
    pp.isContextual = function(name) {
      return this.type === types.name && this.value === name && !this.containsEsc;
    };
    pp.eatContextual = function(name) {
      if (!this.isContextual(name)) {
        return false;
      }
      this.next();
      return true;
    };
    pp.expectContextual = function(name) {
      if (!this.eatContextual(name)) {
        this.unexpected();
      }
    };
    pp.canInsertSemicolon = function() {
      return this.type === types.eof || this.type === types.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
    };
    pp.insertSemicolon = function() {
      if (this.canInsertSemicolon()) {
        if (this.options.onInsertedSemicolon) {
          this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
        }
        return true;
      }
    };
    pp.semicolon = function() {
      if (!this.eat(types.semi) && !this.insertSemicolon()) {
        this.unexpected();
      }
    };
    pp.afterTrailingComma = function(tokType, notNext) {
      if (this.type === tokType) {
        if (this.options.onTrailingComma) {
          this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
        }
        if (!notNext) {
          this.next();
        }
        return true;
      }
    };
    pp.expect = function(type) {
      this.eat(type) || this.unexpected();
    };
    pp.unexpected = function(pos) {
      this.raise(pos != null ? pos : this.start, "Unexpected token");
    };
    function DestructuringErrors() {
      this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
    }
    pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
      if (!refDestructuringErrors) {
        return;
      }
      if (refDestructuringErrors.trailingComma > -1) {
        this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
      }
      var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
      if (parens > -1) {
        this.raiseRecoverable(parens, "Parenthesized pattern");
      }
    };
    pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
      if (!refDestructuringErrors) {
        return false;
      }
      var shorthandAssign = refDestructuringErrors.shorthandAssign;
      var doubleProto = refDestructuringErrors.doubleProto;
      if (!andThrow) {
        return shorthandAssign >= 0 || doubleProto >= 0;
      }
      if (shorthandAssign >= 0) {
        this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
      }
      if (doubleProto >= 0) {
        this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
      }
    };
    pp.checkYieldAwaitInDefaultParams = function() {
      if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
        this.raise(this.yieldPos, "Yield expression cannot be a default value");
      }
      if (this.awaitPos) {
        this.raise(this.awaitPos, "Await expression cannot be a default value");
      }
    };
    pp.isSimpleAssignTarget = function(expr) {
      if (expr.type === "ParenthesizedExpression") {
        return this.isSimpleAssignTarget(expr.expression);
      }
      return expr.type === "Identifier" || expr.type === "MemberExpression";
    };
    var pp$1 = Parser.prototype;
    pp$1.parseTopLevel = function(node) {
      var exports3 = {};
      if (!node.body) {
        node.body = [];
      }
      while (this.type !== types.eof) {
        var stmt = this.parseStatement(null, true, exports3);
        node.body.push(stmt);
      }
      if (this.inModule) {
        for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
          var name = list[i];
          this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
        }
      }
      this.adaptDirectivePrologue(node.body);
      this.next();
      node.sourceType = this.options.sourceType;
      return this.finishNode(node, "Program");
    };
    var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};
    pp$1.isLet = function(context) {
      if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
        return false;
      }
      skipWhiteSpace.lastIndex = this.pos;
      var skip = skipWhiteSpace.exec(this.input);
      var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
      if (nextCh === 91) {
        return true;
      }
      if (context) {
        return false;
      }
      if (nextCh === 123) {
        return true;
      }
      if (isIdentifierStart(nextCh, true)) {
        var pos = next + 1;
        while (isIdentifierChar(this.input.charCodeAt(pos), true)) {
          ++pos;
        }
        var ident = this.input.slice(next, pos);
        if (!keywordRelationalOperator.test(ident)) {
          return true;
        }
      }
      return false;
    };
    pp$1.isAsyncFunction = function() {
      if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
        return false;
      }
      skipWhiteSpace.lastIndex = this.pos;
      var skip = skipWhiteSpace.exec(this.input);
      var next = this.pos + skip[0].length;
      return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)));
    };
    pp$1.parseStatement = function(context, topLevel, exports3) {
      var starttype = this.type, node = this.startNode(), kind;
      if (this.isLet(context)) {
        starttype = types._var;
        kind = "let";
      }
      switch (starttype) {
        case types._break:
        case types._continue:
          return this.parseBreakContinueStatement(node, starttype.keyword);
        case types._debugger:
          return this.parseDebuggerStatement(node);
        case types._do:
          return this.parseDoStatement(node);
        case types._for:
          return this.parseForStatement(node);
        case types._function:
          if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
            this.unexpected();
          }
          return this.parseFunctionStatement(node, false, !context);
        case types._class:
          if (context) {
            this.unexpected();
          }
          return this.parseClass(node, true);
        case types._if:
          return this.parseIfStatement(node);
        case types._return:
          return this.parseReturnStatement(node);
        case types._switch:
          return this.parseSwitchStatement(node);
        case types._throw:
          return this.parseThrowStatement(node);
        case types._try:
          return this.parseTryStatement(node);
        case types._const:
        case types._var:
          kind = kind || this.value;
          if (context && kind !== "var") {
            this.unexpected();
          }
          return this.parseVarStatement(node, kind);
        case types._while:
          return this.parseWhileStatement(node);
        case types._with:
          return this.parseWithStatement(node);
        case types.braceL:
          return this.parseBlock(true, node);
        case types.semi:
          return this.parseEmptyStatement(node);
        case types._export:
        case types._import:
          if (this.options.ecmaVersion > 10 && starttype === types._import) {
            skipWhiteSpace.lastIndex = this.pos;
            var skip = skipWhiteSpace.exec(this.input);
            var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
            if (nextCh === 40 || nextCh === 46) {
              return this.parseExpressionStatement(node, this.parseExpression());
            }
          }
          if (!this.options.allowImportExportEverywhere) {
            if (!topLevel) {
              this.raise(this.start, "'import' and 'export' may only appear at the top level");
            }
            if (!this.inModule) {
              this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
            }
          }
          return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports3);
        default:
          if (this.isAsyncFunction()) {
            if (context) {
              this.unexpected();
            }
            this.next();
            return this.parseFunctionStatement(node, true, !context);
          }
          var maybeName = this.value, expr = this.parseExpression();
          if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
            return this.parseLabeledStatement(node, maybeName, expr, context);
          } else {
            return this.parseExpressionStatement(node, expr);
          }
      }
    };
    pp$1.parseBreakContinueStatement = function(node, keyword) {
      var isBreak = keyword === "break";
      this.next();
      if (this.eat(types.semi) || this.insertSemicolon()) {
        node.label = null;
      } else if (this.type !== types.name) {
        this.unexpected();
      } else {
        node.label = this.parseIdent();
        this.semicolon();
      }
      var i = 0;
      for (; i < this.labels.length; ++i) {
        var lab = this.labels[i];
        if (node.label == null || lab.name === node.label.name) {
          if (lab.kind != null && (isBreak || lab.kind === "loop")) {
            break;
          }
          if (node.label && isBreak) {
            break;
          }
        }
      }
      if (i === this.labels.length) {
        this.raise(node.start, "Unsyntactic " + keyword);
      }
      return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
    };
    pp$1.parseDebuggerStatement = function(node) {
      this.next();
      this.semicolon();
      return this.finishNode(node, "DebuggerStatement");
    };
    pp$1.parseDoStatement = function(node) {
      this.next();
      this.labels.push(loopLabel);
      node.body = this.parseStatement("do");
      this.labels.pop();
      this.expect(types._while);
      node.test = this.parseParenExpression();
      if (this.options.ecmaVersion >= 6) {
        this.eat(types.semi);
      } else {
        this.semicolon();
      }
      return this.finishNode(node, "DoWhileStatement");
    };
    pp$1.parseForStatement = function(node) {
      this.next();
      var awaitAt = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
      this.labels.push(loopLabel);
      this.enterScope(0);
      this.expect(types.parenL);
      if (this.type === types.semi) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, null);
      }
      var isLet = this.isLet();
      if (this.type === types._var || this.type === types._const || isLet) {
        var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
        this.next();
        this.parseVar(init$1, true, kind);
        this.finishNode(init$1, "VariableDeclaration");
        if ((this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
          if (this.options.ecmaVersion >= 9) {
            if (this.type === types._in) {
              if (awaitAt > -1) {
                this.unexpected(awaitAt);
              }
            } else {
              node.await = awaitAt > -1;
            }
          }
          return this.parseForIn(node, init$1);
        }
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init$1);
      }
      var refDestructuringErrors = new DestructuringErrors();
      var init = this.parseExpression(true, refDestructuringErrors);
      if (this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) {
        if (this.options.ecmaVersion >= 9) {
          if (this.type === types._in) {
            if (awaitAt > -1) {
              this.unexpected(awaitAt);
            }
          } else {
            node.await = awaitAt > -1;
          }
        }
        this.toAssignable(init, false, refDestructuringErrors);
        this.checkLVal(init);
        return this.parseForIn(node, init);
      } else {
        this.checkExpressionErrors(refDestructuringErrors, true);
      }
      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }
      return this.parseFor(node, init);
    };
    pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
      this.next();
      return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
    };
    pp$1.parseIfStatement = function(node) {
      this.next();
      node.test = this.parseParenExpression();
      node.consequent = this.parseStatement("if");
      node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
      return this.finishNode(node, "IfStatement");
    };
    pp$1.parseReturnStatement = function(node) {
      if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
        this.raise(this.start, "'return' outside of function");
      }
      this.next();
      if (this.eat(types.semi) || this.insertSemicolon()) {
        node.argument = null;
      } else {
        node.argument = this.parseExpression();
        this.semicolon();
      }
      return this.finishNode(node, "ReturnStatement");
    };
    pp$1.parseSwitchStatement = function(node) {
      this.next();
      node.discriminant = this.parseParenExpression();
      node.cases = [];
      this.expect(types.braceL);
      this.labels.push(switchLabel);
      this.enterScope(0);
      var cur;
      for (var sawDefault = false; this.type !== types.braceR; ) {
        if (this.type === types._case || this.type === types._default) {
          var isCase = this.type === types._case;
          if (cur) {
            this.finishNode(cur, "SwitchCase");
          }
          node.cases.push(cur = this.startNode());
          cur.consequent = [];
          this.next();
          if (isCase) {
            cur.test = this.parseExpression();
          } else {
            if (sawDefault) {
              this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
            }
            sawDefault = true;
            cur.test = null;
          }
          this.expect(types.colon);
        } else {
          if (!cur) {
            this.unexpected();
          }
          cur.consequent.push(this.parseStatement(null));
        }
      }
      this.exitScope();
      if (cur) {
        this.finishNode(cur, "SwitchCase");
      }
      this.next();
      this.labels.pop();
      return this.finishNode(node, "SwitchStatement");
    };
    pp$1.parseThrowStatement = function(node) {
      this.next();
      if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
        this.raise(this.lastTokEnd, "Illegal newline after throw");
      }
      node.argument = this.parseExpression();
      this.semicolon();
      return this.finishNode(node, "ThrowStatement");
    };
    var empty = [];
    pp$1.parseTryStatement = function(node) {
      this.next();
      node.block = this.parseBlock();
      node.handler = null;
      if (this.type === types._catch) {
        var clause = this.startNode();
        this.next();
        if (this.eat(types.parenL)) {
          clause.param = this.parseBindingAtom();
          var simple = clause.param.type === "Identifier";
          this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
          this.checkLVal(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
          this.expect(types.parenR);
        } else {
          if (this.options.ecmaVersion < 10) {
            this.unexpected();
          }
          clause.param = null;
          this.enterScope(0);
        }
        clause.body = this.parseBlock(false);
        this.exitScope();
        node.handler = this.finishNode(clause, "CatchClause");
      }
      node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
      if (!node.handler && !node.finalizer) {
        this.raise(node.start, "Missing catch or finally clause");
      }
      return this.finishNode(node, "TryStatement");
    };
    pp$1.parseVarStatement = function(node, kind) {
      this.next();
      this.parseVar(node, false, kind);
      this.semicolon();
      return this.finishNode(node, "VariableDeclaration");
    };
    pp$1.parseWhileStatement = function(node) {
      this.next();
      node.test = this.parseParenExpression();
      this.labels.push(loopLabel);
      node.body = this.parseStatement("while");
      this.labels.pop();
      return this.finishNode(node, "WhileStatement");
    };
    pp$1.parseWithStatement = function(node) {
      if (this.strict) {
        this.raise(this.start, "'with' in strict mode");
      }
      this.next();
      node.object = this.parseParenExpression();
      node.body = this.parseStatement("with");
      return this.finishNode(node, "WithStatement");
    };
    pp$1.parseEmptyStatement = function(node) {
      this.next();
      return this.finishNode(node, "EmptyStatement");
    };
    pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
      for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) {
        var label = list[i$1];
        if (label.name === maybeName) {
          this.raise(expr.start, "Label '" + maybeName + "' is already declared");
        }
      }
      var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
      for (var i = this.labels.length - 1; i >= 0; i--) {
        var label$1 = this.labels[i];
        if (label$1.statementStart === node.start) {
          label$1.statementStart = this.start;
          label$1.kind = kind;
        } else {
          break;
        }
      }
      this.labels.push({name: maybeName, kind, statementStart: this.start});
      node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
      this.labels.pop();
      node.label = expr;
      return this.finishNode(node, "LabeledStatement");
    };
    pp$1.parseExpressionStatement = function(node, expr) {
      node.expression = expr;
      this.semicolon();
      return this.finishNode(node, "ExpressionStatement");
    };
    pp$1.parseBlock = function(createNewLexicalScope, node, exitStrict) {
      if (createNewLexicalScope === void 0)
        createNewLexicalScope = true;
      if (node === void 0)
        node = this.startNode();
      node.body = [];
      this.expect(types.braceL);
      if (createNewLexicalScope) {
        this.enterScope(0);
      }
      while (this.type !== types.braceR) {
        var stmt = this.parseStatement(null);
        node.body.push(stmt);
      }
      if (exitStrict) {
        this.strict = false;
      }
      this.next();
      if (createNewLexicalScope) {
        this.exitScope();
      }
      return this.finishNode(node, "BlockStatement");
    };
    pp$1.parseFor = function(node, init) {
      node.init = init;
      this.expect(types.semi);
      node.test = this.type === types.semi ? null : this.parseExpression();
      this.expect(types.semi);
      node.update = this.type === types.parenR ? null : this.parseExpression();
      this.expect(types.parenR);
      node.body = this.parseStatement("for");
      this.exitScope();
      this.labels.pop();
      return this.finishNode(node, "ForStatement");
    };
    pp$1.parseForIn = function(node, init) {
      var isForIn = this.type === types._in;
      this.next();
      if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
        this.raise(init.start, (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
      } else if (init.type === "AssignmentPattern") {
        this.raise(init.start, "Invalid left-hand side in for-loop");
      }
      node.left = init;
      node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
      this.expect(types.parenR);
      node.body = this.parseStatement("for");
      this.exitScope();
      this.labels.pop();
      return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
    };
    pp$1.parseVar = function(node, isFor, kind) {
      node.declarations = [];
      node.kind = kind;
      for (; ; ) {
        var decl = this.startNode();
        this.parseVarId(decl, kind);
        if (this.eat(types.eq)) {
          decl.init = this.parseMaybeAssign(isFor);
        } else if (kind === "const" && !(this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
          this.unexpected();
        } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
          this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
        } else {
          decl.init = null;
        }
        node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
        if (!this.eat(types.comma)) {
          break;
        }
      }
      return node;
    };
    pp$1.parseVarId = function(decl, kind) {
      decl.id = this.parseBindingAtom();
      this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
    };
    var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
    pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
      this.initFunction(node);
      if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
        if (this.type === types.star && statement & FUNC_HANGING_STATEMENT) {
          this.unexpected();
        }
        node.generator = this.eat(types.star);
      }
      if (this.options.ecmaVersion >= 8) {
        node.async = !!isAsync;
      }
      if (statement & FUNC_STATEMENT) {
        node.id = statement & FUNC_NULLABLE_ID && this.type !== types.name ? null : this.parseIdent();
        if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
          this.checkLVal(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
        }
      }
      var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
      this.yieldPos = 0;
      this.awaitPos = 0;
      this.awaitIdentPos = 0;
      this.enterScope(functionFlags(node.async, node.generator));
      if (!(statement & FUNC_STATEMENT)) {
        node.id = this.type === types.name ? this.parseIdent() : null;
      }
      this.parseFunctionParams(node);
      this.parseFunctionBody(node, allowExpressionBody, false);
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
    };
    pp$1.parseFunctionParams = function(node) {
      this.expect(types.parenL);
      node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
      this.checkYieldAwaitInDefaultParams();
    };
    pp$1.parseClass = function(node, isStatement) {
      this.next();
      var oldStrict = this.strict;
      this.strict = true;
      this.parseClassId(node, isStatement);
      this.parseClassSuper(node);
      var classBody = this.startNode();
      var hadConstructor = false;
      classBody.body = [];
      this.expect(types.braceL);
      while (this.type !== types.braceR) {
        var element = this.parseClassElement(node.superClass !== null);
        if (element) {
          classBody.body.push(element);
          if (element.type === "MethodDefinition" && element.kind === "constructor") {
            if (hadConstructor) {
              this.raise(element.start, "Duplicate constructor in the same class");
            }
            hadConstructor = true;
          }
        }
      }
      this.strict = oldStrict;
      this.next();
      node.body = this.finishNode(classBody, "ClassBody");
      return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
    };
    pp$1.parseClassElement = function(constructorAllowsSuper) {
      var this$1 = this;
      if (this.eat(types.semi)) {
        return null;
      }
      var method = this.startNode();
      var tryContextual = function(k, noLineBreak) {
        if (noLineBreak === void 0)
          noLineBreak = false;
        var start = this$1.start, startLoc = this$1.startLoc;
        if (!this$1.eatContextual(k)) {
          return false;
        }
        if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) {
          return true;
        }
        if (method.key) {
          this$1.unexpected();
        }
        method.computed = false;
        method.key = this$1.startNodeAt(start, startLoc);
        method.key.name = k;
        this$1.finishNode(method.key, "Identifier");
        return false;
      };
      method.kind = "method";
      method.static = tryContextual("static");
      var isGenerator = this.eat(types.star);
      var isAsync = false;
      if (!isGenerator) {
        if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
          isAsync = true;
          isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
        } else if (tryContextual("get")) {
          method.kind = "get";
        } else if (tryContextual("set")) {
          method.kind = "set";
        }
      }
      if (!method.key) {
        this.parsePropertyName(method);
      }
      var key = method.key;
      var allowsDirectSuper = false;
      if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" || key.type === "Literal" && key.value === "constructor")) {
        if (method.kind !== "method") {
          this.raise(key.start, "Constructor can't have get/set modifier");
        }
        if (isGenerator) {
          this.raise(key.start, "Constructor can't be a generator");
        }
        if (isAsync) {
          this.raise(key.start, "Constructor can't be an async method");
        }
        method.kind = "constructor";
        allowsDirectSuper = constructorAllowsSuper;
      } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
        this.raise(key.start, "Classes may not have a static property named prototype");
      }
      this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
      if (method.kind === "get" && method.value.params.length !== 0) {
        this.raiseRecoverable(method.value.start, "getter should have no params");
      }
      if (method.kind === "set" && method.value.params.length !== 1) {
        this.raiseRecoverable(method.value.start, "setter should have exactly one param");
      }
      if (method.kind === "set" && method.value.params[0].type === "RestElement") {
        this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params");
      }
      return method;
    };
    pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
      method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
      return this.finishNode(method, "MethodDefinition");
    };
    pp$1.parseClassId = function(node, isStatement) {
      if (this.type === types.name) {
        node.id = this.parseIdent();
        if (isStatement) {
          this.checkLVal(node.id, BIND_LEXICAL, false);
        }
      } else {
        if (isStatement === true) {
          this.unexpected();
        }
        node.id = null;
      }
    };
    pp$1.parseClassSuper = function(node) {
      node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
    };
    pp$1.parseExport = function(node, exports3) {
      this.next();
      if (this.eat(types.star)) {
        if (this.options.ecmaVersion >= 11) {
          if (this.eatContextual("as")) {
            node.exported = this.parseIdent(true);
            this.checkExport(exports3, node.exported.name, this.lastTokStart);
          } else {
            node.exported = null;
          }
        }
        this.expectContextual("from");
        if (this.type !== types.string) {
          this.unexpected();
        }
        node.source = this.parseExprAtom();
        this.semicolon();
        return this.finishNode(node, "ExportAllDeclaration");
      }
      if (this.eat(types._default)) {
        this.checkExport(exports3, "default", this.lastTokStart);
        var isAsync;
        if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
          var fNode = this.startNode();
          this.next();
          if (isAsync) {
            this.next();
          }
          node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
        } else if (this.type === types._class) {
          var cNode = this.startNode();
          node.declaration = this.parseClass(cNode, "nullableID");
        } else {
          node.declaration = this.parseMaybeAssign();
          this.semicolon();
        }
        return this.finishNode(node, "ExportDefaultDeclaration");
      }
      if (this.shouldParseExportStatement()) {
        node.declaration = this.parseStatement(null);
        if (node.declaration.type === "VariableDeclaration") {
          this.checkVariableExport(exports3, node.declaration.declarations);
        } else {
          this.checkExport(exports3, node.declaration.id.name, node.declaration.id.start);
        }
        node.specifiers = [];
        node.source = null;
      } else {
        node.declaration = null;
        node.specifiers = this.parseExportSpecifiers(exports3);
        if (this.eatContextual("from")) {
          if (this.type !== types.string) {
            this.unexpected();
          }
          node.source = this.parseExprAtom();
        } else {
          for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
            var spec = list[i];
            this.checkUnreserved(spec.local);
            this.checkLocalExport(spec.local);
          }
          node.source = null;
        }
        this.semicolon();
      }
      return this.finishNode(node, "ExportNamedDeclaration");
    };
    pp$1.checkExport = function(exports3, name, pos) {
      if (!exports3) {
        return;
      }
      if (has(exports3, name)) {
        this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
      }
      exports3[name] = true;
    };
    pp$1.checkPatternExport = function(exports3, pat) {
      var type = pat.type;
      if (type === "Identifier") {
        this.checkExport(exports3, pat.name, pat.start);
      } else if (type === "ObjectPattern") {
        for (var i = 0, list = pat.properties; i < list.length; i += 1) {
          var prop = list[i];
          this.checkPatternExport(exports3, prop);
        }
      } else if (type === "ArrayPattern") {
        for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
          var elt = list$1[i$1];
          if (elt) {
            this.checkPatternExport(exports3, elt);
          }
        }
      } else if (type === "Property") {
        this.checkPatternExport(exports3, pat.value);
      } else if (type === "AssignmentPattern") {
        this.checkPatternExport(exports3, pat.left);
      } else if (type === "RestElement") {
        this.checkPatternExport(exports3, pat.argument);
      } else if (type === "ParenthesizedExpression") {
        this.checkPatternExport(exports3, pat.expression);
      }
    };
    pp$1.checkVariableExport = function(exports3, decls) {
      if (!exports3) {
        return;
      }
      for (var i = 0, list = decls; i < list.length; i += 1) {
        var decl = list[i];
        this.checkPatternExport(exports3, decl.id);
      }
    };
    pp$1.shouldParseExportStatement = function() {
      return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
    };
    pp$1.parseExportSpecifiers = function(exports3) {
      var nodes = [], first = true;
      this.expect(types.braceL);
      while (!this.eat(types.braceR)) {
        if (!first) {
          this.expect(types.comma);
          if (this.afterTrailingComma(types.braceR)) {
            break;
          }
        } else {
          first = false;
        }
        var node = this.startNode();
        node.local = this.parseIdent(true);
        node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
        this.checkExport(exports3, node.exported.name, node.exported.start);
        nodes.push(this.finishNode(node, "ExportSpecifier"));
      }
      return nodes;
    };
    pp$1.parseImport = function(node) {
      this.next();
      if (this.type === types.string) {
        node.specifiers = empty;
        node.source = this.parseExprAtom();
      } else {
        node.specifiers = this.parseImportSpecifiers();
        this.expectContextual("from");
        node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
      }
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    };
    pp$1.parseImportSpecifiers = function() {
      var nodes = [], first = true;
      if (this.type === types.name) {
        var node = this.startNode();
        node.local = this.parseIdent();
        this.checkLVal(node.local, BIND_LEXICAL);
        nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
        if (!this.eat(types.comma)) {
          return nodes;
        }
      }
      if (this.type === types.star) {
        var node$1 = this.startNode();
        this.next();
        this.expectContextual("as");
        node$1.local = this.parseIdent();
        this.checkLVal(node$1.local, BIND_LEXICAL);
        nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
        return nodes;
      }
      this.expect(types.braceL);
      while (!this.eat(types.braceR)) {
        if (!first) {
          this.expect(types.comma);
          if (this.afterTrailingComma(types.braceR)) {
            break;
          }
        } else {
          first = false;
        }
        var node$2 = this.startNode();
        node$2.imported = this.parseIdent(true);
        if (this.eatContextual("as")) {
          node$2.local = this.parseIdent();
        } else {
          this.checkUnreserved(node$2.imported);
          node$2.local = node$2.imported;
        }
        this.checkLVal(node$2.local, BIND_LEXICAL);
        nodes.push(this.finishNode(node$2, "ImportSpecifier"));
      }
      return nodes;
    };
    pp$1.adaptDirectivePrologue = function(statements) {
      for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
        statements[i].directive = statements[i].expression.raw.slice(1, -1);
      }
    };
    pp$1.isDirectiveCandidate = function(statement) {
      return statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
    };
    var pp$2 = Parser.prototype;
    pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
      if (this.options.ecmaVersion >= 6 && node) {
        switch (node.type) {
          case "Identifier":
            if (this.inAsync && node.name === "await") {
              this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
            }
            break;
          case "ObjectPattern":
          case "ArrayPattern":
          case "RestElement":
            break;
          case "ObjectExpression":
            node.type = "ObjectPattern";
            if (refDestructuringErrors) {
              this.checkPatternErrors(refDestructuringErrors, true);
            }
            for (var i = 0, list = node.properties; i < list.length; i += 1) {
              var prop = list[i];
              this.toAssignable(prop, isBinding);
              if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
                this.raise(prop.argument.start, "Unexpected token");
              }
            }
            break;
          case "Property":
            if (node.kind !== "init") {
              this.raise(node.key.start, "Object pattern can't contain getter or setter");
            }
            this.toAssignable(node.value, isBinding);
            break;
          case "ArrayExpression":
            node.type = "ArrayPattern";
            if (refDestructuringErrors) {
              this.checkPatternErrors(refDestructuringErrors, true);
            }
            this.toAssignableList(node.elements, isBinding);
            break;
          case "SpreadElement":
            node.type = "RestElement";
            this.toAssignable(node.argument, isBinding);
            if (node.argument.type === "AssignmentPattern") {
              this.raise(node.argument.start, "Rest elements cannot have a default value");
            }
            break;
          case "AssignmentExpression":
            if (node.operator !== "=") {
              this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
            }
            node.type = "AssignmentPattern";
            delete node.operator;
            this.toAssignable(node.left, isBinding);
          case "AssignmentPattern":
            break;
          case "ParenthesizedExpression":
            this.toAssignable(node.expression, isBinding, refDestructuringErrors);
            break;
          case "ChainExpression":
            this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            if (!isBinding) {
              break;
            }
          default:
            this.raise(node.start, "Assigning to rvalue");
        }
      } else if (refDestructuringErrors) {
        this.checkPatternErrors(refDestructuringErrors, true);
      }
      return node;
    };
    pp$2.toAssignableList = function(exprList, isBinding) {
      var end = exprList.length;
      for (var i = 0; i < end; i++) {
        var elt = exprList[i];
        if (elt) {
          this.toAssignable(elt, isBinding);
        }
      }
      if (end) {
        var last = exprList[end - 1];
        if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
          this.unexpected(last.argument.start);
        }
      }
      return exprList;
    };
    pp$2.parseSpread = function(refDestructuringErrors) {
      var node = this.startNode();
      this.next();
      node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
      return this.finishNode(node, "SpreadElement");
    };
    pp$2.parseRestBinding = function() {
      var node = this.startNode();
      this.next();
      if (this.options.ecmaVersion === 6 && this.type !== types.name) {
        this.unexpected();
      }
      node.argument = this.parseBindingAtom();
      return this.finishNode(node, "RestElement");
    };
    pp$2.parseBindingAtom = function() {
      if (this.options.ecmaVersion >= 6) {
        switch (this.type) {
          case types.bracketL:
            var node = this.startNode();
            this.next();
            node.elements = this.parseBindingList(types.bracketR, true, true);
            return this.finishNode(node, "ArrayPattern");
          case types.braceL:
            return this.parseObj(true);
        }
      }
      return this.parseIdent();
    };
    pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
      var elts = [], first = true;
      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
        }
        if (allowEmpty && this.type === types.comma) {
          elts.push(null);
        } else if (allowTrailingComma && this.afterTrailingComma(close)) {
          break;
        } else if (this.type === types.ellipsis) {
          var rest = this.parseRestBinding();
          this.parseBindingListItem(rest);
          elts.push(rest);
          if (this.type === types.comma) {
            this.raise(this.start, "Comma is not permitted after the rest element");
          }
          this.expect(close);
          break;
        } else {
          var elem = this.parseMaybeDefault(this.start, this.startLoc);
          this.parseBindingListItem(elem);
          elts.push(elem);
        }
      }
      return elts;
    };
    pp$2.parseBindingListItem = function(param) {
      return param;
    };
    pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
      left = left || this.parseBindingAtom();
      if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) {
        return left;
      }
      var node = this.startNodeAt(startPos, startLoc);
      node.left = left;
      node.right = this.parseMaybeAssign();
      return this.finishNode(node, "AssignmentPattern");
    };
    pp$2.checkLVal = function(expr, bindingType, checkClashes) {
      if (bindingType === void 0)
        bindingType = BIND_NONE;
      switch (expr.type) {
        case "Identifier":
          if (bindingType === BIND_LEXICAL && expr.name === "let") {
            this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
          }
          if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
            this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
          }
          if (checkClashes) {
            if (has(checkClashes, expr.name)) {
              this.raiseRecoverable(expr.start, "Argument name clash");
            }
            checkClashes[expr.name] = true;
          }
          if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) {
            this.declareName(expr.name, bindingType, expr.start);
          }
          break;
        case "ChainExpression":
          this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (bindingType) {
            this.raiseRecoverable(expr.start, "Binding member expression");
          }
          break;
        case "ObjectPattern":
          for (var i = 0, list = expr.properties; i < list.length; i += 1) {
            var prop = list[i];
            this.checkLVal(prop, bindingType, checkClashes);
          }
          break;
        case "Property":
          this.checkLVal(expr.value, bindingType, checkClashes);
          break;
        case "ArrayPattern":
          for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
            var elem = list$1[i$1];
            if (elem) {
              this.checkLVal(elem, bindingType, checkClashes);
            }
          }
          break;
        case "AssignmentPattern":
          this.checkLVal(expr.left, bindingType, checkClashes);
          break;
        case "RestElement":
          this.checkLVal(expr.argument, bindingType, checkClashes);
          break;
        case "ParenthesizedExpression":
          this.checkLVal(expr.expression, bindingType, checkClashes);
          break;
        default:
          this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
      }
    };
    var pp$3 = Parser.prototype;
    pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
      if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
        return;
      }
      if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
        return;
      }
      var key = prop.key;
      var name;
      switch (key.type) {
        case "Identifier":
          name = key.name;
          break;
        case "Literal":
          name = String(key.value);
          break;
        default:
          return;
      }
      var kind = prop.kind;
      if (this.options.ecmaVersion >= 6) {
        if (name === "__proto__" && kind === "init") {
          if (propHash.proto) {
            if (refDestructuringErrors) {
              if (refDestructuringErrors.doubleProto < 0) {
                refDestructuringErrors.doubleProto = key.start;
              }
            } else {
              this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
            }
          }
          propHash.proto = true;
        }
        return;
      }
      name = "$" + name;
      var other = propHash[name];
      if (other) {
        var redefinition;
        if (kind === "init") {
          redefinition = this.strict && other.init || other.get || other.set;
        } else {
          redefinition = other.init || other[kind];
        }
        if (redefinition) {
          this.raiseRecoverable(key.start, "Redefinition of property");
        }
      } else {
        other = propHash[name] = {
          init: false,
          get: false,
          set: false
        };
      }
      other[kind] = true;
    };
    pp$3.parseExpression = function(noIn, refDestructuringErrors) {
      var startPos = this.start, startLoc = this.startLoc;
      var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
      if (this.type === types.comma) {
        var node = this.startNodeAt(startPos, startLoc);
        node.expressions = [expr];
        while (this.eat(types.comma)) {
          node.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors));
        }
        return this.finishNode(node, "SequenceExpression");
      }
      return expr;
    };
    pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
      if (this.isContextual("yield")) {
        if (this.inGenerator) {
          return this.parseYield(noIn);
        } else {
          this.exprAllowed = false;
        }
      }
      var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
      if (refDestructuringErrors) {
        oldParenAssign = refDestructuringErrors.parenthesizedAssign;
        oldTrailingComma = refDestructuringErrors.trailingComma;
        refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
      } else {
        refDestructuringErrors = new DestructuringErrors();
        ownDestructuringErrors = true;
      }
      var startPos = this.start, startLoc = this.startLoc;
      if (this.type === types.parenL || this.type === types.name) {
        this.potentialArrowAt = this.start;
      }
      var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
      if (afterLeftParse) {
        left = afterLeftParse.call(this, left, startPos, startLoc);
      }
      if (this.type.isAssign) {
        var node = this.startNodeAt(startPos, startLoc);
        node.operator = this.value;
        node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
        if (!ownDestructuringErrors) {
          refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
        }
        if (refDestructuringErrors.shorthandAssign >= node.left.start) {
          refDestructuringErrors.shorthandAssign = -1;
        }
        this.checkLVal(left);
        this.next();
        node.right = this.parseMaybeAssign(noIn);
        return this.finishNode(node, "AssignmentExpression");
      } else {
        if (ownDestructuringErrors) {
          this.checkExpressionErrors(refDestructuringErrors, true);
        }
      }
      if (oldParenAssign > -1) {
        refDestructuringErrors.parenthesizedAssign = oldParenAssign;
      }
      if (oldTrailingComma > -1) {
        refDestructuringErrors.trailingComma = oldTrailingComma;
      }
      return left;
    };
    pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
      var startPos = this.start, startLoc = this.startLoc;
      var expr = this.parseExprOps(noIn, refDestructuringErrors);
      if (this.checkExpressionErrors(refDestructuringErrors)) {
        return expr;
      }
      if (this.eat(types.question)) {
        var node = this.startNodeAt(startPos, startLoc);
        node.test = expr;
        node.consequent = this.parseMaybeAssign();
        this.expect(types.colon);
        node.alternate = this.parseMaybeAssign(noIn);
        return this.finishNode(node, "ConditionalExpression");
      }
      return expr;
    };
    pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
      var startPos = this.start, startLoc = this.startLoc;
      var expr = this.parseMaybeUnary(refDestructuringErrors, false);
      if (this.checkExpressionErrors(refDestructuringErrors)) {
        return expr;
      }
      return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn);
    };
    pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
      var prec = this.type.binop;
      if (prec != null && (!noIn || this.type !== types._in)) {
        if (prec > minPrec) {
          var logical = this.type === types.logicalOR || this.type === types.logicalAND;
          var coalesce = this.type === types.coalesce;
          if (coalesce) {
            prec = types.logicalAND.binop;
          }
          var op = this.value;
          this.next();
          var startPos = this.start, startLoc = this.startLoc;
          var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
          var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
          if (logical && this.type === types.coalesce || coalesce && (this.type === types.logicalOR || this.type === types.logicalAND)) {
            this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
          }
          return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
        }
      }
      return left;
    };
    pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
      var node = this.startNodeAt(startPos, startLoc);
      node.left = left;
      node.operator = op;
      node.right = right;
      return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
    };
    pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
      var startPos = this.start, startLoc = this.startLoc, expr;
      if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) {
        expr = this.parseAwait();
        sawUnary = true;
      } else if (this.type.prefix) {
        var node = this.startNode(), update = this.type === types.incDec;
        node.operator = this.value;
        node.prefix = true;
        this.next();
        node.argument = this.parseMaybeUnary(null, true);
        this.checkExpressionErrors(refDestructuringErrors, true);
        if (update) {
          this.checkLVal(node.argument);
        } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
          this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
        } else {
          sawUnary = true;
        }
        expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
      } else {
        expr = this.parseExprSubscripts(refDestructuringErrors);
        if (this.checkExpressionErrors(refDestructuringErrors)) {
          return expr;
        }
        while (this.type.postfix && !this.canInsertSemicolon()) {
          var node$1 = this.startNodeAt(startPos, startLoc);
          node$1.operator = this.value;
          node$1.prefix = false;
          node$1.argument = expr;
          this.checkLVal(expr);
          this.next();
          expr = this.finishNode(node$1, "UpdateExpression");
        }
      }
      if (!sawUnary && this.eat(types.starstar)) {
        return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false);
      } else {
        return expr;
      }
    };
    pp$3.parseExprSubscripts = function(refDestructuringErrors) {
      var startPos = this.start, startLoc = this.startLoc;
      var expr = this.parseExprAtom(refDestructuringErrors);
      if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
        return expr;
      }
      var result = this.parseSubscripts(expr, startPos, startLoc);
      if (refDestructuringErrors && result.type === "MemberExpression") {
        if (refDestructuringErrors.parenthesizedAssign >= result.start) {
          refDestructuringErrors.parenthesizedAssign = -1;
        }
        if (refDestructuringErrors.parenthesizedBind >= result.start) {
          refDestructuringErrors.parenthesizedBind = -1;
        }
      }
      return result;
    };
    pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
      var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
      var optionalChained = false;
      while (true) {
        var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained);
        if (element.optional) {
          optionalChained = true;
        }
        if (element === base || element.type === "ArrowFunctionExpression") {
          if (optionalChained) {
            var chainNode = this.startNodeAt(startPos, startLoc);
            chainNode.expression = element;
            element = this.finishNode(chainNode, "ChainExpression");
          }
          return element;
        }
        base = element;
      }
    };
    pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained) {
      var optionalSupported = this.options.ecmaVersion >= 11;
      var optional = optionalSupported && this.eat(types.questionDot);
      if (noCalls && optional) {
        this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
      }
      var computed = this.eat(types.bracketL);
      if (computed || optional && this.type !== types.parenL && this.type !== types.backQuote || this.eat(types.dot)) {
        var node = this.startNodeAt(startPos, startLoc);
        node.object = base;
        node.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
        node.computed = !!computed;
        if (computed) {
          this.expect(types.bracketR);
        }
        if (optionalSupported) {
          node.optional = optional;
        }
        base = this.finishNode(node, "MemberExpression");
      } else if (!noCalls && this.eat(types.parenL)) {
        var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
        if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types.arrow)) {
          this.checkPatternErrors(refDestructuringErrors, false);
          this.checkYieldAwaitInDefaultParams();
          if (this.awaitIdentPos > 0) {
            this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
          }
          this.yieldPos = oldYieldPos;
          this.awaitPos = oldAwaitPos;
          this.awaitIdentPos = oldAwaitIdentPos;
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true);
        }
        this.checkExpressionErrors(refDestructuringErrors, true);
        this.yieldPos = oldYieldPos || this.yieldPos;
        this.awaitPos = oldAwaitPos || this.awaitPos;
        this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
        var node$1 = this.startNodeAt(startPos, startLoc);
        node$1.callee = base;
        node$1.arguments = exprList;
        if (optionalSupported) {
          node$1.optional = optional;
        }
        base = this.finishNode(node$1, "CallExpression");
      } else if (this.type === types.backQuote) {
        if (optional || optionalChained) {
          this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
        }
        var node$2 = this.startNodeAt(startPos, startLoc);
        node$2.tag = base;
        node$2.quasi = this.parseTemplate({isTagged: true});
        base = this.finishNode(node$2, "TaggedTemplateExpression");
      }
      return base;
    };
    pp$3.parseExprAtom = function(refDestructuringErrors) {
      if (this.type === types.slash) {
        this.readRegexp();
      }
      var node, canBeArrow = this.potentialArrowAt === this.start;
      switch (this.type) {
        case types._super:
          if (!this.allowSuper) {
            this.raise(this.start, "'super' keyword outside a method");
          }
          node = this.startNode();
          this.next();
          if (this.type === types.parenL && !this.allowDirectSuper) {
            this.raise(node.start, "super() call outside constructor of a subclass");
          }
          if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL) {
            this.unexpected();
          }
          return this.finishNode(node, "Super");
        case types._this:
          node = this.startNode();
          this.next();
          return this.finishNode(node, "ThisExpression");
        case types.name:
          var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
          var id = this.parseIdent(false);
          if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function)) {
            return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true);
          }
          if (canBeArrow && !this.canInsertSemicolon()) {
            if (this.eat(types.arrow)) {
              return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false);
            }
            if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
              id = this.parseIdent(false);
              if (this.canInsertSemicolon() || !this.eat(types.arrow)) {
                this.unexpected();
              }
              return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true);
            }
          }
          return id;
        case types.regexp:
          var value = this.value;
          node = this.parseLiteral(value.value);
          node.regex = {pattern: value.pattern, flags: value.flags};
          return node;
        case types.num:
        case types.string:
          return this.parseLiteral(this.value);
        case types._null:
        case types._true:
        case types._false:
          node = this.startNode();
          node.value = this.type === types._null ? null : this.type === types._true;
          node.raw = this.type.keyword;
          this.next();
          return this.finishNode(node, "Literal");
        case types.parenL:
          var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
          if (refDestructuringErrors) {
            if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
              refDestructuringErrors.parenthesizedAssign = start;
            }
            if (refDestructuringErrors.parenthesizedBind < 0) {
              refDestructuringErrors.parenthesizedBind = start;
            }
          }
          return expr;
        case types.bracketL:
          node = this.startNode();
          this.next();
          node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
          return this.finishNode(node, "ArrayExpression");
        case types.braceL:
          return this.parseObj(false, refDestructuringErrors);
        case types._function:
          node = this.startNode();
          this.next();
          return this.parseFunction(node, 0);
        case types._class:
          return this.parseClass(this.startNode(), false);
        case types._new:
          return this.parseNew();
        case types.backQuote:
          return this.parseTemplate();
        case types._import:
          if (this.options.ecmaVersion >= 11) {
            return this.parseExprImport();
          } else {
            return this.unexpected();
          }
        default:
          this.unexpected();
      }
    };
    pp$3.parseExprImport = function() {
      var node = this.startNode();
      if (this.containsEsc) {
        this.raiseRecoverable(this.start, "Escape sequence in keyword import");
      }
      var meta = this.parseIdent(true);
      switch (this.type) {
        case types.parenL:
          return this.parseDynamicImport(node);
        case types.dot:
          node.meta = meta;
          return this.parseImportMeta(node);
        default:
          this.unexpected();
      }
    };
    pp$3.parseDynamicImport = function(node) {
      this.next();
      node.source = this.parseMaybeAssign();
      if (!this.eat(types.parenR)) {
        var errorPos = this.start;
        if (this.eat(types.comma) && this.eat(types.parenR)) {
          this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
        } else {
          this.unexpected(errorPos);
        }
      }
      return this.finishNode(node, "ImportExpression");
    };
    pp$3.parseImportMeta = function(node) {
      this.next();
      var containsEsc = this.containsEsc;
      node.property = this.parseIdent(true);
      if (node.property.name !== "meta") {
        this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
      }
      if (containsEsc) {
        this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
      }
      if (this.options.sourceType !== "module") {
        this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
      }
      return this.finishNode(node, "MetaProperty");
    };
    pp$3.parseLiteral = function(value) {
      var node = this.startNode();
      node.value = value;
      node.raw = this.input.slice(this.start, this.end);
      if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
        node.bigint = node.raw.slice(0, -1).replace(/_/g, "");
      }
      this.next();
      return this.finishNode(node, "Literal");
    };
    pp$3.parseParenExpression = function() {
      this.expect(types.parenL);
      var val = this.parseExpression();
      this.expect(types.parenR);
      return val;
    };
    pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
      var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
      if (this.options.ecmaVersion >= 6) {
        this.next();
        var innerStartPos = this.start, innerStartLoc = this.startLoc;
        var exprList = [], first = true, lastIsComma = false;
        var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
        this.yieldPos = 0;
        this.awaitPos = 0;
        while (this.type !== types.parenR) {
          first ? first = false : this.expect(types.comma);
          if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
            lastIsComma = true;
            break;
          } else if (this.type === types.ellipsis) {
            spreadStart = this.start;
            exprList.push(this.parseParenItem(this.parseRestBinding()));
            if (this.type === types.comma) {
              this.raise(this.start, "Comma is not permitted after the rest element");
            }
            break;
          } else {
            exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
          }
        }
        var innerEndPos = this.start, innerEndLoc = this.startLoc;
        this.expect(types.parenR);
        if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
          this.checkPatternErrors(refDestructuringErrors, false);
          this.checkYieldAwaitInDefaultParams();
          this.yieldPos = oldYieldPos;
          this.awaitPos = oldAwaitPos;
          return this.parseParenArrowList(startPos, startLoc, exprList);
        }
        if (!exprList.length || lastIsComma) {
          this.unexpected(this.lastTokStart);
        }
        if (spreadStart) {
          this.unexpected(spreadStart);
        }
        this.checkExpressionErrors(refDestructuringErrors, true);
        this.yieldPos = oldYieldPos || this.yieldPos;
        this.awaitPos = oldAwaitPos || this.awaitPos;
        if (exprList.length > 1) {
          val = this.startNodeAt(innerStartPos, innerStartLoc);
          val.expressions = exprList;
          this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
        } else {
          val = exprList[0];
        }
      } else {
        val = this.parseParenExpression();
      }
      if (this.options.preserveParens) {
        var par = this.startNodeAt(startPos, startLoc);
        par.expression = val;
        return this.finishNode(par, "ParenthesizedExpression");
      } else {
        return val;
      }
    };
    pp$3.parseParenItem = function(item) {
      return item;
    };
    pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList);
    };
    var empty$1 = [];
    pp$3.parseNew = function() {
      if (this.containsEsc) {
        this.raiseRecoverable(this.start, "Escape sequence in keyword new");
      }
      var node = this.startNode();
      var meta = this.parseIdent(true);
      if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
        node.meta = meta;
        var containsEsc = this.containsEsc;
        node.property = this.parseIdent(true);
        if (node.property.name !== "target") {
          this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
        }
        if (containsEsc) {
          this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
        }
        if (!this.inNonArrowFunction()) {
          this.raiseRecoverable(node.start, "'new.target' can only be used in functions");
        }
        return this.finishNode(node, "MetaProperty");
      }
      var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
      node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
      if (isImport && node.callee.type === "ImportExpression") {
        this.raise(startPos, "Cannot use new with import()");
      }
      if (this.eat(types.parenL)) {
        node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false);
      } else {
        node.arguments = empty$1;
      }
      return this.finishNode(node, "NewExpression");
    };
    pp$3.parseTemplateElement = function(ref2) {
      var isTagged = ref2.isTagged;
      var elem = this.startNode();
      if (this.type === types.invalidTemplate) {
        if (!isTagged) {
          this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
        }
        elem.value = {
          raw: this.value,
          cooked: null
        };
      } else {
        elem.value = {
          raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
          cooked: this.value
        };
      }
      this.next();
      elem.tail = this.type === types.backQuote;
      return this.finishNode(elem, "TemplateElement");
    };
    pp$3.parseTemplate = function(ref2) {
      if (ref2 === void 0)
        ref2 = {};
      var isTagged = ref2.isTagged;
      if (isTagged === void 0)
        isTagged = false;
      var node = this.startNode();
      this.next();
      node.expressions = [];
      var curElt = this.parseTemplateElement({isTagged});
      node.quasis = [curElt];
      while (!curElt.tail) {
        if (this.type === types.eof) {
          this.raise(this.pos, "Unterminated template literal");
        }
        this.expect(types.dollarBraceL);
        node.expressions.push(this.parseExpression());
        this.expect(types.braceR);
        node.quasis.push(curElt = this.parseTemplateElement({isTagged}));
      }
      this.next();
      return this.finishNode(node, "TemplateLiteral");
    };
    pp$3.isAsyncProp = function(prop) {
      return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
    };
    pp$3.parseObj = function(isPattern, refDestructuringErrors) {
      var node = this.startNode(), first = true, propHash = {};
      node.properties = [];
      this.next();
      while (!this.eat(types.braceR)) {
        if (!first) {
          this.expect(types.comma);
          if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) {
            break;
          }
        } else {
          first = false;
        }
        var prop = this.parseProperty(isPattern, refDestructuringErrors);
        if (!isPattern) {
          this.checkPropClash(prop, propHash, refDestructuringErrors);
        }
        node.properties.push(prop);
      }
      return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
    };
    pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
      var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
      if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
        if (isPattern) {
          prop.argument = this.parseIdent(false);
          if (this.type === types.comma) {
            this.raise(this.start, "Comma is not permitted after the rest element");
          }
          return this.finishNode(prop, "RestElement");
        }
        if (this.type === types.parenL && refDestructuringErrors) {
          if (refDestructuringErrors.parenthesizedAssign < 0) {
            refDestructuringErrors.parenthesizedAssign = this.start;
          }
          if (refDestructuringErrors.parenthesizedBind < 0) {
            refDestructuringErrors.parenthesizedBind = this.start;
          }
        }
        prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
        if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
          refDestructuringErrors.trailingComma = this.start;
        }
        return this.finishNode(prop, "SpreadElement");
      }
      if (this.options.ecmaVersion >= 6) {
        prop.method = false;
        prop.shorthand = false;
        if (isPattern || refDestructuringErrors) {
          startPos = this.start;
          startLoc = this.startLoc;
        }
        if (!isPattern) {
          isGenerator = this.eat(types.star);
        }
      }
      var containsEsc = this.containsEsc;
      this.parsePropertyName(prop);
      if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
        isAsync = true;
        isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
        this.parsePropertyName(prop, refDestructuringErrors);
      } else {
        isAsync = false;
      }
      this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
      return this.finishNode(prop, "Property");
    };
    pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
      if ((isGenerator || isAsync) && this.type === types.colon) {
        this.unexpected();
      }
      if (this.eat(types.colon)) {
        prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
        prop.kind = "init";
      } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
        if (isPattern) {
          this.unexpected();
        }
        prop.kind = "init";
        prop.method = true;
        prop.value = this.parseMethod(isGenerator, isAsync);
      } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types.comma && this.type !== types.braceR && this.type !== types.eq)) {
        if (isGenerator || isAsync) {
          this.unexpected();
        }
        prop.kind = prop.key.name;
        this.parsePropertyName(prop);
        prop.value = this.parseMethod(false);
        var paramCount = prop.kind === "get" ? 0 : 1;
        if (prop.value.params.length !== paramCount) {
          var start = prop.value.start;
          if (prop.kind === "get") {
            this.raiseRecoverable(start, "getter should have no params");
          } else {
            this.raiseRecoverable(start, "setter should have exactly one param");
          }
        } else {
          if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
            this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
          }
        }
      } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
        if (isGenerator || isAsync) {
          this.unexpected();
        }
        this.checkUnreserved(prop.key);
        if (prop.key.name === "await" && !this.awaitIdentPos) {
          this.awaitIdentPos = startPos;
        }
        prop.kind = "init";
        if (isPattern) {
          prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
        } else if (this.type === types.eq && refDestructuringErrors) {
          if (refDestructuringErrors.shorthandAssign < 0) {
            refDestructuringErrors.shorthandAssign = this.start;
          }
          prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
        } else {
          prop.value = prop.key;
        }
        prop.shorthand = true;
      } else {
        this.unexpected();
      }
    };
    pp$3.parsePropertyName = function(prop) {
      if (this.options.ecmaVersion >= 6) {
        if (this.eat(types.bracketL)) {
          prop.computed = true;
          prop.key = this.parseMaybeAssign();
          this.expect(types.bracketR);
          return prop.key;
        } else {
          prop.computed = false;
        }
      }
      return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
    };
    pp$3.initFunction = function(node) {
      node.id = null;
      if (this.options.ecmaVersion >= 6) {
        node.generator = node.expression = false;
      }
      if (this.options.ecmaVersion >= 8) {
        node.async = false;
      }
    };
    pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
      var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
      this.initFunction(node);
      if (this.options.ecmaVersion >= 6) {
        node.generator = isGenerator;
      }
      if (this.options.ecmaVersion >= 8) {
        node.async = !!isAsync;
      }
      this.yieldPos = 0;
      this.awaitPos = 0;
      this.awaitIdentPos = 0;
      this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
      this.expect(types.parenL);
      node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
      this.checkYieldAwaitInDefaultParams();
      this.parseFunctionBody(node, false, true);
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.finishNode(node, "FunctionExpression");
    };
    pp$3.parseArrowExpression = function(node, params, isAsync) {
      var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
      this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
      this.initFunction(node);
      if (this.options.ecmaVersion >= 8) {
        node.async = !!isAsync;
      }
      this.yieldPos = 0;
      this.awaitPos = 0;
      this.awaitIdentPos = 0;
      node.params = this.toAssignableList(params, true);
      this.parseFunctionBody(node, true, false);
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.finishNode(node, "ArrowFunctionExpression");
    };
    pp$3.parseFunctionBody = function(node, isArrowFunction, isMethod) {
      var isExpression = isArrowFunction && this.type !== types.braceL;
      var oldStrict = this.strict, useStrict = false;
      if (isExpression) {
        node.body = this.parseMaybeAssign();
        node.expression = true;
        this.checkParams(node, false);
      } else {
        var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
        if (!oldStrict || nonSimple) {
          useStrict = this.strictDirective(this.end);
          if (useStrict && nonSimple) {
            this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
          }
        }
        var oldLabels = this.labels;
        this.labels = [];
        if (useStrict) {
          this.strict = true;
        }
        this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
        if (this.strict && node.id) {
          this.checkLVal(node.id, BIND_OUTSIDE);
        }
        node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
        node.expression = false;
        this.adaptDirectivePrologue(node.body.body);
        this.labels = oldLabels;
      }
      this.exitScope();
    };
    pp$3.isSimpleParamList = function(params) {
      for (var i = 0, list = params; i < list.length; i += 1) {
        var param = list[i];
        if (param.type !== "Identifier") {
          return false;
        }
      }
      return true;
    };
    pp$3.checkParams = function(node, allowDuplicates) {
      var nameHash = {};
      for (var i = 0, list = node.params; i < list.length; i += 1) {
        var param = list[i];
        this.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
      }
    };
    pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
      var elts = [], first = true;
      while (!this.eat(close)) {
        if (!first) {
          this.expect(types.comma);
          if (allowTrailingComma && this.afterTrailingComma(close)) {
            break;
          }
        } else {
          first = false;
        }
        var elt = void 0;
        if (allowEmpty && this.type === types.comma) {
          elt = null;
        } else if (this.type === types.ellipsis) {
          elt = this.parseSpread(refDestructuringErrors);
          if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0) {
            refDestructuringErrors.trailingComma = this.start;
          }
        } else {
          elt = this.parseMaybeAssign(false, refDestructuringErrors);
        }
        elts.push(elt);
      }
      return elts;
    };
    pp$3.checkUnreserved = function(ref2) {
      var start = ref2.start;
      var end = ref2.end;
      var name = ref2.name;
      if (this.inGenerator && name === "yield") {
        this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
      }
      if (this.inAsync && name === "await") {
        this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
      }
      if (this.keywords.test(name)) {
        this.raise(start, "Unexpected keyword '" + name + "'");
      }
      if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
        return;
      }
      var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
      if (re.test(name)) {
        if (!this.inAsync && name === "await") {
          this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
        }
        this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
      }
    };
    pp$3.parseIdent = function(liberal, isBinding) {
      var node = this.startNode();
      if (this.type === types.name) {
        node.name = this.value;
      } else if (this.type.keyword) {
        node.name = this.type.keyword;
        if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
          this.context.pop();
        }
      } else {
        this.unexpected();
      }
      this.next(!!liberal);
      this.finishNode(node, "Identifier");
      if (!liberal) {
        this.checkUnreserved(node);
        if (node.name === "await" && !this.awaitIdentPos) {
          this.awaitIdentPos = node.start;
        }
      }
      return node;
    };
    pp$3.parseYield = function(noIn) {
      if (!this.yieldPos) {
        this.yieldPos = this.start;
      }
      var node = this.startNode();
      this.next();
      if (this.type === types.semi || this.canInsertSemicolon() || this.type !== types.star && !this.type.startsExpr) {
        node.delegate = false;
        node.argument = null;
      } else {
        node.delegate = this.eat(types.star);
        node.argument = this.parseMaybeAssign(noIn);
      }
      return this.finishNode(node, "YieldExpression");
    };
    pp$3.parseAwait = function() {
      if (!this.awaitPos) {
        this.awaitPos = this.start;
      }
      var node = this.startNode();
      this.next();
      node.argument = this.parseMaybeUnary(null, false);
      return this.finishNode(node, "AwaitExpression");
    };
    var pp$4 = Parser.prototype;
    pp$4.raise = function(pos, message) {
      var loc = getLineInfo(this.input, pos);
      message += " (" + loc.line + ":" + loc.column + ")";
      var err = new SyntaxError(message);
      err.pos = pos;
      err.loc = loc;
      err.raisedAt = this.pos;
      throw err;
    };
    pp$4.raiseRecoverable = pp$4.raise;
    pp$4.curPosition = function() {
      if (this.options.locations) {
        return new Position(this.curLine, this.pos - this.lineStart);
      }
    };
    var pp$5 = Parser.prototype;
    var Scope = function Scope2(flags) {
      this.flags = flags;
      this.var = [];
      this.lexical = [];
      this.functions = [];
    };
    pp$5.enterScope = function(flags) {
      this.scopeStack.push(new Scope(flags));
    };
    pp$5.exitScope = function() {
      this.scopeStack.pop();
    };
    pp$5.treatFunctionsAsVarInScope = function(scope) {
      return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
    };
    pp$5.declareName = function(name, bindingType, pos) {
      var redeclared = false;
      if (bindingType === BIND_LEXICAL) {
        var scope = this.currentScope();
        redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
        scope.lexical.push(name);
        if (this.inModule && scope.flags & SCOPE_TOP) {
          delete this.undefinedExports[name];
        }
      } else if (bindingType === BIND_SIMPLE_CATCH) {
        var scope$1 = this.currentScope();
        scope$1.lexical.push(name);
      } else if (bindingType === BIND_FUNCTION) {
        var scope$2 = this.currentScope();
        if (this.treatFunctionsAsVar) {
          redeclared = scope$2.lexical.indexOf(name) > -1;
        } else {
          redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
        }
        scope$2.functions.push(name);
      } else {
        for (var i = this.scopeStack.length - 1; i >= 0; --i) {
          var scope$3 = this.scopeStack[i];
          if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
            redeclared = true;
            break;
          }
          scope$3.var.push(name);
          if (this.inModule && scope$3.flags & SCOPE_TOP) {
            delete this.undefinedExports[name];
          }
          if (scope$3.flags & SCOPE_VAR) {
            break;
          }
        }
      }
      if (redeclared) {
        this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
      }
    };
    pp$5.checkLocalExport = function(id) {
      if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
        this.undefinedExports[id.name] = id;
      }
    };
    pp$5.currentScope = function() {
      return this.scopeStack[this.scopeStack.length - 1];
    };
    pp$5.currentVarScope = function() {
      for (var i = this.scopeStack.length - 1; ; i--) {
        var scope = this.scopeStack[i];
        if (scope.flags & SCOPE_VAR) {
          return scope;
        }
      }
    };
    pp$5.currentThisScope = function() {
      for (var i = this.scopeStack.length - 1; ; i--) {
        var scope = this.scopeStack[i];
        if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) {
          return scope;
        }
      }
    };
    var Node = function Node2(parser, pos, loc) {
      this.type = "";
      this.start = pos;
      this.end = 0;
      if (parser.options.locations) {
        this.loc = new SourceLocation(parser, loc);
      }
      if (parser.options.directSourceFile) {
        this.sourceFile = parser.options.directSourceFile;
      }
      if (parser.options.ranges) {
        this.range = [pos, 0];
      }
    };
    var pp$6 = Parser.prototype;
    pp$6.startNode = function() {
      return new Node(this, this.start, this.startLoc);
    };
    pp$6.startNodeAt = function(pos, loc) {
      return new Node(this, pos, loc);
    };
    function finishNodeAt(node, type, pos, loc) {
      node.type = type;
      node.end = pos;
      if (this.options.locations) {
        node.loc.end = loc;
      }
      if (this.options.ranges) {
        node.range[1] = pos;
      }
      return node;
    }
    pp$6.finishNode = function(node, type) {
      return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
    };
    pp$6.finishNodeAt = function(node, type, pos, loc) {
      return finishNodeAt.call(this, node, type, pos, loc);
    };
    var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
      this.token = token;
      this.isExpr = !!isExpr;
      this.preserveSpace = !!preserveSpace;
      this.override = override;
      this.generator = !!generator;
    };
    var types$1 = {
      b_stat: new TokContext("{", false),
      b_expr: new TokContext("{", true),
      b_tmpl: new TokContext("${", false),
      p_stat: new TokContext("(", false),
      p_expr: new TokContext("(", true),
      q_tmpl: new TokContext("`", true, true, function(p) {
        return p.tryReadTemplateToken();
      }),
      f_stat: new TokContext("function", false),
      f_expr: new TokContext("function", true),
      f_expr_gen: new TokContext("function", true, false, null, true),
      f_gen: new TokContext("function", false, false, null, true)
    };
    var pp$7 = Parser.prototype;
    pp$7.initialContext = function() {
      return [types$1.b_stat];
    };
    pp$7.braceIsBlock = function(prevType) {
      var parent = this.curContext();
      if (parent === types$1.f_expr || parent === types$1.f_stat) {
        return true;
      }
      if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr)) {
        return !parent.isExpr;
      }
      if (prevType === types._return || prevType === types.name && this.exprAllowed) {
        return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
      }
      if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
        return true;
      }
      if (prevType === types.braceL) {
        return parent === types$1.b_stat;
      }
      if (prevType === types._var || prevType === types._const || prevType === types.name) {
        return false;
      }
      return !this.exprAllowed;
    };
    pp$7.inGeneratorContext = function() {
      for (var i = this.context.length - 1; i >= 1; i--) {
        var context = this.context[i];
        if (context.token === "function") {
          return context.generator;
        }
      }
      return false;
    };
    pp$7.updateContext = function(prevType) {
      var update, type = this.type;
      if (type.keyword && prevType === types.dot) {
        this.exprAllowed = false;
      } else if (update = type.updateContext) {
        update.call(this, prevType);
      } else {
        this.exprAllowed = type.beforeExpr;
      }
    };
    types.parenR.updateContext = types.braceR.updateContext = function() {
      if (this.context.length === 1) {
        this.exprAllowed = true;
        return;
      }
      var out = this.context.pop();
      if (out === types$1.b_stat && this.curContext().token === "function") {
        out = this.context.pop();
      }
      this.exprAllowed = !out.isExpr;
    };
    types.braceL.updateContext = function(prevType) {
      this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
      this.exprAllowed = true;
    };
    types.dollarBraceL.updateContext = function() {
      this.context.push(types$1.b_tmpl);
      this.exprAllowed = true;
    };
    types.parenL.updateContext = function(prevType) {
      var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
      this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
      this.exprAllowed = true;
    };
    types.incDec.updateContext = function() {
    };
    types._function.updateContext = types._class.updateContext = function(prevType) {
      if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else && !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
        this.context.push(types$1.f_expr);
      } else {
        this.context.push(types$1.f_stat);
      }
      this.exprAllowed = false;
    };
    types.backQuote.updateContext = function() {
      if (this.curContext() === types$1.q_tmpl) {
        this.context.pop();
      } else {
        this.context.push(types$1.q_tmpl);
      }
      this.exprAllowed = false;
    };
    types.star.updateContext = function(prevType) {
      if (prevType === types._function) {
        var index = this.context.length - 1;
        if (this.context[index] === types$1.f_expr) {
          this.context[index] = types$1.f_expr_gen;
        } else {
          this.context[index] = types$1.f_gen;
        }
      }
      this.exprAllowed = true;
    };
    types.name.updateContext = function(prevType) {
      var allowed = false;
      if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
        if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
          allowed = true;
        }
      }
      this.exprAllowed = allowed;
    };
    var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
    var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
    var ecma11BinaryProperties = ecma10BinaryProperties;
    var unicodeBinaryProperties = {
      9: ecma9BinaryProperties,
      10: ecma10BinaryProperties,
      11: ecma11BinaryProperties
    };
    var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
    var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
    var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
    var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
    var unicodeScriptValues = {
      9: ecma9ScriptValues,
      10: ecma10ScriptValues,
      11: ecma11ScriptValues
    };
    var data = {};
    function buildUnicodeData(ecmaVersion) {
      var d = data[ecmaVersion] = {
        binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
        nonBinary: {
          General_Category: wordsRegexp(unicodeGeneralCategoryValues),
          Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
        }
      };
      d.nonBinary.Script_Extensions = d.nonBinary.Script;
      d.nonBinary.gc = d.nonBinary.General_Category;
      d.nonBinary.sc = d.nonBinary.Script;
      d.nonBinary.scx = d.nonBinary.Script_Extensions;
    }
    buildUnicodeData(9);
    buildUnicodeData(10);
    buildUnicodeData(11);
    var pp$8 = Parser.prototype;
    var RegExpValidationState = function RegExpValidationState2(parser) {
      this.parser = parser;
      this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
      this.unicodeProperties = data[parser.options.ecmaVersion >= 11 ? 11 : parser.options.ecmaVersion];
      this.source = "";
      this.flags = "";
      this.start = 0;
      this.switchU = false;
      this.switchN = false;
      this.pos = 0;
      this.lastIntValue = 0;
      this.lastStringValue = "";
      this.lastAssertionIsQuantifiable = false;
      this.numCapturingParens = 0;
      this.maxBackReference = 0;
      this.groupNames = [];
      this.backReferenceNames = [];
    };
    RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
      var unicode = flags.indexOf("u") !== -1;
      this.start = start | 0;
      this.source = pattern + "";
      this.flags = flags;
      this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
      this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
    };
    RegExpValidationState.prototype.raise = function raise(message) {
      this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
    };
    RegExpValidationState.prototype.at = function at(i, forceU) {
      if (forceU === void 0)
        forceU = false;
      var s = this.source;
      var l = s.length;
      if (i >= l) {
        return -1;
      }
      var c = s.charCodeAt(i);
      if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l) {
        return c;
      }
      var next = s.charCodeAt(i + 1);
      return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
    };
    RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
      if (forceU === void 0)
        forceU = false;
      var s = this.source;
      var l = s.length;
      if (i >= l) {
        return l;
      }
      var c = s.charCodeAt(i), next;
      if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
        return i + 1;
      }
      return i + 2;
    };
    RegExpValidationState.prototype.current = function current(forceU) {
      if (forceU === void 0)
        forceU = false;
      return this.at(this.pos, forceU);
    };
    RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
      if (forceU === void 0)
        forceU = false;
      return this.at(this.nextIndex(this.pos, forceU), forceU);
    };
    RegExpValidationState.prototype.advance = function advance(forceU) {
      if (forceU === void 0)
        forceU = false;
      this.pos = this.nextIndex(this.pos, forceU);
    };
    RegExpValidationState.prototype.eat = function eat(ch, forceU) {
      if (forceU === void 0)
        forceU = false;
      if (this.current(forceU) === ch) {
        this.advance(forceU);
        return true;
      }
      return false;
    };
    function codePointToString(ch) {
      if (ch <= 65535) {
        return String.fromCharCode(ch);
      }
      ch -= 65536;
      return String.fromCharCode((ch >> 10) + 55296, (ch & 1023) + 56320);
    }
    pp$8.validateRegExpFlags = function(state) {
      var validFlags = state.validFlags;
      var flags = state.flags;
      for (var i = 0; i < flags.length; i++) {
        var flag = flags.charAt(i);
        if (validFlags.indexOf(flag) === -1) {
          this.raise(state.start, "Invalid regular expression flag");
        }
        if (flags.indexOf(flag, i + 1) > -1) {
          this.raise(state.start, "Duplicate regular expression flag");
        }
      }
    };
    pp$8.validateRegExpPattern = function(state) {
      this.regexp_pattern(state);
      if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
        state.switchN = true;
        this.regexp_pattern(state);
      }
    };
    pp$8.regexp_pattern = function(state) {
      state.pos = 0;
      state.lastIntValue = 0;
      state.lastStringValue = "";
      state.lastAssertionIsQuantifiable = false;
      state.numCapturingParens = 0;
      state.maxBackReference = 0;
      state.groupNames.length = 0;
      state.backReferenceNames.length = 0;
      this.regexp_disjunction(state);
      if (state.pos !== state.source.length) {
        if (state.eat(41)) {
          state.raise("Unmatched ')'");
        }
        if (state.eat(93) || state.eat(125)) {
          state.raise("Lone quantifier brackets");
        }
      }
      if (state.maxBackReference > state.numCapturingParens) {
        state.raise("Invalid escape");
      }
      for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
        var name = list[i];
        if (state.groupNames.indexOf(name) === -1) {
          state.raise("Invalid named capture referenced");
        }
      }
    };
    pp$8.regexp_disjunction = function(state) {
      this.regexp_alternative(state);
      while (state.eat(124)) {
        this.regexp_alternative(state);
      }
      if (this.regexp_eatQuantifier(state, true)) {
        state.raise("Nothing to repeat");
      }
      if (state.eat(123)) {
        state.raise("Lone quantifier brackets");
      }
    };
    pp$8.regexp_alternative = function(state) {
      while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
      }
    };
    pp$8.regexp_eatTerm = function(state) {
      if (this.regexp_eatAssertion(state)) {
        if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
          if (state.switchU) {
            state.raise("Invalid quantifier");
          }
        }
        return true;
      }
      if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
        this.regexp_eatQuantifier(state);
        return true;
      }
      return false;
    };
    pp$8.regexp_eatAssertion = function(state) {
      var start = state.pos;
      state.lastAssertionIsQuantifiable = false;
      if (state.eat(94) || state.eat(36)) {
        return true;
      }
      if (state.eat(92)) {
        if (state.eat(66) || state.eat(98)) {
          return true;
        }
        state.pos = start;
      }
      if (state.eat(40) && state.eat(63)) {
        var lookbehind = false;
        if (this.options.ecmaVersion >= 9) {
          lookbehind = state.eat(60);
        }
        if (state.eat(61) || state.eat(33)) {
          this.regexp_disjunction(state);
          if (!state.eat(41)) {
            state.raise("Unterminated group");
          }
          state.lastAssertionIsQuantifiable = !lookbehind;
          return true;
        }
      }
      state.pos = start;
      return false;
    };
    pp$8.regexp_eatQuantifier = function(state, noError) {
      if (noError === void 0)
        noError = false;
      if (this.regexp_eatQuantifierPrefix(state, noError)) {
        state.eat(63);
        return true;
      }
      return false;
    };
    pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
      return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
    };
    pp$8.regexp_eatBracedQuantifier = function(state, noError) {
      var start = state.pos;
      if (state.eat(123)) {
        var min = 0, max = -1;
        if (this.regexp_eatDecimalDigits(state)) {
          min = state.lastIntValue;
          if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
            max = state.lastIntValue;
          }
          if (state.eat(125)) {
            if (max !== -1 && max < min && !noError) {
              state.raise("numbers out of order in {} quantifier");
            }
            return true;
          }
        }
        if (state.switchU && !noError) {
          state.raise("Incomplete quantifier");
        }
        state.pos = start;
      }
      return false;
    };
    pp$8.regexp_eatAtom = function(state) {
      return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
    };
    pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
      var start = state.pos;
      if (state.eat(92)) {
        if (this.regexp_eatAtomEscape(state)) {
          return true;
        }
        state.pos = start;
      }
      return false;
    };
    pp$8.regexp_eatUncapturingGroup = function(state) {
      var start = state.pos;
      if (state.eat(40)) {
        if (state.eat(63) && state.eat(58)) {
          this.regexp_disjunction(state);
          if (state.eat(41)) {
            return true;
          }
          state.raise("Unterminated group");
        }
        state.pos = start;
      }
      return false;
    };
    pp$8.regexp_eatCapturingGroup = function(state) {
      if (state.eat(40)) {
        if (this.options.ecmaVersion >= 9) {
          this.regexp_groupSpecifier(state);
        } else if (state.current() === 63) {
          state.raise("Invalid group");
        }
        this.regexp_disjunction(state);
        if (state.eat(41)) {
          state.numCapturingParens += 1;
          return true;
        }
        state.raise("Unterminated group");
      }
      return false;
    };
    pp$8.regexp_eatExtendedAtom = function(state) {
      return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
    };
    pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
      if (this.regexp_eatBracedQuantifier(state, true)) {
        state.raise("Nothing to repeat");
      }
      return false;
    };
    pp$8.regexp_eatSyntaxCharacter = function(state) {
      var ch = state.current();
      if (isSyntaxCharacter(ch)) {
        state.lastIntValue = ch;
        state.advance();
        return true;
      }
      return false;
    };
    function isSyntaxCharacter(ch) {
      return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
    }
    pp$8.regexp_eatPatternCharacters = function(state) {
      var start = state.pos;
      var ch = 0;
      while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
        state.advance();
      }
      return state.pos !== start;
    };
    pp$8.regexp_eatExtendedPatternCharacter = function(state) {
      var ch = state.current();
      if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
        state.advance();
        return true;
      }
      return false;
    };
    pp$8.regexp_groupSpecifier = function(state) {
      if (state.eat(63)) {
        if (this.regexp_eatGroupName(state)) {
          if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
            state.raise("Duplicate capture group name");
          }
          state.groupNames.push(state.lastStringValue);
          return;
        }
        state.raise("Invalid group");
      }
    };
    pp$8.regexp_eatGroupName = function(state) {
      state.lastStringValue = "";
      if (state.eat(60)) {
        if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
          return true;
        }
        state.raise("Invalid capture group name");
      }
      return false;
    };
    pp$8.regexp_eatRegExpIdentifierName = function(state) {
      state.lastStringValue = "";
      if (this.regexp_eatRegExpIdentifierStart(state)) {
        state.lastStringValue += codePointToString(state.lastIntValue);
        while (this.regexp_eatRegExpIdentifierPart(state)) {
          state.lastStringValue += codePointToString(state.lastIntValue);
        }
        return true;
      }
      return false;
    };
    pp$8.regexp_eatRegExpIdentifierStart = function(state) {
      var start = state.pos;
      var forceU = this.options.ecmaVersion >= 11;
      var ch = state.current(forceU);
      state.advance(forceU);
      if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
        ch = state.lastIntValue;
      }
      if (isRegExpIdentifierStart(ch)) {
        state.lastIntValue = ch;
        return true;
      }
      state.pos = start;
      return false;
    };
    function isRegExpIdentifierStart(ch) {
      return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
    }
    pp$8.regexp_eatRegExpIdentifierPart = function(state) {
      var start = state.pos;
      var forceU = this.options.ecmaVersion >= 11;
      var ch = state.current(forceU);
      state.advance(forceU);
      if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
        ch = state.lastIntValue;
      }
      if (isRegExpIdentifierPart(ch)) {
        state.lastIntValue = ch;
        return true;
      }
      state.pos = start;
      return false;
    };
    function isRegExpIdentifierPart(ch) {
      return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
    }
    pp$8.regexp_eatAtomEscape = function(state) {
      if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
        return true;
      }
      if (state.switchU) {
        if (state.current() === 99) {
          state.raise("Invalid unicode escape");
        }
        state.raise("Invalid escape");
      }
      return false;
    };
    pp$8.regexp_eatBackReference = function(state) {
      var start = state.pos;
      if (this.regexp_eatDecimalEscape(state)) {
        var n = state.lastIntValue;
        if (state.switchU) {
          if (n > state.maxBackReference) {
            state.maxBackReference = n;
          }
          return true;
        }
        if (n <= state.numCapturingParens) {
          return true;
        }
        state.pos = start;
      }
      return false;
    };
    pp$8.regexp_eatKGroupName = function(state) {
      if (state.eat(107)) {
        if (this.regexp_eatGroupName(state)) {
          state.backReferenceNames.push(state.lastStringValue);
          return true;
        }
        state.raise("Invalid named reference");
      }
      return false;
    };
    pp$8.regexp_eatCharacterEscape = function(state) {
      return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
    };
    pp$8.regexp_eatCControlLetter = function(state) {
      var start = state.pos;
      if (state.eat(99)) {
        if (this.regexp_eatControlLetter(state)) {
          return true;
        }
        state.pos = start;
      }
      return false;
    };
    pp$8.regexp_eatZero = function(state) {
      if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
        state.lastIntValue = 0;
        state.advance();
        return true;
      }
      return false;
    };
    pp$8.regexp_eatControlEscape = function(state) {
      var ch = state.current();
      if (ch === 116) {
        state.lastIntValue = 9;
        state.advance();
        return true;
      }
      if (ch === 110) {
        state.lastIntValue = 10;
        state.advance();
        return true;
      }
      if (ch === 118) {
        state.lastIntValue = 11;
        state.advance();
        return true;
      }
      if (ch === 102) {
        state.lastIntValue = 12;
        state.advance();
        return true;
      }
      if (ch === 114) {
        state.lastIntValue = 13;
        state.advance();
        return true;
      }
      return false;
    };
    pp$8.regexp_eatControlLetter = function(state) {
      var ch = state.current();
      if (isControlLetter(ch)) {
        state.lastIntValue = ch % 32;
        state.advance();
        return true;
      }
      return false;
    };
    function isControlLetter(ch) {
      return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
    }
    pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
      if (forceU === void 0)
        forceU = false;
      var start = state.pos;
      var switchU = forceU || state.switchU;
      if (state.eat(117)) {
        if (this.regexp_eatFixedHexDigits(state, 4)) {
          var lead = state.lastIntValue;
          if (switchU && lead >= 55296 && lead <= 56319) {
            var leadSurrogateEnd = state.pos;
            if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
              var trail = state.lastIntValue;
              if (trail >= 56320 && trail <= 57343) {
                state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
                return true;
              }
            }
            state.pos = leadSurrogateEnd;
            state.lastIntValue = lead;
          }
          return true;
        }
        if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
          return true;
        }
        if (switchU) {
          state.raise("Invalid unicode escape");
        }
        state.pos = start;
      }
      return false;
    };
    function isValidUnicode(ch) {
      return ch >= 0 && ch <= 1114111;
    }
    pp$8.regexp_eatIdentityEscape = function(state) {
      if (state.switchU) {
        if (this.regexp_eatSyntaxCharacter(state)) {
          return true;
        }
        if (state.eat(47)) {
          state.lastIntValue = 47;
          return true;
        }
        return false;
      }
      var ch = state.current();
      if (ch !== 99 && (!state.switchN || ch !== 107)) {
        state.lastIntValue = ch;
        state.advance();
        return true;
      }
      return false;
    };
    pp$8.regexp_eatDecimalEscape = function(state) {
      state.lastIntValue = 0;
      var ch = state.current();
      if (ch >= 49 && ch <= 57) {
        do {
          state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
          state.advance();
        } while ((ch = state.current()) >= 48 && ch <= 57);
        return true;
      }
      return false;
    };
    pp$8.regexp_eatCharacterClassEscape = function(state) {
      var ch = state.current();
      if (isCharacterClassEscape(ch)) {
        state.lastIntValue = -1;
        state.advance();
        return true;
      }
      if (state.switchU && this.options.ecmaVersion >= 9 && (ch === 80 || ch === 112)) {
        state.lastIntValue = -1;
        state.advance();
        if (state.eat(123) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(125)) {
          return true;
        }
        state.raise("Invalid property name");
      }
      return false;
    };
    function isCharacterClassEscape(ch) {
      return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
    }
    pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
      var start = state.pos;
      if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
        var name = state.lastStringValue;
        if (this.regexp_eatUnicodePropertyValue(state)) {
          var value = state.lastStringValue;
          this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
          return true;
        }
      }
      state.pos = start;
      if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
        var nameOrValue = state.lastStringValue;
        this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
        return true;
      }
      return false;
    };
    pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
      if (!has(state.unicodeProperties.nonBinary, name)) {
        state.raise("Invalid property name");
      }
      if (!state.unicodeProperties.nonBinary[name].test(value)) {
        state.raise("Invalid property value");
      }
    };
    pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
      if (!state.unicodeProperties.binary.test(nameOrValue)) {
        state.raise("Invalid property name");
      }
    };
    pp$8.regexp_eatUnicodePropertyName = function(state) {
      var ch = 0;
      state.lastStringValue = "";
      while (isUnicodePropertyNameCharacter(ch = state.current())) {
        state.lastStringValue += codePointToString(ch);
        state.advance();
      }
      return state.lastStringValue !== "";
    };
    function isUnicodePropertyNameCharacter(ch) {
      return isControlLetter(ch) || ch === 95;
    }
    pp$8.regexp_eatUnicodePropertyValue = function(state) {
      var ch = 0;
      state.lastStringValue = "";
      while (isUnicodePropertyValueCharacter(ch = state.current())) {
        state.lastStringValue += codePointToString(ch);
        state.advance();
      }
      return state.lastStringValue !== "";
    };
    function isUnicodePropertyValueCharacter(ch) {
      return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
    }
    pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
      return this.regexp_eatUnicodePropertyValue(state);
    };
    pp$8.regexp_eatCharacterClass = function(state) {
      if (state.eat(91)) {
        state.eat(94);
        this.regexp_classRanges(state);
        if (state.eat(93)) {
          return true;
        }
        state.raise("Unterminated character class");
      }
      return false;
    };
    pp$8.regexp_classRanges = function(state) {
      while (this.regexp_eatClassAtom(state)) {
        var left = state.lastIntValue;
        if (state.eat(45) && this.regexp_eatClassAtom(state)) {
          var right = state.lastIntValue;
          if (state.switchU && (left === -1 || right === -1)) {
            state.raise("Invalid character class");
          }
          if (left !== -1 && right !== -1 && left > right) {
            state.raise("Range out of order in character class");
          }
        }
      }
    };
    pp$8.regexp_eatClassAtom = function(state) {
      var start = state.pos;
      if (state.eat(92)) {
        if (this.regexp_eatClassEscape(state)) {
          return true;
        }
        if (state.switchU) {
          var ch$1 = state.current();
          if (ch$1 === 99 || isOctalDigit(ch$1)) {
            state.raise("Invalid class escape");
          }
          state.raise("Invalid escape");
        }
        state.pos = start;
      }
      var ch = state.current();
      if (ch !== 93) {
        state.lastIntValue = ch;
        state.advance();
        return true;
      }
      return false;
    };
    pp$8.regexp_eatClassEscape = function(state) {
      var start = state.pos;
      if (state.eat(98)) {
        state.lastIntValue = 8;
        return true;
      }
      if (state.switchU && state.eat(45)) {
        state.lastIntValue = 45;
        return true;
      }
      if (!state.switchU && state.eat(99)) {
        if (this.regexp_eatClassControlLetter(state)) {
          return true;
        }
        state.pos = start;
      }
      return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
    };
    pp$8.regexp_eatClassControlLetter = function(state) {
      var ch = state.current();
      if (isDecimalDigit(ch) || ch === 95) {
        state.lastIntValue = ch % 32;
        state.advance();
        return true;
      }
      return false;
    };
    pp$8.regexp_eatHexEscapeSequence = function(state) {
      var start = state.pos;
      if (state.eat(120)) {
        if (this.regexp_eatFixedHexDigits(state, 2)) {
          return true;
        }
        if (state.switchU) {
          state.raise("Invalid escape");
        }
        state.pos = start;
      }
      return false;
    };
    pp$8.regexp_eatDecimalDigits = function(state) {
      var start = state.pos;
      var ch = 0;
      state.lastIntValue = 0;
      while (isDecimalDigit(ch = state.current())) {
        state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
        state.advance();
      }
      return state.pos !== start;
    };
    function isDecimalDigit(ch) {
      return ch >= 48 && ch <= 57;
    }
    pp$8.regexp_eatHexDigits = function(state) {
      var start = state.pos;
      var ch = 0;
      state.lastIntValue = 0;
      while (isHexDigit(ch = state.current())) {
        state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
        state.advance();
      }
      return state.pos !== start;
    };
    function isHexDigit(ch) {
      return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
    }
    function hexToInt(ch) {
      if (ch >= 65 && ch <= 70) {
        return 10 + (ch - 65);
      }
      if (ch >= 97 && ch <= 102) {
        return 10 + (ch - 97);
      }
      return ch - 48;
    }
    pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
      if (this.regexp_eatOctalDigit(state)) {
        var n1 = state.lastIntValue;
        if (this.regexp_eatOctalDigit(state)) {
          var n2 = state.lastIntValue;
          if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
            state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
          } else {
            state.lastIntValue = n1 * 8 + n2;
          }
        } else {
          state.lastIntValue = n1;
        }
        return true;
      }
      return false;
    };
    pp$8.regexp_eatOctalDigit = function(state) {
      var ch = state.current();
      if (isOctalDigit(ch)) {
        state.lastIntValue = ch - 48;
        state.advance();
        return true;
      }
      state.lastIntValue = 0;
      return false;
    };
    function isOctalDigit(ch) {
      return ch >= 48 && ch <= 55;
    }
    pp$8.regexp_eatFixedHexDigits = function(state, length) {
      var start = state.pos;
      state.lastIntValue = 0;
      for (var i = 0; i < length; ++i) {
        var ch = state.current();
        if (!isHexDigit(ch)) {
          state.pos = start;
          return false;
        }
        state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
        state.advance();
      }
      return true;
    };
    var Token = function Token2(p) {
      this.type = p.type;
      this.value = p.value;
      this.start = p.start;
      this.end = p.end;
      if (p.options.locations) {
        this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
      }
      if (p.options.ranges) {
        this.range = [p.start, p.end];
      }
    };
    var pp$9 = Parser.prototype;
    pp$9.next = function(ignoreEscapeSequenceInKeyword) {
      if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
        this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
      }
      if (this.options.onToken) {
        this.options.onToken(new Token(this));
      }
      this.lastTokEnd = this.end;
      this.lastTokStart = this.start;
      this.lastTokEndLoc = this.endLoc;
      this.lastTokStartLoc = this.startLoc;
      this.nextToken();
    };
    pp$9.getToken = function() {
      this.next();
      return new Token(this);
    };
    if (typeof Symbol !== "undefined") {
      pp$9[Symbol.iterator] = function() {
        var this$1 = this;
        return {
          next: function() {
            var token = this$1.getToken();
            return {
              done: token.type === types.eof,
              value: token
            };
          }
        };
      };
    }
    pp$9.curContext = function() {
      return this.context[this.context.length - 1];
    };
    pp$9.nextToken = function() {
      var curContext = this.curContext();
      if (!curContext || !curContext.preserveSpace) {
        this.skipSpace();
      }
      this.start = this.pos;
      if (this.options.locations) {
        this.startLoc = this.curPosition();
      }
      if (this.pos >= this.input.length) {
        return this.finishToken(types.eof);
      }
      if (curContext.override) {
        return curContext.override(this);
      } else {
        this.readToken(this.fullCharCodeAtPos());
      }
    };
    pp$9.readToken = function(code) {
      if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
        return this.readWord();
      }
      return this.getTokenFromCode(code);
    };
    pp$9.fullCharCodeAtPos = function() {
      var code = this.input.charCodeAt(this.pos);
      if (code <= 55295 || code >= 57344) {
        return code;
      }
      var next = this.input.charCodeAt(this.pos + 1);
      return (code << 10) + next - 56613888;
    };
    pp$9.skipBlockComment = function() {
      var startLoc = this.options.onComment && this.curPosition();
      var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
      if (end === -1) {
        this.raise(this.pos - 2, "Unterminated comment");
      }
      this.pos = end + 2;
      if (this.options.locations) {
        lineBreakG.lastIndex = start;
        var match;
        while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
          ++this.curLine;
          this.lineStart = match.index + match[0].length;
        }
      }
      if (this.options.onComment) {
        this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
      }
    };
    pp$9.skipLineComment = function(startSkip) {
      var start = this.pos;
      var startLoc = this.options.onComment && this.curPosition();
      var ch = this.input.charCodeAt(this.pos += startSkip);
      while (this.pos < this.input.length && !isNewLine(ch)) {
        ch = this.input.charCodeAt(++this.pos);
      }
      if (this.options.onComment) {
        this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
      }
    };
    pp$9.skipSpace = function() {
      loop:
        while (this.pos < this.input.length) {
          var ch = this.input.charCodeAt(this.pos);
          switch (ch) {
            case 32:
            case 160:
              ++this.pos;
              break;
            case 13:
              if (this.input.charCodeAt(this.pos + 1) === 10) {
                ++this.pos;
              }
            case 10:
            case 8232:
            case 8233:
              ++this.pos;
              if (this.options.locations) {
                ++this.curLine;
                this.lineStart = this.pos;
              }
              break;
            case 47:
              switch (this.input.charCodeAt(this.pos + 1)) {
                case 42:
                  this.skipBlockComment();
                  break;
                case 47:
                  this.skipLineComment(2);
                  break;
                default:
                  break loop;
              }
              break;
            default:
              if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
                ++this.pos;
              } else {
                break loop;
              }
          }
        }
    };
    pp$9.finishToken = function(type, val) {
      this.end = this.pos;
      if (this.options.locations) {
        this.endLoc = this.curPosition();
      }
      var prevType = this.type;
      this.type = type;
      this.value = val;
      this.updateContext(prevType);
    };
    pp$9.readToken_dot = function() {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next >= 48 && next <= 57) {
        return this.readNumber(true);
      }
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
        this.pos += 3;
        return this.finishToken(types.ellipsis);
      } else {
        ++this.pos;
        return this.finishToken(types.dot);
      }
    };
    pp$9.readToken_slash = function() {
      var next = this.input.charCodeAt(this.pos + 1);
      if (this.exprAllowed) {
        ++this.pos;
        return this.readRegexp();
      }
      if (next === 61) {
        return this.finishOp(types.assign, 2);
      }
      return this.finishOp(types.slash, 1);
    };
    pp$9.readToken_mult_modulo_exp = function(code) {
      var next = this.input.charCodeAt(this.pos + 1);
      var size = 1;
      var tokentype = code === 42 ? types.star : types.modulo;
      if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
        ++size;
        tokentype = types.starstar;
        next = this.input.charCodeAt(this.pos + 2);
      }
      if (next === 61) {
        return this.finishOp(types.assign, size + 1);
      }
      return this.finishOp(tokentype, size);
    };
    pp$9.readToken_pipe_amp = function(code) {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === code) {
        if (this.options.ecmaVersion >= 12) {
          var next2 = this.input.charCodeAt(this.pos + 2);
          if (next2 === 61) {
            return this.finishOp(types.assign, 3);
          }
        }
        return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
      }
      if (next === 61) {
        return this.finishOp(types.assign, 2);
      }
      return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
    };
    pp$9.readToken_caret = function() {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 61) {
        return this.finishOp(types.assign, 2);
      }
      return this.finishOp(types.bitwiseXOR, 1);
    };
    pp$9.readToken_plus_min = function(code) {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === code) {
        if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
          this.skipLineComment(3);
          this.skipSpace();
          return this.nextToken();
        }
        return this.finishOp(types.incDec, 2);
      }
      if (next === 61) {
        return this.finishOp(types.assign, 2);
      }
      return this.finishOp(types.plusMin, 1);
    };
    pp$9.readToken_lt_gt = function(code) {
      var next = this.input.charCodeAt(this.pos + 1);
      var size = 1;
      if (next === code) {
        size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
        if (this.input.charCodeAt(this.pos + size) === 61) {
          return this.finishOp(types.assign, size + 1);
        }
        return this.finishOp(types.bitShift, size);
      }
      if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
        this.skipLineComment(4);
        this.skipSpace();
        return this.nextToken();
      }
      if (next === 61) {
        size = 2;
      }
      return this.finishOp(types.relational, size);
    };
    pp$9.readToken_eq_excl = function(code) {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 61) {
        return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
      }
      if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
        this.pos += 2;
        return this.finishToken(types.arrow);
      }
      return this.finishOp(code === 61 ? types.eq : types.prefix, 1);
    };
    pp$9.readToken_question = function() {
      var ecmaVersion = this.options.ecmaVersion;
      if (ecmaVersion >= 11) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 46) {
          var next2 = this.input.charCodeAt(this.pos + 2);
          if (next2 < 48 || next2 > 57) {
            return this.finishOp(types.questionDot, 2);
          }
        }
        if (next === 63) {
          if (ecmaVersion >= 12) {
            var next2$1 = this.input.charCodeAt(this.pos + 2);
            if (next2$1 === 61) {
              return this.finishOp(types.assign, 3);
            }
          }
          return this.finishOp(types.coalesce, 2);
        }
      }
      return this.finishOp(types.question, 1);
    };
    pp$9.getTokenFromCode = function(code) {
      switch (code) {
        case 46:
          return this.readToken_dot();
        case 40:
          ++this.pos;
          return this.finishToken(types.parenL);
        case 41:
          ++this.pos;
          return this.finishToken(types.parenR);
        case 59:
          ++this.pos;
          return this.finishToken(types.semi);
        case 44:
          ++this.pos;
          return this.finishToken(types.comma);
        case 91:
          ++this.pos;
          return this.finishToken(types.bracketL);
        case 93:
          ++this.pos;
          return this.finishToken(types.bracketR);
        case 123:
          ++this.pos;
          return this.finishToken(types.braceL);
        case 125:
          ++this.pos;
          return this.finishToken(types.braceR);
        case 58:
          ++this.pos;
          return this.finishToken(types.colon);
        case 96:
          if (this.options.ecmaVersion < 6) {
            break;
          }
          ++this.pos;
          return this.finishToken(types.backQuote);
        case 48:
          var next = this.input.charCodeAt(this.pos + 1);
          if (next === 120 || next === 88) {
            return this.readRadixNumber(16);
          }
          if (this.options.ecmaVersion >= 6) {
            if (next === 111 || next === 79) {
              return this.readRadixNumber(8);
            }
            if (next === 98 || next === 66) {
              return this.readRadixNumber(2);
            }
          }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return this.readNumber(false);
        case 34:
        case 39:
          return this.readString(code);
        case 47:
          return this.readToken_slash();
        case 37:
        case 42:
          return this.readToken_mult_modulo_exp(code);
        case 124:
        case 38:
          return this.readToken_pipe_amp(code);
        case 94:
          return this.readToken_caret();
        case 43:
        case 45:
          return this.readToken_plus_min(code);
        case 60:
        case 62:
          return this.readToken_lt_gt(code);
        case 61:
        case 33:
          return this.readToken_eq_excl(code);
        case 63:
          return this.readToken_question();
        case 126:
          return this.finishOp(types.prefix, 1);
      }
      this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
    };
    pp$9.finishOp = function(type, size) {
      var str = this.input.slice(this.pos, this.pos + size);
      this.pos += size;
      return this.finishToken(type, str);
    };
    pp$9.readRegexp = function() {
      var escaped, inClass, start = this.pos;
      for (; ; ) {
        if (this.pos >= this.input.length) {
          this.raise(start, "Unterminated regular expression");
        }
        var ch = this.input.charAt(this.pos);
        if (lineBreak.test(ch)) {
          this.raise(start, "Unterminated regular expression");
        }
        if (!escaped) {
          if (ch === "[") {
            inClass = true;
          } else if (ch === "]" && inClass) {
            inClass = false;
          } else if (ch === "/" && !inClass) {
            break;
          }
          escaped = ch === "\\";
        } else {
          escaped = false;
        }
        ++this.pos;
      }
      var pattern = this.input.slice(start, this.pos);
      ++this.pos;
      var flagsStart = this.pos;
      var flags = this.readWord1();
      if (this.containsEsc) {
        this.unexpected(flagsStart);
      }
      var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
      state.reset(start, pattern, flags);
      this.validateRegExpFlags(state);
      this.validateRegExpPattern(state);
      var value = null;
      try {
        value = new RegExp(pattern, flags);
      } catch (e) {
      }
      return this.finishToken(types.regexp, {pattern, flags, value});
    };
    pp$9.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
      var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
      var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
      var start = this.pos, total = 0, lastCode = 0;
      for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
        var code = this.input.charCodeAt(this.pos), val = void 0;
        if (allowSeparators && code === 95) {
          if (isLegacyOctalNumericLiteral) {
            this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
          }
          if (lastCode === 95) {
            this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
          }
          if (i === 0) {
            this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
          }
          lastCode = code;
          continue;
        }
        if (code >= 97) {
          val = code - 97 + 10;
        } else if (code >= 65) {
          val = code - 65 + 10;
        } else if (code >= 48 && code <= 57) {
          val = code - 48;
        } else {
          val = Infinity;
        }
        if (val >= radix) {
          break;
        }
        lastCode = code;
        total = total * radix + val;
      }
      if (allowSeparators && lastCode === 95) {
        this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
      }
      if (this.pos === start || len != null && this.pos - start !== len) {
        return null;
      }
      return total;
    };
    function stringToNumber(str, isLegacyOctalNumericLiteral) {
      if (isLegacyOctalNumericLiteral) {
        return parseInt(str, 8);
      }
      return parseFloat(str.replace(/_/g, ""));
    }
    function stringToBigInt(str) {
      if (typeof BigInt !== "function") {
        return null;
      }
      return BigInt(str.replace(/_/g, ""));
    }
    pp$9.readRadixNumber = function(radix) {
      var start = this.pos;
      this.pos += 2;
      var val = this.readInt(radix);
      if (val == null) {
        this.raise(this.start + 2, "Expected number in radix " + radix);
      }
      if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
        val = stringToBigInt(this.input.slice(start, this.pos));
        ++this.pos;
      } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
        this.raise(this.pos, "Identifier directly after number");
      }
      return this.finishToken(types.num, val);
    };
    pp$9.readNumber = function(startsWithDot) {
      var start = this.pos;
      if (!startsWithDot && this.readInt(10, void 0, true) === null) {
        this.raise(start, "Invalid number");
      }
      var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
      if (octal && this.strict) {
        this.raise(start, "Invalid number");
      }
      var next = this.input.charCodeAt(this.pos);
      if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
        var val$1 = stringToBigInt(this.input.slice(start, this.pos));
        ++this.pos;
        if (isIdentifierStart(this.fullCharCodeAtPos())) {
          this.raise(this.pos, "Identifier directly after number");
        }
        return this.finishToken(types.num, val$1);
      }
      if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
        octal = false;
      }
      if (next === 46 && !octal) {
        ++this.pos;
        this.readInt(10);
        next = this.input.charCodeAt(this.pos);
      }
      if ((next === 69 || next === 101) && !octal) {
        next = this.input.charCodeAt(++this.pos);
        if (next === 43 || next === 45) {
          ++this.pos;
        }
        if (this.readInt(10) === null) {
          this.raise(start, "Invalid number");
        }
      }
      if (isIdentifierStart(this.fullCharCodeAtPos())) {
        this.raise(this.pos, "Identifier directly after number");
      }
      var val = stringToNumber(this.input.slice(start, this.pos), octal);
      return this.finishToken(types.num, val);
    };
    pp$9.readCodePoint = function() {
      var ch = this.input.charCodeAt(this.pos), code;
      if (ch === 123) {
        if (this.options.ecmaVersion < 6) {
          this.unexpected();
        }
        var codePos = ++this.pos;
        code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
        ++this.pos;
        if (code > 1114111) {
          this.invalidStringToken(codePos, "Code point out of bounds");
        }
      } else {
        code = this.readHexChar(4);
      }
      return code;
    };
    function codePointToString$1(code) {
      if (code <= 65535) {
        return String.fromCharCode(code);
      }
      code -= 65536;
      return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
    }
    pp$9.readString = function(quote) {
      var out = "", chunkStart = ++this.pos;
      for (; ; ) {
        if (this.pos >= this.input.length) {
          this.raise(this.start, "Unterminated string constant");
        }
        var ch = this.input.charCodeAt(this.pos);
        if (ch === quote) {
          break;
        }
        if (ch === 92) {
          out += this.input.slice(chunkStart, this.pos);
          out += this.readEscapedChar(false);
          chunkStart = this.pos;
        } else {
          if (isNewLine(ch, this.options.ecmaVersion >= 10)) {
            this.raise(this.start, "Unterminated string constant");
          }
          ++this.pos;
        }
      }
      out += this.input.slice(chunkStart, this.pos++);
      return this.finishToken(types.string, out);
    };
    var INVALID_TEMPLATE_ESCAPE_ERROR = {};
    pp$9.tryReadTemplateToken = function() {
      this.inTemplateElement = true;
      try {
        this.readTmplToken();
      } catch (err) {
        if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
          this.readInvalidTemplateToken();
        } else {
          throw err;
        }
      }
      this.inTemplateElement = false;
    };
    pp$9.invalidStringToken = function(position, message) {
      if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
        throw INVALID_TEMPLATE_ESCAPE_ERROR;
      } else {
        this.raise(position, message);
      }
    };
    pp$9.readTmplToken = function() {
      var out = "", chunkStart = this.pos;
      for (; ; ) {
        if (this.pos >= this.input.length) {
          this.raise(this.start, "Unterminated template");
        }
        var ch = this.input.charCodeAt(this.pos);
        if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
          if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
            if (ch === 36) {
              this.pos += 2;
              return this.finishToken(types.dollarBraceL);
            } else {
              ++this.pos;
              return this.finishToken(types.backQuote);
            }
          }
          out += this.input.slice(chunkStart, this.pos);
          return this.finishToken(types.template, out);
        }
        if (ch === 92) {
          out += this.input.slice(chunkStart, this.pos);
          out += this.readEscapedChar(true);
          chunkStart = this.pos;
        } else if (isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.pos);
          ++this.pos;
          switch (ch) {
            case 13:
              if (this.input.charCodeAt(this.pos) === 10) {
                ++this.pos;
              }
            case 10:
              out += "\n";
              break;
            default:
              out += String.fromCharCode(ch);
              break;
          }
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          chunkStart = this.pos;
        } else {
          ++this.pos;
        }
      }
    };
    pp$9.readInvalidTemplateToken = function() {
      for (; this.pos < this.input.length; this.pos++) {
        switch (this.input[this.pos]) {
          case "\\":
            ++this.pos;
            break;
          case "$":
            if (this.input[this.pos + 1] !== "{") {
              break;
            }
          case "`":
            return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos));
        }
      }
      this.raise(this.start, "Unterminated template");
    };
    pp$9.readEscapedChar = function(inTemplate) {
      var ch = this.input.charCodeAt(++this.pos);
      ++this.pos;
      switch (ch) {
        case 110:
          return "\n";
        case 114:
          return "\r";
        case 120:
          return String.fromCharCode(this.readHexChar(2));
        case 117:
          return codePointToString$1(this.readCodePoint());
        case 116:
          return "	";
        case 98:
          return "\b";
        case 118:
          return "\v";
        case 102:
          return "\f";
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
          }
        case 10:
          if (this.options.locations) {
            this.lineStart = this.pos;
            ++this.curLine;
          }
          return "";
        case 56:
        case 57:
          if (inTemplate) {
            var codePos = this.pos - 1;
            this.invalidStringToken(codePos, "Invalid escape sequence in template string");
            return null;
          }
        default:
          if (ch >= 48 && ch <= 55) {
            var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
            var octal = parseInt(octalStr, 8);
            if (octal > 255) {
              octalStr = octalStr.slice(0, -1);
              octal = parseInt(octalStr, 8);
            }
            this.pos += octalStr.length - 1;
            ch = this.input.charCodeAt(this.pos);
            if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
              this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? "Octal literal in template string" : "Octal literal in strict mode");
            }
            return String.fromCharCode(octal);
          }
          if (isNewLine(ch)) {
            return "";
          }
          return String.fromCharCode(ch);
      }
    };
    pp$9.readHexChar = function(len) {
      var codePos = this.pos;
      var n = this.readInt(16, len);
      if (n === null) {
        this.invalidStringToken(codePos, "Bad character escape sequence");
      }
      return n;
    };
    pp$9.readWord1 = function() {
      this.containsEsc = false;
      var word = "", first = true, chunkStart = this.pos;
      var astral = this.options.ecmaVersion >= 6;
      while (this.pos < this.input.length) {
        var ch = this.fullCharCodeAtPos();
        if (isIdentifierChar(ch, astral)) {
          this.pos += ch <= 65535 ? 1 : 2;
        } else if (ch === 92) {
          this.containsEsc = true;
          word += this.input.slice(chunkStart, this.pos);
          var escStart = this.pos;
          if (this.input.charCodeAt(++this.pos) !== 117) {
            this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
          }
          ++this.pos;
          var esc = this.readCodePoint();
          if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
            this.invalidStringToken(escStart, "Invalid Unicode escape");
          }
          word += codePointToString$1(esc);
          chunkStart = this.pos;
        } else {
          break;
        }
        first = false;
      }
      return word + this.input.slice(chunkStart, this.pos);
    };
    pp$9.readWord = function() {
      var word = this.readWord1();
      var type = types.name;
      if (this.keywords.test(word)) {
        type = keywords$1[word];
      }
      return this.finishToken(type, word);
    };
    var version = "7.4.1";
    Parser.acorn = {
      Parser,
      version,
      defaultOptions,
      Position,
      SourceLocation,
      getLineInfo,
      Node,
      TokenType,
      tokTypes: types,
      keywordTypes: keywords$1,
      TokContext,
      tokContexts: types$1,
      isIdentifierChar,
      isIdentifierStart,
      Token,
      isNewLine,
      lineBreak,
      lineBreakG,
      nonASCIIwhitespace
    };
    function parse2(input, options) {
      return Parser.parse(input, options);
    }
    function parseExpressionAt(input, pos, options) {
      return Parser.parseExpressionAt(input, pos, options);
    }
    function tokenizer(input, options) {
      return Parser.tokenizer(input, options);
    }
    exports2.Node = Node;
    exports2.Parser = Parser;
    exports2.Position = Position;
    exports2.SourceLocation = SourceLocation;
    exports2.TokContext = TokContext;
    exports2.Token = Token;
    exports2.TokenType = TokenType;
    exports2.defaultOptions = defaultOptions;
    exports2.getLineInfo = getLineInfo;
    exports2.isIdentifierChar = isIdentifierChar;
    exports2.isIdentifierStart = isIdentifierStart;
    exports2.isNewLine = isNewLine;
    exports2.keywordTypes = keywords$1;
    exports2.lineBreak = lineBreak;
    exports2.lineBreakG = lineBreakG;
    exports2.nonASCIIwhitespace = nonASCIIwhitespace;
    exports2.parse = parse2;
    exports2.parseExpressionAt = parseExpressionAt;
    exports2.tokContexts = types$1;
    exports2.tokTypes = types;
    exports2.tokenizer = tokenizer;
    exports2.version = version;
    Object.defineProperty(exports2, "__esModule", {value: true});
  });
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS((exports, module) => {
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  "use strict";
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
});

// node_modules/is-expression/index.js
var require_is_expression = __commonJS((exports, module) => {
  "use strict";
  var acorn = require_acorn();
  var objectAssign = require_object_assign();
  module.exports = isExpression;
  var DEFAULT_OPTIONS = {
    throw: false,
    strict: false,
    lineComment: false
  };
  function isExpression(src, options) {
    options = objectAssign({}, DEFAULT_OPTIONS, options);
    try {
      var parser = new acorn.Parser(options, src, 0);
      if (options.strict) {
        parser.strict = true;
      }
      if (!options.lineComment) {
        parser.skipLineComment = function(startSkip) {
          this.raise(this.pos, "Line comments not allowed in an expression");
        };
      }
      parser.nextToken();
      parser.parseExpression();
      if (parser.type !== acorn.tokTypes.eof) {
        parser.unexpected();
      }
    } catch (ex) {
      if (!options.throw) {
        return false;
      }
      throw ex;
    }
    return true;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS((exports, module) => {
  "use strict";
  module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (sym in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS((exports, module) => {
  "use strict";
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = require_shams();
  module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS((exports, module) => {
  "use strict";
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var slice = Array.prototype.slice;
  var toStr = Object.prototype.toString;
  var funcType = "[object Function]";
  module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.call(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(this, args.concat(slice.call(arguments)));
        if (Object(result) === result) {
          return result;
        }
        return this;
      } else {
        return target.apply(that, args.concat(slice.call(arguments)));
      }
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs.push("$" + i);
    }
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS((exports, module) => {
  "use strict";
  var implementation = require_implementation();
  module.exports = Function.prototype.bind || implementation;
});

// node_modules/has/src/index.js
var require_src = __commonJS((exports, module) => {
  "use strict";
  var bind = require_function_bind();
  module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS((exports, module) => {
  "use strict";
  var undefined2;
  var $SyntaxError = SyntaxError;
  var $Function = Function;
  var $TypeError = TypeError;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
    try {
      $gOPD({}, "");
    } catch (e) {
      $gOPD = null;
    }
  }
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols = require_has_symbols()();
  var getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
  };
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
  var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
    "%AsyncFromSyncIteratorPrototype%": undefined2,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
    "%JSON%": typeof JSON === "object" ? JSON : undefined2,
    "%Map%": typeof Map === "undefined" ? undefined2 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined2 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
    "%Symbol%": hasSymbols ? Symbol : undefined2,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
  };
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen) {
        value = getProto(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind = require_function_bind();
  var hasOwn = require_src();
  var $concat = bind.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
  var $replace = bind.call(Function.call, String.prototype.replace);
  var $strSlice = bind.call(Function.call, String.prototype.slice);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void 0;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS((exports, module) => {
  "use strict";
  var bind = require_function_bind();
  var GetIntrinsic = require_get_intrinsic();
  var $apply = GetIntrinsic("%Function.prototype.apply%");
  var $call = GetIntrinsic("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
  var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
  var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
  var $max = GetIntrinsic("%Math.max%");
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", {value: 1});
    } catch (e) {
      $defineProperty = null;
    }
  }
  module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
      var desc = $gOPD(func, "length");
      if (desc.configurable) {
        $defineProperty(func, "length", {value: 1 + $max(0, originalFunction.length - (arguments.length - 1))});
      }
    }
    return func;
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(module.exports, "apply", {value: applyBind});
  } else {
    module.exports.apply = applyBind;
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS((exports, module) => {
  "use strict";
  var GetIntrinsic = require_get_intrinsic();
  var callBind = require_call_bind();
  var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
  module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBind(intrinsic);
    }
    return intrinsic;
  };
});

// node_modules/is-regex/index.js
var require_is_regex = __commonJS((exports, module) => {
  "use strict";
  var callBound = require_callBound();
  var hasSymbols = require_has_symbols()();
  var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === "symbol";
  var has;
  var $exec;
  var isRegexMarker;
  var badStringifier;
  if (hasToStringTag) {
    has = callBound("Object.prototype.hasOwnProperty");
    $exec = callBound("RegExp.prototype.exec");
    isRegexMarker = {};
    throwRegexMarker = function() {
      throw isRegexMarker;
    };
    badStringifier = {
      toString: throwRegexMarker,
      valueOf: throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === "symbol") {
      badStringifier[Symbol.toPrimitive] = throwRegexMarker;
    }
  }
  var throwRegexMarker;
  var $toString = callBound("Object.prototype.toString");
  var gOPD = Object.getOwnPropertyDescriptor;
  var regexClass = "[object RegExp]";
  module.exports = hasToStringTag ? function isRegex(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    var descriptor = gOPD(value, "lastIndex");
    var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
    if (!hasLastIndexDataProperty) {
      return false;
    }
    try {
      $exec(value, badStringifier);
    } catch (e) {
      return e === isRegexMarker;
    }
  } : function isRegex(value) {
    if (!value || typeof value !== "object" && typeof value !== "function") {
      return false;
    }
    return $toString(value) === regexClass;
  };
});

// node_modules/character-parser/index.js
var require_character_parser = __commonJS((exports, module) => {
  "use strict";
  var objIsRegex = require_is_regex();
  exports = module.exports = parse2;
  var TOKEN_TYPES = exports.TOKEN_TYPES = {
    LINE_COMMENT: "//",
    BLOCK_COMMENT: "/**/",
    SINGLE_QUOTE: "'",
    DOUBLE_QUOTE: '"',
    TEMPLATE_QUOTE: "`",
    REGEXP: "//g"
  };
  var BRACKETS = exports.BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  var BRACKETS_REVERSED = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  exports.parse = parse2;
  function parse2(src, state, options) {
    options = options || {};
    state = state || exports.defaultState();
    var start = options.start || 0;
    var end = options.end || src.length;
    var index = start;
    while (index < end) {
      try {
        parseChar(src[index], state);
      } catch (ex) {
        ex.index = index;
        throw ex;
      }
      index++;
    }
    return state;
  }
  exports.parseUntil = parseUntil;
  function parseUntil(src, delimiter, options) {
    options = options || {};
    var start = options.start || 0;
    var index = start;
    var state = exports.defaultState();
    while (index < src.length) {
      if ((options.ignoreNesting || !state.isNesting(options)) && matches(src, delimiter, index)) {
        var end = index;
        return {
          start,
          end,
          src: src.substring(start, end)
        };
      }
      try {
        parseChar(src[index], state);
      } catch (ex) {
        ex.index = index;
        throw ex;
      }
      index++;
    }
    var err = new Error("The end of the string was reached with no closing bracket found.");
    err.code = "CHARACTER_PARSER:END_OF_STRING_REACHED";
    err.index = index;
    throw err;
  }
  exports.parseChar = parseChar;
  function parseChar(character, state) {
    if (character.length !== 1) {
      var err = new Error("Character must be a string of length 1");
      err.name = "InvalidArgumentError";
      err.code = "CHARACTER_PARSER:CHAR_LENGTH_NOT_ONE";
      throw err;
    }
    state = state || exports.defaultState();
    state.src += character;
    var wasComment = state.isComment();
    var lastChar = state.history ? state.history[0] : "";
    if (state.regexpStart) {
      if (character === "/" || character == "*") {
        state.stack.pop();
      }
      state.regexpStart = false;
    }
    switch (state.current()) {
      case TOKEN_TYPES.LINE_COMMENT:
        if (character === "\n") {
          state.stack.pop();
        }
        break;
      case TOKEN_TYPES.BLOCK_COMMENT:
        if (state.lastChar === "*" && character === "/") {
          state.stack.pop();
        }
        break;
      case TOKEN_TYPES.SINGLE_QUOTE:
        if (character === "'" && !state.escaped) {
          state.stack.pop();
        } else if (character === "\\" && !state.escaped) {
          state.escaped = true;
        } else {
          state.escaped = false;
        }
        break;
      case TOKEN_TYPES.DOUBLE_QUOTE:
        if (character === '"' && !state.escaped) {
          state.stack.pop();
        } else if (character === "\\" && !state.escaped) {
          state.escaped = true;
        } else {
          state.escaped = false;
        }
        break;
      case TOKEN_TYPES.TEMPLATE_QUOTE:
        if (character === "`" && !state.escaped) {
          state.stack.pop();
          state.hasDollar = false;
        } else if (character === "\\" && !state.escaped) {
          state.escaped = true;
          state.hasDollar = false;
        } else if (character === "$" && !state.escaped) {
          state.hasDollar = true;
        } else if (character === "{" && state.hasDollar) {
          state.stack.push(BRACKETS[character]);
        } else {
          state.escaped = false;
          state.hasDollar = false;
        }
        break;
      case TOKEN_TYPES.REGEXP:
        if (character === "/" && !state.escaped) {
          state.stack.pop();
        } else if (character === "\\" && !state.escaped) {
          state.escaped = true;
        } else {
          state.escaped = false;
        }
        break;
      default:
        if (character in BRACKETS) {
          state.stack.push(BRACKETS[character]);
        } else if (character in BRACKETS_REVERSED) {
          if (state.current() !== character) {
            var err = new SyntaxError("Mismatched Bracket: " + character);
            err.code = "CHARACTER_PARSER:MISMATCHED_BRACKET";
            throw err;
          }
          ;
          state.stack.pop();
        } else if (lastChar === "/" && character === "/") {
          state.history = state.history.substr(1);
          state.stack.push(TOKEN_TYPES.LINE_COMMENT);
        } else if (lastChar === "/" && character === "*") {
          state.history = state.history.substr(1);
          state.stack.push(TOKEN_TYPES.BLOCK_COMMENT);
        } else if (character === "/" && isRegexp(state.history)) {
          state.stack.push(TOKEN_TYPES.REGEXP);
          state.regexpStart = true;
        } else if (character === "'") {
          state.stack.push(TOKEN_TYPES.SINGLE_QUOTE);
        } else if (character === '"') {
          state.stack.push(TOKEN_TYPES.DOUBLE_QUOTE);
        } else if (character === "`") {
          state.stack.push(TOKEN_TYPES.TEMPLATE_QUOTE);
        }
        break;
    }
    if (!state.isComment() && !wasComment) {
      state.history = character + state.history;
    }
    state.lastChar = character;
    return state;
  }
  exports.defaultState = function() {
    return new State();
  };
  function State() {
    this.stack = [];
    this.regexpStart = false;
    this.escaped = false;
    this.hasDollar = false;
    this.src = "";
    this.history = "";
    this.lastChar = "";
  }
  State.prototype.current = function() {
    return this.stack[this.stack.length - 1];
  };
  State.prototype.isString = function() {
    return this.current() === TOKEN_TYPES.SINGLE_QUOTE || this.current() === TOKEN_TYPES.DOUBLE_QUOTE || this.current() === TOKEN_TYPES.TEMPLATE_QUOTE;
  };
  State.prototype.isComment = function() {
    return this.current() === TOKEN_TYPES.LINE_COMMENT || this.current() === TOKEN_TYPES.BLOCK_COMMENT;
  };
  State.prototype.isNesting = function(opts) {
    if (opts && opts.ignoreLineComment && this.stack.length === 1 && this.stack[0] === TOKEN_TYPES.LINE_COMMENT) {
      return false;
    }
    return !!this.stack.length;
  };
  function matches(str, matcher, i) {
    if (objIsRegex(matcher)) {
      return matcher.test(str.substr(i || 0));
    } else {
      return str.substr(i || 0, matcher.length) === matcher;
    }
  }
  exports.isPunctuator = isPunctuator;
  function isPunctuator(c) {
    if (!c)
      return true;
    var code = c.charCodeAt(0);
    switch (code) {
      case 46:
      case 40:
      case 41:
      case 59:
      case 44:
      case 123:
      case 125:
      case 91:
      case 93:
      case 58:
      case 63:
      case 126:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 47:
      case 60:
      case 62:
      case 94:
      case 124:
      case 33:
      case 61:
        return true;
      default:
        return false;
    }
  }
  exports.isKeyword = isKeyword;
  function isKeyword(id) {
    return id === "if" || id === "in" || id === "do" || id === "var" || id === "for" || id === "new" || id === "try" || id === "let" || id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum" || id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super" || id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import" || id === "default" || id === "finally" || id === "extends" || id === "function" || id === "continue" || id === "debugger" || id === "package" || id === "private" || id === "interface" || id === "instanceof" || id === "implements" || id === "protected" || id === "public" || id === "static";
  }
  function isRegexp(history) {
    history = history.replace(/^\s*/, "");
    if (history[0] === ")")
      return false;
    if (history[0] === "}")
      return true;
    if (isPunctuator(history[0]))
      return true;
    if (/^\w+\b/.test(history) && isKeyword(/^\w+\b/.exec(history)[0].split("").reverse().join("")))
      return true;
    return false;
  }
});

// node_modules/pug-lexer/index.js
var require_pug_lexer = __commonJS((exports, module) => {
  "use strict";
  var assert = require("assert");
  var isExpression = require_is_expression();
  var characterParser = require_character_parser();
  var error = require_pug_error();
  module.exports = lex2;
  module.exports.Lexer = Lexer;
  function lex2(str, options) {
    var lexer = new Lexer(str, options);
    return JSON.parse(JSON.stringify(lexer.getTokens()));
  }
  function Lexer(str, options) {
    options = options || {};
    if (typeof str !== "string") {
      throw new Error('Expected source code to be a string but got "' + typeof str + '"');
    }
    if (typeof options !== "object") {
      throw new Error('Expected "options" to be an object but got "' + typeof options + '"');
    }
    str = str.replace(/^\uFEFF/, "");
    this.input = str.replace(/\r\n|\r/g, "\n");
    this.originalInput = this.input;
    this.filename = options.filename;
    this.interpolated = options.interpolated || false;
    this.lineno = options.startingLine || 1;
    this.colno = options.startingColumn || 1;
    this.plugins = options.plugins || [];
    this.indentStack = [0];
    this.indentRe = null;
    this.interpolationAllowed = true;
    this.whitespaceRe = /[ \n\t]/;
    this.tokens = [];
    this.ended = false;
  }
  Lexer.prototype = {
    constructor: Lexer,
    error: function(code, message) {
      var err = error(code, message, {
        line: this.lineno,
        column: this.colno,
        filename: this.filename,
        src: this.originalInput
      });
      throw err;
    },
    assert: function(value, message) {
      if (!value)
        this.error("ASSERT_FAILED", message);
    },
    isExpression: function(exp) {
      return isExpression(exp, {
        throw: true
      });
    },
    assertExpression: function(exp, noThrow) {
      try {
        this.callLexerFunction("isExpression", exp);
        return true;
      } catch (ex) {
        if (noThrow)
          return false;
        if (!ex.loc)
          throw ex;
        this.incrementLine(ex.loc.line - 1);
        this.incrementColumn(ex.loc.column);
        var msg = "Syntax Error: " + ex.message.replace(/ \([0-9]+:[0-9]+\)$/, "");
        this.error("SYNTAX_ERROR", msg);
      }
    },
    assertNestingCorrect: function(exp) {
      var res = characterParser(exp);
      if (res.isNesting()) {
        this.error("INCORRECT_NESTING", "Nesting must match on expression `" + exp + "`");
      }
    },
    tok: function(type, val) {
      var res = {
        type,
        loc: {
          start: {
            line: this.lineno,
            column: this.colno
          },
          filename: this.filename
        }
      };
      if (val !== void 0)
        res.val = val;
      return res;
    },
    tokEnd: function(tok) {
      tok.loc.end = {
        line: this.lineno,
        column: this.colno
      };
      return tok;
    },
    incrementLine: function(increment) {
      this.lineno += increment;
      if (increment)
        this.colno = 1;
    },
    incrementColumn: function(increment) {
      this.colno += increment;
    },
    consume: function(len) {
      this.input = this.input.substr(len);
    },
    scan: function(regexp, type) {
      var captures;
      if (captures = regexp.exec(this.input)) {
        var len = captures[0].length;
        var val = captures[1];
        var diff = len - (val ? val.length : 0);
        var tok = this.tok(type, val);
        this.consume(len);
        this.incrementColumn(diff);
        return tok;
      }
    },
    scanEndOfLine: function(regexp, type) {
      var captures;
      if (captures = regexp.exec(this.input)) {
        var whitespaceLength = 0;
        var whitespace;
        var tok;
        if (whitespace = /^([ ]+)([^ ]*)/.exec(captures[0])) {
          whitespaceLength = whitespace[1].length;
          this.incrementColumn(whitespaceLength);
        }
        var newInput = this.input.substr(captures[0].length);
        if (newInput[0] === ":") {
          this.input = newInput;
          tok = this.tok(type, captures[1]);
          this.incrementColumn(captures[0].length - whitespaceLength);
          return tok;
        }
        if (/^[ \t]*(\n|$)/.test(newInput)) {
          this.input = newInput.substr(/^[ \t]*/.exec(newInput)[0].length);
          tok = this.tok(type, captures[1]);
          this.incrementColumn(captures[0].length - whitespaceLength);
          return tok;
        }
      }
    },
    bracketExpression: function(skip) {
      skip = skip || 0;
      var start = this.input[skip];
      assert(start === "(" || start === "{" || start === "[", 'The start character should be "(", "{" or "["');
      var end = characterParser.BRACKETS[start];
      var range;
      try {
        range = characterParser.parseUntil(this.input, end, {start: skip + 1});
      } catch (ex) {
        if (ex.index !== void 0) {
          var idx = ex.index;
          var tmp = this.input.substr(skip).indexOf("\n");
          var nextNewline = tmp + skip;
          var ptr = 0;
          while (idx > nextNewline && tmp !== -1) {
            this.incrementLine(1);
            idx -= nextNewline + 1;
            ptr += nextNewline + 1;
            tmp = nextNewline = this.input.substr(ptr).indexOf("\n");
          }
          this.incrementColumn(idx);
        }
        if (ex.code === "CHARACTER_PARSER:END_OF_STRING_REACHED") {
          this.error("NO_END_BRACKET", "The end of the string reached with no closing bracket " + end + " found.");
        } else if (ex.code === "CHARACTER_PARSER:MISMATCHED_BRACKET") {
          this.error("BRACKET_MISMATCH", ex.message);
        }
        throw ex;
      }
      return range;
    },
    scanIndentation: function() {
      var captures, re;
      if (this.indentRe) {
        captures = this.indentRe.exec(this.input);
      } else {
        re = /^\n(\t*) */;
        captures = re.exec(this.input);
        if (captures && !captures[1].length) {
          re = /^\n( *)/;
          captures = re.exec(this.input);
        }
        if (captures && captures[1].length)
          this.indentRe = re;
      }
      return captures;
    },
    eos: function() {
      if (this.input.length)
        return;
      if (this.interpolated) {
        this.error("NO_END_BRACKET", "End of line was reached with no closing bracket for interpolation.");
      }
      for (var i = 0; this.indentStack[i]; i++) {
        this.tokens.push(this.tokEnd(this.tok("outdent")));
      }
      this.tokens.push(this.tokEnd(this.tok("eos")));
      this.ended = true;
      return true;
    },
    blank: function() {
      var captures;
      if (captures = /^\n[ \t]*\n/.exec(this.input)) {
        this.consume(captures[0].length - 1);
        this.incrementLine(1);
        return true;
      }
    },
    comment: function() {
      var captures;
      if (captures = /^\/\/(-)?([^\n]*)/.exec(this.input)) {
        this.consume(captures[0].length);
        var tok = this.tok("comment", captures[2]);
        tok.buffer = captures[1] != "-";
        this.interpolationAllowed = tok.buffer;
        this.tokens.push(tok);
        this.incrementColumn(captures[0].length);
        this.tokEnd(tok);
        this.callLexerFunction("pipelessText");
        return true;
      }
    },
    interpolation: function() {
      if (/^#\{/.test(this.input)) {
        var match = this.bracketExpression(1);
        this.consume(match.end + 1);
        var tok = this.tok("interpolation", match.src);
        this.tokens.push(tok);
        this.incrementColumn(2);
        this.assertExpression(match.src);
        var splitted = match.src.split("\n");
        var lines = splitted.length - 1;
        this.incrementLine(lines);
        this.incrementColumn(splitted[lines].length + 1);
        this.tokEnd(tok);
        return true;
      }
    },
    tag: function() {
      var captures;
      if (captures = /^(\w(?:[-:\w]*\w)?)/.exec(this.input)) {
        var tok, name = captures[1], len = captures[0].length;
        this.consume(len);
        tok = this.tok("tag", name);
        this.tokens.push(tok);
        this.incrementColumn(len);
        this.tokEnd(tok);
        return true;
      }
    },
    filter: function(opts) {
      var tok = this.scan(/^:([\w\-]+)/, "filter");
      var inInclude = opts && opts.inInclude;
      if (tok) {
        this.tokens.push(tok);
        this.incrementColumn(tok.val.length);
        this.tokEnd(tok);
        this.callLexerFunction("attrs");
        if (!inInclude) {
          this.interpolationAllowed = false;
          this.callLexerFunction("pipelessText");
        }
        return true;
      }
    },
    doctype: function() {
      var node = this.scanEndOfLine(/^doctype *([^\n]*)/, "doctype");
      if (node) {
        this.tokens.push(this.tokEnd(node));
        return true;
      }
    },
    id: function() {
      var tok = this.scan(/^#([\w-]+)/, "id");
      if (tok) {
        this.tokens.push(tok);
        this.incrementColumn(tok.val.length);
        this.tokEnd(tok);
        return true;
      }
      if (/^#/.test(this.input)) {
        this.error("INVALID_ID", '"' + /.[^ \t\(\#\.\:]*/.exec(this.input.substr(1))[0] + '" is not a valid ID.');
      }
    },
    className: function() {
      var tok = this.scan(/^\.([_a-z0-9\-]*[_a-z][_a-z0-9\-]*)/i, "class");
      if (tok) {
        this.tokens.push(tok);
        this.incrementColumn(tok.val.length);
        this.tokEnd(tok);
        return true;
      }
      if (/^\.[_a-z0-9\-]+/i.test(this.input)) {
        this.error("INVALID_CLASS_NAME", "Class names must contain at least one letter or underscore.");
      }
      if (/^\./.test(this.input)) {
        this.error("INVALID_CLASS_NAME", '"' + /.[^ \t\(\#\.\:]*/.exec(this.input.substr(1))[0] + '" is not a valid class name.  Class names can only contain "_", "-", a-z and 0-9, and must contain at least one of "_", or a-z');
      }
    },
    endInterpolation: function() {
      if (this.interpolated && this.input[0] === "]") {
        this.input = this.input.substr(1);
        this.ended = true;
        return true;
      }
    },
    addText: function(type, value, prefix, escaped) {
      var tok;
      if (value + prefix === "")
        return;
      prefix = prefix || "";
      escaped = escaped || 0;
      var indexOfEnd = this.interpolated ? value.indexOf("]") : -1;
      var indexOfStart = this.interpolationAllowed ? value.indexOf("#[") : -1;
      var indexOfEscaped = this.interpolationAllowed ? value.indexOf("\\#[") : -1;
      var matchOfStringInterp = /(\\)?([#!]){((?:.|\n)*)$/.exec(value);
      var indexOfStringInterp = this.interpolationAllowed && matchOfStringInterp ? matchOfStringInterp.index : Infinity;
      if (indexOfEnd === -1)
        indexOfEnd = Infinity;
      if (indexOfStart === -1)
        indexOfStart = Infinity;
      if (indexOfEscaped === -1)
        indexOfEscaped = Infinity;
      if (indexOfEscaped !== Infinity && indexOfEscaped < indexOfEnd && indexOfEscaped < indexOfStart && indexOfEscaped < indexOfStringInterp) {
        prefix = prefix + value.substring(0, indexOfEscaped) + "#[";
        return this.addText(type, value.substring(indexOfEscaped + 3), prefix, escaped + 1);
      }
      if (indexOfStart !== Infinity && indexOfStart < indexOfEnd && indexOfStart < indexOfEscaped && indexOfStart < indexOfStringInterp) {
        tok = this.tok(type, prefix + value.substring(0, indexOfStart));
        this.incrementColumn(prefix.length + indexOfStart + escaped);
        this.tokens.push(this.tokEnd(tok));
        tok = this.tok("start-pug-interpolation");
        this.incrementColumn(2);
        this.tokens.push(this.tokEnd(tok));
        var child = new this.constructor(value.substr(indexOfStart + 2), {
          filename: this.filename,
          interpolated: true,
          startingLine: this.lineno,
          startingColumn: this.colno,
          plugins: this.plugins
        });
        var interpolated;
        try {
          interpolated = child.getTokens();
        } catch (ex) {
          if (ex.code && /^PUG:/.test(ex.code)) {
            this.colno = ex.column;
            this.error(ex.code.substr(4), ex.msg);
          }
          throw ex;
        }
        this.colno = child.colno;
        this.tokens = this.tokens.concat(interpolated);
        tok = this.tok("end-pug-interpolation");
        this.incrementColumn(1);
        this.tokens.push(this.tokEnd(tok));
        this.addText(type, child.input);
        return;
      }
      if (indexOfEnd !== Infinity && indexOfEnd < indexOfStart && indexOfEnd < indexOfEscaped && indexOfEnd < indexOfStringInterp) {
        if (prefix + value.substring(0, indexOfEnd)) {
          this.addText(type, value.substring(0, indexOfEnd), prefix);
        }
        this.ended = true;
        this.input = value.substr(value.indexOf("]") + 1) + this.input;
        return;
      }
      if (indexOfStringInterp !== Infinity) {
        if (matchOfStringInterp[1]) {
          prefix = prefix + value.substring(0, indexOfStringInterp) + matchOfStringInterp[2] + "{";
          return this.addText(type, value.substring(indexOfStringInterp + 3), prefix, escaped + 1);
        }
        var before = value.substr(0, indexOfStringInterp);
        if (prefix || before) {
          before = prefix + before;
          tok = this.tok(type, before);
          this.incrementColumn(before.length + escaped);
          this.tokens.push(this.tokEnd(tok));
        }
        var rest = matchOfStringInterp[3];
        var range;
        tok = this.tok("interpolated-code");
        this.incrementColumn(2);
        try {
          range = characterParser.parseUntil(rest, "}");
        } catch (ex) {
          if (ex.index !== void 0) {
            this.incrementColumn(ex.index);
          }
          if (ex.code === "CHARACTER_PARSER:END_OF_STRING_REACHED") {
            this.error("NO_END_BRACKET", "End of line was reached with no closing bracket for interpolation.");
          } else if (ex.code === "CHARACTER_PARSER:MISMATCHED_BRACKET") {
            this.error("BRACKET_MISMATCH", ex.message);
          } else {
            throw ex;
          }
        }
        tok.mustEscape = matchOfStringInterp[2] === "#";
        tok.buffer = true;
        tok.val = range.src;
        this.assertExpression(range.src);
        if (range.end + 1 < rest.length) {
          rest = rest.substr(range.end + 1);
          this.incrementColumn(range.end + 1);
          this.tokens.push(this.tokEnd(tok));
          this.addText(type, rest);
        } else {
          this.incrementColumn(rest.length);
          this.tokens.push(this.tokEnd(tok));
        }
        return;
      }
      value = prefix + value;
      tok = this.tok(type, value);
      this.incrementColumn(value.length + escaped);
      this.tokens.push(this.tokEnd(tok));
    },
    text: function() {
      var tok = this.scan(/^(?:\| ?| )([^\n]+)/, "text") || this.scan(/^( )/, "text") || this.scan(/^\|( ?)/, "text");
      if (tok) {
        this.addText("text", tok.val);
        return true;
      }
    },
    textHtml: function() {
      var tok = this.scan(/^(<[^\n]*)/, "text-html");
      if (tok) {
        this.addText("text-html", tok.val);
        return true;
      }
    },
    dot: function() {
      var tok;
      if (tok = this.scanEndOfLine(/^\./, "dot")) {
        this.tokens.push(this.tokEnd(tok));
        this.callLexerFunction("pipelessText");
        return true;
      }
    },
    extends: function() {
      var tok = this.scan(/^extends?(?= |$|\n)/, "extends");
      if (tok) {
        this.tokens.push(this.tokEnd(tok));
        if (!this.callLexerFunction("path")) {
          this.error("NO_EXTENDS_PATH", "missing path for extends");
        }
        return true;
      }
      if (this.scan(/^extends?\b/)) {
        this.error("MALFORMED_EXTENDS", "malformed extends");
      }
    },
    prepend: function() {
      var captures;
      if (captures = /^(?:block +)?prepend +([^\n]+)/.exec(this.input)) {
        var name = captures[1].trim();
        var comment = "";
        if (name.indexOf("//") !== -1) {
          comment = "//" + name.split("//").slice(1).join("//");
          name = name.split("//")[0].trim();
        }
        if (!name)
          return;
        var tok = this.tok("block", name);
        var len = captures[0].length - comment.length;
        while (this.whitespaceRe.test(this.input.charAt(len - 1)))
          len--;
        this.incrementColumn(len);
        tok.mode = "prepend";
        this.tokens.push(this.tokEnd(tok));
        this.consume(captures[0].length - comment.length);
        this.incrementColumn(captures[0].length - comment.length - len);
        return true;
      }
    },
    append: function() {
      var captures;
      if (captures = /^(?:block +)?append +([^\n]+)/.exec(this.input)) {
        var name = captures[1].trim();
        var comment = "";
        if (name.indexOf("//") !== -1) {
          comment = "//" + name.split("//").slice(1).join("//");
          name = name.split("//")[0].trim();
        }
        if (!name)
          return;
        var tok = this.tok("block", name);
        var len = captures[0].length - comment.length;
        while (this.whitespaceRe.test(this.input.charAt(len - 1)))
          len--;
        this.incrementColumn(len);
        tok.mode = "append";
        this.tokens.push(this.tokEnd(tok));
        this.consume(captures[0].length - comment.length);
        this.incrementColumn(captures[0].length - comment.length - len);
        return true;
      }
    },
    block: function() {
      var captures;
      if (captures = /^block +([^\n]+)/.exec(this.input)) {
        var name = captures[1].trim();
        var comment = "";
        if (name.indexOf("//") !== -1) {
          comment = "//" + name.split("//").slice(1).join("//");
          name = name.split("//")[0].trim();
        }
        if (!name)
          return;
        var tok = this.tok("block", name);
        var len = captures[0].length - comment.length;
        while (this.whitespaceRe.test(this.input.charAt(len - 1)))
          len--;
        this.incrementColumn(len);
        tok.mode = "replace";
        this.tokens.push(this.tokEnd(tok));
        this.consume(captures[0].length - comment.length);
        this.incrementColumn(captures[0].length - comment.length - len);
        return true;
      }
    },
    mixinBlock: function() {
      var tok;
      if (tok = this.scanEndOfLine(/^block/, "mixin-block")) {
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    yield: function() {
      var tok = this.scanEndOfLine(/^yield/, "yield");
      if (tok) {
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    include: function() {
      var tok = this.scan(/^include(?=:| |$|\n)/, "include");
      if (tok) {
        this.tokens.push(this.tokEnd(tok));
        while (this.callLexerFunction("filter", {inInclude: true}))
          ;
        if (!this.callLexerFunction("path")) {
          if (/^[^ \n]+/.test(this.input)) {
            this.fail();
          } else {
            this.error("NO_INCLUDE_PATH", "missing path for include");
          }
        }
        return true;
      }
      if (this.scan(/^include\b/)) {
        this.error("MALFORMED_INCLUDE", "malformed include");
      }
    },
    path: function() {
      var tok = this.scanEndOfLine(/^ ([^\n]+)/, "path");
      if (tok && (tok.val = tok.val.trim())) {
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    case: function() {
      var tok = this.scanEndOfLine(/^case +([^\n]+)/, "case");
      if (tok) {
        this.incrementColumn(-tok.val.length);
        this.assertExpression(tok.val);
        this.incrementColumn(tok.val.length);
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
      if (this.scan(/^case\b/)) {
        this.error("NO_CASE_EXPRESSION", "missing expression for case");
      }
    },
    when: function() {
      var tok = this.scanEndOfLine(/^when +([^:\n]+)/, "when");
      if (tok) {
        var parser = characterParser(tok.val);
        while (parser.isNesting() || parser.isString()) {
          var rest = /:([^:\n]+)/.exec(this.input);
          if (!rest)
            break;
          tok.val += rest[0];
          this.consume(rest[0].length);
          this.incrementColumn(rest[0].length);
          parser = characterParser(tok.val);
        }
        this.incrementColumn(-tok.val.length);
        this.assertExpression(tok.val);
        this.incrementColumn(tok.val.length);
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
      if (this.scan(/^when\b/)) {
        this.error("NO_WHEN_EXPRESSION", "missing expression for when");
      }
    },
    default: function() {
      var tok = this.scanEndOfLine(/^default/, "default");
      if (tok) {
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
      if (this.scan(/^default\b/)) {
        this.error("DEFAULT_WITH_EXPRESSION", "default should not have an expression");
      }
    },
    call: function() {
      var tok, captures, increment;
      if (captures = /^\+(\s*)(([-\w]+)|(#\{))/.exec(this.input)) {
        if (captures[3]) {
          increment = captures[0].length;
          this.consume(increment);
          tok = this.tok("call", captures[3]);
        } else {
          var match = this.bracketExpression(2 + captures[1].length);
          increment = match.end + 1;
          this.consume(increment);
          this.assertExpression(match.src);
          tok = this.tok("call", "#{" + match.src + "}");
        }
        this.incrementColumn(increment);
        tok.args = null;
        if (captures = /^ *\(/.exec(this.input)) {
          var range = this.bracketExpression(captures[0].length - 1);
          if (!/^\s*[-\w]+ *=/.test(range.src)) {
            this.incrementColumn(1);
            this.consume(range.end + 1);
            tok.args = range.src;
            this.assertExpression("[" + tok.args + "]");
            for (var i = 0; i <= tok.args.length; i++) {
              if (tok.args[i] === "\n") {
                this.incrementLine(1);
              } else {
                this.incrementColumn(1);
              }
            }
          }
        }
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    mixin: function() {
      var captures;
      if (captures = /^mixin +([-\w]+)(?: *\((.*)\))? */.exec(this.input)) {
        this.consume(captures[0].length);
        var tok = this.tok("mixin", captures[1]);
        tok.args = captures[2] || null;
        this.incrementColumn(captures[0].length);
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    conditional: function() {
      var captures;
      if (captures = /^(if|unless|else if|else)\b([^\n]*)/.exec(this.input)) {
        this.consume(captures[0].length);
        var type = captures[1].replace(/ /g, "-");
        var js = captures[2] && captures[2].trim();
        var tok = this.tok(type, js);
        this.incrementColumn(captures[0].length - js.length);
        switch (type) {
          case "if":
          case "else-if":
            this.assertExpression(js);
            break;
          case "unless":
            this.assertExpression(js);
            tok.val = "!(" + js + ")";
            tok.type = "if";
            break;
          case "else":
            if (js) {
              this.error("ELSE_CONDITION", "`else` cannot have a condition, perhaps you meant `else if`");
            }
            break;
        }
        this.incrementColumn(js.length);
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    while: function() {
      var captures, tok;
      if (captures = /^while +([^\n]+)/.exec(this.input)) {
        this.consume(captures[0].length);
        this.assertExpression(captures[1]);
        tok = this.tok("while", captures[1]);
        this.incrementColumn(captures[0].length);
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
      if (this.scan(/^while\b/)) {
        this.error("NO_WHILE_EXPRESSION", "missing expression for while");
      }
    },
    each: function() {
      var captures;
      if (captures = /^(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? * in *([^\n]+)/.exec(this.input)) {
        this.consume(captures[0].length);
        var tok = this.tok("each", captures[1]);
        tok.key = captures[2] || null;
        this.incrementColumn(captures[0].length - captures[3].length);
        this.assertExpression(captures[3]);
        tok.code = captures[3];
        this.incrementColumn(captures[3].length);
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
      const name = /^each\b/.exec(this.input) ? "each" : "for";
      if (this.scan(/^(?:each|for)\b/)) {
        this.error("MALFORMED_EACH", "This `" + name + "` has a syntax error. `" + name + "` statements should be of the form: `" + name + " VARIABLE_NAME of JS_EXPRESSION`");
      }
      if (captures = /^- *(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? +in +([^\n]+)/.exec(this.input)) {
        this.error("MALFORMED_EACH", 'Pug each and for should no longer be prefixed with a dash ("-"). They are pug keywords and not part of JavaScript.');
      }
    },
    eachOf: function() {
      var captures;
      if (captures = /^(?:each|for) (.*?) of *([^\n]+)/.exec(this.input)) {
        this.consume(captures[0].length);
        var tok = this.tok("eachOf", captures[1]);
        tok.value = captures[1];
        this.incrementColumn(captures[0].length - captures[2].length);
        this.assertExpression(captures[2]);
        tok.code = captures[2];
        this.incrementColumn(captures[2].length);
        this.tokens.push(this.tokEnd(tok));
        if (!(/^[a-zA-Z_$][\w$]*$/.test(tok.value.trim()) || /^\[ *[a-zA-Z_$][\w$]* *\, *[a-zA-Z_$][\w$]* *\]$/.test(tok.value.trim()))) {
          this.error("MALFORMED_EACH_OF_LVAL", "The value variable for each must either be a valid identifier (e.g. `item`) or a pair of identifiers in square brackets (e.g. `[key, value]`).");
        }
        return true;
      }
      if (captures = /^- *(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? +of +([^\n]+)/.exec(this.input)) {
        this.error("MALFORMED_EACH", 'Pug each and for should not be prefixed with a dash ("-"). They are pug keywords and not part of JavaScript.');
      }
    },
    code: function() {
      var captures;
      if (captures = /^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)) {
        var flags = captures[1];
        var code = captures[2];
        var shortened = 0;
        if (this.interpolated) {
          var parsed;
          try {
            parsed = characterParser.parseUntil(code, "]");
          } catch (err) {
            if (err.index !== void 0) {
              this.incrementColumn(captures[0].length - code.length + err.index);
            }
            if (err.code === "CHARACTER_PARSER:END_OF_STRING_REACHED") {
              this.error("NO_END_BRACKET", "End of line was reached with no closing bracket for interpolation.");
            } else if (err.code === "CHARACTER_PARSER:MISMATCHED_BRACKET") {
              this.error("BRACKET_MISMATCH", err.message);
            } else {
              throw err;
            }
          }
          shortened = code.length - parsed.end;
          code = parsed.src;
        }
        var consumed = captures[0].length - shortened;
        this.consume(consumed);
        var tok = this.tok("code", code);
        tok.mustEscape = flags.charAt(0) === "=";
        tok.buffer = flags.charAt(0) === "=" || flags.charAt(1) === "=";
        this.incrementColumn(captures[0].length - captures[2].length);
        if (tok.buffer)
          this.assertExpression(code);
        this.tokens.push(tok);
        this.incrementColumn(code.length);
        this.tokEnd(tok);
        return true;
      }
    },
    blockCode: function() {
      var tok;
      if (tok = this.scanEndOfLine(/^-/, "blockcode")) {
        this.tokens.push(this.tokEnd(tok));
        this.interpolationAllowed = false;
        this.callLexerFunction("pipelessText");
        return true;
      }
    },
    attribute: function(str) {
      var quote = "";
      var quoteRe = /['"]/;
      var key = "";
      var i;
      for (i = 0; i < str.length; i++) {
        if (!this.whitespaceRe.test(str[i]))
          break;
        if (str[i] === "\n") {
          this.incrementLine(1);
        } else {
          this.incrementColumn(1);
        }
      }
      if (i === str.length) {
        return "";
      }
      var tok = this.tok("attribute");
      if (quoteRe.test(str[i])) {
        quote = str[i];
        this.incrementColumn(1);
        i++;
      }
      for (; i < str.length; i++) {
        if (quote) {
          if (str[i] === quote) {
            this.incrementColumn(1);
            i++;
            break;
          }
        } else {
          if (this.whitespaceRe.test(str[i]) || str[i] === "!" || str[i] === "=" || str[i] === ",") {
            break;
          }
        }
        key += str[i];
        if (str[i] === "\n") {
          this.incrementLine(1);
        } else {
          this.incrementColumn(1);
        }
      }
      tok.name = key;
      var valueResponse = this.attributeValue(str.substr(i));
      if (valueResponse.val) {
        tok.val = valueResponse.val;
        tok.mustEscape = valueResponse.mustEscape;
      } else {
        tok.val = true;
        tok.mustEscape = true;
      }
      str = valueResponse.remainingSource;
      this.tokens.push(this.tokEnd(tok));
      for (i = 0; i < str.length; i++) {
        if (!this.whitespaceRe.test(str[i])) {
          break;
        }
        if (str[i] === "\n") {
          this.incrementLine(1);
        } else {
          this.incrementColumn(1);
        }
      }
      if (str[i] === ",") {
        this.incrementColumn(1);
        i++;
      }
      return str.substr(i);
    },
    attributeValue: function(str) {
      var quoteRe = /['"]/;
      var val = "";
      var done, i, x;
      var escapeAttr = true;
      var state = characterParser.defaultState();
      var col = this.colno;
      var line = this.lineno;
      for (i = 0; i < str.length; i++) {
        if (!this.whitespaceRe.test(str[i]))
          break;
        if (str[i] === "\n") {
          line++;
          col = 1;
        } else {
          col++;
        }
      }
      if (i === str.length) {
        return {remainingSource: str};
      }
      if (str[i] === "!") {
        escapeAttr = false;
        col++;
        i++;
        if (str[i] !== "=")
          this.error("INVALID_KEY_CHARACTER", "Unexpected character " + str[i] + " expected `=`");
      }
      if (str[i] !== "=") {
        if (i === 0 && str && !this.whitespaceRe.test(str[0]) && str[0] !== ",") {
          this.error("INVALID_KEY_CHARACTER", "Unexpected character " + str[0] + " expected `=`");
        } else {
          return {remainingSource: str};
        }
      }
      this.lineno = line;
      this.colno = col + 1;
      i++;
      for (; i < str.length; i++) {
        if (!this.whitespaceRe.test(str[i]))
          break;
        if (str[i] === "\n") {
          this.incrementLine(1);
        } else {
          this.incrementColumn(1);
        }
      }
      line = this.lineno;
      col = this.colno;
      for (; i < str.length; i++) {
        if (!(state.isNesting() || state.isString())) {
          if (this.whitespaceRe.test(str[i])) {
            done = false;
            for (x = i; x < str.length; x++) {
              if (!this.whitespaceRe.test(str[x])) {
                const isNotPunctuator = !characterParser.isPunctuator(str[x]);
                const isQuote = quoteRe.test(str[x]);
                const isColon = str[x] === ":";
                const isSpreadOperator = str[x] + str[x + 1] + str[x + 2] === "...";
                if ((isNotPunctuator || isQuote || isColon || isSpreadOperator) && this.assertExpression(val, true)) {
                  done = true;
                }
                break;
              }
            }
            if (done || x === str.length) {
              break;
            }
          }
          if (str[i] === "," && this.assertExpression(val, true)) {
            break;
          }
        }
        state = characterParser.parseChar(str[i], state);
        val += str[i];
        if (str[i] === "\n") {
          line++;
          col = 1;
        } else {
          col++;
        }
      }
      this.assertExpression(val);
      this.lineno = line;
      this.colno = col;
      return {val, mustEscape: escapeAttr, remainingSource: str.substr(i)};
    },
    attrs: function() {
      var tok;
      if (this.input.charAt(0) == "(") {
        tok = this.tok("start-attributes");
        var index = this.bracketExpression().end;
        var str = this.input.substr(1, index - 1);
        this.incrementColumn(1);
        this.tokens.push(this.tokEnd(tok));
        this.assertNestingCorrect(str);
        this.consume(index + 1);
        while (str) {
          str = this.attribute(str);
        }
        tok = this.tok("end-attributes");
        this.incrementColumn(1);
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    attributesBlock: function() {
      if (/^&attributes\b/.test(this.input)) {
        var consumed = 11;
        this.consume(consumed);
        var tok = this.tok("&attributes");
        this.incrementColumn(consumed);
        var args = this.bracketExpression();
        consumed = args.end + 1;
        this.consume(consumed);
        tok.val = args.src;
        this.incrementColumn(consumed);
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    indent: function() {
      var captures = this.scanIndentation();
      var tok;
      if (captures) {
        var indents = captures[1].length;
        this.incrementLine(1);
        this.consume(indents + 1);
        if (this.input[0] == " " || this.input[0] == "	") {
          this.error("INVALID_INDENTATION", "Invalid indentation, you can use tabs or spaces but not both");
        }
        if (this.input[0] == "\n") {
          this.interpolationAllowed = true;
          return this.tokEnd(this.tok("newline"));
        }
        if (indents < this.indentStack[0]) {
          var outdent_count = 0;
          while (this.indentStack[0] > indents) {
            if (this.indentStack[1] < indents) {
              this.error("INCONSISTENT_INDENTATION", "Inconsistent indentation. Expecting either " + this.indentStack[1] + " or " + this.indentStack[0] + " spaces/tabs.");
            }
            outdent_count++;
            this.indentStack.shift();
          }
          while (outdent_count--) {
            this.colno = 1;
            tok = this.tok("outdent");
            this.colno = this.indentStack[0] + 1;
            this.tokens.push(this.tokEnd(tok));
          }
        } else if (indents && indents != this.indentStack[0]) {
          tok = this.tok("indent", indents);
          this.colno = 1 + indents;
          this.tokens.push(this.tokEnd(tok));
          this.indentStack.unshift(indents);
        } else {
          tok = this.tok("newline");
          this.colno = 1 + Math.min(this.indentStack[0] || 0, indents);
          this.tokens.push(this.tokEnd(tok));
        }
        this.interpolationAllowed = true;
        return true;
      }
    },
    pipelessText: function pipelessText(indents) {
      while (this.callLexerFunction("blank"))
        ;
      var captures = this.scanIndentation();
      indents = indents || captures && captures[1].length;
      if (indents > this.indentStack[0]) {
        this.tokens.push(this.tokEnd(this.tok("start-pipeless-text")));
        var tokens = [];
        var token_indent = [];
        var isMatch;
        var stringPtr = 0;
        do {
          var i = this.input.substr(stringPtr + 1).indexOf("\n");
          if (i == -1)
            i = this.input.length - stringPtr - 1;
          var str = this.input.substr(stringPtr + 1, i);
          var lineCaptures = this.indentRe.exec("\n" + str);
          var lineIndents = lineCaptures && lineCaptures[1].length;
          isMatch = lineIndents >= indents;
          token_indent.push(isMatch);
          isMatch = isMatch || !str.trim();
          if (isMatch) {
            stringPtr += str.length + 1;
            tokens.push(str.substr(indents));
          } else if (lineIndents > this.indentStack[0]) {
            this.tokens.pop();
            return pipelessText.call(this, lineCaptures[1].length);
          }
        } while (this.input.length - stringPtr && isMatch);
        this.consume(stringPtr);
        while (this.input.length === 0 && tokens[tokens.length - 1] === "")
          tokens.pop();
        tokens.forEach(function(token, i2) {
          var tok;
          this.incrementLine(1);
          if (i2 !== 0)
            tok = this.tok("newline");
          if (token_indent[i2])
            this.incrementColumn(indents);
          if (tok)
            this.tokens.push(this.tokEnd(tok));
          this.addText("text", token);
        }.bind(this));
        this.tokens.push(this.tokEnd(this.tok("end-pipeless-text")));
        return true;
      }
    },
    slash: function() {
      var tok = this.scan(/^\//, "slash");
      if (tok) {
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    colon: function() {
      var tok = this.scan(/^: +/, ":");
      if (tok) {
        this.tokens.push(this.tokEnd(tok));
        return true;
      }
    },
    fail: function() {
      this.error("UNEXPECTED_TEXT", 'unexpected text "' + this.input.substr(0, 5) + '"');
    },
    callLexerFunction: function(func) {
      var rest = [];
      for (var i = 1; i < arguments.length; i++) {
        rest.push(arguments[i]);
      }
      var pluginArgs = [this].concat(rest);
      for (var i = 0; i < this.plugins.length; i++) {
        var plugin = this.plugins[i];
        if (plugin[func] && plugin[func].apply(plugin, pluginArgs)) {
          return true;
        }
      }
      return this[func].apply(this, rest);
    },
    advance: function() {
      return this.callLexerFunction("blank") || this.callLexerFunction("eos") || this.callLexerFunction("endInterpolation") || this.callLexerFunction("yield") || this.callLexerFunction("doctype") || this.callLexerFunction("interpolation") || this.callLexerFunction("case") || this.callLexerFunction("when") || this.callLexerFunction("default") || this.callLexerFunction("extends") || this.callLexerFunction("append") || this.callLexerFunction("prepend") || this.callLexerFunction("block") || this.callLexerFunction("mixinBlock") || this.callLexerFunction("include") || this.callLexerFunction("mixin") || this.callLexerFunction("call") || this.callLexerFunction("conditional") || this.callLexerFunction("eachOf") || this.callLexerFunction("each") || this.callLexerFunction("while") || this.callLexerFunction("tag") || this.callLexerFunction("filter") || this.callLexerFunction("blockCode") || this.callLexerFunction("code") || this.callLexerFunction("id") || this.callLexerFunction("dot") || this.callLexerFunction("className") || this.callLexerFunction("attrs") || this.callLexerFunction("attributesBlock") || this.callLexerFunction("indent") || this.callLexerFunction("text") || this.callLexerFunction("textHtml") || this.callLexerFunction("comment") || this.callLexerFunction("slash") || this.callLexerFunction("colon") || this.fail();
    },
    getTokens: function() {
      while (!this.ended) {
        this.callLexerFunction("advance");
      }
      return this.tokens;
    }
  };
});

// src/index.ts
import {fileURLToPath} from "url";
import {dirname, join as join2} from "path";
import {readFile} from "fs/promises";

// src/transformer.ts
import {compileClientWithDependenciesTracked, compileFile} from "pug";
import {readFileSync} from "fs";
import {normalizePath} from "vite";
var composeTemplate = (html, options, locals) => {
  const hots = [];
  const parsed = html.replace(/<pug.+?src="(.+?)".*?\/.*?>/gi, (tag, filename) => {
    const um = tag.match(/update=['"]{1}(.+?)['"]{1}/i);
    if (um !== null) {
      hots.push({
        main: filename.replace(/^\/|\.\//, ""),
        query: um[1],
        dependencies: [
          ...new Set(compileClientWithDependenciesTracked(readFileSync(filename).toString(), __assign(__assign({}, options), {
            filename
          })).dependencies.map((fn) => normalizePath(fn)))
        ]
      });
    }
    return compileFile(filename, options)(locals);
  });
  return [hots, parsed];
};
var injectScript = (hots, html, virtualFileId) => {
  if (virtualFileId.length === 0 || hots.length === 0) {
    return html;
  }
  const script = `<script type="module" src="${virtualFileId}"></script>`;
  const pos = html.indexOf("</head>");
  if (pos === -1) {
    return html + script;
  }
  return [html.slice(0, pos), script, html.slice(pos)].join("");
};

// src/hot-update.ts
var import_chalk = __toModule(require_source());
import {EditOption} from "@dovyih/x-tree-diff-plus";

// src/cache.ts
var cache = new Map();

// src/diff.ts
var import_pug_parser = __toModule(require_pug_parser());
var import_pug_lexer = __toModule(require_pug_lexer());
import {XTreeDiffPlus, XTree, NodeType} from "@dovyih/x-tree-diff-plus";
import {readFileSync as readFileSync2} from "fs";
import {join} from "path";
var toAst = (filename, cwd = process.cwd()) => {
  const path = join(cwd, filename);
  const src = readFileSync2(path).toString();
  const tokens = (0, import_pug_lexer.default)(src, {filename: path});
  return (0, import_pug_parser.default)(tokens, {filename: path, src});
};
var treeIndices = (node) => {
  const indices = [];
  const rfx = (node2) => {
    if (node2.pPtr) {
      indices.push(node2.pPtr.index);
      rfx(node2.pPtr);
    }
  };
  rfx(node);
  return indices.reverse();
};
function* diffWalker(node, filter) {
  if (filter.includes(node.Op)) {
    yield node;
  }
  for (const child of node.children) {
    yield* diffWalker(child, filter);
  }
}
var dequoter = (str) => str.replaceAll(/^['"]|['"]$/g, "");
var serializeNode = (node) => {
  const attrs = new Map();
  node.attrs.forEach(({name, val}) => {
    let newVal = dequoter(val);
    if (["id", "class"].includes(name) && attrs.has(name)) {
      newVal = [newVal, attrs.get(name)].sort().join(" ");
    }
    attrs.set(name, newVal);
  });
  return [
    node.name,
    Array.from(attrs.keys()).sort().map((name) => `${name}=${attrs.get(name)}`).join(",")
  ].join("|");
};
var astWalker = (nodes, depth = 0) => {
  const children = [];
  for (const [index, node] of nodes.filter((node2) => node2.type === "Tag").entries()) {
    const tree = new XTree({
      type: NodeType.ELEMENT,
      label: serializeNode(node),
      data: node,
      index
    });
    tree.append(astWalker(node.block.nodes, depth + 1));
    children.push(tree);
  }
  return children;
};
var PugAstDiff = class extends XTreeDiffPlus {
  buildXTree(ast) {
    return astWalker(ast.nodes)[0];
  }
  dumpXTree(oldTree, newTree) {
    return {oldTree, newTree};
  }
};

// src/hot-update.ts
var hotUpdate = ({file, server}, hotPugs, options, locals) => {
  if (file.startsWith(server.config.root) && file.endsWith(".pug")) {
    const normFile = file.slice(server.config.root.length).replace(/^\//, "");
    const watchedHotPugs = hotPugs.filter(({main, dependencies}) => [main, ...dependencies].includes(normFile));
    if (watchedHotPugs.length === 0) {
      server.config.logger.info(import_chalk.default`{redBright Pug’s Not Hot:} {cyan ${normFile}}`);
      server.ws.send({
        type: "full-reload"
      });
      return;
    }
    const data = watchedHotPugs.map((hot) => {
      const oldAst = cache.get(hot.main);
      const newAst = toAst(hot.main);
      const {oldTree, newTree} = new PugAstDiff(oldAst, newAst).diff();
      console.dir({oldAst, newAst}, {depth: 10});
      const ins = [];
      const del = [];
      const upd = [];
      const mov = [];
      for (const node of diffWalker(oldTree, [EditOption.DEL])) {
        del.push({
          name: node.data.name,
          attrs: node.data.attrs.map(({name, val}) => [name, dequoter(val)]),
          indices: treeIndices(node)
        });
      }
      console.log(newTree);
      for (const node of diffWalker(newTree, [EditOption.INS, EditOption.UPD, EditOption.MOV])) {
        console.log("ZZ", node.Op);
        switch (node.Op) {
          case EditOption.INS:
            ins.push({
              name: node.data.name,
              attrs: node.data.attrs.map(({name, val}) => [name, dequoter(val)]),
              indices: treeIndices(node)
            });
            break;
          case EditOption.UPD:
            upd.push({
              name: node.data.name,
              attrs: node.data.attrs.map(({name, val}) => [name, dequoter(val)]),
              indices: treeIndices(node)
            });
            break;
          case EditOption.MOV:
            mov.push({
              name: node.data.name,
              attrs: node.data.attrs.map(({name, val}) => [name, dequoter(val)]),
              indices: treeIndices(node)
            });
            break;
        }
      }
      return {del, ins, upd, mov, query: hot.query};
    });
    server.config.logger.info(import_chalk.default`{greenBright Hot Pug:} {cyan ${normFile}}`);
    server.ws.send({
      type: "custom",
      event: "pug-update",
      data
    });
    return [];
  }
};

// src/index.ts
var src_default = (options, locals) => {
  const virtualFileId = "@pug-updater";
  let hotPugs;
  return {
    name: "vite-plugin-pug",
    load(id) {
      if (id.endsWith(virtualFileId)) {
        const jsPath = fileURLToPath(join2(dirname(import.meta.url), "hot.client.js"));
        return readFile(jsPath, {encoding: "utf8"});
      }
    },
    handleHotUpdate(ctx) {
      if (hotPugs && hotPugs.length > 0) {
        return hotUpdate(ctx, hotPugs, options, locals);
      }
    },
    transformIndexHtml: {
      transform(html) {
        let puglessHtml;
        [hotPugs, puglessHtml] = composeTemplate(html, options, locals);
        console.log("xxsxxdssasxxxxxz");
        hotPugs.forEach(({main}) => cache.set(main, toAst(main)));
        return injectScript(hotPugs, puglessHtml, virtualFileId);
      }
    }
  };
};
export {
  src_default as default
};
