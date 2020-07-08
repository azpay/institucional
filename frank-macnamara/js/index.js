/**
 * Update span counter value
 */
async function _updateCounterValue() {
  const data = await _getUsersData();
  if (data) {
    _getFieldById('counter-text').innerHTML = i18next.t('people_waiting');
    _getFieldById('counter-span').innerHTML = 1000 + data;
  }
}

// Set initial value
_updateCounterValue();

/**
 * Handle all needs of get data from form, display succes message
 * send it to Aidax and Freshdesk
 * import sendContactData from aidax.js
 * import getFormData from form.js
 */
const handleContactForm = () => resetForm(sendContactData(getFormData()));

// // Interval to get it and update DOM element
// setInterval(() => {
//   _updateCounterValue();
// }, 6000);
(function( $, window )
{
  /**
   * Set the landing page to a state that user can`t send e-mail
   */
  function _onSubmitEmail() {
    console.info('E-mail saved');
    // Disabled all buttons
    const buttons = document.querySelectorAll('[type="buton"]');
    if (buttonSubmitEmail) buttonSubmitEmail[ 0 ].disabled = true;
      // for (let index = 0; index < buttons.length; index++) {
      //   buttons[index].disabled = true;
      // }
    // }
    if (email) email[ 0 ].disabled = true;
    // Add text to you-label
    // _getFieldById('you-span').innerHTML = 'Você +';
  }

  /**
   * Get e-mail from email field and send it to Aidax
   * @param {string} id of email field
   */
  let lockButtonFlag = false;
  const email = $('#email-field').keyup(function(evt)
  {
    if (evt.keyCode == 13) buttonSubmitEmail.trigger( 'mouseup' );
  });

  //////////////////// Contact ////////////////////
  var buttonSubmitContact = $('#contactSubmit').mouseup(handleContactForm)
  //   function()
  // {
  //   const inputNameValue = contact_name.val();
  //   const inputEmailValue = contact_email.val();
  //   const inputPhoneValue = contact_phone.val();
  //   const inputExtension = contact_extension.val();
  //   const textMessage = contact_message.val();

  //   if (inputEmailValue) {
  //     const emailRegExp = new RegExp(/[a-zA-Z0-9\.\_]+\@[a-zA-Z0-9\.\_]+\.[a-zA-Z0-9]{1,10}$/);
  //   }
  // });

  //////////////////// Signup ////////////////////

  var buttonSubmitEmail = $('#button-addon2').mouseup(function()
  {
    if (lockButtonFlag) return;
    const inputEmailValue = email.val();
    if (inputEmailValue) {
      const checkboxValue = _getFieldById('checkbox');
      const emailRegExp = new RegExp(/[a-zA-Z0-9\.\_]+\@[a-zA-Z0-9\.\_]+\.[a-zA-Z0-9]{1,10}$/);
      if (emailRegExp.test(inputEmailValue)) {
      // if () {
        sendUserData(inputEmailValue, checkboxValue.checked);
        lockButtonFlag = true;

      $( this ).attr( 'disabled', true );
    // for (let index = 0; index < buttons.length; index++) {
    //   buttons[index].disabled = true;
    // }
  // }
      if (email) email[ 0 ].disabled = true;
      }
      else console.log('email inválido');
      // } else {
      //   throw new Error('Pass a valid element id');
      // }
    }
  });
  function handleButtonClick(id = null) {
    if (lockButtonFlag) return;
    const inputEmailValue = _getFieldById(id).value;
    if (inputEmailValue) {
      const checkboxValue = _getFieldById('checkbox');

      if (id) {
        sendUserData(inputEmailValue, checkboxValue.checked, _onSubmitEmail);
        lockButtonFlag = true;
      } else {
        throw new Error('Pass a valid element id');
      }
    }
  }

  window.handleButtonClick = handleButtonClick;
  // $( document ).ready(function(){
    
  const hash = window.location.href.split(/\?lang\=/)[ 1 ];
  if (hash) handleLanguageChanging( hash );
  // });
})( $, window );


