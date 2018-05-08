$(document).ready(function(){  
   
    /*intro*/
    $(".content, .sub_menu").fadeOut(100, function(){
        $("#hourglass_x").fadeIn(2000)
    })
    
    $("#home").delay(1000).fadeIn(1000);
    $("#home_clock").delay(1000).fadeIn(1000);
    

    
    /*menu animations*/
    $("#who").hover(function() {
        $("#am, #i").toggle("blind");
    });
    $("#jpn").hover(function() {
        $("#sun, #rising").toggle("blind");
    })
    $("#ls").hover(function(){
        $("#light, #sound").toggle("blind");
    })
    $("#say").hover(function(){
        $("#my, #name").toggle("blind");
    })
    
    /*menu selections*/
    $("#who").click(function(){
        $(".sub_menu").css("opacity", "1")
        $("#home, #home_clock").delay(500).fadeOut(500)
        $("#hourglass_x").fadeOut(500, function(){
            $(".content").fadeIn(500, function(){
                $(".title").toggle("blind", {direction: "left"}, 1000)
                $(".sub_menu").toggle("blind", {direction: "down"}, 1000, function(){
                            $("#who_title").fadeIn(500, function(){
                                $("#timeline_menu").fadeIn(500, function(){
                                    $("#likes_menu").fadeIn(500, function(){
                                        $("#inspiration_menu").fadeIn(500)
                                })
                            })
                        })
                    })
                })
            })
        })
    $("#jpn").click(function(){
        $(".sub_menu").css("opacity", "1")
        $("#home, #home_clock").delay(500).fadeOut(500)
        $("#hourglass_x").fadeOut(500, function(){
            $(".content").fadeIn(500, function(){
                $(".title").toggle("blind", {direction: "left"}, 1000)
                $(".sub_menu").toggle("blind", {direction: "down"}, 1000, function(){
                            $("#jpn_title").fadeIn(500, function(){
                                $("#jaa_menu").fadeIn(500, function(){
                                    $("#imi_menu").fadeIn(500, function(){
                                        $("#tiv_menu").fadeIn(500)
                                })
                            })
                        })
                    })
                })
            })
        })
    $("#say").click(function(){
        $(".sub_menu").css("opacity", "1")
        $("#home, #home_clock").delay(500).fadeOut(500)
        $("#hourglass_x").fadeOut(500, function(){
            $(".content").fadeIn(500, function(){
                $(".title").toggle("blind", {direction: "left"}, 1000)
                $(".sub_menu").toggle("blind", {direction: "down"}, 1000, function(){
                            $("#say_title").fadeIn(500, function(){
                                $("#social_menu").fadeIn(500, function(){
                                    $("#lala_menu").fadeIn(500, function(){
                                    $   ("#contact_menu").fadeIn(500)
                                })
                            })
                        })
                    })
                })
            })
        })
    $("#ls").click(function(){
        $(".sub_menu").css("opacity", "1")
        $("#home, #home_clock").delay(500).fadeOut(500)
        $("#hourglass_x").fadeOut(500, function(){
            $(".content").fadeIn(500, function(){
                $(".title").toggle("blind", {direction: "left"}, 1000)
                $(".sub_menu").toggle("blind", {direction: "down"}, 1000, function(){
                            $("#ls_title").fadeIn(500, function(){
                                $("#ls_menu").fadeIn(500, function(){
                                    $("#lnl_menu").fadeIn(500, function(){
                                        $("#sns_menu").fadeIn(500)
                                })
                            })
                        })
                    })
                })
            })
        })
    
    /*sub menu selection*/
    
    $(".column").click(function(){
        $(".sub_menu").toggle("blind", {direction: "up"}, 1000);
        $(".title").toggle("blind", {direction: "right"}, 1000, function(){
            $("#division").toggle("blind", {direction: "left"}, 1000)
            $("#division2").toggle("blind", {direction: "right"}, 1000, function(){
                $("#back").slideDown("slow");
            })      
        })
    })
    
    $("#back").click(function(){
        $("#division").toggle("blind", {direction:"right"}, 1000)
        $("#division2").toggle("blind", {direction: "left"}, 1000)
        $(".title").toggle("blind", {direction: "left"}, 1000)
        $(".sub_menu").toggle("blind", {direction: "down"}, 1000)
        $("#back").slideUp("slow")
    })
    
    $("#timeline_menu").click(function(){
        if($("#like_a, #like_b, #like_c").css("display") != "none")
            {
                $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 2000)
                $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#inspi_a, #inspi_b, #inspi_c").css("display") != "none")
            {
                $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 2000)
                $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "up"}, 2000)

            }
        else
            {
                $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "up"}, 2000)
            }
        });
    $("#likes_menu").click(function(){
        if($("#timeline_a, #timeline_b, #timeline_c").css("display") != "none")
            {
                $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 2000)
                $("#like_a, #like_b, #like_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#inspi_a, #inspi_b, #inspi_c").css("display") != "none")
            {
                $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 2000)
                $("#like_a, #like_b, #like_c").toggle("blind", {direction: "up"}, 2000)
            }
        else
            {
                $("#like_a, #like_b, #like_c").toggle("blind", {direction: "up"}, 2000)
            }
        });
    $("#inspiration_menu").click(function(){
        if($("#like_a, #like_b, #like_c").css("display") != "none")
            {
                $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 2000)
                $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#timeline_a, #timeline_b, #timeline_c").css("display") != "none")
            {
                $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 2000)
                $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "up"}, 2000)
            }
        else
            {
                $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "up"}, 2000)
            }
        });
    
    $("#jaa_menu").click(function(){
        if($("#imi_a, #imi_b, #imi_c").css("display") != "none")
            {
                $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 2000)
                $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#tiv_a, #tiv_b, #tiv_c").css("display") != "none")
            {
                $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 2000)
                $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "up"}, 2000)

            }
        else
            {
                $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "up"}, 2000)
            }
        });
    $("#imi_menu").click(function(){
        if($("#jaa_a, #jaa_b, #jaa_c").css("display") != "none")
            {
                $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 2000)
                $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#tiv_a, #tiv_b, #tiv_c").css("display") != "none")
            {
                $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 2000)
                $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "up"}, 2000)
            }
        else
            {
                $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "up"}, 2000)
            }
        });
    $("#tiv_menu").click(function(){
        if($("#jaa_a, #jaa_b, #jaa_c").css("display") != "none")
            {
                $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 2000)
                $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#imi_a, #imi_b, #imi_c").css("display") != "none")
            {
                $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 2000)
                $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "up"}, 2000)
            }
        else
            {
                $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "up"}, 2000)
            }
        });
    
    $("#social_menu").click(function(){
        if($("#sl_a, #sl_b, #sl_c").css("display") != "none")
            {
                $("#sl_a, #sl_b, #sl_c").toggle("blind", {direction: "down"}, 1000)
                $("#soc_a, #soc_b, #soc_c").toggle("blind", {direction: "up"}, 1000)
            }
        else if($("#con_a, #con_b, #con_c").css("display") != "none")
            {
                $("#con_a, #con_b, #con_c").toggle("blind", {direction: "down"}, 1000)
                $("#soc_a, #soc_b, #soc_c").toggle("blind", {direction: "up"}, 1000)
            }
        else
            {
                $("#soc_a, #soc_b, #soc_c").toggle("blind", {direction: "up"}, 1000)
            }
        });
    $("#lala_menu").click(function(){
        if($("#soc_a, #soc_b, #soc_c").css("display") != "none")
            {
                $("#soc_a, #soc_b, #soc_c").toggle("blind", {direction: "down"}, 1000)
                $("#sl_a, #sl_b, #sl_c").toggle("blind", {direction: "up"}, 1000)
            }
        else if($("#con_a, #con_b, #con_c").css("display") != "none")
            {
                $("#con_a, #con_b, #con_c").toggle("blind", {direction: "down"}, 1000)
                $("#sl_a, #sl_b, #sl_c").toggle("blind", {direction: "up"}, 1000)
            }
        else
            {
                $("#sl_a, #sl_b, #sl_c").toggle("blind", {direction: "up"}, 1000)
            }
        });
    $("#contact_menu").click(function(){
        if($("#soc_a, #soc_b, #soc_c").css("display") != "none")
            {
                $("#soc_a, #soc_b, #soc_c").toggle("blind", {direction: "down"}, 1000)
                $("#con_a, #con_b, #con_c").toggle("blind", {direction: "up"}, 1000)
            }
        else if($("#sl_a, #sl_b, #sl_c").css("display") != "none")
            {
                $("#sl_a, #sl_b, #sl_c").toggle("blind", {direction: "down"}, 1000)
                $("#con_a, #con_b, #con_c").toggle("blind", {direction: "up"}, 1000)
            }
        else
            {
                $("#con_a, #con_b, #con_c").toggle("blind", {direction: "up"}, 1000)
            }
        });
    
    $("#ls_menu").click(function(){
        if($("#lnl_a, #lnl_b, #lnl_c").css("display") != "none")
            {
                $("#lnl_a, #lnl_b, #lnl_c").toggle("blind", {direction: "down"}, 2000)
                $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#sns_a, #sns_b, #sns_c").css("display") != "none")
            {
                $("#sns_a, #sns_b, #sns_c").toggle("blind", {direction: "down"}, 2000)
                $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "up"}, 2000)
            }
        else
            {
                $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "up"}, 2000)
            }
        });
    $("#lnl_menu").click(function(){
        if($("#ls_a, #ls_b, #ls_c").css("display") != "none")
            {
                $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 2000)
                $("#lnl_a, #lnl_b, #lnl_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#sns_a, #sns_b, #sns_c").css("display") != "none")
            {
                $("#sns_a, #sns_b, #sns_c").toggle("blind", {direction: "down"}, 2000)
                $("#lnl_a, #lnl_b, #lnl_c").toggle("blind", {direction: "up"}, 2000)
            }
        else
            {
                $("#lnl_a, #lnl_b, #lnl_c").toggle("blind", {direction: "up"}, 2000)
            }
        });   
    $("#sns_menu").click(function(){
        if($("#ls_a, #ls_b, #ls_c").css("display") != "none")
            {
                $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 2000)
                $("#sns_a, #sns_b, #sns_c").toggle("blind", {direction: "up"}, 2000)
            }
        else if($("#lnl_a, #lnl_b, #lnl_c").css("display") != "none")
            {
                $("#lnl_a, #lnl_b, #lnl_c").toggle("blind", {direction: "down"}, 2000)
                $("#sns_a, #sns_b, #sns_c").toggle("blind", {direction: "up"}, 2000)
            }
        else
            {
                $("#sns_a, #sns_b, #sns_c").toggle("blind", {direction: "up"}, 2000)
            }
        });
    
    
    
    
    
    $("#jala_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#japanese_language_choice, #japanese_language_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/jala.jpeg)")
    })
    $("#jaa_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#jaa_choice, #jaa_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/jaa.jpeg)")
    })
    $("#startedberk_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#started_berkeley_choice, #started_berkeley_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/startedberk.jpg)")
    })
    
    $("#fashion_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#fashion_choice, #fashion_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/fashion.jpg)")
    })
    $("#music_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#music_choice, #music_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/music.jpeg)")
    })
    $("#ftv_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#ftv_choice, #ftv_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/ftv.jpg)")
    })
    
    $("#olivia_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#olivia_choice, #olivia_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/olivia.jpg)")
    })
    $("#yohji_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#yohji_choice, #yohji_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/yohji.jpg)")
    })
    $("#park_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#park_choice, #park_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/park.jpg)")
    })
    
    $("#jaco_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#japaneseconvo_choice, #japaneseconvo_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/jaco.jpeg)")
    })
    $("#jato_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#japanesetopic_choice, #japanesetopic_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/jato.jpeg)")
    })
    $("#jaac_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#japaneseact_choice, #japaneseact_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/jaac.jpeg)")
    })
    
    $("#self_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#self_choice, #self_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/self.jpeg)")
    })
    $("#learn_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#learning_choice, #learning_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/learn.jpeg)")
    })
    $("#grow_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#growing_choice, #growing_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/grow.jpg)")
    })
    
    $("#acc_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#accurate_choice, #accurate_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/accurate.jpeg)")
    })
    $("#fast_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#fast_choice, #fast_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/fast.jpeg)")
    })
    $("#fun_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#fun_choice, #fun_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/fun.jpeg)")
    })
    
    $("#facebook_select").click(function(){
        $("#soc_a, #soc_b, #soc_c").toggle("blind", {direction: "down"}, 1000)
        $("#facebook_choice, #facebook_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/facebook.jpeg)")
    })
    $("#sayan_select").click(function(){
        $("#sl_a, #sl_b, #sl_c").toggle("blind", {direction: "down"}, 1000)
        $("#sayan_choice, #sayan_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/sayan.jpg)")
    })
    $("#businessinquiries_select").click(function(){
        $("#con_a, #con_b, #con_c").toggle("blind", {direction: "down"}, 1000)
        $("#businessinquiries_choice, #businessinquiries_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/businessinquiries.jpg)")
    })
    
    $("#incept_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#inception_choice, #inception_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/inception.jpeg)")
    })
    $("#imagine_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#imagination_choice, #imagination_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/imagination.jpeg)")
    })
    $("#create_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#creation_choice, #creation_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/creation.jpeg)")
    })
    
    $("#research_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#research_choice, #research_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/research.jpg)")
    })
    $("#foundedls_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#founded_ls_choice, #founded_ls_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/foundedls.jpeg)")
    })
    $("#graduatedberk_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#graduated_berkeley_choice, #graduated_berkeley_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/graduatedberk.jpg)")
    })
    
    $("#anime_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#anime_choice, #anime_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/anime.jpg)")
    })
    $("#rpg_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#rpg_choice, #rpg_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/rpg.jpg)")
    })
    $("#running_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#run_choice, #run_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/run.jpeg)")
    })
    
    $("#satoshi_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#satoshi_choice, #satoshi_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/satoshi.jpg)")
    })
    $("#leslie_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#leslie_choice, #leslie_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/leslie.jpg)")
    })
    $("#ginoy_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#ginoy_choice, #ginoy_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/ginoy.jpg)")
    })
    
    $("#engcon_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#engcon_choice, #engcon_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/engcon.jpg)")
    })
    $("#amto_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#americantopics_choice, #americantopics_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/americantopics.jpg)")
    })
    $("#amact_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#americanactivities_choice, #americanactivities_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/americanactivities.jpg)")
    })
    
    $("#soul_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#soul_choice, #soul_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/soul.jpg)")
    })
    $("#search_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#searching_choice, #searching_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/searching.jpg)")
    })
    $("#venture_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#venturing_choice, #venturing_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/venturing.jpg)")
    })
    
    $("#natural_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#natural_choice, #natural_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/natural.jpg)")
    })
    $("#integrative_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#integrative_choice, #integrative_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/integrative.jpg)")
    })
    $("#lotsoffun_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#lotsoffun_choice, #lotsoffun_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/lotsoffun.jpg)")
    })
    
    $("#youtube_select").click(function(){
        $("#soc_a, #soc_b, #soc_c").toggle("blind", {direction: "down"}, 1000)
        $("#youtube_choice, #youtube_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/youtube.jpg)")
    })
    $("#lala_select").click(function(){
        $("#sl_a, #sl_b, #sl_c").toggle("blind", {direction: "down"}, 1000)
        $("#lala_choice, #lala_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/lala.jpg)")
    })
    $("#chattea_select").click(function(){
        $("#con_a, #con_b, #con_c").toggle("blind", {direction: "down"}, 1000)
        $("#chatovertea_choice, #chatovertea_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/chatovertea.jpg)")
    })
    
    $("#realization_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#realization_choice, #realization_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/realization.jpg)")
    })
    $("#connection_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#connections_choice, #connections_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/connection.jpg)")
    })
    $("#traction_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#traction_choice, #traction_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/traction.jpg)")
    })
    
    $("#expanded_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#expanded_ls_choice, #expanded_ls_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/expanded.jpg)")
    })
    $("#accountmanager_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#accountmanager_choice, #accountmanager_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/accountmanager.jpg)")
    })
    $("#guestspeaker_select").click(function(){
        $("#timeline_a, #timeline_b, #timeline_c").toggle("blind", {direction: "down"}, 1000)
        $("#guestspeaker_choice, #guestspeaker_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/guestspeaker.jpg)")
    })
    
    $("#japanese_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#jap_choice, #jap_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/jap.jpg)")
    })
    $("#webdesign_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#webdesign_choice, #webdesign_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/webdesign.jpg)")
    })
    $("#entrepreneurship_select").click(function(){
        $("#like_a, #like_b, #like_c").toggle("blind", {direction: "down"}, 1000)
        $("#entrepreneurship_choice, #entrepreneurship_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/entrepreneurship.jpg)")
    })
    
    $("#akio_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#akio_choice, #akio_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/akio.jpg)")
    })
    $("#larry_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#larry_choice, #larry_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/larry.jpg)")
    })
    $("#waltdisney_select").click(function(){
        $("#inspi_a, #inspi_b, #inspi_c").toggle("blind", {direction: "down"}, 1000)
        $("#walt_choice, #walt_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/who/walt.jpg)")
    })
    
    $("#langexchange_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#languageexchange_choice, #languageexchange_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/langexchange.jpg)")
    })
    $("#simdif_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#similaritiesandiffs_choice, #similaritiesandiffs_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/similaritiesandiffs.jpeg)")
    })
    $("#interculturalact_select").click(function(){
        $("#jaa_a, #jaa_b, #jaa_c").toggle("blind", {direction: "down"}, 1000)
        $("#intercultural_choice, #intercultural_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/intercultural.jpeg)")
    })
    
    $("#meaning_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#meaning_choice, #meaning_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/meaning.jpeg)")
    })
    $("#community_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#community_choice, #community_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/community.jpeg)")
    })
    $("#understand_select").click(function(){
        $("#imi_a, #imi_b, #imi_c").toggle("blind", {direction: "down"}, 1000)
        $("#understanding_choice, #understanding_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/understand.jpeg)")
    })
    
    $("#comprehensive_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#comprehensive_choice, #comprehensive_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/understand.jpeg)")
    })
    $("#modern_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#modern_choice, #modern_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/understand.jpeg)")
    })
    $("#evenmorefun_select").click(function(){
        $("#tiv_a, #tiv_b, #tiv_c").toggle("blind", {direction: "down"}, 1000)
        $("#evenmorefun_choice, #evenmorefun_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/jpn/understand.jpeg)")
    })
    
    
    
    
    $("#instagram_select").click(function(){
        $("#soc_a, #soc_b, #soc_c").toggle("blind", {direction: "down"}, 1000)
        $("#instagram_choice, #instagram_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/instagram.jpeg)")
    })
    $("#sayanlala_select").click(function(){
        $("#sl_a, #sl_b, #sl_c").toggle("blind", {direction: "down"}, 1000)
        $("#sayanlala_choice, #sayanlala_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/sayan_lala.jpeg)")
    })
    $("#designtalk_select").click(function(){
        $("#con_a, #con_b, #con_c").toggle("blind", {direction: "down"}, 1000)
        $("#designtalk_choice, #designtalk_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/say/design_talk.jpeg)")
    })
    
    $("#philosophy_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#philosophy_choice, #philosophy_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/philosophy.jpeg)")
    })
    $("#mission_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#mission_choice, #mission_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/mission.jpeg)")
    })
    $("#present_select").click(function(){
        $("#ls_a, #ls_b, #ls_c").toggle("blind", {direction: "down"}, 1000)
        $("#present_choice, #present_info").delay(1000).toggle("blind", {direction: "left"}, 1000)
        $("body").css("background-image", "url(../images/ls/present.jpeg)")
    })
    
    

    $("#back").click(function(){
        if($("#japanese_language_choice").css("display") != "none")
        {
            $("#japanese_language_choice, #japanese_language_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#jaa_choice").css("display") != "none")
        {
            $("#jaa_choice, #jaa_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#started_berkeley_choice").css("display") != "none")
        {
            $("#started_berkeley_choice, #started_berkeley_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#fashion_choice").css("display") != "none")
        {
            $("#fashion_choice, #fashion_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#music_choice").css("display") != "none")
        {
            $("#music_choice, #music_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#ftv_choice").css("display") != "none")
        {
            $("#ftv_choice, #ftv_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#olivia_choice").css("display") != "none")
        {
            $("#olivia_choice, #olivia_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#yohji_choice").css("display") != "none")
        {
            $("#yohji_choice, #yohji_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#park_choice").css("display") != "none")
        {
            $("#park_choice, #park_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#japaneseconvo_choice").css("display") != "none")
        {
            $("#japaneseconvo_choice, #japaneseconvo_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#japanesetopic_choice").css("display") != "none")
        {
            $("#japanesetopic_choice, #japanesetopic_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#japaneseact_choice").css("display") != "none")
        {
            $("#japaneseact_choice, #japaneseact_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#self_choice").css("display") != "none")
        {
            $("#self_choice, #self_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#learning_choice").css("display") != "none")
        {
            $("#learning_choice, #learning_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#growing_choice").css("display") != "none")
        {
            $("#growing_choice, #growing_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#accurate_choice").css("display") != "none")
        {
            $("#accurate_choice, #accurate_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#fast_choice").css("display") != "none")
        {
            $("#fast_choice, #fast_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#fun_choice").css("display") != "none")
        {
            $("#fun_choice, #fun_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#facebook_choice").css("display") != "none")
        {
            $("#facebook_choice, #facebook_info").toggle("blind", {direction: "left"}, 1000)
            $("#soc_a, #soc_b, #soc_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#sayan_choice").css("display") != "none")
        {
            $("#sayan_choice, #sayan_info").toggle("blind", {direction: "left"}, 1000)
            $("#sl_a, #sl_b, #sl_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#businessinquiries_choice").css("display") != "none")
        {
            $("#businessinquiries_choice, #businessinquiries_info").toggle("blind", {direction: "left"}, 1000)
            $("#con_a, #con_b, #con_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#inception_choice").css("display") != "none")
        {
            $("#inception_choice, #inception_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#imagination_choice").css("display") != "none")
        {
            $("#imagination_choice, #imagination_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#businessinquiries_choice").css("display") != "none")
        {
            $("#businessinquiries_choice, #businessinquiries_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#research_choice").css("display") != "none")
        {
            $("#research_choice, #research_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#founded_ls_choice").css("display") != "none")
        {
            $("#founded_ls_choice, #founded_ls_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#graduated_berkeley_choice").css("display") != "none")
        {
            $("#graduated_berkeley_choice, #graduated_berkeley_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#anime_choice").css("display") != "none")
        {
            $("#anime_choice, #anime_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#rpg_choice").css("display") != "none")
        {
            $("#rpg_choice, #rpg_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#run_choice").css("display") != "none")
        {
            $("#run_choice, #run_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#satoshi_choice").css("display") != "none")
        {
            $("#satoshi_choice, #satoshi_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#leslie_choice").css("display") != "none")
        {
            $("#leslie_choice, #leslie_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#ginoy_choice").css("display") != "none")
        {
            $("#ginoy_choice, #ginoy_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#engcon_choice").css("display") != "none")
        {
            $("#engcon_choice, #engcon_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#americantopics_choice").css("display") != "none")
        {
            $("#americantopics_choice, #americantopics_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#americanactivities_choice").css("display") != "none")
        {
            $("#americanactivities_choice, #americanactivities_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#soul_choice").css("display") != "none")
        {
            $("#soul_choice, #soul_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#searching_choice").css("display") != "none")
        {
            $("#searching_choice, #searching_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#venturing_choice").css("display") != "none")
        {
            $("#venturing_choice, #venturing_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#natural_choice").css("display") != "none")
        {
            $("#natural_choice, #natural_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#integrative_choice").css("display") != "none")
        {
            $("#integrative_choice, #integrative_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#lotsoffun_choice").css("display") != "none")
        {
            $("#lotsoffun_choice, #lotsoffun_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#youtube_choice").css("display") != "none")
        {
            $("#youtube_choice, #youtube_info").toggle("blind", {direction: "left"}, 1000)
            $("#soc_a, #soc_b, #soc_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#lala_choice").css("display") != "none")
        {
            $("#lala_choice, #lala_info").toggle("blind", {direction: "left"}, 1000)
            $("#sl_a, #sl_b, #sl_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#chatovertea_choice").css("display") != "none")
        {
            $("#chatovertea_choice, #chatovertea_info").toggle("blind", {direction: "left"}, 1000)
            $("#con_a, #con_b, #con_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#creation_choice").css("display") != "none")
        {
            $("#creation_choice, #creation_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#realization_choice").css("display") != "none")
        {
            $("#realization_choice, #realization_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#connections_choice").css("display") != "none")
        {
            $("#connections_choice, #connections_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#traction_choice").css("display") != "none")
        {
            $("#traction_choice, #traction_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#expanded_ls_choice").css("display") != "none")
        {
            $("#expanded_ls_choice, #expanded_ls_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#accountmanager_choice").css("display") != "none")
        {
            $("#accountmanager_choice, #accountmanager_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#guestspeaker_choice").css("display") != "none")
        {
            $("#guestspeaker_choice, #guestspeaker_info").toggle("blind", {direction: "left"}, 1000)
            $("#timeline_a, #timeline_b, #timeline_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#jap_choice").css("display") != "none")
        {
            $("#jap_choice, #jap_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#webdesign_choice").css("display") != "none")
        {
            $("#webdesign_choice, #webdesign_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#entrepreneurship_choice").css("display") != "none")
        {
            $("#entrepreneurship_choice, #entrepreneurship_info").toggle("blind", {direction: "left"}, 1000)
            $("#like_a, #like_b, #like_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#akio_choice").css("display") != "none")
        {
            $("#akio_choice, #akio_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#larry_choice").css("display") != "none")
        {
            $("#larry_choice, #larry_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#walt_choice").css("display") != "none")
        {
            $("#walt_choice, #walt_info").toggle("blind", {direction: "left"}, 1000)
            $("#inspi_a, #inspi_b, #inspi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#languageexchange_choice").css("display") != "none")
        {
            $("#languageexchange_choice, #languageexchange_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#similaritiesandiffs_choice").css("display") != "none")
        {
            $("#similaritiesandiffs_choice, #similaritiesandiffs_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#intercultural_choice").css("display") != "none")
        {
            $("#intercultural_choice, #intercultural_info").toggle("blind", {direction: "left"}, 1000)
            $("#jaa_a, #jaa_b, #jaa_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#meaning_choice").css("display") != "none")
        {
            $("#meaning_choice, #meaning_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#community_choice").css("display") != "none")
        {
            $("#community_choice, #community_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#understanding_choice").css("display") != "none")
        {
            $("#understanding_choice, #understanding_info").toggle("blind", {direction: "left"}, 1000)
            $("#imi_a, #imi_b, #imi_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#comprehensive_choice").css("display") != "none")
        {
            $("#comprehensive_choice, #comprehensive_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#modern_choice").css("display") != "none")
        {
            $("#modern_choice, #modern_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#evenmorefun_choice").css("display") != "none")
        {
            $("#evenmorefun_choice, #evenmorefun_info").toggle("blind", {direction: "left"}, 1000)
            $("#tiv_a, #tiv_b, #tiv_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#instagram_choice").css("display") != "none")
        {
            $("#instagram_choice, #instagram_info").toggle("blind", {direction: "left"}, 1000)
            $("#soc_a, #soc_b, #soc_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#sayanlala_choice").css("display") != "none")
        {
            $("#sayanlala_choice, #sayanlala_info").toggle("blind", {direction: "left"}, 1000)
            $("#sl_a, #sl_b, #sl_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#designtalk_choice").css("display") != "none")
        {
            $("#designtalk_choice, #designtalk_info").toggle("blind", {direction: "left"}, 1000)
            $("#con_a, #con_b, #con_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#present_choice").css("display") != "none")
        {
            $("#present_choice, #present_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#mission_choice").css("display") != "none")
        {
            $("#mission_choice, #mission_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_c").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else if($("#philosophy_choice").css("display") != "none")
        {
            $("#philosophy_choice, #philosophy_info").toggle("blind", {direction: "left"}, 1000)
            $("#ls_a, #ls_b, #ls_C").delay(1000).toggle("blind", {direction: "up"}, 1000)
        }
        else{
            $("#back").fadeOut(200);
        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*exit sub menu*/
    $("#exit").click(function(){
        $(".title").toggle("blind", {direction: "left"}, 2000)
        $("#who_title, #say_title, #ls_title, #jpn_title").fadeOut(500)
        $(".sub_menu").toggle("blind", {direction: "down"}, 2000)
        $("#timeline_menu, #likes_menu, #inspiration_menu, #jaa_menu, #imi_menu, #tiv_menu, #ls_menu, #lnl_menu, #sns_menu, #social_menu, #lala_menu, #contact_menu").fadeOut(500)
        $("#timeline_a, #timeline_b, #timeline_c, #like_a, #like_b, #like_c, #inspi_a, #inspi_b, #inspi_c, #jaa_a, #jaa_b, #jaa_c, #imi_a, #imi_b, #imi_c, #tiv_a, #tiv_b, #tiv_c, #soc_a, #soc_b, #soc_c, #sl_a, #sl_b, #sl_c, #con_a, #con_b, #con_c, #ls_a, #ls_b, #ls_c, #lnl_a, #lnl_b, #lnl_c, #sns_a, #sns_b, #sns_c").fadeOut(500)
        $(".content").toggle("blind", {direction: "down"},2000)
        $("#hourglass_x, #home, #home_clock").delay(2000).fadeIn(2000);
    })

})