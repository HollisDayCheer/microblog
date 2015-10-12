console.log("Sanity Check: JS is working!");

 var entryList = function(){
    this.items = [],
    this.clear = function(){
        this.items = [];
        $("#list-storer").clear();
    },
    this.removeItem = function(index){
      for(var i = index; i<this.items.length-1;i++){
         this.items[i]=this.items[i+1]
      }
        this.items.pop();
   },
   this.addItem =function(listEntry){
      listEntry.position = this.items.length;
      this.items.push(listEntry);
      $("#list-storer").append(listEntry.html);
      $("#words").val("");
  }
  }
 

  var entry = function(words){
    this.text = words,
    this.html = "<li>"+ this.text + "</li>",
    this.position
  }
  var ourList = new entryList();
$(document).ready(function(){

  // code in here

  $("form").on("submit", function(e){
      e.preventDefault();
      var words = $("#words").val();
      var newEntry = new entry(words);
      ourList.addItem(newEntry);

  })
});

