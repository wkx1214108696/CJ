(function(window){var svgSprite='<svg><symbol id="icon-baobiaozhongxin" viewBox="0 0 1024 1024"><path d="M834.579 98.228H188.972c-50.726 0-92.23 41.503-92.23 92.23v645.607c0 50.726 41.503 92.23 92.23 92.23h645.607c50.726 0 92.23-41.503 92.23-92.23V190.457c0-50.726-41.503-92.229-92.23-92.229zM373.431 743.835h-92.23V421.031h92.23v322.804z m184.46 0h-92.23V282.687h92.23v461.148z m184.459 0h-92.23V559.376h92.23v184.459z"  ></path></symbol><symbol id="icon-tianjia" viewBox="0 0 1024 1024"><path d="M507.448889 70.542222c-245.76 0-443.733333 197.973333-443.733333 443.733334s200.248889 443.733333 443.733333 443.733333c245.76 0 443.733333-197.973333 443.733333-443.733333 0-243.484444-197.973333-443.733333-443.733333-443.733334z m248.035555 477.866667h-213.902222v213.902222c0 18.204444-15.928889 34.133333-34.133333 34.133333s-34.133333-15.928889-34.133333-34.133333v-213.902222h-213.902223c-18.204444 0-34.133333-15.928889-34.133333-34.133333s15.928889-34.133333 34.133333-34.133334h213.902223v-213.902222c0-18.204444 15.928889-34.133333 34.133333-34.133333s34.133333 15.928889 34.133333 34.133333v213.902222h213.902222c18.204444 0 34.133333 15.928889 34.133334 34.133334s-13.653333 34.133333-34.133334 34.133333z" fill="" ></path></symbol><symbol id="icon-ic_dashboard_black_" viewBox="0 0 1024 1024"><path d="M128 554.666667h341.333333V128H128v426.666667z m0 341.333333h341.333333v-256H128v256z m426.666667 0h341.333333V469.333333h-341.333333v426.666667z m0-768v256h341.333333V128h-341.333333z"  ></path></symbol><symbol id="icon-ic_assignment_turned" viewBox="0 0 1024 1024"><path d="M810.666667 128h-178.346667C614.4 78.506667 567.466667 42.666667 512 42.666667c-55.466667 0-102.4 35.84-120.32 85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-298.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666666-42.666667-19.2-42.666667-42.666666 19.2-42.666667 42.666667-42.666667z m-85.333333 597.333333l-170.666667-170.666666 60.16-60.16L426.666667 604.586667l281.173333-281.173334L768 384l-341.333333 341.333333z"  ></path></symbol><symbol id="icon-ic_assignment_black_" viewBox="0 0 1024 1024"><path d="M810.666667 128h-178.346667C614.4 78.506667 567.466667 42.666667 512 42.666667c-55.466667 0-102.4 35.84-120.32 85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-298.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666666-42.666667-19.2-42.666667-42.666666 19.2-42.666667 42.666667-42.666667z m85.333333 597.333333H298.666667v-85.333333h298.666666v85.333333z m128-170.666666H298.666667v-85.333334h426.666666v85.333334z m0-170.666667H298.666667V298.666667h426.666666v85.333333z"  ></path></symbol><symbol id="icon-ic_menu_black_px" viewBox="0 0 1024 1024"><path d="M128 768h768v-85.333333H128v85.333333z m0-213.333333h768v-85.333334H128v85.333334z m0-298.666667v85.333333h768V256H128z"  ></path></symbol><symbol id="icon-ic_assignment_ind_bl" viewBox="0 0 1024 1024"><path d="M810.666667 128h-178.346667C614.4 78.506667 567.466667 42.666667 512 42.666667c-55.466667 0-102.4 35.84-120.32 85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-298.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666666-42.666667-19.2-42.666667-42.666666 19.2-42.666667 42.666667-42.666667z m0 170.666667c70.826667 0 128 57.173333 128 128s-57.173333 128-128 128-128-57.173333-128-128 57.173333-128 128-128z m256 512H256v-59.733334c0-85.333333 170.666667-132.266667 256-132.266666s256 46.933333 256 132.266666V810.666667z"  ></path></symbol><symbol id="icon-ic_home_black_px" viewBox="0 0 1024 1024"><path d="M426.666667 853.333333v-256h170.666666v256h213.333334v-341.333333h128L512 128 85.333333 512h128v341.333333z"  ></path></symbol><symbol id="icon-ic_notifications_non" viewBox="0 0 1024 1024"><path d="M512 938.666667c46.933333 0 85.333333-38.4 85.333333-85.333334h-170.666666c0 46.933333 38.4 85.333333 85.333333 85.333334z m256-256v-213.333334c0-130.986667-69.546667-240.64-192-269.653333V170.666667c0-35.413333-28.586667-64-64-64s-64 28.586667-64 64v29.013333C325.973333 228.693333 256 337.92 256 469.333333v213.333334l-85.333333 85.333333v42.666667h682.666666v-42.666667l-85.333333-85.333333z m-85.333333 42.666666H341.333333v-256c0-105.813333 64.426667-192 170.666667-192s170.666667 86.186667 170.666667 192v256z"  ></path></symbol><symbol id="icon-ic_shopping_cart_bla" viewBox="0 0 1024 1024"><path d="M298.666667 768c-46.933333 0-84.906667 38.4-84.906667 85.333333S251.733333 938.666667 298.666667 938.666667s85.333333-38.4 85.333333-85.333334-38.4-85.333333-85.333333-85.333333zM42.666667 85.333333v85.333334h85.333333l153.6 323.84-57.6 104.533333c-6.826667 11.946667-10.666667 26.026667-10.666667 40.96 0 46.933333 38.4 85.333333 85.333334 85.333333h512v-85.333333H316.586667c-5.973333 0-10.666667-4.693333-10.666667-10.666667l1.28-5.12 38.4-69.546666h317.866667c32 0 60.16-17.493333 74.666666-43.946667l152.746667-276.906667A42.794667 42.794667 0 0 0 853.333333 170.666667H222.293333l-40.106666-85.333334H42.666667z m682.666666 682.666667c-46.933333 0-84.906667 38.4-84.906666 85.333333s37.973333 85.333333 84.906666 85.333334 85.333333-38.4 85.333334-85.333334-38.4-85.333333-85.333334-85.333333z"  ></path></symbol><symbol id="icon-ic_monetization_on_b" viewBox="0 0 1024 1024"><path d="M512 85.333333C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z m60.16 686.506667V853.333333h-113.92v-82.346666c-72.96-15.36-134.826667-62.293333-139.52-145.066667h83.626667c4.266667 44.8 34.986667 79.786667 113.066666 79.786667 83.626667 0 102.4-41.813333 102.4-67.84 0-35.413333-18.773333-68.693333-113.92-91.306667-105.813333-25.6-178.346667-69.12-178.346666-156.586667 0-73.386667 59.306667-121.173333 132.693333-136.96V170.666667h113.92v83.2c79.36 19.2 119.04 79.36 121.6 144.64H610.133333c-2.133333-47.36-27.306667-79.786667-94.72-79.786667-64 0-102.4 29.013333-102.4 69.973333 0 35.84 27.733333 59.306667 113.92 81.493334s178.346667 59.306667 178.346667 166.826666c-0.426667 78.08-58.88 120.746667-133.12 134.826667z"  ></path></symbol><symbol id="icon-ic_search_black_px" viewBox="0 0 1024 1024"><path d="M661.333333 597.333333h-33.706666l-11.946667-11.52A276.096 276.096 0 0 0 682.666667 405.333333 277.333333 277.333333 0 1 0 405.333333 682.666667c68.693333 0 131.84-25.173333 180.48-66.986667l11.52 11.946667v33.706666l213.333334 212.906667L874.24 810.666667l-212.906667-213.333334z m-256 0C299.093333 597.333333 213.333333 511.573333 213.333333 405.333333S299.093333 213.333333 405.333333 213.333333 597.333333 299.093333 597.333333 405.333333 511.573333 597.333333 405.333333 597.333333z"  ></path></symbol><symbol id="icon-ic_settings_black_" viewBox="0 0 1024 1024"><path d="M829.013333 553.813333c1.706667-13.653333 2.986667-27.306667 2.986667-41.813333s-1.28-28.16-2.986667-41.813333l90.026667-70.4c8.106667-6.4 10.24-17.92 5.12-27.306667l-85.333333-147.626667c-5.12-9.386667-16.64-12.8-26.026667-9.386666l-106.24 42.666666c-22.186667-17.066667-46.08-31.146667-72.106667-41.813333l-16.213333-113.066667A20.821333 20.821333 0 0 0 597.333333 85.333333h-170.666666c-10.666667 0-19.626667 7.68-20.906667 17.92l-16.213333 113.066667c-26.026667 10.666667-49.92 25.173333-72.106667 41.813333l-106.24-42.666666c-9.813333-3.84-20.906667 0-26.026667 9.386666l-85.333333 147.626667c-5.546667 9.386667-2.986667 20.906667 5.12 27.306667l90.026667 70.4c-1.706667 13.653333-2.986667 27.733333-2.986667 41.813333s1.28 28.16 2.986667 41.813333l-90.026667 70.4c-8.106667 6.4-10.24 17.92-5.12 27.306667l85.333333 147.626667c5.12 9.386667 16.64 12.8 26.026667 9.386666l106.24-42.666666c22.186667 17.066667 46.08 31.146667 72.106667 41.813333l16.213333 113.066667c1.28 10.24 10.24 17.92 20.906667 17.92h170.666666c10.666667 0 19.626667-7.68 20.906667-17.92l16.213333-113.066667c26.026667-10.666667 49.92-25.173333 72.106667-41.813333l106.24 42.666666c9.813333 3.84 20.906667 0 26.026667-9.386666l85.333333-147.626667c5.12-9.386667 2.986667-20.906667-5.12-27.306667l-90.026667-70.4zM512 661.333333c-82.346667 0-149.333333-66.986667-149.333333-149.333333s66.986667-149.333333 149.333333-149.333333 149.333333 66.986667 149.333333 149.333333-66.986667 149.333333-149.333333 149.333333z"  ></path></symbol><symbol id="icon-ic_car_black" viewBox="0 0 1024 1024"><path d="M874.667 469.333c17.28 42.667 42.666 85.334 42.666 128v213.334c0 27.946-23.893 42.666-64 42.666s-64-17.28-64-42.666V768H234.667v42.667c0 25.386-23.894 42.666-64 42.666s-64-14.72-64-42.666V597.333c0-42.666 25.386-85.333 42.666-128s-64-37.333-64-64 5.334-42.666 42.667-42.666h64s30.293-87.04 42.667-128 64-64 106.666-64h341.334c42.666 0 94.293 23.04 106.666 64s42.667 128 42.667 128h64c37.333 0 42.667 16 42.667 42.666s-81.28 21.334-64 64zM405.333 618.667A21.333 21.333 0 0 0 426.667 640h170.666a21.333 21.333 0 0 0 21.334-21.333v-21.334A21.333 21.333 0 0 0 597.333 576H426.667a21.333 21.333 0 0 0-21.334 21.333v21.334z m-213.333 0a64 64 0 1 0 64-64 64 64 0 0 0-64 64z m597.333-256c0-21.334-42.666-106.667-42.666-106.667H277.333s-42.666 85.333-42.666 106.667V384a42.667 42.667 0 0 0 42.666 42.667h469.334A42.667 42.667 0 0 0 789.333 384v-21.333z m-21.333 192a64 64 0 1 0 64 64 64 64 0 0 0-64-64z"  ></path></symbol><symbol id="icon-shenhe" viewBox="0 0 1024 1024"><path d="M185.6 745.6v-92.8c0-51.2 41.6-92.8 92.8-92.8h140.8v-73.6c-54.4-32-92.8-92.8-92.8-160 0-102.4 83.2-185.6 185.6-185.6 102.4 0 185.6 83.2 185.6 185.6 0 70.4-38.4 128-92.8 160v73.6h140.8c51.2 0 92.8 41.6 92.8 92.8v92.8H185.6z m512 140.8H326.4v-92.8h374.4v92.8z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)