var colors = ["#FFA500", "#DAA520", "#FFC125", "#EEB422", "#CD9B1D", "#FFB90F", "#EEAD0E", "#CD950C", "#EE9A00", "#CD8500", "#FFDEAD", "#FF9912", "#ED9121", "#FF8C00", "#FF7F00", "#EE7600", "#CD6600", "#FF8000", "#FFA54F", "#EE9A49", "#CD853F", "#F4A460", "#C76114", "#D2691E", "#FF7F24", "#EE7621", "#CD661D", "#FF7D40", "#FF6103", "#FF8247", "#EE7942", "#CD6839", "#FFA07A", "#EE9572", "#FF7F50", "#FF4500", "#EE4000", "#CD3700", "#FF8C69", "#EE8262", "#FF7256", "#EE6A50", "#FF6347", "#EE5C42", "#FFEC8B", "#EEDC82", "#EEC900", "#FFD700", "#FFD39B", "#EEC591"];


var previousColorIndex = 0;

function changeColor(array) {
var color = array[previousColorIndex];
document.body.style.backgroundColor  = color;
if (previousColorIndex >=     array.length - 1) {
  previousColorIndex = 0;
} else {
  previousColorIndex += 1;
}
}
var words = ["BIGLY", "TREMENDOUS", "CHINA", "LOSER", "RUSSIA", "MIKE PENCE", "WRONG. WRONG. WRONG.", "IVANKA", "BUILD THE WALL", "MEXICO", "FAKE NEWS", "PUTIN","NASTY WOMAN", "GRAB THEM BY THE PUSSY", "WINNING", "VERY BAD", "HUGE", "TERRIFIC", "KELLYANNE CONWAY", "DRAIN THE SWAMP", "FAT LOSER", "TAX RETURNS", "ORANGE", "KANYE", "AUSTRALIA", "TINY HANDS", "MAKE AMERICA GREAT AGAIN", "TWITTER", "INTERNET TROLL", "BAD HOMBRES", "BILLIONAIRE", "BIGGEST INAUGURATION CROWD IN HISTORY", "ALTERNATIVE FACTS", "MELANIA", "MICROPENIS", "BANKRUPTCY", "YOU'RE FIRED", "THE APPRENTICE", "FAT PIGS", "DOGS", "SLOBS", "ROSIE O'DONNELL", "SNIFF SNIFF", "HAIR", "TOTAL DISASTER", "TRUMP TOWERS", "STUPID", "LIGHTWEIGHT", "WEAK", "MORON"];

var getRandomIndex = function(array) {
  var randomIndex = Math.floor(Math.random()*array.length)
  var randomItem = array[randomIndex];
  $(".message").text(randomItem);
}

$(".randomize").on("click", function() {
  getRandomIndex(words);
});