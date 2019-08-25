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
                        $( ".basketDiv" ).droppable({
                            drop: function( event, ui ) {
                                $(ui.draggable).fadeOut(1, function(){
                                    $(this).appendTo(".basketDiv").fadeIn(1)
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

function bbgg(){
   var con = document.querySelector(".sectionContainer");
   con.innerHTML = "";

    var input = document.querySelector(".input").value;
    var inputSplit = input.split(" ");
    inputSplit.forEach(function(e){
        var div = document.createElement("div");
        var p = document.createElement("p");
        p.className = "p";
        div.className = e;
        div.classList.add("basketDiv");
        p.innerHTML = e;
        div.appendChild(p);
        con.appendChild(div);
        
    })
}
