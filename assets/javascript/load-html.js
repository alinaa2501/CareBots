function loadHtmlInsideId(html_file, id){
    fetch(html_file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
        highlightCurrentTab();})
    .catch(error => console.error(error));
}

function highlightCurrentTab() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var count = 0

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
        count ++
      }
    });

    if (count === 0) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '/') {
          link.classList.add('active');
          return
        }
      });
    }

  }