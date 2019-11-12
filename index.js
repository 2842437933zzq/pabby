class Animal {

    constructor (name, color) {
        this.name = name;
        this.color = color;
    }
     ruuning() {
         console.log(this.name + '会走')
     }
};

let tiger = new ('老虎', '暗黑');

tiger.ruuning();