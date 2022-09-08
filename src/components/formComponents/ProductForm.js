import TextInput from "./TextInput";

function ProductForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        id="productFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />

      <TextInput
        label="Description"
        type="text"
        id="productFormDescription"
        name="description"
        value={props.state.description}
        onChange={props.onChange}
      />

      <TextInput
        label="Category"
        type="text"
        id="productFormCategory"
        name="category"
        value={props.state.category}
        onChange={props.onChange}
        hint="Please fill a comma separated list"
      />

      <TextInput
        label="Price"
        type="number"
        id="productFormPrice"
        name="price"
        value={props.state.price}
        onChange={props.onChange}
      />

<TextInput
        label="Quantity"
        type="number"
        id="productFormQuantity"
        name="quantity"
        value={props.state.quantity}
        onChange={props.onChange}
      />

      <TextInput
        label="Profile Picture"
        type="file"
        id="productFormPicture"
        name="picture"
        onChange={props.onChange}
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default ProductForm;