import { encode } from 'uqr';

/**
 * QR code as an inline SVG (build time only, no client JS). Always dark on
 * white so phones scan it in both themes. Dark modules on a row are merged
 * into runs to keep the path short.
 */
export function qrSvg(text: string, title: string): string {
  const { data, size } = encode(text, { ecc: 'M', border: 2 });
  let path = '';
  for (let y = 0; y < size; y++) {
    let x = 0;
    while (x < size) {
      if (!data[y][x]) {
        x++;
        continue;
      }
      let run = 1;
      while (x + run < size && data[y][x + run]) run++;
      path += `M${x} ${y}h${run}v1h-${run}z`;
      x += run;
    }
  }
  const safeTitle = title.replace(/[<>&"]/g, '');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges" role="img"><title>${safeTitle}</title><rect width="${size}" height="${size}" fill="#fff"/><path d="${path}" fill="#0b0b0c"/></svg>`;
}
