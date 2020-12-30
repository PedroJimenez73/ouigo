var pages = [
    {title: 'Welcome', path: 'frontpage'},
    {title: '<span>1.1.</span> Introducción', path: '01'},
    {title: '<span>1.2.</span> Aspectos clave del CEC', path: '02'},
    {title: '<span>1.3.</span> Casos prácticos', path: '03'},
    {title: '<span>1.3.</span> Casos prácticos', path: '04'},
    {title: '<span>2.1.</span> ¿Qué es Compliance?', path: '05'},
    {title: '<span>2.2</span> La Responsabilidad Penal de las personas jurídicas', path: '06'},
    {title: '<span>2.2</span> La Responsabilidad Penal de las personas jurídicas', path: '07'},
    {title: '<span>2.2.1.</span> ¿Cómo acredita la empresa que quiere cumplir con la legalidad?', path: '08'},
    {title: '<span>2.2.2.</span> ¿Qué delitos puede cometer una empresa?', path: '09'},
    {title: '<span>3.</span> Figuras en Compliance', path: '10'},
    {title: '<span>4.1.</span> Y tú como empleado... ¿Cómo puedes colaborar?', path: '11'},
    {title: '<span>4.2.</span>  Casos prácticos', path: '12'},
    {title: '<span>4.2.</span>  Casos prácticos', path: '13'},
    {title: '<span>5.</span>  Test Final de contenidos', path: '14'},
    {title: '<span>5.</span>  Test Final de contenidos', path: '15'},
];

var nextBtn = document.getElementById('next-btn');
var prevBtn = document.getElementById('prev-btn');
var i1 = document.getElementById('i-1');
var is1 = document.getElementById('i-s-1');
var i11 = document.getElementById("i-1-1");
var i12 = document.getElementById("i-1-2");
var i13 = document.getElementById("i-1-3");
var i2 = document.getElementById('i-2');
var is2 = document.getElementById('i-s-2');
var i21 = document.getElementById('i-2-1');
var i22 = document.getElementById('i-2-2');
var i23 = document.getElementById('i-2-3');
var i24 = document.getElementById('i-2-4');
var i3 = document.getElementById('i-3');
var i4 = document.getElementById('i-4');
var is4 = document.getElementById('i-s-4');
var i41 = document.getElementById('i-4-1');
var i42 = document.getElementById('i-4-2');
var i5 = document.getElementById('i-5');
var pieWrapper = document.getElementById('pie-wrapper');
var pieLabel = document.getElementById('pie-label');
prevBtn.style.display = 'none';
nextBtn.style.display = 'none';

var finalTestPassed = false;

function navTo() {
    $("#content").empty();
    $("#content").load("content/" + pages[currentPage].path + "/index.html", function()	{
        $("#slide").fadeIn('slow');												  
    });
    setTimeout(() => {
        ScormProcessSetValue("cmi.core.lesson_location", currentPage);
        if (currentPage === (pages.length - 1)){
            window.ScormProcessSetValue("cmi.core.lesson_status", "completed");
        }
    }, 500);
    setNavState();
    setMenuState();
    setActiveMenuItem();
    $('html, body').animate({
        scrollTop: 0
    }, 400);
}

function prevPage() {
    currentPage--;
    navTo();
}

function nextPage() {
    currentPage++;
    navTo();
}

function navToPage(e) {
    if(progress[e - 1].pass) {
        currentPage = e;
        toggleNav();
        navTo();
    }
}

function setNavState() {
    document.getElementById('header-title').innerHTML = pages[currentPage].title;
    nextBtn = document.getElementById('next-btn');
    prevBtn = document.getElementById('prev-btn');
    if(currentPage === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'inline';
    } else if (currentPage === pages.length - 1) {
        prevBtn.style.display = 'inline';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline';
        nextBtn.style.display = 'inline';
    }
    if(!progress[currentPage].pass) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

function passPage() {
    progress[currentPage].pass = true;
    if(!progress[currentPage].pass) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
    setState();
}

function setMenuState() {
    pieWrapper.removeAttribute("class")
    pieWrapper.classList.add('pie-wrapper');
    if (progress[0].pass) {
        i1.classList.add('in-progress');
        pieLabel.innerHTML = '0 <span class="smaller">%</span>';
    }
    if (progress[1].pass) {
        pieWrapper.classList.add('progress-5');
        pieLabel.innerHTML = '5 <span class="smaller">%</span>';
    } 
    if (progress[2].pass) {
        pieWrapper.classList.remove('progress-5');
        pieWrapper.classList.add('progress-10');
        pieLabel.innerHTML = '10 <span class="smaller">%</span>';
    } 
    if (progress[3].pass) {
        pieWrapper.classList.remove('progress-10');
        pieWrapper.classList.add('progress-15');
        pieLabel.innerHTML = '15 <span class="smaller">%</span>';
    } 
    if (progress[4].pass) {
        i1.classList.add('done');
        i2.classList.add('in-progress');
        pieWrapper.classList.remove('progress-15');
        pieWrapper.classList.add('progress-20');
        pieLabel.innerHTML = '20 <span class="smaller">%</span>';
    } 
    if (progress[10].pass) {
        i2.classList.add('done');
        i3.classList.add('in-progress');
        pieWrapper.classList.remove('progress-20');
        pieWrapper.classList.add('progress-40');
        pieLabel.innerHTML = '40 <span class="smaller">%</span>';
    } 
    if (progress[11].pass) {
        i3.classList.add('done');
        i4.classList.add('in-progress');
        pieWrapper.classList.remove('progress-40');
        pieWrapper.classList.add('progress-60');
        pieLabel.innerHTML = '60 <span class="smaller">%</span>';
    } 
    if (progress[13].pass) {
        i4.classList.add('done');
        i5.classList.add('in-progress');
        pieWrapper.classList.remove('progress-60');
        pieWrapper.classList.add('progress-80');
        pieLabel.innerHTML = '80 <span class="smaller">%</span>';
    }
    if (progress[15].pass) {
        i5.classList.add('done');
        pieWrapper.classList.remove('progress-80');
        pieWrapper.classList.add('progress-100');
        pieLabel.innerHTML = '100';
    }
}

function setActiveMenuItem() {
    i1.classList.remove('active');
    is1.classList.remove('in-progress');
    i11.classList.remove('active');
    i12.classList.remove('active');
    i13.classList.remove('active');
    i2.classList.remove('active');
    is2.classList.remove('in-progress');
    i21.classList.remove('active');
    i22.classList.remove('active');
    i23.classList.remove('active');
    i24.classList.remove('active');
    i3.classList.remove('active');
    i4.classList.remove('active');
    is4.classList.remove('in-progress');
    i41.classList.remove('active');
    i42.classList.remove('active');
    i5.classList.remove('active');
    if (currentPage === 1) {
        i1.classList.add('active');
        is1.classList.add('in-progress');
        i11.classList.add('active');
    } else if (currentPage === 2) {
        i1.classList.add('active');
        is1.classList.add('in-progress');
        i12.classList.add('active');
    } else if (currentPage === 3) {
        i1.classList.add('active');
        is1.classList.add('in-progress');
        i13.classList.add('active');
    } else if (currentPage === 4) {
        i1.classList.add('active');
        is1.classList.add('in-progress');
        i13.classList.add('active');
    } else if (currentPage === 5) {
        i2.classList.add('active');
        is2.classList.add('in-progress');
        i21.classList.add('active');
    } else if (currentPage === 6) {
        i2.classList.add('active');
        is2.classList.add('in-progress');
        i22.classList.add('active');
    } else if (currentPage === 7) {
        i2.classList.add('active');
        is2.classList.add('in-progress');
        i22.classList.add('active');
    } else if (currentPage === 8) {
        i2.classList.add('active');
        is2.classList.add('in-progress');
        i23.classList.add('active');
    } else if (currentPage === 9) {
        i2.classList.add('active');
        is2.classList.add('in-progress');
        i24.classList.add('active');
    } else if (currentPage === 10) {
        i3.classList.add('active');
    } else if (currentPage === 11) {
        i4.classList.add('active');
        is4.classList.add('in-progress');
        i41.classList.add('active');
    } else if (currentPage === 12) {
        i4.classList.add('active');
        is4.classList.add('in-progress');
        i42.classList.add('active');
    } else if (currentPage === 13) {
        i4.classList.add('active');
        is4.classList.add('in-progress');
        i42.classList.add('active');
    } else if (currentPage === 14) {
        i5.classList.add('active');
    } else if (currentPage === 15) {
        i5.classList.add('active');
    }
}

function exit() {
    ScormProcessSetValue("cmi.core.exit", "suspend");
    doUnload(true);
    setTimeout(() => {
        top.window.close()
    }, 500);
}

