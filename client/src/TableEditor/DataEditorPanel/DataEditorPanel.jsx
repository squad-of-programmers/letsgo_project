import React, { useEffect, useState } from "react";

export default function DataEditorPanel({ data, setData, id }) {
  const [oneItem, setOneItem] = useState(data.filter((el) => el.id === id)[0]);

  useEffect(() => {
    console.log(oneItem);
  }, [oneItem]);

  return (
    <div className="input-group" style={{display: 'flex', flexDirection: 'column'}}>
      {Object.keys(oneItem).map((el) => (
        <>
          <div class="input-group-prepend">
            <span class="input-group-text">{el}</span>
          </div>
          <input
            type="text"
            value={oneItem[el]}
            onChange={(e) =>
              setOneItem((prev) => {
                prev[el] = e.target.value;
                return { ...prev };
              })
            }
          />
        </>
      ))}
      <button onClick={() => {}}>Save Data</button>
    </div>
  );
}
