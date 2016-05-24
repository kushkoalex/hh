$(function() {
    var hh = HH,
        hamster,
        u;

    hamster = new hh.Hamster();

    hamster.omnomnom().then(hamster.omnomnom1, function() {
        console.log('error');
    });

});
