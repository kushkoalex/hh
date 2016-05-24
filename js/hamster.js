hh.Hamster = function() {
  function aa() {

  }

  this.omnomnom = function(){
    var self = this;
    setTimeout(function(){
      console.log(self);
    },1000);

    console.log(this);
  }
}
