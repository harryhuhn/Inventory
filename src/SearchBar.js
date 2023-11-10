import {useState} from "react";

function SearchBar(props) {
    const [partNumber, setPartNumber] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [btChecked, setBTChecked] = useState(false);
    const [ptrChecked, setPTRChecked] = useState(false);
    const [cacChecked, setCACChecked] = useState(false);

    const searchButtonPress = () => {
        props.updateSearchParams({ partNumber: partNumber, name: name, price: price, type: type, brand: brand, BT: btChecked ? "BT" : "", PTR: ptrChecked ? "PTR" : "", CAC: cacChecked ? "CAC" : ""});
    }

    const resetButtonPress = () => {
        props.updateSearchParams({ partNumber: "", name: "", price: null, type: "", brand: "", btChecked: false, ptrChecked: false, cacChecked: false});
        setPartNumber("");
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
        setBTChecked(false);
        setPTRChecked(false);
        setCACChecked(false);
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Search for an item</h2>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="partNumber-field">Part Number:</label>
                    <input
                        className="form-control"
                        id="partNumber-field"
                        type="text"
                        value={partNumber}
                        onChange={(e) => setPartNumber(e.target.value)} />
                </div>
                <div className="col">
                    <label htmlFor="name-field">Name:</label>
                    <input
                        className="form-control"
                        id="name-field"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col">
                    <label htmlFor="max-price-field">Max Price:</label>
                    <input
                        className="form-control"
                        id="max-price-field"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="col">
                    <label htmlFor="type-field">Type:</label>
                    <input
                        className="form-control"
                        id="type-field"
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)} />
                </div>
                <div className="col">
                    <label htmlFor="brand-field">Brand:</label>
                    <input
                        className="form-control"
                        id="brand-field"
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)} />
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
        <div className="col-3">
          <label>
            <input
              type="checkbox"
              checked={btChecked}
              onChange={() => setBTChecked(!btChecked)}
            />{" "}
            Bolt Together (BT)
          </label>
        </div>
        <div className="col-3">
          <label style={{ whiteSpace: 'nowrap' }}>
            <input
              type="checkbox"
              checked={ptrChecked}
              onChange={() => setPTRChecked(!ptrChecked)}
            />{" "}
            Plastic Aluminum (PTR)
          </label>
        </div>
        <div className="col-3">
          <label style={{ whiteSpace:'nowrap',marginLeft: '30px' }}>
            <input
              type="checkbox"
              checked={cacChecked}
              onChange={() => setCACChecked(!cacChecked)}
            />{" "}
            Charge Air (CAC)
          </label>
        </div>
      </div>
            <div className="row mt-3 justify-content-center">
                <div className="col-1"/>
                <button type="button" className="col-1 btn btn-primary" onClick={searchButtonPress}>Search</button>

                <div className="col-1"/>
                <button type="button" className="col-1 btn btn-primary" onClick={resetButtonPress}>Reset</button>
            </div>
        </div>
    )
}

export default SearchBar;