let a = ["CSS","html","js","J"];
let b = a.length;
let d;

alert("Arrayning uzunligi " + b);

console.log(a);

d = confirm("Siz ohiridagi ma'lumotni olib tashlamoqchimisiz?");


if (d) {
    a.pop(3);
    alert("Arrayning uzunligi " + a.length)
    console.log(a);
} else {
    alert("Arrayning uzunligi " + b)
    console.log(a);
}
