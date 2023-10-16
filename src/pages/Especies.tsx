/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getEspecie } from "./Datos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Especies.css";

export const Especies = () => {
  const [specie, setSpecie] = useState<
    { name: string; classification: string; designation: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const GetData = async () => {
    try {
      const data = await getEspecie();
      console.log(data.results);

      const finalData = data.results;
      setSpecie(finalData);
    } catch (error) {
      console.error("Fetching data:", error);
    }
  };

  useEffect(() => {
    GetData()
    .then((response) => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="todo-especies">
      <DataTable
        value={specie}
        stripedRows
        loading={loading}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="name"
          header="Nombre"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="classification"
          header="Clasificación"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="designation"
          header="Designación"
          sortable
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
};
