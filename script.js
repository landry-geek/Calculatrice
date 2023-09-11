// DOM 
const touches=[...document.querySelectorAll(".bouton")];
const listKeycode=touches.map(touche=>touche.dataset.key);//le touche mety fon ze soratra atao eo na element
const ecran=document.querySelector(".ecran");

document.addEventListener("keydown",(e)=>{ // le e conventionnel anle evenement
    const valeur = e.keyCode.toString(); //le keycode efa intégré rf keydown event 
    calculer(valeur);
});
document.addEventListener("click", (e) =>{
    const valeur=e.target.dataset.key; //fa ref click  event d target no miasa d zay vo mapiasa anle dataset
    calculer(valeur);
})
const calculer = (valeur)=>{
    if(listKeycode.includes(valeur)){
        switch(valeur){
            case "8":
            ecran.textContent="";
            break;
            case "13":
            const calcul=eval(ecran.textContent);
            ecran.textContent=calcul;
            break;
            default:
            const indexKeycode=listKeycode.indexOf(valeur);
            const touche=touches[indexKeycode].innerHTML;//le variable touche eto tsis idiranle eo ambony fa afak ovana hafa ny anrany
            ecran.textContent+=touche;
            break;
        }
    }
}
window.addEventListener("error",()=>{ //anatin window mits n erreur n tong d détecté
    alert("une erreur est survenue !!! veuillez réessayer");
});
