function eventHandler() {
  const exploreBtn = document.querySelector(".explore-btn");
  exploreBtn.addEventListener("click", (e) => {
    const asideBar = document.querySelector("aside");

    // asideBar.style = "display: block";

    const check = localStorage.getItem("aside") || "";

    if (check == "open") {
      asideBar.classList.remove("open");
      localStorage.removeItem("aside");
    } else {
      asideBar.classList.add("open");
      localStorage.setItem("aside", "open");
    }
  });
}

export default eventHandler;
