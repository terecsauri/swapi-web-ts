/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getPersonaje } from "./Datos";
import { useEffect, useState } from "react";
import "./Personajes.css";

export const Personajes = () => {
  const [person, setPerson] = useState<{ name: string; gender: string; height: string; birth_year: string }[]>([]);
  const [loading, setLoading] = useState(true);

  const GetData = async () => {
    try {
      const data = await getPersonaje();
      console.log(data.results);

      const finalData = data.results;
      setPerson(finalData);
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
    <div className="todo-personajes">
      <DataTable value={person} stripedRows loading={loading} tableStyle={{ minWidth: "50rem" }}>
        <Column
          field="name"
          header="Nombre"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="gender"
          header="Género"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="height"
          header="Altura"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="birth_year"
          header="Año de nacimiento"
          sortable
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
};
