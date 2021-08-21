import React, { useEffect, useState } from "react";
import DataEditorPanel from "./DataEditorPanel/DataEditorPanel";
import HeaderEditorPanel from "./HeaderEditorPanel/HeaderEditorPanel";
import serverData from "./seed";

export default function TableEditor() {
  let systemHeaders = ["selected"];
  //Настройки для отображения, которые сохраняются на серваке
  const [data, setData] = useState(idMaker(serverData));
  //Данные получаемые с сервера
  const [headers, setHeaders] = useState([]);
  //Заголовки таблицы
  const [editors, setEditors] = useState([false, false]);
  // [0] ->> Headers Editor, [1] ->> Data Editor
  const [id, setId] = useState()

  useEffect(() => {
    setHeaders((prev) => {
      let keys = Object.keys(data[0]);
      let result = [];
      keys.forEach((key) => {
        result.push({ field: key, visible: true, sort: 0 });
      });
      return result;
    });
  }, []);

  useEffect(() => {
    let selectedMap = data.map(el => el.selected);
    if (Array.isArray(selectedMap)) {
      if (selectedMap.some(el => el === true)) {
        setEditors(prev => {
          prev[0] = false;
          prev[1] = true;
          return [...prev];
        })
      } else {
        setEditors(prev => {
          prev[0] = false;
          prev[1] = false;
          return [...prev];
        })
      }
    }
    const id = data.find(el => el.selected === true)
    if (id) {
      setId(id.id)
    }
  }, [data]);

  useEffect(() => {
    console.log(id);
  }, [id]);

  
  function idMaker(dataArr){
    if(dataArr){
      dataArr.forEach((el, indx) => el.id = indx + 1)
      return dataArr;
    }
  }

  function changeHeadersPlaces(indx1, indx2) {
    setHeaders((prev) => {
      let buba = prev[indx1];
      prev[indx1] = prev[indx2];
      prev[indx2] = buba;
      return [...prev];
    });
  }

  function sortByField(fieldName) {
    setHeaders((prev) =>
      prev.map((header) =>
        header.field === fieldName
          ? { ...header, sort: header.sort + 1 }
          : { ...header, sort: 0 }
      )
    );
    let pointer;
    headers.forEach((el, i) => (el.field === fieldName ? (pointer = i) : null));
    let k = 1;
    if (headers[pointer].sort % 2 === 0) {
      k = -1;
    }

    setData((prev) => {
      prev.sort((a, b) => {
        if (a[fieldName] < b[fieldName]) {
          return -1 * k;
        }
        if (a[fieldName] > b[fieldName]) {
          return 1 * k;
        }
        return 0;
      });
      return [...prev];
    });
  }

  function headerEditorController() {
    setEditors((prev) => {
      prev[0] = !prev[0]; //вкл/выкл редактора заголовков
      prev[1] = false; //выключаем редактор данных
      return [...prev];
    });
  }

  function selectOneRow(i) {
    setData((prev) =>
      prev.map((el, index) =>
        index === i
          ? { ...el, selected: !el.selected }
          : { ...el, selected: false }
      )
    );
  }

  function unselectAllRows() {
    setData(prev => prev.map(el => {return { ...el, selected: false }}))
  }

  return (
    <div className="container">
      <input type="text" style={{ width: "100%" }} />
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) =>
              header.visible && !systemHeaders.includes(header.field) ? (
                <th
                  style={{ cursor: "pointer", textOverflow: "ellipsis" }}
                  nowrap="true"
                  key={index}
                  scope="col"
                  onClick={() => {
                    sortByField(header.field);
                  }}
                >
                  {header.sort > 0 ? (
                    header.sort % 2 === 0 ? (
                      <div>&#8595; {header.field}</div>
                    ) : (
                      <div>&#8593; {header.field}</div>
                    )
                  ) : (
                    <div>{header.field}</div>
                  )}
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  data[index].selected === true ? "pink" : "white",
              }}
              onClick={() => {
                selectOneRow(index);
                // initDataEditor()
              }}
            >
              {headers.map((header, i) =>
                header.visible ? <td>{obj[header.field]}</td> : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          // unselectAllRows();
          headerEditorController();
        }}
      >
        Headers Editors
      </button>

      <div>
        {editors[0] === true ? (
          <HeaderEditorPanel
            headers={headers}
            setHeaders={setHeaders}
            systemHeaders={systemHeaders}
          />
        ) : null}
      </div>

      <div>{editors[1] === true ? <DataEditorPanel data={data} setData={setData} id={id}/> : null}</div>
    </div>
  );
}
