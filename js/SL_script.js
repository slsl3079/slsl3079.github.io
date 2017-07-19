$(document).ready(function(){

            $("body").fadeIn(800, function(){
                $("#first_l").fadeIn(1000, function(){
                    $("#first_a").fadeIn(1000, function(){
                        $("#second_l").fadeIn(1000, function(){
                            $("#second_a").fadeIn(1000, function(){
                                $("#characters_SAYAN").fadeIn(1000, function(){
                                    $("#first_l, #first_a, #second_l, #second_a, #characters_SAYAN").fadeOut(1000, function(){
                                        $("#top_right, #bottom_left").fadeIn(500, function(){
                                            $("#resume").fadeIn(500, function(){
                                                $("#design").fadeIn(500, function(){
                                                    $("#japan").fadeIn(500, function(){
                                                        $("#consulting").fadeIn(500,function(){})
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            
            /*resume*/
            $("#resume").hover(function(){
                $(".uni_info, .say_info, .jpn_info").fadeOut(250, function(){
                    $("#first_w").fadeIn(250, function(){
                        $("#first_h").fadeIn(250, function(){
                            $("#first_o").fadeIn(250, function(){
                                $("#question").fadeIn(250, function(){
                                    $("#ellipsis, #ellipsis_2").fadeIn(250, function(){
                                        $("#am, #am_2").fadeIn(250, function(){})
                                        })
                                    })
                                })
                            })
                        })
                    })
            },function(){
                $("#first_w").fadeOut(250, function(){
                    $("#first_h").fadeOut(250, function(){
                        $("#first_o").fadeOut(250, function(){
                            $("#question").fadeOut(250, function(){
                                $("#ellipsis, #ellipsis_2").fadeOut(250, function(){
                                    $("#am, #am_2").fadeOut(250, function(){})
                                })
                            })
                        })
                    })
                })
            })
            
            $("#resume").click(function(){
                $("#resume, #ellipsis, #ellipsis_2, #first_w, #first_h, #first_o, #am, #am_2, #question, .jpn_info, .say_info").fadeOut(250, function(){
                    $(".who_info, #japan, #consulting, #design").fadeIn(1000, function(){
                        $("#who_text").fadeIn(250, function(){})
                    })
                });
            })
            
    
            
            /*design*/
            $("#design").hover(function(){
                $(".jpn_info, .who_info, .say_info").fadeOut(250, function(){
                    $("#first_u").fadeIn(250, function(){
                        $("#and").fadeIn(250, function(){
                            $("#first_i").fadeIn(250, function(){
                                $("#question").fadeIn(250, function(){
                                    $("#ellipsis, #ellipsis_2, #can, #do").fadeIn(250, function(){})
                                    })
                                })
                            })
                        })
                    })
            },function(){
                $("#first_u").fadeOut(250, function(){
                    $("#and").fadeOut(250, function(){
                        $("#first_i").fadeOut(250, function(){
                            $("#question").fadeOut(250, function(){
                                $("#ellipsis, #ellipsis_2, #can, #do").fadeOut(250, function(){})
                            })
                        })
                    })
                })
            })
            
            $("#design").click(function(){
                $("#design, #ellipsis, #ellipsis_2, #first_u, #and, #first_i, #can, #do, #question, .jpn_info, .say_info, .who_info").fadeOut(250, function(){
                    $(".uni_info, #japan, #consulting, #resume").fadeIn(1000, function(){
                        $("#uni_text").fadeIn(250, function(){})
                    })
                });
            })
            
             /*consulting*/
            $("#consulting").hover(function(){
                $(".jpn_info, .who_info, .uni_info").fadeOut(250, function(){
                    $("#first_s").fadeIn(250, function(){
                        $("#first_a").fadeIn(250, function(){
                            $("#first_y").fadeIn(250, function(){
                                $("#question").fadeIn(250, function(){
                                    $("#ellipsis, #ellipsis_2, #some, #thing").fadeIn(250, function(){})
                                    })
                                })
                            })
                        })
                    })
            },function(){
                $("#first_s").fadeOut(250, function(){
                    $("#first_a").fadeOut(250, function(){
                        $("#first_y").fadeOut(250, function(){
                            $("#question").fadeOut(250, function(){
                                $("#ellipsis, #ellipsis_2, #some, #thing").fadeOut(250, function(){})
                            })
                        })
                    })
                })
            })
            
            $("#consulting").click(function(){
                $("#consulting, #ellipsis, #ellipsis_2, #first_s, #first_a, #first_y, #some, #thing, #question, .jpn_info, .who_info, .uni_info").fadeOut(250, function(){
                    $(".say_info, #japan, #resume, #design").fadeIn(1000, function(){
                        $("#say_text").fadeIn(250, function(){})
                    })
                });
            })
            
             /*japan*/
            $("#japan").hover(function(){
                $(".say_info, .uni_info, .who_info").fadeOut(250, function(){
                    $("#first_j").fadeIn(250, function(){
                        $("#first_p").fadeIn(250, function(){
                            $("#first_n").fadeIn(250, function(){
                                $("#question").fadeIn(250, function(){
                                    $("#ellipsis, #ellipsis_2, #sun, #rise").fadeIn(250, function(){})
                                    })
                                })
                            })
                        })
                    })
            },function(){
                $("#first_j").fadeOut(250, function(){
                    $("#first_p").fadeOut(250, function(){
                        $("#first_n").fadeOut(250, function(){
                            $("#question").fadeOut(250, function(){
                                $("#ellipsis, #ellipsis_2, #sun, #rise").fadeOut(250, function(){})
                            })
                        })
                    })
                })
            })
    
            $("#japan").click(function(){
                $("#japan, #ellipsis, #ellipsis_2, #first_j, #first_p, #first_n, #sun, #rise, #question, .say_info, .who_info, .uni_info").fadeOut(250, function(){
                    $(".jpn_info, #consulting, #resume, #design").fadeIn(1000, function(){
                        $("#jpn_text").fadeIn(250, function(){})
                    })
                });
            })
         
        //letter by letter javascript
        $(function() {
              //get the welcome msg element
              var $all_msg = $('#welcome_msg');
              //get a list of letters from the welcome text
              var $wordList = $('#welcome_msg').text().split("");
              //clear the welcome text msg
              $('#welcome_msg').text("");
              //loop through the letters in the $wordList array
              $.each($wordList, function(idx, elem) {
                //create a span for the letter and set opacity to 0
                var newEL = $("<span/>").text(elem).css({
                  opacity: 0
                });
                //append it to the welcome message
                newEL.appendTo($all_msg);
                //set the delay on the animation for this element
                newEL.delay(idx * 70);
                //animate the opacity back to full 1
                newEL.animate({
                  opacity: 1
                }, 1100);
              });

            });
    
    })   