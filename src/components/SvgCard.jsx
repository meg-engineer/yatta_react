import React from "react";

const SvgCard = () => {
  return (
    <svg id="レイヤー_1" data-name="レイヤー 1" viewBox="0 0 500 300">
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .cls-100 { fill: none; } .cls-200 { fill: #b3ddd1; } .cls-300 { fill: #f5b994; } .cls-400 { fill: url(#新規パターンスウォッチ_3); }\n    ",
          }}
        />
        <pattern
          id="新規パターンスウォッチ_3"
          data-name="新規パターンスウォッチ 3"
          width={34}
          height={55}
          patternTransform="translate(28.87 72.71) rotate(-45)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 34 55"
        >
          <rect className="cls-100" width={34} height={55} />
          <rect className="cls-200" width={17} height={55} />
          <rect className="cls-300" x={17} width={17} height={55} />
        </pattern>
      </defs>
      <rect className="cls-400" width={500} height={300} />
    </svg>
  );
};

export default SvgCard;
