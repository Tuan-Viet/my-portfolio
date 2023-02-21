import { useEffect, router, useState } from "../../lib";
import axios from "axios";
const ProjectEdit = ({ id }) => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const currenProject = projects.find(project => project.id == id);

  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((Response) => Response.json())
      .then((data) => {
        setProject(data);
      })
  }, []);

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
      const formData = {
        name: projectname.value,
        date: projectDate.value,
        projectURL: projectURL.value,
        desc: projectDesc.value,
        link: projectLink.value,
        img: image_Project.length > 0 ? image_Project : project.img,
        list_img: list_image_Projects.length > 0 ? list_image_Projects : project.list_img,
        tools: list_tools,
      };

      fetch(`http://localhost:3000/projects/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(formData),
      }).then(() => {
        alert("Project updated successfully!");
        //redirect to admin
        router.navigate('/admin');
      })


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
  // if (!project) return null;
  return `
      <div div class= "container" >
        <div class="main-admin-content">
          <h2>EDIT PROJECT</h2>
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addModal"><a href="/admin">BACK</a></button>

          <div class="card">
          <form id="form-add">    
            <div class="form-group">
              <label for="nameInput">Name Project <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="project-name" placeholder="" value="${project.name ?? ""}"  required>
            </div>
            <div class="form-group">
              <label for="nameInput">Date <span class="text-danger">*</span></label>
              <input type="date" class="form-control" id="project-date" placeholder="" value="${project.date ?? ""}"  required>
            </div>
            <div class="form-group">
              <label for="fileInput">Image Project <span class="text-danger">*</span></label>
              <input type="file" class="form-control-file" id="project-image">
            </div>
            <div class="form-group">
              <img src="${project.img ?? ""}" width=150>
            </div>
            <div class="form-group">
              <label for="fileInput">Album Image <span class="text-danger">*</span></label>
              <input type="file" class="form-control-file" id="project-list-image" multiple>
            </div>
            <div class="form-group">
              ${project.list_img ? project.list_img.map((img) => `
              <img src="${img}" width=150 >
              `) : ""}
            </div>
            <div class="form-group">
              <label for="nameInput">Link web <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="project-link" placeholder="" value="${project.link ?? ""}" required>
            </div>
            <div class="form-group">
              <label for="nameInput">Source code <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="project-source-code" placeholder="" value="${project.projectURL ?? ""}" required>
            </div>
            <div class="form-group">
              <label for="nameInput">Tools <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="project-tools" placeholder="" value="${project.tools}" required>
            </div>

            <div class="form-group">
              <label for="messageTextarea">Describe</label>
              <textarea class="form-control" id="project-desc" rows="6" placeholder="" required>${project.desc}</textarea>
            </div>
            <button type="submit" class="btn btn-primary">SAVE</button>
          </form>
        </div>
    </div>
  </div >
  `
}

export default ProjectEdit;