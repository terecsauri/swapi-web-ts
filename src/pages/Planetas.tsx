import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getPlaneta } from "./Datos";
import "./Planetas.css";

useState;
export const Planetas = () => {
  const [planet, setPlanet] = useState<
    { name: string; climate: string; population: string }[]
  >([]);

  const GetData = async () => {
    try {
      const data = await getPlaneta();
      console.log(data.results);

      const finalData = data.results;
      setPlanet(finalData);
    } catch (error) {
      console.error("Fetching data:", error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="todo-planetas">
      <DataTable value={planet} stripedRows tableStyle={{ minWidth: "50rem" }}>
        <Column
          field="name"
          header="Nombre"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="climate"
          header="Clima"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="population"
          header="Población"
          sortable
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
