const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event){
    tabPanels.forEach(function(panel){
        panel.hidden = true;
    });

    tabButtons.forEach(function(tab){
        tab.setAttribute('aria-selected', false);

});

    event.currentTarget.setAttribute('aria-selected', true);

    const id = event.currentTarget.id;
    /*
   const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`)
   tabPanel.hidden = false;
*/
   
   const tabPanel = tabPanels.find(
     panel => panel.getAttribute('aria-labelledby') === id
   );
   tabPanel.hidden = false;
 }
 
 tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
 

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

