document.addEventListener('DOMContentLoaded',()=>{
        //-----REGISTER----------
    //Show and Hide Button variables

    console.log('DOM fully loaded and parsed');

    const buttonRegister = document.querySelector('.passwordMessage #hideAndShow');
    const passwordInputRegister = document.querySelector('.containerRegisterForm .formContainer #passwordInputReg');

    //Register Button variables
    const email=document.querySelector('.formContainer #email')
    const phoneNumber=document.querySelector('.formContainer #phoneNumber')
    const username=document.querySelector('.formContainer #username')
    const fullName=document.querySelector('.formContainer #fullName')
    const buttonRegisterFinal=document.querySelector(' .buttonContainerRegister #buttonRegisterCrunchy')
    const barLeft=document.getElementById('bar1')
    const barMid=document.getElementById('bar2')
    const barRight=document.getElementById('bar3')
    const message=document.getElementById('message')
    
    if (!buttonRegister || !passwordInputRegister || !email || !phoneNumber || !username || !fullName || !buttonRegisterFinal) {
        console.error('One or more elements not found:', {
            buttonRegister, passwordInputRegister, email, phoneNumber, username, fullName, buttonRegisterFinal
        });
        return;
    }


    function barFunction(){
        if(passwordInputRegister.value){
            if(passwordInputRegister.value.length<7 && passwordInputRegister.value.length>=1){
                //Weak

                barLeft.classList.add('redBar')
                barMid.classList.add('redBar')
                barRight.classList.add('redBar')
                passwordInputRegister.style.borderBottom ='2px solid #EF4323'
                message.classList.add('messageRed')
                message.textContent='Use at least 6 characters, do not use empty spaces'

                barLeft.classList.remove('grayBar')
                barMid.classList.remove('grayBar')
                barRight.classList.remove('grayBar')
                message.classList.remove('grayMessage')

            }
            //Good Password
            
            if(passwordInputRegister.value.length<19 && passwordInputRegister.value.length>=11){
                barLeft.classList.add('bar')
                barMid.classList.add('bar')
                barRight.classList.add('grayBar')
                passwordInputRegister.style='none'
                message.classList.add('greenMessage')
                message.textContent='Good password'

                barLeft.classList.remove('redBar')
                barMid.classList.remove('redBar')
                barRight.classList.remove('redBar')
                message.classList.remove('messageRed')
            }

            //Strong Password

            if(passwordInputRegister.value.length>20){
                barLeft.classList.add('bar')
                barMid.classList.add('bar')
                barRight.classList.add('bar')
                message.textContent='Strong password'


                barRight.classList.remove('grayBar')
               
            }
        }else{
            barLeft.classList.add('grayBar')
            barMid.classList.add('grayBar')
            barRight.classList.add('grayBar')
            message.classList.add('grayMessage')
            message.textContent='Use at least 6 characters, do not use empty spaces'
            passwordInputRegister.style='none'

        }
    }

    function buttonRegisterFunction(){
        console.log('it is working')
        if(!(email.value && phoneNumber.value && username.value && fullName.value && passwordInputRegister.value) ){
            buttonRegisterFinal.classList.remove('buttonRegisterOn');
            buttonRegisterFinal.classList.add('buttonRegisterOff')
        }else{
            buttonRegisterFinal.classList.remove('buttonRegisterOff');
            buttonRegisterFinal.classList.add('buttonRegisterOn')
        }
    }
    function toggleInputRegister() {
        console.log('toggleInputRegister called');

        if (!passwordInputRegister.value) {
            buttonRegister.classList.add('hideButton');
            buttonRegister.classList.remove('showButton');
        } else {
            buttonRegister.classList.add('showButton');
            buttonRegister.classList.remove('hideButton');
        }
    }

    function buttonFunction() {
        console.log('buttonFunction called');
        if (passwordInputRegister.type === 'password') {
            passwordInputRegister.type = 'text';
            buttonRegister.textContent = 'HIDE'
        } else {
            passwordInputRegister.type = 'password';
            buttonRegister.textContent = 'SHOW'
        }
    }

    passwordInputRegister.addEventListener('focus', () => {
        console.log('Password input focused');

        toggleInputRegister()
        buttonRegisterFunction()
        barFunction()
    })
    passwordInputRegister.addEventListener('input', () => {
        console.log('Password input changed');

        toggleInputRegister()
        buttonRegisterFunction()
        barFunction()
    })
    passwordInputRegister.addEventListener('blur', () => {
        console.log('Password input blurred');
        setTimeout(()=>{
            toggleInputRegister();
            buttonRegisterFunction();
        }, 200)

    })

    buttonRegister.addEventListener('click', ()=>{
        console.log('Toggle button clicked');

        buttonFunction()
    })

    
})