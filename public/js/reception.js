// function barcode(){
//   var gid =document.getElementById('gid').value;

//   JsBarcode("#barcode", gid);
//   /*JsBarcode("#barcode", gid, {
//             format: "CODE128A",
//             //lineColor: "#0aa",
//             width:4,
//             height:30,
//             displayValue: true
//           }); */
// }
// function send(){
//     let gtReg =1;
//     let clinic_code = document.getElementById("clinic_code").value;
//     var gid = document.getElementById("gid").value;
//     var name = document.getElementById("name").value;
//     var father = document.getElementById("father").value;
//     var agey = document.getElementById("agey").value;
//     var agem = document.getElementById("agem").value;
//     var gender = document.getElementById("gender").value;
//     var state = document.getElementById("state").value;
//     var tt = document.getElementById("tt").value;
//     var quarter = document.getElementById("quarter").value;
//     var fuchiaID = document.getElementById("fid").value;
//     var Ptype = document.getElementById("Ptype").value;
//     var tt_sub = document.getElementById("tt_sub").value;
//     var  pati={
//            gtReg:gtReg,
//            clinic_code:clinic_code,
//            gid:gid,
//            name:name,
//            father:father,
//            agey:agey,
//            agem:agem,
//            gender:gender,
//            state:state,
//            tt:tt,
//            quarter:quarter,
//            fuchiaID:fuchiaID,
//            Ptype:Ptype,
//            tt_sub:tt_sub,
//          };
//     $.ajaxSetup({
//        headers: {
//            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
//        }
//      });
//         $.ajax({
//              type:'POST',
//              url:"{{route('htyAform')}}",
//              dataType:'json',
//            //  processData:false,
//              contentType:'application/json',
//              data: JSON.stringify(pati),
//              success:function(response){
//                 console.log(response);
//                   alert("Your data has been collected.");
//                   location.reload(true);// to refresh the page
//              }
//             });
//         }
// function send_fup(){
//   let ptFollowup =1;
//   let clinic_code = document.getElementById("clinic_code").value;
//   var name = document.getElementById("name").value;
//   var agey = document.getElementById("agey").value;
//   var agem = document.getElementById("agem").value;
//   var gender = document.getElementById("gender").value;
//   var gid = document.getElementById("gid").value;
//   var fuchiaID = document.getElementById("fid").value;
//   var state = document.getElementById("state").value;
//   var tt = document.getElementById("tt").value;
//   console.log(clinic_code);
//   var  pati={
//         ptFollowup:ptFollowup,
//          clinic_code:clinic_code,
//          name:name,
//          agey:agey,
//          agem:agem,
//          gender:gender,
//          gid:gid,
//          fuchiaID:fuchiaID,
//          state:state,
//          tt:tt
//        };
//   $.ajaxSetup({
//      headers: {
//          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
//      }
//    });
//       $.ajax({
//            type:'POST',
//            url:"{{route('htyAform')}}",
//            dataType:'json',
//          //  processData:false,
//            contentType:'application/json',
//            data: JSON.stringify(pati),
//            success:function(response){
//               console.log(response);
//               alert("Your data has been collected.");
//                 //alert("Your data has been collected.");
//                 location.reload(true);// to refresh the page
//                 document.getElementById('regbutton').disabled=false;
//            }
//         });
// }
// function searchID(){
//   let search_par =1;
//   let Pt_ID = document.getElementById("search_id").value;


//   console.log(clinic_code);
//   var  pati={
//         search_par:search_par,
//          Pt_ID:Pt_ID,
//        };
//   $.ajaxSetup({
//      headers: {
//          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
//      }
//    });
//       $.ajax({
//            type:'POST',
//            url:"{{route('htyAform')}}",
//            dataType:'json',
//          //  processData:false,
//            contentType:'application/json',
//            data: JSON.stringify(pati),
//            success:function(response){
//              console.log(response);
//             if(response[0] != null){
//               document.getElementById("name").value=response[0]["Name"];
//               document.getElementById("agey").value=response[0]["Agey"];
//               document.getElementById("agem").value=response[0]["Agem"];
//               //document.getElementById("gender").value=response[0]["Gender"];
//               document.getElementById("gid").value=response[0]["Pid"];
//               document.getElementById("fid").value=response[0]["FuchiaID"];
//               document.getElementById("state").value=response[0]["Region"];
//             //  document.getElementById("tt_opt").value=response[0]["Township"];
//               $('#gender option').each(function(index) {
//                   $(this).text(response[0]["Gender"]).val(response[0]["Gender"]);
//                 });
//                 $('#tt option').each(function(index) {
//                     $(this).text(response[0]["Township"]).val(response[0]["Township"]);
//                   });
//                   document.getElementById('regbutton').disabled=true;
//                 //  document.getElementById('female_btn').disabled=false;
//               //    document.getElementById('male_btn').disabled=true;
//               //location.reload(true);// to refresh the page
//               console.log(response);
//             }else{
//               alert("You are new");
//               document.getElementById('updateBut').disabled=true;
//               document.getElementById('regbutton').disabled=false;
//               //location.reload(true);
//             }

//            }
//           });
// }
// function region(){
//   //to check state in Region option
//   var state = document.getElementById("state").value;

//     if(state == "Shan(East)"){//
//         var Tcount = 15;
//         const shan_e = [];
//         shan_e[0] = "Kengtung"; shan_e[1] = "Mongkhet"; shan_e[2] = "Mongyang";
//         shan_e[3] = "Mongla";  shan_e[4] = "Monghsat";  shan_e[5] = "Mongping";
//         shan_e[6] = "Mongton"; shan_e[7] = "Tachileik";  shan_e[8] = "Monghpyak";
//         shan_e[9] = "Mongyawng"; shan_e[10] = "Mong Hpen"; shan_e[11] = "Ho Tawng (Ho Tao)";
//         shan_e[12] = "Mong Pawk"; shan_e[13] = "Mong Kar";  shan_e[14] = "Nam Hpai";

//         // to clear option in select township
//         var tt_inner = document.getElementById('tt');
//         if(tt_inner.innerHTML!=null){
//           tt_inner.innerHTML="";
//         }
//         // to show township
//          for (var i = 0; i < Tcount; i++) {
//            // get reference to select element
//            var sel = document.getElementById('tt');
//            // create new option element
//            var opt = document.createElement("option");
//            // create text node to add to option element (opt)
//            opt.appendChild( document.createTextNode(shan_e[i]) );
//            // set value property of opt
//            opt.value = shan_e[i];
//            // add opt to end of select box (sel)
//            sel.appendChild(opt);
//          }
//        }
//     if(state == "Sagaing"){//
//       var Tcount = 34;
//       const sagaing = [];
//       sagaing[0] = "Sagaing"; sagaing[1] = "Myinmu"; sagaing[2] = "Myaung";
//       sagaing[3] = "Shwebo";  sagaing[4] = "Khin-U";  sagaing[5] = "Wetlet";
//       sagaing[6] = "Kanbalu"; sagaing[7] = "Kyunhla";  sagaing[8] = "Ye-U";
//       sagaing[9] = "Tabayin"; sagaing[10] = "Taze"; sagaing[11] = "Monywa";
//       sagaing[12] = "Budalin";sagaing[13] = "Ayadaw";sagaing[14] = "Chaung-U";
//       sagaing[15] = "Yinmarbin";  sagaing[16] = "Kani"; sagaing[17] = "Salingyi";
//       sagaing[18] = "Pale"; sagaing[19] = "Katha"; sagaing[20] = "Indaw";
//       sagaing[21] = "Tigyaing";  sagaing[22] = "Banmauk"; sagaing[23] = "Kawlin";
//       sagaing[24] = "Wuntho"; sagaing[25] = "Pinlebu";sagaing[26] = "Kale";
//       sagaing[27] = "Kalewa";sagaing[28] = "Mingin"; sagaing[29] = "Tamu";
//       sagaing[30] = "Mawlaik";sagaing[31] = "Paungbyin";sagaing[32] = "Hkamti";
//       sagaing[33] = "Homalin"; sagaing[34] = "Lay Shi";  sagaing[35] = "Lahe";
//        sagaing[36] = "Nanyun";

//       // to clear option in select township
//       var tt_inner = document.getElementById('tt');
//       if(tt_inner.innerHTML!=null){
//         tt_inner.innerHTML="";
//       }
//       // to show township
//        for (var i = 0; i < Tcount; i++) {
//          // get reference to select element
//          var sel = document.getElementById('tt');
//          // create new option element
//          var opt = document.createElement("option");
//          // create text node to add to option element (opt)
//          opt.appendChild( document.createTextNode(sagaing[i]) );
//          // set value property of opt
//          opt.value = sagaing[i];
//          // add opt to end of select box (sel)
//          sel.appendChild(opt);
//        }
//       }
//     if(state == "Rakhine"){//
//       var Tcount = 17;
//       const rakhine = [];
//       rakhine[0] = "Sittwe"; rakhine[1] = "Ponnagyun"; rakhine[2] = "Mrauk-U";
//       rakhine[3] = "Kyauktaw";  rakhine[4] = "Minbya";  rakhine[5] = "Myebon";
//       rakhine[6] = "Pauktaw"; rakhine[7] = "Rathedaung";  rakhine[8] = "Maungdaw";
//       rakhine[9] = "Buthidaung"; rakhine[10] = "Kyaukpyu"; rakhine[11] = "Munaung";
//       rakhine[12] = "Ramree"; rakhine[13] = "Ann";rakhine[14] = "Thandwe";rakhine[15] = "Toungup";
//       rakhine[16] = "Gwa";
//       // to clear option in select township
//       var tt_inner = document.getElementById('tt');
//       if(tt_inner.innerHTML!=null){
//         tt_inner.innerHTML="";
//       }
//       // to show township
//        for (var i = 0; i < Tcount; i++) {
//          // get reference to select element
//          var sel = document.getElementById('tt');
//          // create new option element
//          var opt = document.createElement("option");
//          // create text node to add to option element (opt)
//          opt.appendChild( document.createTextNode(rakhine[i]) );
//          // set value property of opt
//          opt.value = rakhine[i];
//          // add opt to end of select box (sel)
//          sel.appendChild(opt);
//        }
//       }

//   //Nay Pyi Taw
//     if(state == "Nay Pyi Taw"){//
//       var Tcount = 8;
//       const naypyitaw = [];
//       naypyitaw[0] = "Zay Yar Thi Ri"; naypyitaw[1] = "Za Bu Thi Ri"; naypyitaw[2] = "Tatkon";
//       naypyitaw[3] = "Det Khi Na Thi Ri";  naypyitaw[4] = "Poke Ba Thi Ri";  naypyitaw[5] = "Pyinmana";
//       naypyitaw[6] = "Lewe"; naypyitaw[7] = "Oke Ta Ra Thi Ri";
//       // to clear option in select township
//       var tt_inner = document.getElementById('tt');
//       if(tt_inner.innerHTML!=null){
//         tt_inner.innerHTML="";
//       }
//       // to show township
//        for (var i = 0; i < Tcount; i++) {
//          // get reference to select element
//          var sel = document.getElementById('tt');
//          // create new option element
//          var opt = document.createElement("option");
//          // create text node to add to option element (opt)
//          opt.appendChild( document.createTextNode(naypyitaw[i]) );
//          // set value property of opt
//          opt.value = naypyitaw[i];
//          // add opt to end of select box (sel)
//          sel.appendChild(opt);
//        }
//     }

//   //Mon
//     if(state == "Mon"){//
//         var Tcount = 10;
//         const kachin = [];
//         mon[0] = "Mawlamyine"; mon[1] = "Kyaikmaraw"; mon[2] = "Chaungzon";
//         mon[3] = "Thanbyuzayat";  mon[4] = "Mudon";  mon[5] = "Ye";
//         mon[6] = "Thaton"; mon[7] = "Paung";  mon[8] = "Kyaikto";
//         mon[9] = "Bilin";
//         // to clear option in select township
//         var tt_inner = document.getElementById('tt');
//         if(tt_inner.innerHTML!=null){
//           tt_inner.innerHTML="";
//         }
//         // to show township
//          for (var i = 0; i < Tcount; i++) {
//            // get reference to select element
//            var sel = document.getElementById('tt');
//            // create new option element
//            var opt = document.createElement("option");
//            // create text node to add to option element (opt)
//            opt.appendChild( document.createTextNode(mon[i]) );
//            // set value property of opt
//            opt.value = mon[i];
//            // add opt to end of select box (sel)
//            sel.appendChild(opt);
//          }
//   }

//   //Mandalay
//     if(state == "Mandalay"){
//           var Tcount = 28;
//           const mandalay = [];
//           mandalay[0] = "Aungmyaythazan"; mandalay[1] = "Chanayethazan"; mandalay[2] = "Mahaaungmyay";
//           mandalay[3] = "Chanmyathazi";  mandalay[4] = "Pyigyitagon";  mandalay[5] = "Amarapura";
//           mandalay[6] = "Patheingyi"; mandalay[7] = "Pyinoolwin";  mandalay[8] = "Madaya";
//           mandalay[9] = "Singu"; mandalay[10] = "Mogoke"; mandalay[11] = "Thabeikkyin";
//           mandalay[12] = "Kyaukse"; mandalay[13] = "Sintgaing";  mandalay[14] = "Myittha";
//           mandalay[15] = "Tada-U";  mandalay[16] = "Myingyan"; mandalay[17] = "Taungtha";
//           mandalay[18] = "Natogyi"; mandalay[19] = "Kyaukpadaung"; mandalay[20] = "Ngazun";
//           mandalay[21] = "Nyaung-U";  mandalay[22] = "Yamethin"; mandalay[23] = "Pyawbwe";
//           mandalay[24] = "Meiktila"; mandalay[25] = "Mahlaing";mandalay[26] = "Thazi";
//           mandalay[27] = "Wundwin";

//           // to clear option in select township
//           var tt_inner = document.getElementById('tt');
//           if(tt_inner.innerHTML!=null){
//             tt_inner.innerHTML="";
//           }
//           // to show township
//            for (var i = 0; i < Tcount; i++) {
//              // get reference to select element
//              var sel = document.getElementById('tt');
//              // create new option element
//              var opt = document.createElement("option");
//              // create text node to add to option element (opt)
//              opt.appendChild( document.createTextNode(mandalay[i]) );
//              // set value property of opt
//              opt.value = mandalay[i];
//              // add opt to end of select box (sel)
//              sel.appendChild(opt);
//            }
//         }

//   //Magway
//     if(state == "Magway"){
//         var Tcount = 26;
//         const magway = [];
//         magway[0] = "Magway"; magway[1] = "Yenangyaung"; magway[2] = "Chauk";
//         magway[3] = "Taungdwingyi";  magway[4] = "Myothit";  magway[5] = "Natmauk";
//         magway[6] = "Minbu"; magway[7] = "Pwintbyu";  magway[8] = "Ngape";
//         magway[9] = "Lemyethna"; magway[10] = "Salin"; magway[11] = "Sidoktaya";
//         magway[12] = "Thayet"; magway[13] = "Minhla";  magway[14] = "Mindon";
//         magway[15] = "Kamma";  magway[16] = "Aunglan"; magway[17] = "Sinbaungwe";
//         magway[18] = "Pakokku"; magway[19] = "Yesagyo"; magway[20] = "Myaing";
//         magway[21] = "Pauk";  magway[22] = "Seikphyu"; magway[23] = "Gangaw";
//         magway[24] = "Tilin"; magway[25] = "Saw";
//         // to clear option in select township
//         var tt_inner = document.getElementById('tt');
//         if(tt_inner.innerHTML!=null){
//           tt_inner.innerHTML="";
//         }
//         // to show township
//          for (var i = 0; i < Tcount; i++) {
//            // get reference to select element
//            var sel = document.getElementById('tt');
//            // create new option element
//            var opt = document.createElement("option");
//            // create text node to add to option element (opt)
//            opt.appendChild( document.createTextNode(magway[i]) );
//            // set value property of opt
//            opt.value = magway[i];
//            // add opt to end of select box (sel)
//            sel.appendChild(opt);
//          }
//   }

//     if(state == "Kayin"){//
//         var Tcount = 7;
//         const kayin = [];
//         kayin[0] = "Hpa-An"; kayin[1] = "Hlaingbwe"; kayin[2] = "Hpapun";
//         kayin[3] = "Thandaunggyi";  kayin[4] = "Myawaddy";  kayin[5] = "Kawkareik";
//         kayin[6] = "Kyainseikgyi";
//         // to clear option in select township
//         var tt_inner = document.getElementById('tt');
//         if(tt_inner.innerHTML!=null){
//           tt_inner.innerHTML="";
//         }
//         // to show township
//          for (var i = 0; i < Tcount; i++) {
//            // get reference to select element
//            var sel = document.getElementById('tt');
//            // create new option element
//            var opt = document.createElement("option");
//            // create text node to add to option element (opt)
//            opt.appendChild( document.createTextNode(kayin[i]) );
//            // set value property of opt
//            opt.value = kayin[i];
//            // add opt to end of select box (sel)
//            sel.appendChild(opt);
//          }
//   }

//     if(state == "Kayah"){//
//       var Tcount = 7;
//       const kayah = [];
//       kayah[0] = "Loikaw"; kayah[1] = "Demoso"; kayah[2] = "Hpruso";
//       kayah[3] = "Shadaw";  kayah[4] = "Bawlake";  kayah[5] = "Hpasawng";
//       kayah[6] = "Mese";
//       // to clear option in select township
//       var tt_inner = document.getElementById('tt');
//       if(tt_inner.innerHTML!=null){
//         tt_inner.innerHTML="";
//       }
//       // to show township
//        for (var i = 0; i < Tcount; i++) {
//          // get reference to select element
//          var sel = document.getElementById('tt');
//          // create new option element
//          var opt = document.createElement("option");
//          // create text node to add to option element (opt)
//          opt.appendChild( document.createTextNode(kayah[i]) );
//          // set value property of opt
//          opt.value = kayah[i];
//          // add opt to end of select box (sel)
//          sel.appendChild(opt);
//        }
//   }

//     if(state == "Kachin"){//
//         var Tcount = 17;
//         const kachin = [];
//         kachin[0] = "Myitkyina"; kachin[1] = "Waingmaw"; kachin[2] = "Injangyang";
//         kachin[3] = "Tanai";  kachin[4] = "Chipwi";  kachin[5] = "Tsawlaw";
//         kachin[6] = "Mohnyin"; kachin[7] = "Mogaung";  kachin[8] = "Hpakant";
//         kachin[9] = "Bhamo"; kachin[10] = "Momauk"; kachin[11] = "Mansi";
//         kachin[12] = "Puta-O"; kachin[13] = "Sumprabum";  kachin[14] = "Machanbaw";
//         kachin[15] = "Nawngmun";  kachin[16] = "Khaunglanhpu";
//         // to clear option in select township
//         var tt_inner = document.getElementById('tt');
//         if(tt_inner.innerHTML!=null){
//           tt_inner.innerHTML="";
//         }
//         // to show township
//          for (var i = 0; i < Tcount; i++) {
//            // get reference to select element
//            var sel = document.getElementById('tt');
//            // create new option element
//            var opt = document.createElement("option");
//            // create text node to add to option element (opt)
//            opt.appendChild( document.createTextNode(kachin[i]) );
//            // set value property of opt
//            opt.value = kachin[i];
//            // add opt to end of select box (sel)
//            sel.appendChild(opt);
//          }
//        }

//     if(state == "Chin"){
//         var Tcount = 9;
//         const chin = [];
//         chin[0] = "Falam"; chin[1] = "Hakha"; chin[2] = "Thantlang";
//         chin[3] = "Tedim";  chin[4] = "Tonzang";  chin[5] = "Mindat";
//         chin[6] = "Matupi"; chin[7] = "Kanpetlet";  chin[8] = "Paletwa";
//         // to clear option in select township
//         var tt_inner = document.getElementById('tt');
//         if(tt_inner.innerHTML!=null){
//           tt_inner.innerHTML="";
//         }
//         // to show township
//          for (var i = 0; i < Tcount; i++) {
//            // get reference to select element
//            var sel = document.getElementById('tt');
//            // create new option element
//            var opt = document.createElement("option");
//            // create text node to add to option element (opt)
//            opt.appendChild( document.createTextNode(chin[i]) );
//            // set value property of opt
//            opt.value = chin[i];
//            // add opt to end of select box (sel)
//            sel.appendChild(opt);
//          }
//        }

//     if(state == "Bago(West)"){//
//       var Tcount = 14;
//       const Bago_E = [];
//       Bago_E[0] = "Pyay"; Bago_E[1] = "Paukkhaung"; Bago_E[2] = "Padaung";
//       Bago_E[3] = "Paungde";  Bago_E[4] = "Thegon";  Bago_E[5] = "Shwedaung";
//       Bago_E[6] = "Thayarwady"; Bago_E[7] = "Letpadan";  Bago_E[8] = "Minhla";
//       Bago_E[9] = "Okpho"; Bago_E[10] = "Zigon"; Bago_E[11] = "Nattalin";
//       Bago_E[12] = "Monyo"; Bago_E[13] = "Gyobingauk";
//       // to clear option in select township
//       var tt_inner = document.getElementById('tt');
//       if(tt_inner.innerHTML!=null){
//         tt_inner.innerHTML="";
//       }
//       // to show township
//        for (var i = 0; i < Tcount; i++) {
//          // get reference to select element
//          var sel = document.getElementById('tt');
//          // create new option element
//          var opt = document.createElement("option");
//          // create text node to add to option element (opt)
//          opt.appendChild( document.createTextNode(Bago_E[i]) );
//          // set value property of opt
//          opt.value = Bago_E[i];
//          // add opt to end of select box (sel)
//          sel.appendChild(opt);
//        }
//       }
//     //Ayeyarwady
//     if(state == "Ayeyarwady"){
//       var Tcount = 26;
//       const Ayeyar = [];
//       Ayeyar[0] = "Pathein"; Ayeyar[1] = "Kangyidaunt"; Ayeyar[2] = "Thabaung";
//       Ayeyar[3] = "Ngapudaw";  Ayeyar[4] = "Kyonpyaw";  Ayeyar[5] = "Yegyi";
//       Ayeyar[6] = "Kyaunggon"; Ayeyar[7] = "Hinthada";  Ayeyar[8] = "Zalun";
//       Ayeyar[9] = "Lemyethna"; Ayeyar[10] = "Myanaung"; Ayeyar[11] = "Kyangin";
//       Ayeyar[12] = "Ingapu"; Ayeyar[13] = "Myaungmya";  Ayeyar[14] = "Einme";
//       Ayeyar[15] = "Labutta";  Ayeyar[16] = "Wakema"; Ayeyar[17] = "Mawlamyinegyun";
//       Ayeyar[18] = "Maubin"; Ayeyar[19] = "Pantanaw"; Ayeyar[20] = "Nyaungdon";
//       Ayeyar[21] = "Danubyu";  Ayeyar[22] = "Pyapon"; Ayeyar[23] = "Bogale";
//       Ayeyar[24] = "Kyaiklat"; Ayeyar[25] = "Dedaye";
//       // to clear option in select township
//       var tt_inner = document.getElementById('tt');
//       if(tt_inner.innerHTML!=null){
//         tt_inner.innerHTML="";
//       }
//       // to show township
//        for (var i = 0; i < Tcount; i++) {
//          // get reference to select element
//          var sel = document.getElementById('tt');
//          // create new option element
//          var opt = document.createElement("option");
//          // create text node to add to option element (opt)
//          opt.appendChild( document.createTextNode(Ayeyar[i]) );
//          // set value property of opt
//          opt.value = Ayeyar[i];
//          // add opt to end of select box (sel)
//          sel.appendChild(opt);
//        }
//   }
//     //Bago(east)
//     if(state == "Bago(East)"){
//       var Tcount = 14;
//       const bago = [];
//         bago[0] = "Bago";  bago[1] = "Thanatpin"; bago[2] = "Kawa";
//         bago[3] = "Waw"; bago[4] = "Nyaunglebin"; bago[5] = "Kyauktaga";
//         bago[6] = "Daik-U";  bago[7] = "Shwegyin";  bago[8] = "Taungoo";
//         bago[9] = "Yedashe"; bago[10] = "Kyaukkyi"; bago[11] = "Phyu";
//         bago[12] = "Oktwin"; bago[13] = "Htantabin";
//         // to clear option in select township
//         var tt_inner = document.getElementById('tt');
//         if(tt_inner.innerHTML!=null){
//           tt_inner.innerHTML="";
//         }
//       // to show township
//        for (var i = 0; i < Tcount; i++) {
//          // get reference to select element
//          var sel = document.getElementById('tt');
//          // create new option element
//          var opt = document.createElement("option");
//          // create text node to add to option element (opt)
//          opt.appendChild( document.createTextNode(bago[i]) );
//          // set value property of opt
//          opt.value = bago[i];
//          // add opt to end of select box (sel)
//          sel.appendChild(opt);
//        }
//      }
//   if(state == "Yangon"){
//          var Tcount = 45;
//          const yangon = [];
//           yangon[0] ="Insein";yangon[1] ="MingalarDon" ;yangon[2] = "Hmawbi";
//           yangon[3] ="Hlegu";yangon[4] ="Taikkyi" ;yangon[5]="Htantabin" ;
//           yangon[6] ="Shwepyithar" ;yangon[7] = "Hlaingtharya";yangon[8] ="Thingangyun" ;
//           yangon[9] = "Yankin";yangon[10] = "South Okkalapa";yangon[11] = "North Okkalapa";
//           yangon[12] = "Thaketa";yangon[13] ="Dawbon";yangon[14] ="Tamwe" ;
//           yangon[15] = "Pazundaung";yangon[16] = "Botahtaung";yangon[17]  ="Dagon Myothit (South)" ;
//           yangon[18]  = "Dagon Myothit (North)";yangon[19] ="Dagon Myothit (East)";
//           yangon[20] = "Dagon Myothit (Seikkan)";yangon[21]= "Mingalartaungnyunt";
//           yangon[22] = "Thanlyin";yangon[23] = "Kyauktan";yangon[24] = "Thongwa";
//           yangon[25] = "Kayan";yangon[26] = "Twantay";yangon[27] = "Kawhmu";
//           yangon[28] = "Kungyangon";yangon[29] = "Dala";yangon[30] = "Seikgyikanaungto";
//           yangon[31] = "Cocokyun";yangon[32] = "Kyauktada";yangon[33] = "Pabedan";
//           yangon[34] = "Lanmadaw";yangon[35] ="Latha" ;yangon[36] = "Ahlone";
//           yangon[37] = "Kyeemyindaing";yangon[38] ="Sanchaung" ;yangon[39] = "Hlaing";
//           yangon[40] = "Kamaryut";yangon[41] = "Mayangone";yangon[42] = "Dagon";
//           yangon[43] = "Bahan";yangon[44] = "Seikkan";
//           // to clear option in select township
//           var tt_inner = document.getElementById('tt');
//           if(tt_inner.innerHTML!=null){
//             tt_inner.innerHTML="";
//           }
//           // to show township
//           for (var i = 0; i < Tcount; i++) {
//             // get reference to select element
//             var sel = document.getElementById('tt');
//             // create new option element
//             var opt = document.createElement("option");
//             // create text node to add to option element (opt)
//             opt.appendChild( document.createTextNode(yangon[i]) );
//             // set value property of opt
//             opt.value = yangon[i];
//             // add opt to end of select box (sel)
//             sel.appendChild(opt);
//           }
//        }
//      }
// function Psub(){
//     var ptCat = document.getElementById("Ptype").value;
//     if(ptCat == "PHA"){//
//                var Tcount = 2;
//                const ptype_sub = [];
//                ptype_sub[0] = "OPD"; ptype_sub[1] = "DC";

//                // to clear option in select township
//                var tt_inner = document.getElementById('tt_sub');
//                if(tt_inner.innerHTML!=null){
//                  tt_inner.innerHTML="";
//                }
//                // to show township
//                 for (var i = 0; i < Tcount; i++) {
//                   // get reference to select element
//                   var sel = document.getElementById('tt_sub');
//                   // create new option element
//                   var opt = document.createElement("option");
//                   // create text node to add to option element (opt)
//                   opt.appendChild( document.createTextNode(ptype_sub[i]) );
//                   // set value property of opt
//                   opt.value = ptype_sub[i];
//                   // add opt to end of select box (sel)
//                   sel.appendChild(opt);
//                 }
//               }
//     if(ptCat == "ART"){//
//                          var Tcount = 2;
//                          const ptype_sub = [];
//                          ptype_sub[0] = "OPD"; ptype_sub[1] = "DC";

//                          // to clear option in select township
//                          var tt_inner = document.getElementById('tt_sub');
//                          if(tt_inner.innerHTML!=null){
//                            tt_inner.innerHTML="";
//                          }
//                          // to show township
//                           for (var i = 0; i < Tcount; i++) {
//                             // get reference to select element
//                             var sel = document.getElementById('tt_sub');
//                             // create new option element
//                             var opt = document.createElement("option");
//                             // create text node to add to option element (opt)
//                             opt.appendChild( document.createTextNode(ptype_sub[i]) );
//                             // set value property of opt
//                             opt.value = ptype_sub[i];
//                             // add opt to end of select box (sel)
//                             sel.appendChild(opt);
//                           }
//     }
//     if(ptCat == "STI"){//
//                          var Tcount = 3;
//                          const ptype_sub = [];
//                          ptype_sub[0] = "ANC"; ptype_sub[1] = "SW";ptype_sub[2] = "MSM";

//                          // to clear option in select township
//                          var tt_inner = document.getElementById('tt_sub');
//                          if(tt_inner.innerHTML!=null){
//                            tt_inner.innerHTML="";
//                          }
//                          // to show township
//                           for (var i = 0; i < Tcount; i++) {
//                             // get reference to select element
//                             var sel = document.getElementById('tt_sub');
//                             // create new option element
//                             var opt = document.createElement("option");
//                             // create text node to add to option element (opt)
//                             opt.appendChild( document.createTextNode(ptype_sub[i]) );
//                             // set value property of opt
//                             opt.value = ptype_sub[i];
//                             // add opt to end of select box (sel)
//                             sel.appendChild(opt);
//                           }
//     }
//     if(ptCat == "FC"){//
//                          var Tcount = 2;
//                          const ptype_sub = [];
//                          ptype_sub[0] = "DC"; ptype_sub[1] = "ATFP";

//                          // to clear option in select township
//                          var tt_inner = document.getElementById('tt_sub');
//                          if(tt_inner.innerHTML!=null){
//                            tt_inner.innerHTML="";
//                          }
//                          // to show township
//                           for (var i = 0; i < Tcount; i++) {
//                             // get reference to select element
//                             var sel = document.getElementById('tt_sub');
//                             // create new option element
//                             var opt = document.createElement("option");
//                             // create text node to add to option element (opt)
//                             opt.appendChild( document.createTextNode(ptype_sub[i]) );
//                             // set value property of opt
//                             opt.value = ptype_sub[i];
//                             // add opt to end of select box (sel)
//                             sel.appendChild(opt);
//                           }
//     }
//     if(ptCat == "Other"){//
//                          var Tcount = 9;
//                          const ptype_sub = [];
//                          ptype_sub[0] = "PMTCT"; ptype_sub[1] = "TB";ptype_sub[2] = "FP";
//                          ptype_sub[3] = "IDU"; ptype_sub[4] = "<15";ptype_sub[5] = "General";
//                          ptype_sub[6] = "Hypertension"; ptype_sub[7] = "DM";ptype_sub[8] = "Fever";

//                          // to clear option in select township
//                          var tt_inner = document.getElementById('tt_sub');
//                          if(tt_inner.innerHTML!=null){
//                            tt_inner.innerHTML="";
//                          }
//                          // to show township
//                           for (var i = 0; i < Tcount; i++) {
//                             // get reference to select element
//                             var sel = document.getElementById('tt_sub');
//                             // create new option element
//                             var opt = document.createElement("option");
//                             // create text node to add to option element (opt)
//                             opt.appendChild( document.createTextNode(ptype_sub[i]) );
//                             // set value property of opt
//                             opt.value = ptype_sub[i];
//                             // add opt to end of select box (sel)
//                             sel.appendChild(opt);
//                           }
//     }
//     if(ptCat == "NCD"){//
//                          var Tcount = 2;
//                          const ptype_sub = [];
//                          ptype_sub[0] = "Hiv Pos Hypertension"; ptype_sub[1] = "His Pos DM";

//                          // to clear option in select township
//                          var tt_inner = document.getElementById('tt_sub');
//                          if(tt_inner.innerHTML!=null){
//                            tt_inner.innerHTML="";
//                          }
//                          // to show township
//                           for (var i = 0; i < Tcount; i++) {
//                             // get reference to select element
//                             var sel = document.getElementById('tt_sub');
//                             // create new option element
//                             var opt = document.createElement("option");
//                             // create text node to add to option element (opt)
//                             opt.appendChild( document.createTextNode(ptype_sub[i]) );
//                             // set value property of opt
//                             opt.value = ptype_sub[i];
//                             // add opt to end of select box (sel)
//                             sel.appendChild(opt);
//                           }
//     }
//  }
