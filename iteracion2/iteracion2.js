//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv= document.createElement('div');
document.body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newDiv1= document.createElement('div');
let newContent = document.createElement('p');

newDiv1.appendChild(newContent);
document.body.appendChild(newDiv1);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv2 = document.createElement('div');

for (let index = 0; index < 6 ; index++) {
    let newContent = document.createElement('p');  
    document.body.appendChild(newContent); 
}
document.body.appendChild(newDiv2);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let p = document.createElement("p");
p.innerHTML = 'Soy dinámico';
document.body.appendChild(p);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.querySelector('.fn-insert-here')
h2.innerHTML = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement('ul');

for (let index = 0; index < apps.length; index++) {
    const newLi = document.createElement('li');

    newLi.innerHTML = apps[index];

    newUl.appendChild(newLi);
    
}
document.body.appendChild(newUl);


        


