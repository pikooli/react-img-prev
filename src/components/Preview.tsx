import React, { useEffect, useState } from "react";
import Icon from "./Icon";

type Props = {
  file?: File;
  width?: number;
  height?: number;
  className?: string;
};

const Preview: React.FC<Props> = (props) => {
  const { file, width, height, className } = props;
  const [fileDataUrl, setFileDataURL] = useState("");

  useEffect(() => {
    let fileReader: FileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target as FileReader;
        if (result && !isCancel) {
          setFileDataURL(result as string);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const style = {
    width: width || "30px",
    height: height || "30px",
  };

  if (fileDataUrl) {
    return (
      <div style={style} className={className}>
        <img src={fileDataUrl} style={{ width: "100%", height: "100%" }} />
      </div>
    );
  }
  return (
    <div style={style} className={className}>
      <Icon />
    </div>
  );
};

export default Preview;
