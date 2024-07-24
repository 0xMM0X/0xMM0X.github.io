const gridData = [
  {
    imageSrc: "./images/bf-challenge.png",
    title: "Brute Force Attacks",
    details: [
      "Published On: Let's Defend",
      "Type: Logs",
      "Questions: 8",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/brute-force-attacks",
    isVIP: false,
  },{
    imageSrc: "./images/tv-challenge-cover.png",
    title: "TeamViewer Forensics",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Disk",
      "Questions: 8",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/teamviewer-forensics",
    isVIP: false,
  },{
    imageSrc: "./images/JetBrains.png",
    title: "JetBrains",
    details: [
      "Published On: Cyber Defenders",
      "Type: PCAP",
      "Questions: 9",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://cyberdefenders.org/blueteam-ctf-challenges/jetbrains/",
    isVIP: true,
  },{
    imageSrc: "./images/ics-cover.png",
    title: "Compromised ICS Device",
    details: [
      "Published On: Let's Defend",
      "Type: Logs",
      "Questions: 10",
      "Difficulty: Hard",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/compromised-ics-device",
    isVIP: false,
  }, {
  imageSrc: "./images/CVE-2024-4577-cover.png",
  title: "PHP-CGI (CVE-2024-4577)",
  details: [
    "Published On: Let's Defend",
    "Type: PCAP - Logs",
    "Questions: 8",
    "Difficulty: Easy",
  ],
  buttonText: "Try The Lab",
  buttonLink: "https://app.letsdefend.io/challenge/php-cgi-CVE-2024-4577",
  isVIP: false,
},{
  imageSrc: "./images/wplugin.png",
  title: "Malicious WordPress Plugin",
  details: [
    "Published On: Let's Defend",
    "Type: PCAP",
    "Questions: 14",
    "Difficulty: Medium",
  ],
  buttonText: "Try The Lab",
  buttonLink: "https://app.letsdefend.io/challenge/malicious-wordpress-plugin",
  isVIP: false,
},{
    imageSrc: "./images/discord-forensics.png",
    title: "Discord Forensics",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Disk",
      "Questions: 9",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/discord-forensics",
    isVIP: false,
  },{
    imageSrc: "./images/linux-mem-chal-cover.png",
    title: "Linux Memory Forensics",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Memory Dump",
      "Questions: 7",
      "Difficulty: Hard",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/alternate-data-stream",
    isVIP: false,
  },{
    imageSrc: "./images/ads-cover.png",
    title: "Alternate Data Streams",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Memory Dump",
      "Questions: 5",
      "Difficulty: Hard",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/alternate-data-stream",
    isVIP: false,
  },{
    imageSrc: "./images/pdfuri-cover.png",
    title: "PDFURI",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Disk",
      "Questions: 5",
      "Difficulty: Medium",
      'Shoutout: xElessaway'
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/pdfuri",
    isVIP: false,
  },{
    imageSrc: "./images/pcap-cover.png",
    title: "PCAP Analysis",
    details: [
      "Published On: Let's Defend",
      "Type: PCAP",
      "Questions: 6",
      "Difficulty: Beginner",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/pcap-analysis",
    isVIP: false,
  },{
    imageSrc: "./images/chrome-ext-cover.png",
    title: "Malicious Chrome Ext.",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Disk",
      "Questions: 7",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/malicious-chrome-extension",
    isVIP: false,
  },{
    imageSrc: "./images/Windows Memory Dump.png",
    title: "Windows Memory Dump",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Memory Dump",
      "Questions: 5",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/linux-disk-forensics",
    isVIP: true,
  },{
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
      "Type: PCAP",
      "Questions: 8",
      "Difficulty: Hard",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/http-2-rapid-reset",
    isVIP: true,
  },{
    imageSrc: "./images/cl0p.png",
    title: "cl0p Ransomware",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Memory Dump",
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
      "Type: Windows Memory Dump",
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
      "Type: Windows Memory Dump",
      "Questions: 10",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/wannacry-ransomware",
    isVIP: true,
  },{
    imageSrc: "./images/RanDev.png",
    title: "RanDev",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Memory Dump",
      "Questions: 8",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/randev",
    isVIP: true,

  },{
    imageSrc: "./images/lockbit.png",
    title: "LockBit",
    details: [
      "Published On: Let's Defend",
      "Type: Windows Memory Dump",
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
      "Type: Linux Disk",
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
      "Type: Windows Disk",
      "Questions: 12",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/registryhive",
    isVIP: true,
  },{
    imageSrc: "./images/aImageStegano-cover.png",
    title: "ImageStegano",
    details: [
      "Published On: Let's Defend",
      "Type: Stenography",
      "Questions: 5",
      "Difficulty: Medium",
    ],
    buttonText: "Try The Lab",
    buttonLink: "https://app.letsdefend.io/challenge/imagestegano",
    isVIP: true,
  },{
    imageSrc: "./images/Eagle eye.png",
    title: "Eagle eye",
    details: [
      "Published On: Cybertalents",
      "Type: Windows Memory Dump",
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
      if (detail.includes("Difficulty:")) {
        const detailParts = detail.split(":");
        const difficultyLevel = detailParts[1].trim(); // Get the difficulty level text
        listItem.innerHTML = `${detailParts[0]}: <span class="${getDifficultyClass(difficultyLevel)}">${difficultyLevel}</span>`;
      } else {
        listItem.textContent = detail;
      }
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

function getDifficultyClass(difficulty) {
  switch (difficulty) {
    case 'Easy':
      return 'difficulty-easy';
    case 'Medium':
      return 'difficulty-medium';
    case 'Hard':
      return 'difficulty-hard';
    case 'Beginner':
      return 'difficulty-beginner';
    default:
      return '';
  }
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