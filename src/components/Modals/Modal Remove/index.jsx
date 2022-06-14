import toast from "react-hot-toast";
import "./style.css";

const ModalRemove = ({ closeModal, shirts, getProducts }) => {
  const handleRemoveShirt = async () => {
    const baseURL = "https://api-crud-shirts.herokuapp.com/";

    const res = await fetch(`${baseURL}product/delete-product/${shirts._id}`, {
      method: "DELETE",
      mode: "cors",
    });

    if (res.status !== 200) {
      return toast.error("Error deleting palette.");
    }

    closeModal();
    getProducts();
    toast.success("Shirts remove");
  };
  return (
    <div className="modal-overlay">
      <div className="modal-remove">
        <div className="modal-header">
          <button onClick={closeModal}>X</button>
        </div>
        <h3>Remove {shirts.club}? </h3>
      </div>
      <div className="modal-actions">
        <button className="cancel" onClick={closeModal}>
          No
        </button>
        <button clasName="confirm" onClick={handleRemoveShirt}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default ModalRemove;
