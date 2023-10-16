/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getPelicula } from "./Datos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Peliculas.css";

export const Peliculas = () => {
  const [film, setFilm] = useState<
    {
      title: string;
      episode_id: number;
      director: string;
      release_date: number;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const GetData = async () => {
    try {
      const data = await getPelicula();
      console.log(data.results);

      const finalData = data.results;
      setFilm(finalData);
    } catch (error) {
      console.error("Fetching data:", error);
    }
  };

  useEffect(() => {
    GetData()
    .then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="todo-peliculas">
      <DataTable value={film} stripedRows loading={loading} tableStyle={{ minWidth: "50rem" }}>
        <Column
          field="title"
          header="Titulo"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="episode_id"
          header="Episodio"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="director"
          header="Director"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="release_date"
          header="Año lanzamiento"
          sortable
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
};
