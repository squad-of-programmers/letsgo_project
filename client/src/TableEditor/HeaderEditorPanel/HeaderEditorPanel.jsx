import React from "react"

export default function HeaderEditorPanel({ headers, setHeaders, systemHeaders }) {
  
  function checkboxHandler(fieldName) {
    setHeaders((headers) => headers.map((el, i) => 
        el.field === fieldName ? { ...el, visible: !el.visible } : el
      ))
  }

  return (
    <>
      <h5>Headers Editor</h5>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        {headers.map((header, index) => (
          <div key={index}>
            {!systemHeaders.includes(header.field) ? (
              <>
                <input
                  type="checkbox"
                  name={header.field}
                  checked={header.visible === true ? true : false}
                  onChange={(event) => {
                    checkboxHandler(event.target.name);
                  }}
                />
                <label className="mx-1">{header.field}</label>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
