export default function scrollToTop() {
  const wrapper = document.getElementById("dashboard-container");
  if (wrapper) {
    wrapper.scrollTo({top: 0, behavior: "smooth"});
  }
}
