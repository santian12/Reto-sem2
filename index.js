var click =1
function mostrar(){
    if(click==1){
 document.getElementById('share').style.display = 'inline-block';
 click = click + 1;
    }
    else{
        document.getElementById('share').style.display = 'none';
        click=1
    }
}