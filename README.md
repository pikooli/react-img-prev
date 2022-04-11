# react-prev-img

A react image picker with preview

Install :

`npm install react-prev-img`

How to use it :

```
import ReactPrevImg from "@pikooli/react-prev-img";

const Component = () => {
  
  const [files, setFiles] = useState({});
  
  return (
    <ReactPrevImg files={files.files} setFiles={setFiles} />
  )}
```

Accept this props : 

|Props     |Type      | 
|----------|----------|
|width     | Number   |
|height    | Number   |
|className | string   |
|files     | File     |
|setFiles  | Function |
