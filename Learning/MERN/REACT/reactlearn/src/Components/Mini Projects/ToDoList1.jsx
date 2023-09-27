import React, { useState } from "react";

const main_todo_div = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#6983aa",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const todo_center_div = {
  width: "30%",
  height: "70vh",
  backgroundColor: "#f4f4f4",
  boxShadow: "5px 5px 25px -5px rgba(0,0,0,0.5)",
  borderRadius: "15px",
};

const todo_heading = {
  color: "white",
  backgroundColor: "#8566aa",
  background: "transparent",
  padding: "5px 0 3px 0",
  marginBottom: "10px",
  boxShadow: "5px 5px 15px -5px rgba(0,0,0,0.3)",
};

const todo_input = {
  textAlign: "center",
  height: "30px",
  top: "10px",
  border: "none",
  background: "transparent",
  fontSize: "20px",
  fontWeight: "500",
  width: "60%",
  borderRadius: "2px solid #8566aa",
  outline: "none",
};

const todo_add_btn = {
  width: "40px",
  minHeight: "40px",
  borderRadius: "50%",
  borderColor: "transparent",
  color: "#fff",
  backgroundColor: "#8566aa",
  fontSize: "40px",
  border: "none",
  outline: "none",
  marginLeft: "10px",
  boxShadow: "5px 5px 15px -5px rgba(0,0,0,0.3)",
};

const todo_main_list = {
  marginTop: "30px",
};

const todo_subItem_list = {
  paddingLeft: "0px",
  textAlign: "left",
  fontSize: "20px",
  fontWeight: "bold",
  minHeight: "40px",
  display: "flex",
  alignItems: "center",
  color: "#8566aa",
  textTransform: "capitalize",
};

const todo_map_div = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
};

const todo_delete_icon = {
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#8566aa",
  borderRadius: "50%",
  margin: "0 15px 0 35px",
  color: "aliceblue",
  boxShadow: "5px 5px 15px -5px rgba(0,0,0,0.3)",
};

const ToDoList1 = () => {
  const [inputData, setInputData] = useState("");
  const [listData, setListData] = useState([]);

  const handleSportName = (e) => {
    setInputData(e.target.value);
  };

  const submitSport = () => {
    setListData((oldItem) => {
      return [...oldItem, inputData];
    });
    setInputData("");
  };

  const deleteTodo = (id) => {
    setListData( (oldItem) => {
        return oldItem.filter( (arrElem, index) => {
            return index !== id;
        });
    })
  };

  return (
    <div style={main_todo_div}>
      <div style={todo_center_div}>
        <br />
        <h1 style={todo_heading}>TODO-LIST</h1>
        <hr />
        <input
          type="text"
          placeholder="Add Sports Name..."
          style={todo_input}
          onChange={handleSportName}
          value={inputData}
        />
        <button style={todo_add_btn} onClick={submitSport}>
          +
        </button>

        <ol style={todo_main_list}>
          {/* <li style={todo_subItem_list}> {inputData}</li> */}
          {listData.map((sport, index) => {
            return (
              <>
                <div style={todo_map_div} key={index}>
                  <i
                    class="fa fa-times"
                    aria-hidden="true"
                    style={todo_delete_icon}
                    onClick={deleteTodo}
                  ></i>
                  <li style={todo_subItem_list}> {sport}</li>
                </div>
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList1;



/*
btn: hover{
    background-color: #20bf6b;
}
After 35..
*/