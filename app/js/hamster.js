HH.Hamster = function() {
    var hh = this;

    this.omnomnom = function() {
        var promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('omnomnom');
                resolve();
            }, 1000);
        });
        return promise;
    }

    this.omnomnom1 = function() {
        console.log('omnomnom1');
    }
}
