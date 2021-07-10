//COPYRIGHT
const date = new Date();
document.getElementById("copyright").innerHTML = `Copyright &copy;${date.getFullYear()}`;

//
function ring(){
    this.classList.toggle("ring-2");
    this.classList.toggle("ring-blue-600");
};
