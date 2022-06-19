import { useEffect, useState } from "react";
import { iGentleman } from "../interfaces/iGentleman";
import {
  deleteGentleman,
  getAllGentleman,
  updateGentleman,
} from "../services/gentlemanJsonServer";
import Gentleman from "./Gentleman";
import SelectAllButton from "./SelectAllButton";

export default function GentlemanList() {
  const [gentlemanList, setGentlemanList] = useState<Array<iGentleman>>([]);

  useEffect(() => {
    reloadGentlemanList();
  }, []);

  const reloadGentlemanList = (): void => {
    getAllGentleman().then((res) => {
      setGentlemanList(res);
    });
  };

  const selectAll = (selectValue: boolean): void => {
    const promises = gentlemanList.map((gentleman) =>
      updateGentleman(gentleman.id, { selected: selectValue })
    );
    Promise.all(promises).then((res) => {
      console.log(res);
    });
  };

  const selectById = (id: number): void => {
    const gentlemanForUpdate = gentlemanList.find(
      (gentleman) => gentleman.id === id
    );
    if (gentlemanForUpdate) {
      updateGentleman(id, {
        selected: !gentlemanForUpdate.selected,
      }).then((res) => {
        setGentlemanList(
          gentlemanList.map((gentleman) =>
            gentleman.id === id ? { ...res } : { ...gentleman }
          )
        );
      });
    }
  };

  const deleteById = (id: number): void => {
    deleteGentleman(id).then(() => {
      setGentlemanList(
        gentlemanList.filter((gentleman) => gentleman.id !== id)
      );
    });
  };

  return (
    <section>
      <div className="controls">
        <p className="info">
          {gentlemanList.filter((data) => data.selected).length} gentlemen
          pointing at you
        </p>
        <SelectAllButton
          isAllSelected={gentlemanList.every((data) => data.selected)}
          selectAll={selectAll}
        />
      </div>
      <ul className="gentlemen">
        {gentlemanList.map((data) => (
          <Gentleman
            key={data.id}
            data={data}
            selectGentleman={() => selectById(data.id)}
            deleteGentleman={() => deleteById(data.id)}
          />
        ))}
      </ul>
    </section>
  );
}
