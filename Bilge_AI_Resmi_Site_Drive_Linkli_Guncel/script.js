// Destek formunun tam URL adresini asagidaki tirnaklar arasina yazin.
const DESTEK_FORMU_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfnT-JOgRveFjpcm_1-Kn7Qm_10ZZ1mp2Q2Qn2Ot2I9Aql5wQ/viewform";
document.getElementById("year").textContent = new Date().getFullYear();
const support = document.getElementById("support-link");
const hint = document.getElementById("support-hint");
if (DESTEK_FORMU_URL.startsWith("https://")) {
  support.href = DESTEK_FORMU_URL;
  support.target = "_blank";
  support.rel = "noopener noreferrer";
  support.removeAttribute("aria-disabled");
  hint.remove();
} else {
  support.addEventListener("click", event => {
    event.preventDefault();
    alert("Yardım ve destek formu bağlantısı henüz eklenmedi.");
  });
}
