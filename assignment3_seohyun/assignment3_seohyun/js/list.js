// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {

    var Flist = document.querySelector("#list");

    var fruitt = "<ol>";

    for(var i = 0; i < fruits.length; i++) {

        fruitt += "<li>" + fruits[i] + "</li>";
    }

    fruitt += "</ol>";

    Flist.innerHTML = fruitt;

    
    var Dlist = document.querySelector("#directory");

    var directoryy = "<ul>";

    for(var i = 0; i < directory.length; i++) {

        directoryy += "<li>" + directory[i].name + "</li>";


    if (directory[i].type == "directory") {
    
        directoryy += "<ul>";
    
    for (var x = 0; x < directory[i].files.length; x++) {

        directoryy += "<li>" + directory[i].files[x].name + "</li>";
    }

    directoryy += "</ul>";
    }

    }

    directoryy += "</ul>";

    Dlist.innerHTML = directoryy;

};