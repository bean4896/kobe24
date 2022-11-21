import { useRef, useState } from "react";
// const cloudinary = require('../utils/cloudinary');

function NewMemory(props) {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  // useref is a hook that allows us to access the value of an input element
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();

  // display the image that the user has uploaded
  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };
    if (changeEvent.target.files[0]) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    } else {
      setImageSrc(undefined);
    }
  }

  async function submitHandler(event) {
    // Prevents the page from reloading
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "kobe24");

    const fileData = await fetch(
      "https://api.cloudinary.com/v1_1/damn4egye/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    // console.log('fileData', fileData);
    setImageSrc(fileData.secure_url);
    setUploadData(fileData);

    // Get the values from the input fields
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = fileData.secure_url;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // spilt the image into an array
    // var pos = enteredImage.lastIndexOf("\\");
    // var filename = enteredImage.substring(pos + 1);

    //final data object
    const memoryData = {
      title: enteredTitle,
      image: enteredImage,
      date: enteredDate,
      description: enteredDescription,
    };

    //
    console.log(enteredImage);
    // console.log(filename);
    // console.log(memoryData, `../public/images/${filename}`);
    props.onAddMemory(memoryData);
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full p-10 max-w-[550px] gr_border">
        <form onSubmit={submitHandler} method="post">
          <div className="form-control">
            <label htmlFor="title" className="block">
              Memory Title
            </label>
            <input
              type="text"
              required
              id="title"
              className="form-input"
              ref={titleInputRef}
            />
          </div>

          <div className="form-control">
            <label htmlFor="image" className="block">
              Memory Image
            </label>
            <input
              onChange={handleOnChange}
              type="file"
              id="file"
              name="file"
              accept="image/png, image/jpeg, image/gif"
              ref={imageInputRef}
            />
            <img src={imageSrc} alt={imageSrc} />
            {/* {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}
          {uploadData && (
            <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
          )} */}
          </div>

          <div className="form-control">
            <label htmlFor="date" className="block">
              Memory Date
            </label>
            <input
              type="date"
              required
              id="date"
              className="form-input"
              ref={dateInputRef}
            />
          </div>
          <div className="form-control">
            <label htmlFor="description" className="block">
              Memory Description
            </label>
            <textarea
              id="description"
              required
              rows="5"
              className="form-input"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className="form-actions">
            <button>Add Memory</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewMemory;
