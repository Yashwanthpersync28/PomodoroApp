export const modalData = {
    StrictMode:[
        {name:'Block All Notifications',id:'notifications'},
        {name:'Block Phone calls',id:'phone calls'},
        {name:'Block Other Apps',id:'apps'},
        {name:'Lock Phone',id:'phone'},
        {name:'Prohibit to Exit',id:'exit'}
    ],
    TimerMode:[
        {id:'hightoLow',start:'25:00',end:'00:00',desc:'Countdown from 25 Minutes until time turns out'},
        {id:'lowToHigh',start:'00:00',end:'∞',desc:'Start Counting from 0 until stopped manually'},
    ],
    whiteNoiseMode:[
        {id:'none',MusicName:'None'},
        {id:'song1',MusicName:'Cafe Ambiance',song:require('../../android/app/src/main/res/raw/adventure.mp3')},
        {id:'song2',MusicName:'Cafe Ambiance',song:require('../../android/app/src/main/res/raw/shadow.mp3')},
        {id:'song3',MusicName:'Cafe Ambiance'},
        {id:'song4',MusicName:'Cafe Ambiance'},
        {id:'song5',MusicName:'Cafe Ambiance'},
        {id:'song6',MusicName:'Cafe Ambiance'},
        {id:'song7',MusicName:'Cafe Ambiance'},
        {id:'song8',MusicName:'Cafe Ambiance'},
    ]
 }