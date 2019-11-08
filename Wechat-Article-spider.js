function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//document.body.style.zoom = "80%";
//document.querySelector('#myform > div.js_inner_main.biz_link_form > div.js_link_type.js_link_type_2.search_article_tab > div.js_article_content.frm_control_group > div > div > div > div.inner > div.info_bd.tc').style.max-height = '1200px';
let Pagebar_id = document.querySelector('#myform > div.js_inner_main.biz_link_form > div.js_link_type.js_link_type_2.search_article_tab > div.js_article_content.frm_control_group > div > div > div > div.js_article_pagebar.pagination_wrp > div').id;
while(document.querySelector('#'+Pagebar_id+' > span.page_nav_area > span > label:nth-child(1)') !== '106'){
  
  let content_list = document.querySelector('#myform > div.js_inner_main.biz_link_form > div.js_link_type.js_link_type_2.search_article_tab > div.js_article_content.frm_control_group > div > div > div > div.inner > div.info_bd.tc > div > ul').querySelectorAll('li');
  content_list.forEach(function(element) {
    console.log(element.querySelector('label > span').innerText+' '+element.querySelector('label > span.lbl_content > a').innerText+' '+console.log(element.querySelector('label > span.lbl_content > a').href));
  });
  Pagebar_id = document.querySelector('#myform > div.js_inner_main.biz_link_form > div.js_link_type.js_link_type_2.search_article_tab > div.js_article_content.frm_control_group > div > div > div > div.js_article_pagebar.pagination_wrp > div').id;
  let next_page_btn = document.querySelector('#'+Pagebar_id+' > span.page_nav_area > a.btn.page_next');
  next_page_btn.click();
  await sleep(10000+Math.random()*5000);
  Pagebar_id = document.querySelector('#myform > div.js_inner_main.biz_link_form > div.js_link_type.js_link_type_2.search_article_tab > div.js_article_content.frm_control_group > div > div > div > div.js_article_pagebar.pagination_wrp > div').id;
}