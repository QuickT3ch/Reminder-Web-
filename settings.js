

// start of toggle on and off notificaitons 
const toggleSwitch = document.querySelector('.toggle-switch');
const toggleSwitchIcon = document.querySelector('.toggle-switch-icon');
const toggleSwitchLine1 = document.querySelector('.toggle-switch-line-1');
const toggleSwitchLine2 = document.querySelector('.toggle-switch-line-2');

let toggleState = false;


const toggle = () => {
  if (!toggleState) {
    toggleSwitchIcon.style.background = '#eb3f3f';
    toggleSwitchIcon.style.transform = 'translate(4rem, 0rem) rotate(180deg)';
    toggleSwitchLine1.classList.remove('line-1v');
    toggleSwitchLine2.classList.remove('line-2v');
    toggleSwitchLine1.classList.add('line-1x');
    toggleSwitchLine2.classList.add('line-2x');
    toggleState = true;
    
  } else {
    toggleSwitchIcon.style.background = '#6edb8d';
    toggleSwitchIcon.style.transform = 'translate(0rem, 0rem) rotate(0deg)';
    toggleSwitchLine1.classList.add('line-1v');
    toggleSwitchLine2.classList.add('line-2v');
    toggleSwitchLine1.classList.remove('line-1x');
    toggleSwitchLine2.classList.remove('line-2x'); 
    toggleState = false;
  };
}


toggleSwitch.addEventListener('click', toggle)

// end of toggle on and off notificaitons 