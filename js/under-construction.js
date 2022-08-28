
const $ = (selector)=>document.querySelector(selector);

window.onload = ()=>{
  
  const params = new URLSearchParams(window.location.search)
  
  for (const [key, value] of params) {
    if( key == 'logo') {
      if(!!value) $('#logo').setAttribute('src', value);
      $('#'+key).style.display = 'inline-block';
      continue
    };
    if(!!value){
      $('#'+key).innerText = value;
      $('#'+key).style.display = 'block';
    }
  }

  const tel = $('#tel').innerText;
  if(!!tel) {
    $('#tel').setAttribute('href', 'tel:'+tel)
    $('#tel').style.display = 'block';
  }

  const email = $('#email').innerText;
  if(!!email) {
    $('#email').setAttribute('href', 'mailto:'+email)
    $('#email').style.display = 'block';
  };

}