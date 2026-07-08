// 8x8 glyphs drawn as SVG rects, sprite-style (06-design-direction: rendered
// in code, evoke the era, no image assets). Each entry is the list of filled
// cells. They inherit currentColor so hover states "power them on".
const GLYPHS: Record<string, [number, number][]> = {
  // three-slot rack, two status LEDs
  server: [
    [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
    [1, 2], [4, 2], [6, 2],
    [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
    [1, 4], [4, 4], [6, 4],
    [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
    [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6],
  ],
  // coin, ring with a bar
  coin: [
    [2, 0], [3, 0], [4, 0], [5, 0],
    [1, 1], [6, 1],
    [0, 2], [7, 2],
    [0, 3], [3, 3], [4, 3], [7, 3],
    [0, 4], [7, 4],
    [1, 5], [6, 5],
    [2, 6], [3, 6], [4, 6], [5, 6],
  ],
  // tower with lit windows and a door
  tower: [
    [2, 0], [3, 0], [4, 0], [5, 0],
    [2, 1], [5, 1],
    [2, 2], [3, 2], [4, 2], [5, 2],
    [2, 3], [5, 3],
    [2, 4], [3, 4], [4, 4], [5, 4],
    [2, 5], [5, 5],
    [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6],
  ],
  // checklist, three bulleted rows
  checklist: [
    [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
    [0, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
    [0, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
  ],
  // pickup truck, window notch in the cab
  truck: [
    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2],
    [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [6, 3],
    [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
    [1, 5], [5, 5],
  ],
  // erlenmeyer flask with something bubbling
  flask: [
    [3, 0], [4, 0],
    [3, 1], [4, 1],
    [2, 2], [5, 2],
    [2, 3], [5, 3],
    [1, 4], [6, 4],
    [1, 5], [3, 5], [4, 5], [6, 5],
    [2, 6], [3, 6], [4, 6], [5, 6],
  ],
};

export default function PixelIcon({
  glyph,
  size = 24,
  className,
}: {
  glyph: keyof typeof GLYPHS | string;
  size?: number;
  className?: string;
}) {
  const cells = GLYPHS[glyph] ?? [];
  return (
    <svg
      viewBox="0 0 8 8"
      width={size}
      height={size}
      aria-hidden="true"
      shapeRendering="crispEdges"
      className={className}
    >
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />
      ))}
    </svg>
  );
}
