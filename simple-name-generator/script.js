const names = {
 elf: {
  first: ["ae","li","fae","syl","el","ara"],
  second: ["riel","nor","thas","wyn","lith","vian"]
 },
 orc: {
  first: ["gor","zug","mak","rag","thr","lok"],
  second: ["ash","mok","gar","zug","thok","nar"]
 },
 human: {
  first: ["al","ben","mar","jon","dan","sam"],
  second: ["son","er","ton","ley","ford","man"]
 },
 demon: {
  first: ["az","bal","rax","vor","zen","mal"],
  second: ["goth","zor","rax","thul","vex","nash"]
 }
};

function generateName(){

let race = document.getElementById("race").value;

let part1 = names[race].first[Math.floor(Math.random()*names[race].first.length)];
let part2 = names[race].second[Math.floor(Math.random()*names[race].second.length)];

let name = part1 + part2;
name = name.charAt(0).toUpperCase() + name.slice(1);
document.getElementById("name").innerText = name;

}
function copyName(){

let name = document.getElementById("name").innerText;

navigator.clipboard.writeText(name);

alert("Name copied!");
}