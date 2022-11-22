import { useRef, useState } from "react";


function NewMoment(props) {
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
  
    // useref is a hook that allows us to access the value of an input element
    const titleInputRef = useRef();
    const imageInputRef = useRef();
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
  
    // upload image to cloudinary
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
      const enteredDescription = descriptionInputRef.current.value;
  
      //final data object
      const momentData = {
        title: enteredTitle,
        image: enteredImage,
        description: enteredDescription,
      };
  
      //
      console.log(momentData);
      props.onAddMoment(momentData);
    }
  
    return (
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full p-10 max-w-[550px] gr_border">
          <form onSubmit={submitHandler} method="post">
            <div className="form-control">
              <label htmlFor="title" className="block">
               Title
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
        <div className="mb-8">
          <input type="file" name="file" id="file" ref={imageInputRef}  onChange={handleOnChange} accept="image/png, image/jpeg, image/gif" className="sr-only" />
          <label
            htmlFor="file"
            className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span className="mb-2 block text-xl font-semibold text-[#000000] dark:text-neutral-50">
                Drop Image Here
              </span>
              <span className="mb-2 block text-base font-medium text-[#6B7280] dark:text-[#ffffff]">
                Or
              </span>
              <span
                className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#000000] dark:text-[#ffffff]"
              >
                Browse
              </span>
            </div>
          </label>
        </div>

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
              <label htmlFor="description" className="block">
                Describe Your Moment
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
              <button>Add Moment</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default NewMoment;
  