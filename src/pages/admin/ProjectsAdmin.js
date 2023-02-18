import { projects } from "../../data";
import { useEffect, useState } from "../../lib";
const ProjectsAdmin = () => {
  const [data, setData] = useState(projects);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const newProjects = data.filter((project) => project.id !== +id);
        setData(newProjects);
      });
    }
  });
  return `
  <div class="container">
    <div class="main-admin-content">
      <h2>Example Table</h2>
      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addModal">Add</button>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Info</th>
            <th>Image</th>
            <th>Link</th>
            <th>Des</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${data.map((project, index) => {
    return `
            <tr>
              <td>${index + 1}</td>
              <td>${project.name}</td>
              <td class="td__">${project.info}</td>
              <td>${project.img}</td>
              <td><a href="${project.link}" target="_blank">${project.link}</a></A></td>
              <td class="td__">${project.desc}</td>
              <td>
                <button data-id="${project.id}" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#editModal">Edit</button>
                <button type="button" class="btn-remove btn btn-danger btn-sm ">Delete</button>
              </td>
            </tr>
            `
  }).join("")}
          
        </tbody>
      </table>
    </div>
  </div>
  
  `
}

export default ProjectsAdmin;
