import React from "react";
import Btn from "./components/Btn";
import Preview from "./components/Preview";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  setFiles?: Function;
  files?: File[];
};

export default function Index(props: Props) {
  const { width, height, className, setFiles, files } = props;

  return (
    <Btn setFiles={setFiles}>
      <Preview
        file={files && files[0]}
        width={width}
        height={height}
        className={className}
      />
    </Btn>
  );
}
