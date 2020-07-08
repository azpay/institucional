// Connect to Aidax function
// var AIDAX_CLIENT_KEY="d3373143-995b-4964-853f-d5a7c2c20fb8";!function(e,t){var a=["user","query","session","event","delete_tags","whois","ready","toggle_debug"],r=(e.ax=e.ax||function(){return e.ax.factory("event").apply(this,arguments)})._container=[],n=e.ax.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments);return r.unshift({method:t,args:a}),e.ax}};e.ax.is_unique=function(){return-1===t.cookie.indexOf("ax_unique=")};for(var i=0;i<a.length;i++){var o=a[i];e.ax[o]=n(o)}var c=t.createElement("script");c.type="text/javascript",c.async=!0,c.src="//api.aidax.com.br/aidax.js";var s=t.getElementsByTagName("script")[0];s.parentNode.insertBefore(c,s)}(window,document);
var AIDAX_CLIENT_KEY="d3373143-995b-4964-853f-d5a7c2c20fb8";!function(i,e){var r=["user","query","session","event","delete_tags","whois","toggle_debug"],o=(i.ax=i.ax||function(){return i.ax.factory("event").apply(this,arguments)})._container=[],t=i.ax.factory=function(a){return function(){var n=arguments;if("function"==typeof Promise)return new Promise(function(e,r){var t=Array.prototype.slice.call(n);return o.unshift({method:a,args:t,resolve:e,reject:r}),i.ax})}};i.ax.is_unique=function(){return-1===e.cookie.indexOf("ax_unique=")};for(var n=0;n<r.length;n++){var a=r[n];i.ax[a]=t(a)}var c=e.createElement("script");c.type="text/javascript",c.async=!0,c.src="//api.aidax.com.br/ax.js";var s=e.getElementsByTagName("script")[0];s.parentNode.insertBefore(c,s)}(window,document);
/**
 * 
 * @param {string} email user email
 * @param {boolean} option true or false
 */
function sendUserData(email, option) {

  ax.user({
    id: email,
    properties: {
      optin: option,
    }
  }).then(() => {
    ax.event({name:'subscribe'});
    ax.session({ has_subscribe: true });
    console.log('E-mail sent to AIDAX');
  }).catch(e => {
    console.error('Aidax error', e);
  });
}


/**
 * Send the contact data to Aidax
 * @param {String} name costumer name
 * @param {String} email costumer email 
 * @param {String} phone costumer phone 
 * @param {String} extension costumer extension 
 * @param {String} message costumer message 
 */
async function sendContactData({
  name, email,
  phone, extension,
  message,
}) {
  const properties = {
    name,
    email,
    phone,
    extension,
    message,
    emailAtendimento: 'atendimento@azpay.com.br',
    subject: `Contato recebido de ${name}`,
    status: 1,
    priority: 2,
  };
  console.log(properties);
  return await ax.event({
    name: 'contact', // obligatory
    properties,
      // emailAtendimento: 'atendimento@azpay.com.br',
      // subject: `Contato recebido de ${name}`,
      // description: `Contato recebido da landing page.
      // Mensagem recebida: ${message}
      // Extensão: ${extension}

      // Dados de contato:
      //   nome: ${name}
      //   E-mail: ${email}
      //   Telefone: ${phone}
      // `,
      // status: 1,
      // priority: 2,
    // } 
    // custom properties
  }).then(() => {
    ax.session({ has_contact: true })
    console.log('Contact sent to AIDAX');
    return true;
  }).catch(e => {
    // Todo - If error should maintain data ant try again later
    console.error('Aidax error', e);
    return false;
  });
}