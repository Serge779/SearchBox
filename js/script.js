$(function(){
    $(".btn").click(function(){

        if($("input").val() !== "" && $("input").val() !== " "){

            if($("input").val().split(" ").length > 2){

                alert("Please write one or two word")

            }else{
                
                $("#searchImg").html("");
                $(".basketDiv1").html("");
                var first = $("input").val().split(" ");
                var firstSearch = first[0];

                $(".p1").html(firstSearch)
                $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",{
                    tags: firstSearch,
                    tagmode: "any",
                    format: "json"
                }).done(function(data){
                    $("input").val("")
                    $.each(data.items, function(index, item){
                        
                        if(first[0] == ""){

                            return false

                        }else if(first.length == 2 && first[1] == "" || first.length == 1){
                            $("<img>").addClass("imgStyle1").attr("src", item.media.m).appendTo("#searchImg")

                            if(index == 4){
                                $( function(){
                                    $( ".imgStyle1" ).draggable({
                                        revert: "invalid",
                                        helper: "clone",
                                        scope: "img1"
                                    });
                                });
                                $( ".basketDiv1" ).droppable({
                                    scope: "img1",
                                    activeClass: "aac",
                                    drop: function( event, ui ) {
                                        $(ui.draggable).fadeOut(1, function(){
                                            $(this).appendTo(".basketDiv1").fadeIn(1)
                                        })
                                    }
                                });
                                return false
                            }

                        }else{
                            $("<img>").addClass("imgStyle1").attr("src", item.media.m).appendTo("#searchImg")
            
                            if(index == 2){
                                $( function(){
                                    $( ".imgStyle1" ).draggable({
                                        revert: "invalid",
                                        helper: "clone",
                                        scope: "img1"
                                    });
                                });
                                $( ".basketDiv1" ).droppable({
                                    scope: "img1",
                                    activeClass: "aac",
                                    drop: function( event, ui ) {
                                        $(ui.draggable).fadeOut(1, function(){
                                            $(this).appendTo(".basketDiv1").fadeIn(1)
                                        })
                                    }
                                });
                                return false
                            }

                        }
                    })
                }).fail(function(){
                    alert("Ajax call faild")
                })

            }
        }else{
            alert("Please write anything!")
        }
    })


    $(".btn").click(function(){

        if($("input").val() !== "" && $("input").val() !== " " && $("input").val().split(" ").length == 2){

            if($("input").val().split(" ").length > 2){

                return false

            }else{

                $(".basketDiv2").html("");
                var first = $("input").val().split(" ");
                var firstSearch = first[1];
                
                $(".p2").html(firstSearch)

                $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",{
                    tags: firstSearch,
                    tagmode: "any",
                    format: "json"
                }).done(function(data){
                    $.each(data.items, function(index, item){
                        if(first[1] == ""){

                                return false

                        }else if(first.length == 2 && first[0] == ""){
                            $("<img>").addClass("imgStyle2").attr("src", item.media.m).appendTo("#searchImg")
                            if(index == 4){
                                $(function(){
                                    $( ".imgStyle2" ).draggable({
                                        revert: "invalid",
                                        helper: "clone",
                                        scope: "img2"
                                    });
                                });
                                $(".basketDiv2").droppable({
                                    scope: "img2",
                                    activeClass: "aac",
                                    drop: function( event, ui ) {
                                        $(ui.draggable).fadeOut(1, function(){
                                            $(this).appendTo(".basketDiv2").fadeIn(1)
                                        })
                                    }
                                });
                                return false
                            }

                        }else{
                            $("<img>").addClass("imgStyle2").attr("src", item.media.m).appendTo("#searchImg")
                            if(index == 1){
                                $(function(){
                                    $( ".imgStyle2" ).draggable({
                                        revert: "invalid",
                                        helper: "clone",
                                        scope: "img2"
                                    });
                                });
                                $(".basketDiv2").droppable({
                                    scope: "img2",
                                    activeClass: "aac",
                                    drop: function( event, ui ) {
                                        $(ui.draggable).fadeOut(1, function(){
                                            $(this).appendTo(".basketDiv2").fadeIn(1)
                                        })
                                    }
                                });
                                return false
                            }
                        }
                        
                    })
                })
            }
        }
    })
})

document.querySelector(".babt").addEventListener("click", function(){
    document.querySelector(".sectionContainer").classList.toggle("height");
    document.querySelector(".i").classList.toggle("iStyle");
});
