//sınıf , cuntroctur=> nesne * 30 
function Soru(soruMetni, cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni; //soruMetni alanına dışardan gönderilen soru metnini aktarıcaz
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;


}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap

}


let sorular = [
    new Soru("1-Hangisi js paket yönetim uuygulamasıdır?", { a: "Node.js", b:"Typescript", c:"Npm"},"c" ),
    new Soru("2-Hangisi node paket yönetim uuygulamasıdır?", { a: "Node.js", b:"Typescript", c:"Npm"},"a" ),
    new Soru("3-Hangisi js paket yönetim uuygulamasıdır?", { a: "Node.js", b:"Typescript", c:"Npm"},"c" ),
    new Soru("4-Hangisi js paket yönetim uuygulamasıdır?", { a: "Node.js", b:"Typescript", c:"Npm"},"c" )
]; 