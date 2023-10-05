data = [{
    Hackathon: "Smart India Hackathon",
    Venue: "Government of India",
    Dates: "30 October 2023",
    Team: "3 Members",
    Description: "Hello SIH",
    Link: "https://www.sih.gov.in"
},
{
    Hackathon: "Smart India Hackathon",
    Venue: "Government of India",
    Dates: "30 October 2023",
    Team: "3 Members",
    Description: "Hello SIH",
    Link: "https://www.sih.gov.in"
},
{
    Hackathon: "Smart India Hackathon",
    Venue: "Government of India",
    Dates: "30 October 2023",
    Team: "3 Members",
    Description: "Hello SIH",
    Link: "https://www.sih.gov.in"
},
{
    Hackathon: "Smart India Hackathon",
    Venue: "Government of India",
    Dates: "30 October 2023",
    Team: "3 Members",
    Description: "Hello SIH",
    Link: "https://www.sih.gov.in"
},
];

hackathon(data);

function hackathon(data) {
    const container = document.querySelector('.container');

    data.forEach((hackathonData, index) => {
        if (index % 2 === 0) {
            // Create a new row for every two blocks
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
        }

        const block = document.createElement('div');
        block.classList.add('block');
        container.lastChild.appendChild(block);

        const header = document.createElement('header');
        header.innerText = hackathonData.Hackathon;
        block.appendChild(header);

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('line');
        block.appendChild(infoDiv);

        const infoParagraphs = [
            `Venue : ${hackathonData.Venue}`,
            `Dates : ${hackathonData.Dates}`,
            `Max Team : ${hackathonData.Team}`,
            `Description : ${hackathonData.Description}`
        ];

        infoParagraphs.forEach(info => {
            const p = document.createElement('p');
            p.classList.add('data');
            p.innerHTML = `<span class="h4">${info.split(" : ")[0]} : </span> ${info.split(" : ")[1]}`;
            infoDiv.appendChild(p);
        });

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('line');
        block.appendChild(buttonDiv);

        const createTeamButton = document.createElement('button');
        createTeamButton.classList.add('btn');
        createTeamButton.innerText = 'Create Team';
        buttonDiv.appendChild(createTeamButton);
        createTeamButton.addEventListener('click', function () {
            
            const filePath = '/client/createTeam.html';
            window.open(filePath, '_self');
        });

        const registerButton = document.createElement('button');
        registerButton.classList.add('btn');
        registerButton.style.float = 'right';
        registerButton.innerText = 'Register';
        buttonDiv.appendChild(registerButton);
        registerButton.addEventListener('click', function () {
            window.open(hackathonData.Link, '_self');
        });
    });
}
