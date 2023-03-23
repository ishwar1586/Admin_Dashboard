import React from "react";
const TaskList = (props) => {
  return (
      <div>

     
    <div>
      {props?.brotherInfo&&props.brotherInfo.map((val, idx) => {
        let projectName = `projectName-${idx}`,
          task = `task-${idx}`,
          taskNotes = `taskNotes-${idx}`,
          taskStatus = `taskStatus-${idx}`;
        return (
          <tr key={val.index}>
            <td>
              <input
                type="text"
                name="projectName"
                placeholder="brother Name"

                data-id={idx}
                id={projectName}
                className="form-control "
              />
            </td>
            <td>
              <input
                type="text"
                name="task"
                placeholder="brother age"

                id={task}
                data-id={idx}
                className="form-control "
              />
            </td>
            <td>
              <textarea
                name="taskNotes"
                id={taskNotes}
                placeholder="brother education"

                data-id={idx}
                className="form-control"
              ></textarea>
            </td>
            <td>
              <select
                name="taskStatus"
                id={taskStatus}
                data-id={idx}
                className="form-control"
              >
                <option value="pending">Pending</option>
                <option value="In Progress">In progress</option>
                <option value="Completed">Completed</option>
                <option value="Hold">Hold</option>
              </select>
            </td>
            <td>
              {idx === 0 ? (
                <button
                  onClick={() => props.add("brother")}
                  type="button"
                  className="btn btn-primary text-center"
                >
                  Add More brother
                </button>
              ) : (
                <button
                  className="btn btn-danger"
                  onClick={() => props.delete(val)}
                >
                  
                  Delete Brother
                </button>
              )}
            </td>
          </tr>
        );
      })}
    </div>
      <div>
      {props?.sisterInfo&&props.sisterInfo.map((val, idx) => {
        let projectName = `projectName-${idx}`,
          task = `task-${idx}`,
          taskNotes = `taskNotes-${idx}`,
          taskStatus = `taskStatus-${idx}`;
        return (
          <tr key={val.index}>
            <td>
              <input
                type="text"
                name="projectName"
                placeholder="sister Name"
                data-id={idx}
                id={projectName}
                className="form-control "
              />
            </td>
            <td>
              <input
                type="text"
                name="task"
                placeholder="sister age"

                id={task}
                data-id={idx}
                className="form-control "
              />
            </td>
            <td>
              <textarea
                name="taskNotes"
                id={taskNotes}
                placeholder="sister education"

                data-id={idx}
                className="form-control"
              ></textarea>
            </td>
            <td>
              <select
                name="taskStatus"
                id={taskStatus}
                data-id={idx}
                className="form-control"
              >
                <option value="pending">Pending</option>
                <option value="In Progress">In progress</option>
                <option value="Completed">Completed</option>
                <option value="Hold">Hold</option>
              </select>
            </td>
            <td>
              {idx === 0 ? (
                <button
                  onClick={() => props.add("sister")}
                  type="button"
                  className="btn btn-primary text-center"
                >
                  Add More Sister
                </button>
              ) : (
                <button
                  className="btn btn-danger"
                  onClick={() => props.delete(val)}
                >                  
                  Delete Sister
                </button>
              )}
            </td>
          </tr>
        );
      })}
    </div>
    </div>
  );
};
export default React.memo(TaskList);
