import React, { useState } from "react";
import TaskList from "./TaskList";

const AddMore = () => {
  const [formFileds, setFormFields] = useState({
    brother: [
      {
        index: Math.random(),
        projectName: "",
        task: "",
        taskNotes: "",
        taskStatus: "",
      },
    ],
    sister: [
      {
        index: Math.random(),
        projectName: "",
        task: "",
        taskNotes: "",
        taskStatus: "",
      },
    ],
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    if (
      ["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)
    ) {
      let brother = [...formFileds.brother];
      (brother[e.target.dataset.id][e.target.name] = e.target.value)
    } else {
      setFormFields({ [e.target.name]: e.target.value });
    }
  };
  const addNewRow = (type) => {
  //  const formFiledsCopy = JSON.parse(JSON.stringify(formFileds));
  const formFiledsCopy = {...formFileds}

     
    const currentTaskList = formFiledsCopy[type];

    formFiledsCopy[type] = [
      ...currentTaskList,
      {
        index: Math.random(),
        projectName: "",
        task: "",
        taskNotes: "",
        taskStatus: "",
      },
    ]

     

    setFormFields(formFiledsCopy);
  };

  const deteteRow = (index) => {
    const currentTaskList = formFileds.brother;

    setFormFields({
      taskList: currentTaskList.filter((s, sindex) => index !== sindex),
    });
    // const taskList1 = [...this.state.taskList];
    // taskList1.splice(index, 1);
    // this.setState({ taskList: taskList1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { date, description, brother } = formFileds;
    if (date === "" || description === "") {
      return false;
    }
    for (var i = 0; i < brother.length; i++) {
      if (brother[i].projectName === "" || brother[i].task === "") {
        return false;
      }
    }
  };

  const clickOnDelete = (record) => {
    setFormFields({
      brother: formFileds.brother.filter((r) => r !== record),
    });
  };

  console.log("form", formFileds);

  return (
    <div className="content">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="card">
              <div className="card-header text-center">Add Your Daily Task</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group ">
                      <label className="required">Date</label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="form-control"
                        placeholder="Enter Date"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group ">
                      <label className="required">Description</label>
                      <textarea
                        name="description"
                        id="description"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="required">Project Name</th>
                      <th className="required">Task</th>
                      <th>Notes</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TaskList
                      add={addNewRow}
                      delete={clickOnDelete}
                      brotherInfo={formFileds.brother}
                      sisterInfo={formFileds.sister}

                    />
                  </tbody>
                  <tfoot>
                    {/* <tr>
                      <td colSpan="4">
                        <button
                          onClick={addNewRow}
                          type="button"
                          className="btn btn-primary text-center"
                        >
                           dddd
                        </button>
                      </td>
                    </tr> */}
                  </tfoot>
                </table>
              </div>
              <div className="card-footer text-center">
                <button type="submit" className="btn btn-primary text-center">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(AddMore);
