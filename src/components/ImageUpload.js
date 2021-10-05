import "../assets/styles/ImageUpload.css";

function ImageUpload() {
  return (
    <div>
      <form className="form">
        <input className="form_text" type="text" />
        <input className="form_file" type="file" />
        <button className="form_button" type="sumbit">
          Capture!
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;
