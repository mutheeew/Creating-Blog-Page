let datas = [];
// array digunakan untuk menyimpan data-data projects
function getData(event) {
  event.preventDefault();
  let projectName = document.getElementById('project-name').value;
  let startDate = document.getElementById('date-start').value;
  let endDate = document.getElementById('date-end').value;
  let description = document.getElementById('description').value;
  let nodeJs = document.getElementById('node-js').checked;
  let nextJs = document.getElementById('next-js').checked;
  let reactJs = document.getElementById('react-js').checked;
  let typeScript = document.getElementById('typescript').checked;
  let uploadImage = document.getElementById('upload-image').files;

  uploadImage = URL.createObjectURL(uploadImage[0]);

  let dataProject = {
    projectName,
    startDate,
    endDate,
    description,
    nodeJs,
    nextJs,
    reactJs,
    typeScript,
    uploadImage,
  };

  datas.push(dataProject);
  console.log(datas);
  showData();
}

const showData = () => {
  document.getElementById('content-card').innerHTML = '';
  for (let i = 0; i < datas.length; i++) {
    document.getElementById('content-card').innerHTML += `
    <div class="card">
      <div class="image-project">
        <img src="${datas[i].uploadImage}" />
      </div>
      <h3>${datas[i].projectName}</h3>
      <h5>${datas[i].startDate}</h5>
      <p>${datas[i].description}</p>
      <div class="tech-icon">
        <img src="assets/icon/node.svg" />
        <img src="assets/icon/next-js.svg" />
        <img src="assets/icon/react.svg" />
        <img src="assets/icon/typescript.svg" />
      </div>
      <div class="manipulation">
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </div>
    </div>`;
  }
};
