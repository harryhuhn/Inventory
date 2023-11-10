function ItemsDisplay({ items, deleteItem }) {
  const showItem = (item) => {
    return (
      <tr key={item.id}>
        <th scope="row">{item.partNumber}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
        <td>{item.BT}</td>
        <td>{item.PTR}</td>
        <td>{item.CAC}</td>
        <td>
          <button className="btn btn-danger" onClick={() => deleteItem(item)}>
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const containerStyle = {
    maxHeight: "275px", // Adjust the height to show around 5.5 items
    overflowY: "scroll",
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <div style={containerStyle}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Part Number</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
                <th scope="col">Brand</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{items.map(showItem)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ItemsDisplay;
