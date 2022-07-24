import React from "react";
import logo from "assets/logo.png";
import Image from "next/image";

type Props = {
  width?: string | number;
  height?: string | number;
};

function Logo({ width, height }: Props) {
  return <Image width={width} height={height} src={logo} />;
}

export default Logo;
