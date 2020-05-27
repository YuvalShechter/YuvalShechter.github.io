window.onload = function() {
    this.document.getElementById("about_me_modal_open").addEventListener("click", function(){
        document.getElementById('about_me').style.display='block';
    });
    this.document.getElementById("about_me_modal_close").addEventListener("click", function(){
        document.getElementById('about_me').style.display='none';
    });
}