import React from "react";

declare type FallbackFont =
  | "Arial"
  | "Helvetica"
  | "Verdana"
  | "Georgia"
  | "Times New Roman";
declare type FontFormat =
  | "woff"
  | "woff2"
  | "truetype"
  | "opentype"
  | "embedded-opentype"
  | "svg";
declare type FontWeight = React.CSSProperties["fontWeight"];
declare type FontStyle = React.CSSProperties["fontSize"];
interface FontProps {
  /** The font you want to use. NOTE: Do not insert multiple fonts here, use fallbackFontFamily for that */
  fontFamily: string;
  /** An array is possible, but the order of the array is the priority order */
  fallbackFontFamily: FallbackFont | FallbackFont[];
  /** Not all clients support web fonts. For support check: https://www.caniemail.com/features/css-at-font-face/ */
  webFont?: {
    url: string;
    format: FontFormat;
  };
  /** Default: 'normal' */
  fontStyle?: FontStyle;
  /** Default: 400 */
  fontWeight?: FontWeight;
}

export default function CustomFont({
  webFont,
  fontStyle = "normal",
  fontFamily,
  fontWeight = 400,
  fallbackFontFamily,
}: {
  webFont?: FontProps["webFont"];
  fontStyle?: FontProps["fontStyle"];
  fontFamily: FontProps["fontFamily"];
  fontWeight?: FontProps["fontWeight"];
  fallbackFontFamily: FontProps["fallbackFontFamily"];
}) {
  const src = webFont
    ? `src: url(${webFont.url}) format(${webFont.format});`
    : "";

  return (
    <style>
      {`
            @font-face {
                font-style: ${fontStyle};
                font-family: ${fontFamily};
                font-weight: ${fontWeight};
                mso-font-alt: ${
                  Array.isArray(fallbackFontFamily)
                    ? fallbackFontFamily[0]
                    : fallbackFontFamily
                };
                ${src}
            }

            `}
      {/* * {
                font-family: ${fontFamily}, ${
        Array.isArray(fallbackFontFamily)
          ? fallbackFontFamily.join(", ")
          : fallbackFontFamily
      };
            } */}
    </style>
  );
}
