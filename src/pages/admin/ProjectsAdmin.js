import { useEffect, useState } from "../../lib";
import header from "../../components/admin/header";
import footer from "../../components/admin/footer";
const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects").then((response) => response.json()).then((data) => setProjects(data));
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // setData(projects)
  }, [])

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;

        const isConfirmed = window.confirm("Bạn có chắc muốn xóa dự án này không?");
        if (isConfirmed) {
          fetch(`http://localhost:3000/projects/${id}`, {
            method: "DELETE",
          }).then(() => {
            const newProjects = projects.filter((project) => project.id !== +id);
            setProjects(newProjects);
            alert("Project deleted successfully!");
          })
        }


      });
    }
  });
  return `
  <div class="container">
    <div class="main-admin-content">
      <h2>LIST PROJECTS</h2>
      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addModal"><a href="/admin/add">ADD</a></button>
      <table class="table" id="list-projects">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Date</th>
            <th>Image</th>
            <th>Link WEB</th>
            <th>Source code</th>
            <th>Des</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${projects.map((project, index) => {
    return `
            <tr>
              <td>${index + 1}</td>
              <td>${project.name}</td>
              <td>${project.date}</td>
              <td><img src="${project.img}" alt="" with=50></td>
              <td><a href="${project.link}" target="_blank">${project.link}</a></A></td>
              <td><a href="${project.projectURL}" target="_blank">${project.projectURL}</a></A></td>
              <td class="td__"><span>${project.desc}</span></td>
              <td>
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#editModal"><a href="/admin/${project.id}/edit">EDIT</a></button>
                <button data-id="${project.id}" type="button" class="btn-remove btn btn-danger btn-sm ">Delete</button>
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
