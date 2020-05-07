document.addEventListener('DOMContentLoaded', () => {//
	const form = document.getElementById('registrar');
	const input = form.querySelector('input');

	const mainDiv = document.querySelector('.main');
	const ul = document.getElementById('invitedList');
	const div = document.createElement('div');
	//const selectLabel = ;
	selectLabel = '<option>"attending"</option><option>"not attending"</option><option>"maybe"</option>';
	const filterLabel = document.createElement('label');
	const filterCheckbox = document.createElement('input');
	filterLabel.textContent = "Hide those who haven't responded";//Remove this when done
	filterCheckbox.type = 'checkbox';
	div.appendChild(filterCheckbox);
	div.appendChild(filterLabel);
	mainDiv.insertBefore(div, ul);
	filterCheckbox.addEventListener('change', (e) => {
		const isChecked = e.target.checked;
		const lis = ul.children;
		if(isChecked){
			for (let i=0; i<lis.length; i++){
				let li = lis[i];
				if(li.className === 'responded'){
					li.style.display = '';
				}else{
					li.style.display = 'none';
				}
			}
		}else{
			for (let i=0; i<lis.length; i++){
				let li = lis[i];
				li.style.display = '';
			}
		}
	});

	// function createSelect(){
	// 	const element = document.createElement('select')
	// }

	function createLI(text){
    function createElement(elementName, prop, value){
			const element = document.createElement(elementName);// place text from input into a span
			element[prop] = value;
//      checkDuplicat(value);
			return element;
		}

		function appendToLI(elementName, prop, value){
      const element = createElement(elementName, prop, value);
			li.appendChild(element);
			return element;
		}
		const li = document.createElement('li');
		appendToLI('span', 'textContent', text);

///how do I replace this element(s) without redrawing the whole div or page for that matter?
		// appendToLI('label', 'textContent', "Confirm")
		//  	.appendChild(createElement('input', 'type', 'checkbox'));
//////
		//createSelect();
		appendToLI('select', 'textContent', "confirm");
// 		var option =  document.createElement('option');
// 		option.appendChild(document.createTextNode('attending'));
// //option.appendChild(createTextNode('not attending'));
// //option.appendChild(createTextNode('maybe'));
// 		select.appendChild(option)
// 		console.log('working in createSelect')
		appendToLI('button', 'textContent', "edit");
		appendToLI('button', 'textContent', "remove");
		return li;
		}


   //step 2// Reject duplicates. How do I reference the existing elements
   // function checkDuplicat(text){
   //    const lis = ul.children;
   //    const item = lis[0]
   //    const display = item;
   //
   //    console.log(text+ "  item:" +item);
   //    const exists = '';
   //    for(let i=0; i<lis.length; i++){
   //      if(text === display){
   //        console.log(text+ " I'm in  " +display);
   //      }
   //    }
   //  }




		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const text = input.value;
      if(text === ''){
        alert("Please add a name to continue.");//no Blanks please
      }else{
        input.value = '';
  			const li = createLI(text);
  			ul.appendChild(li);
      }
		});






		ul.addEventListener('change', (e) => {
			const checkbox = event.target;
			const checked = checkbox.checked;
			const listItem = checkbox.parentNode.parentNode;
			if(checked){
				listItem.className = 'responded';
			}else{
				listItem.className = '';
			}
		});


// 		ul.addEventListener('change', (e) => {
// 			const checkbox = event.target;
// 			const checked = checkbox.checked;
// 			const parent = checkbox.parentNode;
//       let label = document.getElementsByClassName('label');//creates HTMLCollection object
//       const listItem = checkbox.parentNode.parentNode;
//
// 			if(checked){
// 				listItem.className = 'responded';
//         //change the label to "Confirmed"///////////////
//         console.log(checked+ "  the parentNode: "+ parent+ "  and the label is:" +parent.textContent );
//
// ////CHANGE IT ALL to select box with 3 options; attending, not attending, maybe
//
// 				//parent.textContent = "Confirmed";
// 				//document.createElement('checkbox')
// 				//parent.createElement('checkbox');
//
//
//
//       }else{
// 				listItem.className = '';
// 				//checkbox.parentNode.textContent = "Confirm";
// 			}
// 		});




		ul.addEventListener('click', (e) => {
			if(e.target.tagName === 'BUTTON'){
				const button = e.target;
				const li = button.parentNode;
				const ul = li.parentNode;
				const action = button.textContent;
				const nameAction = {// nameAction function
					remove: () => {
						ul.removeChild(li);
					},
					confirm: () => {
						const span = li.firstElementChild;
						const input = document.createElement('select');
						//input.appendChild(option[0].value = "attending");
						// option[1].value = "not attending";
						// option[2].value = "maybe";

						var option =  document.createElement('option');
						option.appendChild(document.createTextNode('attending'));
						option.appendChild(document.createTextNode('not attending'));
						option.appendChild(document.createTextNode('maybe'));
						li.appendChild(option);
						console.log('working in createSelect')

						li.insertBefore(input, span);
						li.removeChild(span);
						button.textContent = "save";
					},
					edit: () => {
						const span = li.firstElementChild;
						const input = document.createElement('input');
						input.type = 'text';
						input.value = span.textContent;
						li.insertBefore(input, span);
						li.removeChild(span);
						button.textContent = "save";
					},
					save: () => {
						const input = li.firstElementChild;
						const span = document.createElement('span');
						span.textContent = input.value;
						li.insertBefore(span, input)
						li.removeChild(input);
						button.textContent = "edit";
					}

				}
				/// select and run action in button's name
      const input = document.createElement('input');
      localStorage.setItem('name', input.value)
      //console.log(input.value+  "  Save me")
				nameAction[action]();

			}
		});
});
