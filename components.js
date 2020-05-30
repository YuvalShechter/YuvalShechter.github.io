window.onload = function() {
    this.document.getElementById("about_me_modal_open").addEventListener("click", function(){
        document.getElementById('about_me_modal_close').style.display='block';
        document.getElementById('about_me_modal_open').style.display='none';
    });
    this.document.getElementById("about_me_modal_close").addEventListener("click", function(){
        document.getElementById('about_me_modal_close').style.display='none';
        document.getElementById('about_me_modal_open').style.display='block';
    });
}