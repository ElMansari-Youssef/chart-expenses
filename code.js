
let root = document.querySelector(':root');
let res = root.style.setProperty('--content', "'99'");

fetch('data.json')
    .then(response => response.json())
    .then(data => {


        data.forEach((item, index) => {
            // index initialy is 0
            // Select the corresponding bar container
            const barContainer = document.querySelector(`.bar-Container:nth-child(${index + 1})`); // by adding + 1 here, it will take the index as 1 instead of 0 which is the 1st child

            // Set the custom property for this bar container
            barContainer.style.setProperty('--content', `"${"$" + item.amount}"`);

            // console.log(document.querySelector(`.bar-Container:nth-child(${index })`));

        });


    })

    .catch(error => {
        console.error('Error:', error);
    });




