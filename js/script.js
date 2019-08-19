$(function(){
    $(".btn").click(function(){


        if($("input").val() !== ""){

            $("#searchImg").html("");

            $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",{
                tags: $("input").val(),
                tagmode: "any",
                format: "json"
            }).done(function(data){
                $("input").val("")
                $.each(data.items, function(index, item){
                    $("<img>").addClass("imgStyle").attr("src", item.media.m).appendTo("#searchImg")
        
                    if(index == 4){
                        $( function(){
                            $( ".imgStyle" ).draggable({
                                revert: "invalid",
                                helper: "clone"
                            });
                        });
                        $( ".sectionContainer" ).droppable({
                            drop: function( event, ui ) {
                                $(ui.draggable).fadeOut(1, function(){
                                    $(this).appendTo(".sectionContainer").fadeIn(1)
                                })
                            }
                        });
                        return false
                    }
                })
            }).fail(function(){
                alert("Ajax call faild")
            })
        }else{
            alert("Please write anything!")
        }

    })

})