import { useEffect, router } from "../../lib";
import axios from "axios";

const ProjectAdd = () => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];

  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectname = document.getElementById("project-name");
    const projectDate = document.getElementById("project-date");
    const projectURL = document.getElementById("project-source-code");
    const projectLink = document.getElementById("project-link");
    const projectImage = document.getElementById("project-image");
    const projectListImage = document.getElementById("project-list-image");
    const projectDesc = document.getElementById("project-desc");
    const projectTools = document.getElementById("project-tools");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const list_image_Projects = await uploadFiles(projectListImage.files);
      const image_Project = await uploadFiles(projectImage.files);
      const list_tools = projectTools.value.split(",");
      const newProject = {
        // id: projects.length + 1,
        name: projectname.value,
        date: projectDate.value,
        projectURL: projectURL.value,
        desc: projectDesc.value,
        link: projectLink.value,
        img: image_Project,
        list_img: list_image_Projects,
        tools: list_tools,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newProject)
      }).then(() => {
        alert("Project added successfully!");
        router.navigate('/admin');
      });

    });
  });

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "db7hclqfc";
      const PRESET_NAME = "my-portfolio";
      const FOLDER_NAME = "my-portfolio";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();

      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      };
      return urls;
    }
  }
  return `
    <div class="container">
      <div class="main-admin-content">
        <h2>ADD PROJECT</h2>
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addModal"><a href="/admin">BACK</a></button>

        <div class="card">
          <form id="form-add">    
            <div class="form-group">
              <label for="nameInput">Name Project <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="project-name" placeholder="" required>
            </div>
            <div class="form-group">
              <label for="nameInput">Date <span class="text-danger">*</span></label>
              <input type="date" class="form-control" id="project-date" placeholder="" required>
            </div>
            <div class="form-group">
              <label for="fileInput">Image Project <span class="text-danger">*</span></label>
              <input type="file" class="form-control-file" id="project-image">
            </div>
            <div class="form-group">
              <label for="fileInput">List image Project <span class="text-danger">*</span></label>
              <input type="file" class="form-control-file" id="project-list-image" multiple >
            </div>
            <div class="form-group">
              <label for="nameInput">Link live <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="project-link" placeholder="http://" required>
            </div>
            <div class="form-group">
              <label for="nameInput">SourceCode <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="project-source-code" placeholder="http://" required>
            </div>
            <div class="form-group">
              <label for="nameInput">Tools <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="project-tools" placeholder="" required>
            </div>

            <div class="form-group">
              <label for="messageTextarea">Describe</label>
              <textarea class="form-control" id="project-desc" rows="3" placeholder="" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">ADD</button>
          </form>
        </div>
      </div>
  </div>
  `
}

export default ProjectAdd;