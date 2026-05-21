function showMenu(id){

  document.querySelectorAll(".menu")
    .forEach(menu => {
      menu.classList.remove("active");
    });

  document
    .getElementById(id)
    .classList.add("active");

}


// SEARCH DATA TABEL
function searchTable(inputId, frameId){

  let input = document
    .getElementById(inputId)
    .value
    .toLowerCase();

  let iframe = document.getElementById(frameId);

  try {

    let doc = iframe.contentWindow.document;

    let rows = doc.querySelectorAll("table tr");

    rows.forEach((row, index) => {

      // skip header tabel
      if(index === 0) return;

      let text = row.innerText.toLowerCase();

      row.style.display =
        text.includes(input)
        ? ""
        : "none";

    });

  } catch(err){

    console.log("Iframe tidak bisa diakses browser");

  }

}