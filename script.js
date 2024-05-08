const gridData = [
  {
    imageSrc: "./images/linux-disc-forensics.png",
    title: "Linux Disk Forensics",
    details: [
      "Published On: Let's Defend",
      "Type: Linux Disk",
      "Questions: 5",
      "Difficulty: Hard",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/linux-disk-forensics",
    isVIP: false,
  },{
    imageSrc: "./images/http2.png",
    title: "HTTP/2 Rapid Reset",
    details: [
      "Published On: Let's Defend",
      "Type: pcap",
      "Questions: 8",
      "Difficulty: Hard",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/http-2-rapid-reset",
    isVIP: true,
  },
  {
    imageSrc: "./images/cl0p.png",
    title: "cl0p Ransomware",
    details: [
      "Published On: Let's Defend",
      "Type: Memory Dump",
      "Questions: 7",
      "Difficulty: Hard",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/cl0p-ransomware",
    isVIP: true,
  },{
    imageSrc: "./images/winrar.png",
    title: "WinRAR 0-Day",
    details: [
      "Published On: Let's Defend",
      "Type: Memory Dump",
      "Questions: 7",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/winrar-0-day",
    isVIP: false,
  },{
    imageSrc: "./images/wannacry.png",
    title: "WannaCry Ransomware",
    details: [
      "Published On: Let's Defend",
      "Type: Memory dump",
      "Questions: 10",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/wannacry-ransomware",
    isVIP: true,
  }, 
  {
    imageSrc: "./images/RanDev.png",
    title: "RanDev",
    details: [
      "Published On: Let's Defend",
      "Type: Memory dump",
      "Questions: 8",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/randev",
    isVIP: true,

  }, {
    imageSrc: "./images/lockbit.png",
    title: "LockBit",
    details: [
      "Published On: Let's Defend",
      "Type: Memory dump",
      "Questions: 7",
      "Difficulty: Easy",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/lockbit",
    isVIP: false,

  },{
    imageSrc: "./images/linux-forensics.png",
    title: "Linux Forensics",
    details: [
      "Published On: Let's Defend",
      "Type: Disk",
      "Questions: 13",
      "Difficulty: Easy",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/linux-forensics",
    isVIP: true,

  },{
    imageSrc: "./images/docker.png",
    title: "Docker Forensics",
    details: [
      "Published On: Let's Defend",
      "Type: Docker",
      "Questions: 5",
      "Difficulty: Hard",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/docker-forensics",
    isVIP: true,
  },{
    imageSrc: "./images/RegistryHive.png",
    title: "RegistryHive",
    details: [
      "Published On: Let's Defend",
      "Type: Disk",
      "Questions: 12",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/registryhive",
    isVIP: true,
  },{
    imageSrc: "./images/Eagle eye.png",
    title: "Eagle eye",
    details: [
      "Published On: Cybertalents",
      "Type: Memory dump",
      "Points: 100",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://cybertalents.com/challenges/forensics/eagle-eye",
    isVIP: false,
  },
    

  // Add more items here if needed
];

const gridContainer = document.querySelector(".girgis-grid");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const currentPageIndicator = document.getElementById("currentPage");

let currentPage = 1;
const itemsPerPage = 9;

function renderGridItems(page) {
  gridContainer.innerHTML = ""; // Clear existing grid items

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  gridData.slice(startIndex, endIndex).forEach((item) => {
    const card = document.createElement("a");
    card.setAttribute("href", item.buttonLink);
    card.setAttribute("target", "_blank");  // Add this line
    card.classList.add("girgis-card");

    if (item.isVIP) {
      card.classList.add("vip");
    }
    const image = document.createElement("img");
    image.setAttribute("src", item.imageSrc);
    image.setAttribute("alt", "");

    const title = document.createElement("h6");
    title.textContent = item.title;

    const detailsList = document.createElement("ul");
    item.details.forEach((detail) => {
      const listItem = document.createElement("li");
      listItem.textContent = detail;
      detailsList.appendChild(listItem);
    });

    const button = document.createElement("button");
    button.textContent = item.buttonText;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(detailsList);
    card.appendChild(button);

    gridContainer.appendChild(card);
  });

  currentPageIndicator.textContent = `Page ${currentPage}`;
}

prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderGridItems(currentPage);
  }
});

nextPageBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(gridData.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderGridItems(currentPage);
  }
});

renderGridItems(currentPage);
