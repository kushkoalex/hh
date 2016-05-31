HH.Hamster = function(options) {
    "use strict";
    var hh = HH;
    options = options || {};
    var self = this,
        $hamster = $('<div class="hamster">');
    this.onScream = new hh.Event();

    this.Name = options.name;
    this.Text = options.text;


    function trigger(evt, args, e) {
        e = e || new hh.EventData();
        args = args || {};
        return evt.notify(args, e, self);
    }

    function handleClick(e) {
        trigger(self.onScream, {
            name: self.Name,
            text: self.Text
        }, e);
    }

    this.goToCage = function($cage) {
        $hamster.appendTo($cage);
    };

    this.omnomnom = function() {
        var promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('omnomnom');
                resolve();
            }, 1000);
        });
        return promise;
    };

    this.omnomnom1 = function() {
        console.log('omnomnom1');
    };

    this.age = 1;


    var getAge = function() {
        console.log(this);
    };


    // var trigger = function(evt, args, e) {
    //     e = e || new hh.EventData();
    //     args = args || {};
    //
    // };



    $hamster.on("click", handleClick);

    // return {
    //     run: function() {
    //         //getAge();
    //         //console.log(hh);
    //         console.log(this);
    //     }
    // };

};
