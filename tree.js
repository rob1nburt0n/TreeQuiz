/*1. Create a constructor function called Tree. It should take 4 arguments that correspond to attributes on the objects it creates. 

Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes*/



var Tree = function(name, leaf_shape, height, location) {
  this.name = name,
  this["leaf shape"] = leaf_shape,
  this.height = height,
  this.location = location
} 

var pine = new Tree("pine", "needle", "188 ft", "Northern Hemisphere");
var palm = new Tree("palm", "feather", "160 ft", "Mediterranean");
var peach = new Tree("peach", "blade", "20 ft", "South");
var maple = new Tree("maple", "star", "110 ft", "Northern Hemisphere");

var tree_array = [pine, palm, peach, maple];

document.getElementById("tree-holder").innerHTML = JSON.stringify(pine, null, 2);
document.getElementById("tree-holder").innerHTML = JSON.stringify(palm, null, 2);
document.getElementById("tree-holder").innerHTML = JSON.stringify(peach, null, 2);
document.getElementById("tree-holder").innerHTML = JSON.stringify(maple, null, 2);
