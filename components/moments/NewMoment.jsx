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
    <>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="modalMoment rounded-lg shadow-lg w-full bg-white">
          <div className="">
            {/*close icon*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Mom</h3>
              <button className="text-red-500" onClick={props.onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            {/*form - Add*/}
            <div className="flex items-center justify-center px-12">
              <div className="mx-auto w-full">
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
                      <input
                        type="file"
                        name="file"
                        id="file"
                        ref={imageInputRef}
                        onChange={handleOnChange}
                        accept="image/png, image/jpeg, image/gif"
                        className="sr-only"
                      />
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
                          <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#000000] dark:text-[#ffffff]">
                            Browse
                          </span>
                        </div>
                      </label>
                    </div>

                    <img className="rounded-md" src={imageSrc} alt={imageSrc} />
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
                  <div className="form-actions mb-10">
                    <button>Add Moment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default NewMoment;
