
function applyCollapsible() {

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var sibling = this.nextElementSibling;
        console.log(sibling)
        if (sibling.style.display === "block") {
          sibling.style.display = "none";
        } else {
          sibling.style.display = "block";
        }
      });
    }
}
