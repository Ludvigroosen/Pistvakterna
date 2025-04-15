// teamModal.js for pistvakter.se
const teamMembers = [
    {
      id: "sven",
      name: "Sven-Erik Backe",
      title: "Huvudpistvakt",
      email: "sven@pistvakter.se",
      quote: "Med ansvar kommer snö.",
      story: "Sven-Erik har aldrig lämnat fjället. Han är en legend i overall och snö.",
      image: "images/sven.png"
    },
    {
      id: "olle",
      name: "Olle Backe",
      title: "Reservpistvakt",
      email: "olle@pistvakter.se",
      quote: "Bastu är inte ett val. Det är en livsstil.",
      story: "Olle är snabb i backen men snabbare i bastun. Han är så varm att snön smälter vid hans närvaro.",
      image: "images/olle.png"
    },
    {
      id: "jan",
      name: "Jan-Erik Backe",
      title: "Underpistvakt",
      email: "jan@pistvakter.se",
      quote: "Stav i hand. Blick i fjärran.",
      story: "Jan-Erik är den tysta vakten. Ingen vet exakt vad han gör, men det blir gjort.",
      image: "images/jan.png"
    },
    {
      id: "sixten",
      name: "Sixten ",
      title: "Farbror & Fjällfilosof",
      email: "sixten@pistvakter.se",
      quote: "Man värmer inte fjället. Fjället värmer dig.",
      story: "Sixten sitter mest och tittar på snön. Och snön tittar tillbaka.",
      image: "images/sixten.png"
    }
  ];
  
  function injectTeamSection() {
    const teamSection = document.createElement("section");
    teamSection.innerHTML = `
      <h2 class="text-2xl font-semibold mb-4">Våra Pistvakter</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${teamMembers.map(member => `
          <div class="bg-white rounded-2xl shadow-md p-6">
            <div class="flex items-center gap-4 mb-4">
              <img
                src="${member.image}"
                alt="${member.name}"
                onclick="showModal('${member.id}')"
                class="w-12 h-12 rounded-full object-cover transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-teal-400 cursor-pointer"
              />
              <div>
                <h3 class="text-xl font-semibold">${member.name}</h3>
                <p class="text-sm text-gray-500">${member.title}</p>
              </div>
            </div>
            <p class="text-sm mb-4">“${member.quote}”</p>
            <div class="flex items-center text-sm text-blue-600 gap-2">
              📧 <a href="mailto:${member.email}">${member.email}</a>
            </div>
          </div>
        `).join("")}
      </div>`;
  
    const aboutSection = document.body.querySelector("section:nth-of-type(3)");
    aboutSection.after(teamSection);
    injectModalStructure();
  }
  
  function injectModalStructure() {
    const modalDiv = document.createElement("div");
    modalDiv.id = "modal-backdrop";
    modalDiv.className = "hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
    modalDiv.innerHTML = `
      <div id="modal-content" class="bg-white dark:bg-teal-50 text-black max-w-md w-full p-6 rounded-lg shadow-xl relative">
        <button onclick="hideModal()" class="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-800">&times;</button>
        <div id="modal-body"></div>
      </div>`;
  
    document.body.appendChild(modalDiv);
  }
  
  function showModal(id) {
    const member = teamMembers.find(m => m.id === id);
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
      <div class="text-center space-y-4">
        <img src="${member.image}" alt="${member.name}" class="w-24 h-24 mx-auto rounded-full object-cover ring-2 ring-teal-400">
        <h2 class="text-xl font-bold">${member.name}</h2>
        <p class="text-sm text-gray-600">${member.title}</p>
        <p class="italic">“${member.quote}”</p>
        <p class="text-sm text-gray-700">${member.story}</p>
        <a href="mailto:${member.email}" class="text-blue-600 underline block mt-2">${member.email}</a>
      </div>`;
  
    document.getElementById("modal-backdrop").classList.remove("hidden");
  }
  
  function hideModal() {
    document.getElementById("modal-backdrop").classList.add("hidden");
  }
  
  window.addEventListener("DOMContentLoaded", injectTeamSection);
  