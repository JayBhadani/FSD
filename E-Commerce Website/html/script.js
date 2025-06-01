// let favorite=document.querySelector('.favorite');

// document.querySelector('#favorite').onclick=()=>{
//     favorite.classList.toggle('active');
//     search.classList.remove('active');
//     checkout.classList.remove('active');
//     login.classList.remove('active');

// }


// let checkout=document.querySelector('.checkout');

// document.querySelector('#checkout').onclick=()=>{
//     checkout.classList.toggle('active');
//     search.classList.remove('active');
//     favorite.classList.remove('active');
//     login.classList.remove('active');

// }

// let login=document.querySelector('.login');

// document.querySelector('#login').onclick=()=>{
//     login.classList.toggle('active');
//     search.classList.remove('active');
//     favorite.classList.remove('active');
//     checkout.classList.remove('active');
// }



// window.onscroll =() =>{
//     search.classList.remove('active');
//     favorite.classList.remove('active');
//     checkout.classList.remove('active');
//     login.classList.remove('active');

// }

function conf()
{
    res = confirm("Do you want to order?"); //It returns value as true/false
    if(res==true)
    {
        document.write("Order Successful");
        return true;
    }
    else
    {
        document.write("Order Rerejected");
    return false;
    }
}

function getval()
{
    var res = prompt("Enter your name: ", "Your name here");
    var res1 = prompt("Enter your email: ", "Your email here");
    var res2 = prompt("Enter your phone number: ", "Your phone number here");
    document.write("you entered "+res)
    document.write("you entered "+res1)
    document.write("you entered "+res2)
}
