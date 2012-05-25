var filterbook = {
  mail: function(e){
    filterbook[e.name](e.message, e);
  },
  get_filtered_word: function(data, e){
    e.target.page.dispatchMessage("filter_words",  safari.extension.settings.filter_words.split(","));
  }
};




safari.application.addEventListener("message", filterbook.mail,false);
