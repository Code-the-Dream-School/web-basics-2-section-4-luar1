//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here

let divChild = document.createElement('div');
divChild.innerHTML ='X';
document.querySelector('#a-1').appendChild(divChild).className = 'square';
let xClicked = () => {
    if(divChild.textContent === 'X') {
        divChild.textContent = 'o';
    } else {
        divChild.textContent = 'X';
    }
}
document.querySelector('.square').addEventListener('click', xClicked);



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'





//resolve // QUESTION 2 here




const dropDown = document.querySelector('#a-2');
const removeBtn = document.createElement('button');
const select = document.createElement('select');
removeBtn.textContent = 'Remove Color';
dropDown.appendChild(select);
dropDown.appendChild(removeBtn);
const colors= [ 'red' , 'white', 'black' , 'green' , 'orange'];
for(let i = 0; i < colors.length; i++) {
    select.innerHTML += `<option>${colors[i]}</option>`;
}

removeBtn.addEventListener('click', () => {
     select.remove(select.selectedIndex);
})


    


//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () =>{

    let radius = document.querySelector('#radius').value;
    const volumeInput = document.querySelector('#volume');
    const areaInput = document.querySelector('#area');
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(2);
    area = 4 * Math.PI * Math.pow(radius, 2);
    area = area.toFixed(2);
    volumeInput.value = volume;
    areaInput.value = area;
    return false; 
}


document.querySelector('#volume').innerText = calculate_sphere();
window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here


for (let i= 1; i <=3; i++){
    let button = document.createElement('button');
    button.innerHTML = 'hide Question-'+i;
    button.id = 'button'+i;
    document.querySelector('#a-4').appendChild(button);
}

let removeQuestion1 = () => {
    let question1 =  document.querySelector('.question-container').childNodes[1];
    if (question1.style.display === 'block')  {
        question1.style.display = 'none';
        document.querySelector('#button1').textContent='show Question-1';
    }else {
        document.querySelector('#button1').textContent='hide Question-1';
        question1.style.display = 'block';

    }
}

let removeQuestion2 = () => {
    let question2 =  document.querySelector('.question-container').childNodes[3];
    if (question2.style.display === 'block')  {
        question2.style.display = 'none';
        document.querySelector('#button2').textContent='show Question-2';
    }else {
        document.querySelector('#button2').textContent='hide Question-2';
        question2.style.display = 'block';

    }
}

let removeQuestion3 = () => {
    let question3 =  document.querySelector('.question-container').childNodes[5];
    if (question3.style.display === 'block')  {
        question3.style.display = 'none';
        document.querySelector('#button3').textContent='show Question-3';
    }else {
        document.querySelector('#button3').textContent='hide Question-3';
        question3.style.display = 'block';

    }
}

document.querySelector('#button1').addEventListener('click', removeQuestion1)
document.querySelector('#button2').addEventListener('click', removeQuestion2);
document.querySelector('#button3').addEventListener('click', removeQuestion3);
