## react-img-prev

A react image picker with preview

It let you pick files from your computer and display only the first one.

Install :

`npm install react-prev-img`

How to use it :

```
import ReactPrevImg from "react-prev-img";

const Component = () => {

  const [files, setFiles] = useState({});

  return (
    <ReactPrevImg files={files.files} setFiles={setFiles} />
  )}
```

If you want to display your own placeholder in place of the default icon, you can pass it as a children.

```
import ReactPrevImg from "react-prev-img";

const Component = () => {

  const [files, setFiles] = useState({});

  return (
    <ReactPrevImg files={files.files} setFiles={setFiles} >
      <h1>Image</h1>
    </ReactPrevImg>
  )}
```

You can pass additional options.

Accepted props :

| Props     | Type     | Optional ? | Description                   |
| --------- | -------- | ---------- | ----------------------------- |
| width     | Number   | yes        | width of the display preview  |
| height    | Number   | yes        | height of the display preview |
| className | string   | yes        | class of the preview          |
| accept    | string   | yes        | type accepted for input       |
| max       | string   | yes        | max number of file            |
| files     | File     | no         | files selected                |
| setFiles  | Function | no         | set selected files            |

## License

Under the MIT license.
