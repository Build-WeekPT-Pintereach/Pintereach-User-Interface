<script>
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function myFunction() {
    const myLinks = document.getElementById("myLinks");
    const brandText = document.querySelector("h1.logo-text");

    if (myLinks.style.display === "block") {
      myLinks.style.display = "none";
      brandText.style.top = "25%";

    } else {
      myLinks.style.display = "block";
      brandText.style.top = "8%";
    }



  } //end function
  
</script>