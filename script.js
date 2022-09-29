const bodySwitch = {
    'main':0,
    'exp':1,
    'edu':2,
    'fun':3
}

$(startup);

function startup() {
    mainp();
    $(document).on('click', 'button', buttonHandler);
}

function buttonHandler() {
    console.log('clicked a button!');
    console.log($(this).attr('id'));
    console.log(bodySwitch[$(this).attr('id')])
    $('#mainBody').empty();
    switch(bodySwitch[$(this).attr('id')]) {
        case 0: mainp(); break;
        case 1: expp(); break;
        case 2: edup(); break;
        case 3: funp(); break;
    }
}

function mainp() {
    $('#mainBody').append(`
    I'm passionate and selfless with a ravenous curiosity for the inner workings of technology.<br>
    I'm detail-oriented, organized, and an enthusiastic team player.<br>
    As a dedicated student and an ardent teacher, I am always on the lookout for new knowledge to absorb and spread.<br>
    `);
}

function expp() {
    $('#mainBody').append(`
    Apr 2022 - May 2022 | Jun 2016 - Jun 2018<br>
    Walmart Stores, Inc.<br>
    <u>Electronics / Entertainment Sales Associate</u><br>
    <ul>
        <li>Stock, sort, and merchandise products on sales floor</li>
        <li>Assist customers with finding certain or similar products at a fast and satisfactory pace</li>
        <li>Pursued learning opportunities to advance knowledge and take on leadership position.</li>
        <li>Trained new team members by relaying information on company procedures and safety requirements.</li>
    </ul><br>
    <u>Cashier / Customer Service Representative</u><br>
    <ul>
        <li>Maintained customer satisfaction with quick and professional handling of product returns.</li>
        <li>Resolved customer complaints and maintained clean and tidy checkout area.</li>
        <li>Monitored self-checkout systems and provided help in resolving complex problems.</li>
        <li>Utilized POS system to handle customer cash and credit card transactions.</li>
    </ul><br>
    Nov 2020 - Jan 2021<br>
    BGDS, LLC <br>
    <u>Delivery Driver</u><br>
    <ul>
        <li>Manage, track and deliver packages while driving large vehicles</li>
        <li>Completed on-time deliveries by choosing best and most efficient routes.</li>
        <li>Read maps, followed oral and written instructions and used GPS technology to make deliveries.</li>
        <li>Performed walk around on delivery vehicle before beginning shift to verify correct and safe operating order.</li>
    </ul>
    `)
}

function edup() {
    $('#mainBody').append(`
    Aug 2020 - Feb 2022<br>
    <u>Nongraduate; Bachelor of Science - Computer Science</u><br>
    California State University - Sacramento<br>
    6000 J St, Sacramento, CA 95819<br>
    <br><br>
    Aug 2016 - May 2020<br>
    <u>Associate of Science - Computer Science</u><br>
    American River College<br>
    4700 College Oak Dr, Sacramento, CA 95841<br>
    <br><br>
    Aug 2012 - May 2016<br>
    <u>High School Diploma</u><br>
    Mesa Verde High School<br>
    7501 Carriage Dr, Citrus Heights, CA 95621<br>
    `)
}

function funp() {
    $('#mainBody').append(`
    My coding language repertoire consists of: <br>
    C#, C/C++, Python, HTML, CSS, Unity, Java, JavaScript, MySQL, and Command Line Operating Systems e.g. UNIX.<br>
    I'm an avid gamer who mostly plays Fighting games like Persona 4 Arena Ultimax and Melty Blood Type Lumina.<br>
    I also play a great deal of Old School Runescape, Sea of Thieves, and Final Fantasy XIV.<br>
    `)
}
