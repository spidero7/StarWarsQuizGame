export const App = ({options}) => {
     // Wyświetlanie obrazka po lewej stronie
     function showPic(mode, id) {
        document.getElementById("left-pic").src=`../static/assets/img/modes/${mode}/${id}.jpg`
    }
    
    showPic(options.mode, options.id);
}


