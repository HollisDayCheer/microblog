console.log("Sanity Check: JS is working!");

 var entryList = function(){
    this.numbPosts = 0; 
    this.items = [],

    this.clear = function(){ //resets the entire list
        this.items = [];
        $("#list-storer").clear();
    },
    this.removeItem = function(index){  //removes an item based on position + resests position
      for(var i = index; i<this.items.length-1;i++){
         this.items[i]=this.items[i+1]
      }
        this.items.pop(); 
   },
   this.addItem =function(listEntry){ //adds an item to the entryList object
      listEntry.position = this.items.length;
      this.items.push(listEntry);
      $("#list-storer").append(listEntry.html);
      $("#words").val("");
      this.numbPosts++
      this.updateCount();
  }
  this.updateCount = function(){
    $("h3").html("You have made " + this.numbPosts + " posts.");
  }
  this.updateEntries = function(){ //created this because was getting issues with html being off from the position of the actual html id
    this.clear(); //this entire thing ended up being unnecessary because I couldn't get my button clicks working :(
    for(var i = index; i<this.items.length;i++){
      $("#list-storer").append(this.items[i].html);
    }
  }
}


  var entry = function(words){ //entry object, holds position and two types of text
    this.text = words,
    this.html = "<li class= 'list-group-item'>"+ this.text + "</li>"
  }
  var ourList = new entryList();
$(document).ready(function(){

  // code in here

  $("form").on("submit", function(e){ //on submission, adds the text to an entry and adds the entry to an entrylist
      e.preventDefault();
      if($("#words").val()){
        var words = $("#words").val();
        var newEntry = new entry(words); //numbPosts is outside variable that stores number of posts
        ourList.addItem(newEntry);
      }
  })

 
});

