// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

export enum MagickFormat {
    Unknown = 'UNKNOWN',
    ThreeFr = '3FR',
    ThreeG2 = '3G2',
    ThreeGp = '3GP',
    A = 'A',
    Aai = 'AAI',
    Ai = 'AI',
    Apng = 'APNG',
    Art = 'ART',
    Arw = 'ARW',
    Ashlar = 'ASHLAR',
    Avi = 'AVI',
    Avif = 'AVIF',
    Avs = 'AVS',
    B = 'B',
    Bgr = 'BGR',
    Bgra = 'BGRA',
    Bgro = 'BGRO',
    Bmp = 'BMP',
    Bmp2 = 'BMP2',
    Bmp3 = 'BMP3',
    Brf = 'BRF',
    C = 'C',
    Cal = 'CAL',
    Cals = 'CALS',
    Canvas = 'CANVAS',
    Caption = 'CAPTION',
    Cin = 'CIN',
    Cip = 'CIP',
    Clip = 'CLIP',
    Cmyk = 'CMYK',
    Cmyka = 'CMYKA',
    Cr2 = 'CR2',
    Cr3 = 'CR3',
    Crw = 'CRW',
    Cube = 'CUBE',
    Cur = 'CUR',
    Cut = 'CUT',
    Data = 'DATA',
    Dcm = 'DCM',
    Dcr = 'DCR',
    Dcraw = 'DCRAW',
    Dcx = 'DCX',
    Dds = 'DDS',
    Dfont = 'DFONT',
    Dng = 'DNG',
    Dpx = 'DPX',
    Dxt1 = 'DXT1',
    Dxt5 = 'DXT5',
    Epdf = 'EPDF',
    Epi = 'EPI',
    Eps = 'EPS',
    Eps2 = 'EPS2',
    Eps3 = 'EPS3',
    Epsf = 'EPSF',
    Epsi = 'EPSI',
    Ept = 'EPT',
    Ept2 = 'EPT2',
    Ept3 = 'EPT3',
    Erf = 'ERF',
    Exr = 'EXR',
    Farbfeld = 'FARBFELD',
    Fax = 'FAX',
    FF = 'FF',
    File = 'FILE',
    Fits = 'FITS',
    Fl32 = 'FL32',
    Flv = 'FLV',
    Fractal = 'FRACTAL',
    Ftp = 'FTP',
    Ftxt = 'FTXT',
    Fts = 'FTS',
    G = 'G',
    G3 = 'G3',
    G4 = 'G4',
    Gif = 'GIF',
    Gif87 = 'GIF87',
    Gradient = 'GRADIENT',
    Gray = 'GRAY',
    Graya = 'GRAYA',
    Group4 = 'GROUP4',
    Hald = 'HALD',
    Hdr = 'HDR',
    Heic = 'HEIC',
    Heif = 'HEIF',
    Histogram = 'HISTOGRAM',
    Hrz = 'HRZ',
    Htm = 'HTM',
    Html = 'HTML',
    Http = 'HTTP',
    Https = 'HTTPS',
    Icb = 'ICB',
    Ico = 'ICO',
    Icon = 'ICON',
    Iiq = 'IIQ',
    Info = 'INFO',
    Inline = 'INLINE',
    Ipl = 'IPL',
    Isobrl = 'ISOBRL',
    Isobrl6 = 'ISOBRL6',
    J2c = 'J2C',
    J2k = 'J2K',
    Jng = 'JNG',
    Jnx = 'JNX',
    Jp2 = 'JP2',
    Jpc = 'JPC',
    Jpe = 'JPE',
    Jpeg = 'JPEG',
    Jpg = 'JPG',
    Jpm = 'JPM',
    Jps = 'JPS',
    Jpt = 'JPT',
    Json = 'JSON',
    Jxl = 'JXL',
    K = 'K',
    K25 = 'K25',
    Kdc = 'KDC',
    Label = 'LABEL',
    M = 'M',
    M2v = 'M2V',
    M4v = 'M4V',
    Mac = 'MAC',
    Map = 'MAP',
    Mask = 'MASK',
    Mat = 'MAT',
    Matte = 'MATTE',
    Mef = 'MEF',
    Miff = 'MIFF',
    Mkv = 'MKV',
    Mng = 'MNG',
    Mono = 'MONO',
    Mov = 'MOV',
    Mp4 = 'MP4',
    Mpc = 'MPC',
    Mpeg = 'MPEG',
    Mpg = 'MPG',
    Mrw = 'MRW',
    Msl = 'MSL',
    Msvg = 'MSVG',
    Mtv = 'MTV',
    Mvg = 'MVG',
    Nef = 'NEF',
    Nrw = 'NRW',
    Null = 'NULL',
    O = 'O',
    Ora = 'ORA',
    Orf = 'ORF',
    Otb = 'OTB',
    Otf = 'OTF',
    Pal = 'PAL',
    Palm = 'PALM',
    Pam = 'PAM',
    Pango = 'PANGO',
    Pattern = 'PATTERN',
    Pbm = 'PBM',
    Pcd = 'PCD',
    Pcds = 'PCDS',
    Pcl = 'PCL',
    Pct = 'PCT',
    Pcx = 'PCX',
    Pdb = 'PDB',
    Pdf = 'PDF',
    Pdfa = 'PDFA',
    Pef = 'PEF',
    Pes = 'PES',
    Pfa = 'PFA',
    Pfb = 'PFB',
    Pfm = 'PFM',
    Pgm = 'PGM',
    Pgx = 'PGX',
    Phm = 'PHM',
    Picon = 'PICON',
    Pict = 'PICT',
    Pix = 'PIX',
    Pjpeg = 'PJPEG',
    Plasma = 'PLASMA',
    Png = 'PNG',
    Png00 = 'PNG00',
    Png24 = 'PNG24',
    Png32 = 'PNG32',
    Png48 = 'PNG48',
    Png64 = 'PNG64',
    Png8 = 'PNG8',
    Pnm = 'PNM',
    Pocketmod = 'POCKETMOD',
    Ppm = 'PPM',
    Ps = 'PS',
    Ps2 = 'PS2',
    Ps3 = 'PS3',
    Psb = 'PSB',
    Psd = 'PSD',
    Ptif = 'PTIF',
    Pwp = 'PWP',
    Qoi = 'QOI',
    R = 'R',
    RadialGradient = 'RADIAL-GRADIENT',
    Raf = 'RAF',
    Ras = 'RAS',
    Raw = 'RAW',
    Rgb = 'RGB',
    Rgb565 = 'RGB565',
    Rgba = 'RGBA',
    Rgbo = 'RGBO',
    Rgf = 'RGF',
    Rla = 'RLA',
    Rle = 'RLE',
    Rmf = 'RMF',
    Rw2 = 'RW2',
    Scr = 'SCR',
    Screenshot = 'SCREENSHOT',
    Sct = 'SCT',
    Sfw = 'SFW',
    Sgi = 'SGI',
    Shtml = 'SHTML',
    Six = 'SIX',
    Sixel = 'SIXEL',
    SparseColor = 'SPARSE-COLOR',
    Sr2 = 'SR2',
    Srf = 'SRF',
    Stegano = 'STEGANO',
    StrImg = 'STRIMG',
    Sun = 'SUN',
    Svg = 'SVG',
    Svgz = 'SVGZ',
    Text = 'TEXT',
    Tga = 'TGA',
    Thumbnail = 'THUMBNAIL',
    Tif = 'TIF',
    Tiff = 'TIFF',
    Tiff64 = 'TIFF64',
    Tile = 'TILE',
    Tim = 'TIM',
    Tm2 = 'TM2',
    Ttc = 'TTC',
    Ttf = 'TTF',
    Txt = 'TXT',
    Ubrl = 'UBRL',
    Ubrl6 = 'UBRL6',
    Uil = 'UIL',
    Uyvy = 'UYVY',
    Vda = 'VDA',
    Vicar = 'VICAR',
    Vid = 'VID',
    Viff = 'VIFF',
    Vips = 'VIPS',
    Vst = 'VST',
    Wbmp = 'WBMP',
    Webp = 'WEBP',
    Webm = 'WEBM',
    Wmv = 'WMV',
    Wpg = 'WPG',
    X3f = 'X3F',
    Xbm = 'XBM',
    Xc = 'XC',
    Xcf = 'XCF',
    Xpm = 'XPM',
    Xps = 'XPS',
    Xv = 'XV',
    Y = 'Y',
    Yaml = 'YAML',
    Ycbcr = 'YCbCr',
    Ycbcra = 'YCbCrA',
    Yuv = 'YUV'
}
