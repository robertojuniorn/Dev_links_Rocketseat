function toggleMode() {
  const html = document.body

  //A primeira opção
//   if(html.classList.contains('light')){
//     html.classList.remove('light')
//   }else{
//     html.classList.add('light')
//   }

// Segunda opção
  html.classList.toggle('light')
 }