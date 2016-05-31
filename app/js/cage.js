HH.Cage = function($parent) {
    var hh = HH,
        david,
        neeraj,
        u;

    david = new hh.Hamster({
        name: 'David',
        text: 'ololo !!!'
    });

    neeraj = new hh.Hamster({
        name: 'Neeraj',
        text: 'Allh Akbar !!'
    });

    david.onScream.subscribe(function(e, hamster) {
        console.log('hamster ' + hamster.name + ' says ' + hamster.text);
    });

    neeraj.onScream.subscribe(function(e, hamster) {
        console.log('hamster ' + hamster.name + ' says ' + hamster.text);
    });

    david.goToCage($parent);
    neeraj.goToCage($parent);

};
