import React, { useEffect, useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { Table, Button, Input } from "reactstrap";
import DataTable from "./menu/dataTable";
import URI from "../../../util/URI";

function AdminTeacher() {
  const [menuData, setMenuData] = useState();
  const [isStateUpdate, setIsStateUpdate] = useState(false);
  const [createMenuData, setCreateMenuData] = useState({ id: 1, pas: 23 });
  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT + "/api/teacher/master/menu/category"
    )
      .then((res) => {
        setMenuData(res.data.data);
      })
      .catch((e) => console.error(e));
  }, []);

  // MenuData 드래그앤 드롭 기능 추가
  const MenuDataDndMove = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = menuData[dragIndex];
      setMenuData(
        update(menuData, {
          $splice: [
            [dragIndex, 1], // delete
            [hoverIndex, 0, dragCard], // Add
          ],
        })
      );

      // 여기서 전체 리스트 update API 삽입
      setIsStateUpdate(!isStateUpdate);

      // 삽입 끝
    },
    [menuData]
  );

  const addMenu = () => {
    setMenuData(
      update(menuData, {
        $push: [createMenuData],
      })
    );
  };

  const changeOrderby = () => {
    setMenuData(update(menuData, {}));
  };

  const deleteMenu = (index, data) => {
    setMenuData(update(menuData, {
      // $splice: [data, 1]
      $splice: [index]
    }));
    setIsStateUpdate(!isStateUpdate);
  };
  
  const updateMenu = (data) => {
    setMenuData(update(menuData, {}));
  };
  console.log(menuData);
  return (
    <>
      <h1>메뉴 관리</h1>
      <Button onClick={() => changeOrderby()}>순서 변경</Button>
      <Table striped>
        <thead>
          <tr>
            <th width="10%">index</th>
            <th width="10%">prevOrderBy</th>
            <th width="30%">name</th>
            <th width="30%">category</th>
            <th width="20%">FN</th>
          </tr>
        </thead>
        <tbody>
          {menuData?.map((data, index) => (
            <DndProvider key={index} backend={HTML5Backend}>
              <DataTable
                index={index}
                data={data}
                deleteMenu={deleteMenu}
                updateMenu={updateMenu}
                MenuDataDndMove={MenuDataDndMove}
              />
            </DndProvider>
          ))}
          <th scope="row"></th>
          <th scope="row"></th>
          <td>
            <Input />
          </td>
          <td>
            <Input />
          </td>
          <td>
            <Button onClick={() => addMenu()}>추가</Button>
          </td>
        </tbody>
      </Table>
      <h1>레스너 순서 관리</h1>
    </>
  );
}

export default AdminTeacher;