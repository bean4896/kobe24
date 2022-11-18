import { useRef } from "react";

function NewMemory(props) {
  // useref is a hook that allows us to access the value of an input element
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    // Prevents the page from reloading
    event.preventDefault();

    // Get the values from the input fields
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // spilt the image into an array
    var pos = enteredImage.lastIndexOf("\\");
    var filename = enteredImage.substring(pos + 1);

    //final data object
    const memoryData = {
      title: enteredTitle,
      image: enteredImage,
      date: enteredDate,
      description: enteredDescription,
    };

    //
    // console.log(memoryData, `../public/images/${filename}`);
    props.onAddMemory(memoryData);
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full p-10 max-w-[550px] gr_border">
        <form>
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
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              ref={imageInputRef}
            />
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
            <button onClick={submitHandler}>Add Memory</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewMemory;
