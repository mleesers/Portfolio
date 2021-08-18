# Portfolio
<footer>
  <container id = "Contact-Me">
    <h1 id="contactTitle">Contact Me</h1>
      <ul>
        <li id="number" class="list">+1 (915)-474-7482</li>
        <li id="email" class="list">mduron432@gmai.com</li>
        <li id="github" class=list><a href="https://github.com/mleesers">Github</a></li>
        <li id="linkedIn" class="list"><a href="https://www.linkedin.com/in/michael-leeser-smith-9a459b151/">LinkedIn</a></li>
      </ul>
    </container>
</footer>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Michael Leeser-Smith</title>
  <link rel="stylesheet" href="folder/blank.css">
  <link rel="stylesheet" href="./style.css" />
</head>
<header>
  <h1>Michael Leeser-Smith</h1>
  <nav>
    <ul>
      <li>
        <a href="#About-Me" class="links">About Me</a>
      </li>
      <li>
        <a href="#Work" class="links">Work</a>
      </li>
      <li>
        <a href="#Contact-Me" class="links">Contact Me</a>
      </li>
      <li>
        <a href="folder/Resume1.docx" class="links">Resume</a>
      </li>
  </ul>
  </nav>  

</header>

<body>
  <div class="headImage">
    <img src="./folder/header_blue_background.jpg">
    <h2 id="Welcome">Welcome to my Portfolio Page!</h2>
  </div>
  <article class="content">
    <section id = "About-Me">

      <h1 id="AboutTitle">About Me</h1>

      <p id=AboutContent>Hello World! I am a computer science student at Texas Tech with an expected graduation date of May 2023.
        I am also currently enrolled in a full-stack coding bootcamp with a graduation date of September 2021. I am married to my wife,Crystal and have a daughter on the way.
        We live together with our dog, Nakita, and our cat, Helena.
      </p>
    </section>
    <section>
      <table class="table">
        <tr>
          <td id="titleTable"><h1 id="workTitle">Work</h1></td>
          <td class="table">
            <div class="slideshow-container fade">

              <!-- Full images with numbers and message Info -->
              <div class="Containers">
                <div class="MessageInfo">1 / 3</div>
                <a></a>
                  <img src="./folder/Weather.JPG" style="width:100%">
                </a>
                <div class="Info">Second Caption</div>
              </div>
            
              <div class="Containers">
                <div class="MessageInfo">2 / 3</div>
                <img src="image2.jpg" style="width:100%">
                <div class="Info">Second Caption</div>
              </div>
            
              <div class="Containers">
                <div class="MessageInfo">3 / 3</div>
                <img src="image3.jpg" style="width:80%">
                <div class="Info">Third Caption</div>
              </div>
            
              <!-- Back and forward buttons -->
              <a class="Back" onclick="plusSlides(-1)">&#10094;</a>
              <a class="forward" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br>
            </div>
          </td>
      </tr>
      </table>