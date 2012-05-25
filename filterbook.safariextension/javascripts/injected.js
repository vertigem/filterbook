var filterbook = {
  mail: function(e){
    filterbook[e.name](e.message);
  },
  filter_words: function(words){
    if(!words) return;
    $(".storyContent").each(function(){
      var story = $(this).parent(),
          message = story.find(".messageBody").text();
      $.each(words, function(i,word){
        word = word.replace(/^ | $/, "")
        var search = new RegExp(word,"ig");
        if(message.match(search)){
          story.remove();
        }
      });
    });
    this.words = words;
    this.set_interval_filter();
  },
  set_interval_filter: function(){
    setTimeout(function(){
      filterbook.filter_words(filterbook.words);
    }, 3000);
  }
};

(function($){
  $(document).ready(function(){
    if(window.top === window){
      safari.self.tab.dispatchMessage("get_filtered_word", {});
      safari.self.addEventListener("message", filterbook.mail, false);
    }
  });
})(jQuery);
