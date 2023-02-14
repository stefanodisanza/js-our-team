const teamMembers = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" }
  ];
  
  for (let member in teamMembers) {
    console.log("Nome: " + teamMembers[member].nome);
    console.log("Ruolo: " + teamMembers[member].ruolo);
    console.log("Foto: " + teamMembers[member].foto);
  }
  
  const teamList = document.querySelector("#team-list");

for (let member in teamMembers) {
  const memberInfo = document.createElement("p");
  memberInfo.textContent = "Nome: " + teamMembers[member].nome + ", Ruolo: " + teamMembers[member].ruolo + ", Foto: " + teamMembers[member].foto;
  teamList.appendChild(memberInfo);
}
