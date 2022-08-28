/*Restart*/
var restart = document.getElementById("restart");
restart.addEventListener("click", function() {
  window.location.reload();
});

/*Define Variables*/

var shakeScore = 0;
var zephScore = 0;
var crumbScore = 0;
var dodieScore = 0;
var enyaScore = 0;
var steveScore = 0;
var loveScore = 0;
var portishScore = 0;
var keroScore = 0;
var heapScore = 0;
var kingScore = 0;

//used for multi select/disable
var answerSelectedQ1 = 0;
var answerSelectedQ2 = 0;
var answerSelectedQ3 = 0;
var answerSelectedQ4 = 0;
var answerSelectedQ5 = 0;
var answerSelectedQ6 = 0;
var answerSelectedQ7 = 0;
var answerSelectedQ8 = 0;
var answerSelectedQ9 = 0;

/*Get Elements*/
var selectedElements = document.getElementsByClassName("selected");
var answerNumber = document.getElementById("answerNumber");
var result = document.getElementById("result");
var buttons = document.getElementsByTagName("button");
var recs = document.getElementById("recs");
var all = document.getElementById("all");

//elements in specific artist reccomendation class
var answerShake = document.getElementsByClassName("answerShake");
var answerZeph = document.getElementsByClassName("answerZeph");
var answerSteve = document.getElementsByClassName("answerSteve");
var answerCrumb = document.getElementsByClassName("answerCrumb");
var answerDodie = document.getElementsByClassName("answerDodie");
var answerEnya = document.getElementsByClassName("answerEnya");
var answerLove = document.getElementsByClassName("answerLove");
var answerPortish = document.getElementsByClassName("answerPortish");
var answerKero = document.getElementsByClassName("answerKero");
var answerHeap = document.getElementsByClassName("answerHeap");
var answerKing = document.getElementsByClassName("answerKing");

//div denoting #question
var question = document.getElementsByClassName("question");
var parentDiv1 = document.getElementById("Q1");
var parentDiv2 = document.getElementById("Q2");
var parentDiv3 = document.getElementById("Q3");
var parentDiv4 = document.getElementById("Q4");
var parentDiv5 = document.getElementById("Q5");
var parentDiv6 = document.getElementById("Q6");
var parentDiv7 = document.getElementById("Q7");
var parentDiv8 = document.getElementById("Q8");
var parentDiv9 = document.getElementById("Q9");

//next-submit buttons
var submitQ1 = document.getElementById("submitQ1");
var submitQ2 = document.getElementById("submitQ2");
var submitQ3 = document.getElementById("submitQ3");
var submitQ4 = document.getElementById("submitQ4");
var submitQ5 = document.getElementById("submitQ5");
var submitQ6 = document.getElementById("submitQ6");
var submitQ7 = document.getElementById("submitQ7");
var submitQ8 = document.getElementById("submitQ8");
var submitQ9 = document.getElementById("submitQ9");

/*Disable Selected, Allow Multiple Select*/

//called when selection button clicked
function selected(element, cursor) {
  //checks if clicked button in question
  if (parentDiv1.contains(element)) {
    //changes style, class (first time clicked)
    if (answerSelectedQ1 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ1 += 1;

    //set selected element to var
    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    //if new button clicked -> changes style & class of previous selection(element) and new(selectedButton)
    if (answerSelectedQ1 >= 2) {
      answerSelectedQ1 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }

  //Repeat for each question:

  if (parentDiv2.contains(element)) {
    if (answerSelectedQ2 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ2 += 1;

    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    if (answerSelectedQ2 >= 2) {
      answerSelectedQ2 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }

  if (parentDiv3.contains(element)) {
    if (answerSelectedQ3 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ3 += 1;

    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    if (answerSelectedQ3 >= 2) {
      answerSelectedQ3 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }

  if (parentDiv4.contains(element)) {
    if (answerSelectedQ4 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ4 += 1;

    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    if (answerSelectedQ4 >= 2) {
      answerSelectedQ4 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }

  if (parentDiv5.contains(element)) {
    if (answerSelectedQ5 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ5 += 1;

    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    if (answerSelectedQ5 >= 2) {
      answerSelectedQ5 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }

  if (parentDiv6.contains(element)) {
    if (answerSelectedQ6 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ6 += 1;

    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    if (answerSelectedQ6 >= 2) {
      answerSelectedQ6 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }

  if (parentDiv7.contains(element)) {
    if (answerSelectedQ7 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ7 += 1;

    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    if (answerSelectedQ7 >= 2) {
      answerSelectedQ7 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }

  if (parentDiv8.contains(element)) {
    if (answerSelectedQ8 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ8 += 1;

    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    if (answerSelectedQ8 >= 2) {
      answerSelectedQ8 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }

  if (parentDiv9.contains(element)) {
    if (answerSelectedQ9 < 1) {
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }

    answerSelectedQ9 += 1;

    for (a = 0; a < buttons.length; a++) {
      if (buttons[a].classList.contains("selected")) {
        var selectedButton = buttons[a];
      }
    }

    if (answerSelectedQ9 >= 2) {
      answerSelectedQ9 -= 1;
      selectedButton.classList.remove("selected")
      selectedButton.classList.add("unselected");
      selectedButton.disabled = false;
      selectedButton.style.cursor = "pointer";

      element.classList.remove("unselected");
      element.classList.add("selected");
      element.style.cursor = cursor;
      element.disabled = true;
    }
  }
}

/*Next Question, Next-Submit Button*/

for (x = 0; x < question.length; x++) {
  if (!question[x].contains(parentDiv1)) {
    question[x].style.display = "none";
  }
}

//when next-submit button clicked
submitQ1.addEventListener("click", function() {
  //if selected elements exist
  if (!selectedElements.length == 0) {
    //call scores (add to score for specific outcome)
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }

    //for every question
    for (x = 0; x < question.length; x++) {
      //if question at position x is question two
      if (question[x].contains(parentDiv2)) {
        //show question two
        question[x].style.display = "initial";
      }
      else {
        question[x].style.display = "none";
      }
    }
    //loops through every button
    for (a = 0; a < buttons.length; a++) {
      //if button in current question 
      if (parentDiv1.contains(buttons[a])) {
        //button is not able to be selected  
        buttons[a].disabled = true;
        buttons[a].classList.add("disabled");
        buttons[a].style.cursor = "not-allowed";
      }
    }
  }
});

//Same for every next-submit button:

submitQ2.addEventListener("click", function() {
  if (!selectedElements.length == 0) {
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }

    for (x = 0; x < question.length; x++) {
      //adds next question & shows
      if (question[x].contains(parentDiv2) || question[x].contains(parentDiv3)) {
        question[x].style.display = "initial";
      }
      else {
        //hides
        question[x].style.display = "none";
      }
    }

    for (a = 0; a < buttons.length; a++) {
      if (parentDiv1.contains(buttons[a]) || parentDiv2.contains(buttons[a])) {
        buttons[a].disabled = true;
        buttons[a].classList.add("disabled");
        buttons[a].style.cursor = "not-allowed";
      }
    }

  }
});

submitQ3.addEventListener("click", function() {
  if (!selectedElements.length == 0) {
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }

    for (x = 0; x < question.length; x++) {
      if (question[x].contains(parentDiv2) || question[x].contains(parentDiv3) || question[x].contains(parentDiv4)) {
        question[x].style.display = "initial";
      }
      else {
        question[x].style.display = "none";
      }
    }

    for (a = 0; a < buttons.length; a++) {
      if (parentDiv1.contains(buttons[a]) || parentDiv2.contains(buttons[a]) || parentDiv3.contains(buttons[a])) {
        buttons[a].disabled = true;
        buttons[a].classList.add("disabled");
        buttons[a].style.background = "linear-gradient(#b5f2c4 15%, #dad7e5 25%, #dad7e5 85%, #b5f2c4 90%)";
        buttons[a].style.cursor = "not-allowed";
      }
    }

  }
});

submitQ4.addEventListener("click", function() {
  if (!selectedElements.length == 0) {
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }

    for (x = 0; x < question.length; x++) {
      if (question[x].contains(parentDiv2) || question[x].contains(parentDiv3) || question[x].contains(parentDiv4) || question[x].contains(parentDiv5)) {
        question[x].style.display = "initial";
      }
      else {
        question[x].style.display = "none";
      }
    }

    for (a = 0; a < buttons.length; a++) {
      if (parentDiv1.contains(buttons[a]) || parentDiv2.contains(buttons[a]) || parentDiv3.contains(buttons[a]) || parentDiv4.contains(buttons[a])) {
        buttons[a].disabled = true;
        buttons[a].classList.add("disabled");
        buttons[a].style.background = "linear-gradient(#b5f2c4 15%, #dad7e5 25%, #dad7e5 85%, #b5f2c4 90%)";
        buttons[a].style.cursor = "not-allowed";
      }
    }

  }
});

submitQ5.addEventListener("click", function() {
  if (!selectedElements.length == 0) {
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }

    for (x = 0; x < question.length; x++) {
      if (question[x].contains(parentDiv2) || question[x].contains(parentDiv3) || question[x].contains(parentDiv4) || question[x].contains(parentDiv5) || question[x].contains(parentDiv6)) {
        question[x].style.display = "initial";
      }
      else {
        question[x].style.display = "none";
      }
    }

    for (a = 0; a < buttons.length; a++) {
      if (parentDiv1.contains(buttons[a]) || parentDiv2.contains(buttons[a]) || parentDiv3.contains(buttons[a]) || parentDiv4.contains(buttons[a]) || parentDiv5.contains(buttons[a])) {
        buttons[a].disabled = true;
        buttons[a].classList.add("disabled");
        buttons[a].style.background = "linear-gradient(#dab5f2 15%, #7c7a7f 25%, #7c7a7f 85%, #dab5f2 90%)";
        buttons[a].style.cursor = "not-allowed";
      }
    }
  }
});

submitQ6.addEventListener("click", function() {
  if (!selectedElements.length == 0) {
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }

    for (x = 0; x < question.length; x++) {
      if (question[x].contains(parentDiv2) || question[x].contains(parentDiv3) || question[x].contains(parentDiv4) || question[x].contains(parentDiv5) || question[x].contains(parentDiv6) || question[x].contains(parentDiv7)) {
        question[x].style.display = "initial";
      }
      else {
        question[x].style.display = "none";
      }
    }

    for (a = 0; a < buttons.length; a++) {
      if (parentDiv1.contains(buttons[a]) || parentDiv2.contains(buttons[a]) || parentDiv3.contains(buttons[a]) || parentDiv4.contains(buttons[a]) || parentDiv5.contains(buttons[a]) || parentDiv6.contains(buttons[a])) {
        buttons[a].disabled = true;
        buttons[a].classList.add("disabled");
        buttons[a].style.background = "linear-gradient(#dab5f2 15%, #7c7a7f 25%, #7c7a7f 85%, #dab5f2 90%)";
        buttons[a].style.cursor = "not-allowed";
      }
    }
  }
});

submitQ7.addEventListener("click", function() {
  if (!selectedElements.length == 0) {
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }

    for (x = 0; x < question.length; x++) {
      if (question[x].contains(parentDiv2) || question[x].contains(parentDiv3) || question[x].contains(parentDiv4) || question[x].contains(parentDiv5) || question[x].contains(parentDiv6) || question[x].contains(parentDiv7) || question[x].contains(parentDiv8)) {
        question[x].style.display = "initial";
      }
      else {
        question[x].style.display = "none";
      }
    }

    for (a = 0; a < buttons.length; a++) {
      if (parentDiv1.contains(buttons[a]) || parentDiv2.contains(buttons[a]) || parentDiv3.contains(buttons[a]) || parentDiv4.contains(buttons[a]) || parentDiv5.contains(buttons[a]) || parentDiv6.contains(buttons[a]) || parentDiv7.contains(buttons[a])) {
        buttons[a].disabled = true;
        buttons[a].classList.add("disabled");
        buttons[a].style.background = "linear-gradient(#b5f2c4 15%, #dad7e5 25%, #dad7e5 85%, #b5f2c4 90%)";
        buttons[a].style.cursor = "not-allowed";
      }
    }

  }
});

submitQ8.addEventListener("click", function() {
  if (!selectedElements.length == 0) {
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }

    for (x = 0; x < question.length; x++) {
      if (question[x].contains(parentDiv2) || question[x].contains(parentDiv3) || question[x].contains(parentDiv4) || question[x].contains(parentDiv5) || question[x].contains(parentDiv6) || question[x].contains(parentDiv7) || question[x].contains(parentDiv8) || question[x].contains(parentDiv9)) {
        question[x].style.display = "initial";
      }
      else {
        question[x].style.display = "none";
      }
    }

    for (a = 0; a < buttons.length; a++) {
      if (parentDiv1.contains(buttons[a]) || parentDiv2.contains(buttons[a]) || parentDiv3.contains(buttons[a]) || parentDiv4.contains(buttons[a]) || parentDiv5.contains(buttons[a]) || parentDiv6.contains(buttons[a]) || parentDiv7.contains(buttons[a]) || parentDiv8.contains(buttons[a])) {
        buttons[a].disabled = true;
        buttons[a].classList.add("disabled");
        buttons[a].style.cursor = "not-allowed";
      }
    }

  }
});

submitQ9.addEventListener("click", function() {
  if (!selectedElements.length == 0) {
    for (i = 0; i < selectedElements.length; i++) {
      scores();
    }
    for (a = 0; a < buttons.length; a++) {
      buttons[a].disabled = true;
      buttons[a].classList.add("disabled");
      buttons[a].style.cursor = "not-allowed";
    }
    all.classList.remove("disabled");
    all.classList.remove("allDisplay");
    restart.classList.remove("disabled");
    all.disabled = false;
    restart.disabled = false;
    all.style.cursor = "pointer";
    restart.style.cursor = "pointer";
  }
});

/*Add to Scores*/

function scores() {
  //selected element contains class with outcome --> point added to outcome score 
  if (selectedElements[i].classList.contains("answerShake")) {
    shakeScore += 1;
  }

  if (selectedElements[i].classList.contains("answerZeph")) {
    zephScore += 1;
  }

  if (selectedElements[i].classList.contains("answerSteve")) {
    steveScore += 1;
  }

  if (selectedElements[i].classList.contains("answerCrumb")) {
    crumbScore += 1;
  }

  if (selectedElements[i].classList.contains("answerEnya")) {
    enyaScore += 1;
  }

  if (selectedElements[i].classList.contains("answerLove")) {
    loveScore += 1;
  }

  if (selectedElements[i].classList.contains("answerPortish")) {
    portishScore += 1;
  }

  if (selectedElements[i].classList.contains("answerKero")) {
    keroScore += 1;
  }

  if (selectedElements[i].classList.contains("answerKing")) {
    kingScore += 1;
  }

  if (selectedElements[i].classList.contains("answerHeap")) {
    heapScore += 1;
  }

  if (selectedElements[i].classList.contains("answerDodie")) {
    dodieScore += 1;
  }

  selectedElements[i].classList.remove("selected");

  updateResult();
}

/*Update Result*/

function updateResult() {

  //creates object storing outcome scores and values
  const score = { shakeScore, zephScore, steveScore, crumbScore, dodieScore, enyaScore, loveScore, portishScore, keroScore, heapScore, kingScore };
  console.log(score);

  //adds all scores, stores in sum
  const sumValues = score => Object.values(score).reduce((a, b) => a + b);
  console.log(sumValues(score))

  //checks if score = 9 (all questions answered)
  if (sumValues(score) == 9) {
    console.log("The quiz is done");

    //gets outcome with most points, works for 2+ outcomes with same points
    function getMax(score) {
      return Object.keys(score).filter(x => {
        return score[x] == Math.max.apply(null,
          Object.values(score));
      });
    }

    //stores in largest
    const largest = getMax(score);
    console.log(largest);

    //tells user if largest holds more than one outcome
    if (largest.length > 1) {
      answerNumber.innerHTML = `You got ${largest.length} reccomendation answers~`
    }

    //gives user outcome-reccomendation (if outcome is one of the largest, change inner text of result)
    if (largest.includes("shakeScore") == true) {
      result.innerHTML = "You should check out 070 Shake! She has a cool sound. Some songs I like are <a href = https://www.youtube.com/watch?v=vZGoj_6MYNQ>Blue Velvet</a> and <a href = https://www.youtube.com/watch?v=uznOVacWqMo&list=TLPQMDcwODIwMjIiqnpYBp5Jjg&index=2> Cocoon</a>. You might like <a href = https://www.youtube.com/watch?v=lY9czKBv_II> Diya Hai</a> too! <br> <br>";
      console.log("You are a shakey person!");
    }

    if (largest.includes("zephScore") == true) {
      result.innerHTML += "You should listen to zeph <3. She makes lots of little songs, some somber, some bubbly like <a href = https://www.youtube.com/watch?v=hrW62-ZF8nE> Are You<a/> and <a href= https://www.youtube.com/watch?v=QHNWoMfyYoY&list=PLOwoFJwfa3fmh0oF1vgCbY0dRX2mGj5-u> all of these! </a> Some other songs you might like are <a href= https://youtu.be/_Df15XQgyq4> Golden Hour</a> from Life is Strange and <a href = https://youtu.be/-jfuxxNaiOU> Bitter</a> by some cool people. <br> <br>";
      console.log("You are a zeph person!");
    }

    if (largest.includes("crumbScore") == true) {
      result.innerHTML += "Try Crumb the Band - they've got some cool stuff like <a href= https://www.youtube.com/watch?v=BqnG_Ei35JE> Locket, </a> <a href= https://www.youtube.com/watch?v=dVFjrKXdzcw> Jinx, </a> and <a href= https://www.youtube.com/watch?v=nD3iG6m44g8> Bones. </a> Other songs you might like are <a href= https://www.youtube.com/watch?v=aqJxKXO0TEk> Beside April </a> and <a href= https://www.youtube.com/watch?v=EIl6AVxJCw0&list=TLPQMDQwODIwMjJ5H775pHqrRg&index=12> Zanga Zangada. </a> <br> <br>";
      console.log("You are a crumb person!");
    }

    if (largest.includes("dodieScore") == true) {
      result.innerHTML += "You got dodie! Also Lizzie who opened for her recently, and Anna Nalick. Listen to: <a href= https://www.youtube.com/watch?v=xYq4mlNiDTg> Guiltless, </a> <a href= https://www.youtube.com/watch?v=MTPeEuQ-9ys> Hate Myself, </a> <a href= https://www.youtube.com/watch?v=YV9NrQvNEv4> Erase Me, </a> and <a href= https://www.youtube.com/watch?v=4_wQ322HgAo> San Andreas Fault. </a> <br> <br>";
      console.log("You are a dodie person!");
    }

    if (largest.includes("enyaScore") == true) {
      result.innerHTML += "Listen to Enya!! Her music's wild like <a href= https://youtu.be/SM_fvwGTB58> Watermark</a> and <a href= https://youtu.be/7bABrVM4wWA> Exile. </a> Other cool songs by different artists are <a href= https://youtu.be/YyWpQUNfmvY> Aisling's Song,</a> <a href= https://youtu.be/I1YtczzWoHE> Child of Eden, </a> and <a href= https://www.youtube.com/watch?v=Y2kjKfu7OH0> Trouble </a>. <br> <br>";
      console.log("You are a enya person!");
    }

    if (largest.includes("steveScore") == true) {
      result.innerHTML += "Steve Lacy is amaazing ~ love songs like <a href= https://www.youtube.com/watch?v=RC8u7RJe-TE> Sunshine,</a> <a href =https://www.youtube.com/watch?v=TjpwJvHzVfM> Atomic Vomit, </a> <a href= https://www.youtube.com/watch?v=KTh8ermjdbI> Some </a> and pretty much all of them are worth checking out (CU Girl, Playground, Ryd/Dark Road, Infrunami, Bad Habit, etc.) Other cool songs by other artists are <a href= https://www.youtube.com/watch?v=-wc0qMerzz0> Trouble Sleeping, </a> <a href= https://www.youtube.com/watch?v=2qUCyW7ewPs> Time Alone With You, </a> <a href= https://www.youtube.com/watch?v=tYVebHOrlZU> Self, </a> and <a href= https://www.youtube.com/watch?v=IN2YrKRzRjw> Lover's Quarrel. </a> <br> <br>";
      console.log("You are a steve person!");
    }

    if (largest.includes("loveScore") == true) {
      result.innerHTML += "Loveholics is a beautiful sounding group. I particularily like <a href= https://youtu.be/-qKuAUHYNVI> Superstar, </a> <a href= https://youtu.be/e2A0Ok1Cbt8> Blue923, </a> and <a href= https://www.youtube.com/watch?v=HcKFwSP60iI> Sky. </a> Other artist you might like are <a href= https://www.youtube.com/watch?v=2apFAwOwlBc&ab_channel=SlightlyAsian> Elijah Who, </a> <a href= https://www.youtube.com/watch?v=NcMdwa7nYh4&ab_channel=BicRunga-Topic> Bic Runga, </a> and the <a href= https://www.youtube.com/watch?v=uL1zvhZzxeM&list=PLZV5GPl3VkRC9QYp9NxomnAA7_x_YCykz&index=295> Flower ost. </a> <br> <br>";
      console.log("You are a lovely person!");
    }

    if (largest.includes("portishScore") == true) {
      result.innerHTML += "Portishead's got some interesting sounds. Check out <a href= https://www.youtube.com/watch?v=Aw8GucJ4f7E> It Could be Sweet and <a href= https://www.youtube.com/watch?v=un8EW82GwKc> Sour Times.</a> Other songs by other artists <a href= https://www.youtube.com/watch?v=_V17JN76uxc> Ancient Dreams in a Modern Land by Marina </a> and <a href= https://www.youtube.com/watch?v=CfXNFYj-1k4> Phantasm by Flying Lotus.</a> <br> <br>";
      console.log("You are a head person!");
    }

    if (largest.includes("keroScore") == true) {
      result.innerHTML += "Kerokerobonito is funn like <a href= > Park Song. </a> So is <a href= https://www.youtube.com/watch?v=q9K6-M9gUjY> 1999 </a> and Azealia's <a href= https://www.youtube.com/watch?v=dAmaaW4d5n0> Luxury. </a> <br> <br>";
      console.log("You are a kero person!");
    }

    if (largest.includes("heapScore") == true) {
      result.innerHTML += "<a href= https://www.youtube.com/watch?v=UYIAfiVGluk> Hide & Seek </a> and <a href= https://www.youtube.com/watch?v=5yBBaK1vGh4> Just for Now</a> by Imogen Heap are great. So is <a href= https://www.youtube.com/watch?v=BxQpcZMxJwI> Forgotten Village and <a href= https://www.youtube.com/watch?v=hgQyXxkwlRM> The AOT Ending Song 1 </a> <3. <br> <br>";
      console.log("You are a heap person!");
    }

    if (largest.includes("kingScore") == true) {
      result.innerHTML += "Check out King Princess!! <a href= https://www.youtube.com/watch?v=62fsOE7rZx8> Upper West Side & </a> <a href= https://www.youtube.com/watch?v=bhWCLG1Wx9w> Sunburn.</a>";
      console.log("You are a king!");
    }
  }
}

//Give All Reccomendations
all.addEventListener("click", function() {
  recs.innerHTML = "'Main Categories:'~ Most have songs by other artists <br> <br> <br> 070 Shake: <a href = https://www.youtube.com/watch?v=vZGoj_6MYNQ>Blue Velvet,</a> <a href = https://www.youtube.com/watch?v=uznOVacWqMo&list=TLPQMDcwODIwMjIiqnpYBp5Jjg&index=2> Cocoon</a> & <a href = https://www.youtube.com/watch?v=lY9czKBv_II> Diya Hai </a> <br> <br> Zeph: <a href = https://www.youtube.com/watch?v=hrW62-ZF8nE> Are You<a/> & <a href= https://www.youtube.com/watch?v=QHNWoMfyYoY&list=PLOwoFJwfa3fmh0oF1vgCbY0dRX2mGj5-u> little songs! </a> & <a href= https://youtu.be/_Df15XQgyq4> Golden Hour</a> & <a href = https://youtu.be/-jfuxxNaiOU> Bitter.</a> <br> <br> Crumb: <a href= https://www.youtube.com/watch?v=BqnG_Ei35JE> Locket, </a> <a href= https://www.youtube.com/watch?v=dVFjrKXdzcw> Jinx, </a> <a href= https://www.youtube.com/watch?v=nD3iG6m44g8> Bones & <a href= https://www.youtube.com/watch?v=aqJxKXO0TEk> Beside April </a> & <a href= https://www.youtube.com/watch?v=EIl6AVxJCw0&list=TLPQMDQwODIwMjJ5H775pHqrRg&index=12> Zanga Zangada. </a> <br> <br> Dodie Lizzie & Anna: <a href= https://www.youtube.com/watch?v=xYq4mlNiDTg> Guiltless, </a> <a href= https://www.youtube.com/watch?v=MTPeEuQ-9ys> Hate Myself, </a> <a href= https://www.youtube.com/watch?v=YV9NrQvNEv4> Erase Me, </a> & <a href= https://www.youtube.com/watch?v=4_wQ322HgAo> San Andreas Fault. </a> <br> <br> Enya: <a href= https://youtu.be/SM_fvwGTB58> Watermark,</a> <a href= https://youtu.be/7bABrVM4wWA> Exile, <a href= https://youtu.be/YyWpQUNfmvY> Aisling's Song,</a> <a href= https://youtu.be/I1YtczzWoHE> Child of Eden, </a> & <a href= https://www.youtube.com/watch?v=Y2kjKfu7OH0> Trouble </a> <br> <br>. Steve Lacy: <a href= https://www.youtube.com/watch?v=RC8u7RJe-TE> Sunshine,</a> <a href =https://www.youtube.com/watch?v=TjpwJvHzVfM> Atomic Vomit, </a> <a href= https://www.youtube.com/watch?v=KTh8ermjdbI> Some </a>, <a href= https://www.youtube.com/watch?v=-wc0qMerzz0> Trouble Sleeping, </a> <a href= https://www.youtube.com/watch?v=2qUCyW7ewPs> Time Alone With You, </a> <a href= https://www.youtube.com/watch?v=tYVebHOrlZU> Self, </a> & <a href= https://www.youtube.com/watch?v=IN2YrKRzRjw> Lover's Quarrel </a> <br> <br> Loveholics: <a href= https://youtu.be/-qKuAUHYNVI> Superstar, </a> <a href= https://youtu.be/e2A0Ok1Cbt8> Blue923, </a> <a href= https://www.youtube.com/watch?v=HcKFwSP60iI> Sky, </a> <a href= https://www.youtube.com/watch?v=2apFAwOwlBc&ab_channel=SlightlyAsian> Elijah Who, </a> <a href= https://www.youtube.com/watch?v=NcMdwa7nYh4&ab_channel=BicRunga-Topic> Bic Runga, </a> & the <a href= https://www.youtube.com/watch?v=uL1zvhZzxeM&list=PLZV5GPl3VkRC9QYp9NxomnAA7_x_YCykz&index=295> Flower ost </a> <br> <br> Portishead: <a href= https://www.youtube.com/watch?v=Aw8GucJ4f7E> It Could be Sweet & <a href= https://www.youtube.com/watch?v=un8EW82GwKc> Sour Times, <a href= https://www.youtube.com/watch?v=_V17JN76uxc> Ancient Dreams, </a> <a href= https://www.youtube.com/watch?v=CfXNFYj-1k4> Phantasm </a> <br> <br> KKB: <a href= https://www.youtube.com/watch?v=o_zZqAbYnnk> Park Song, </a> <a href= https://www.youtube.com/watch?v=q9K6-M9gUjY> 1999 </a> & <a href= https://www.youtube.com/watch?v=dAmaaW4d5n0> Luxury </a> <br> <br> Imogen Heap: <a href= https://www.youtube.com/watch?v=UYIAfiVGluk> Hide & Seek </a> & <a href= https://www.youtube.com/watch?v=5yBBaK1vGh4> Just for Now,</a> <a href= https://www.youtube.com/watch?v=BxQpcZMxJwI> Forgotten Village </a> & <a href= https://www.youtube.com/watch?v=hgQyXxkwlRM> Aot Ending </a> <br> <br> KP: <a href= https://www.youtube.com/watch?v=62fsOE7rZx8> Upper West Side </a> & <a href= https://www.youtube.com/watch?v=bhWCLG1Wx9w> Sunburn.</a> <br> <br>"
});